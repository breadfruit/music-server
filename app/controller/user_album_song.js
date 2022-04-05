const db = require('../models/index')
const Album = db['album'];
const Song = db['song'];
const Album_Song = db['album_song'];
const User_Album = db['user_album'];

//===========前台===================

//=========================非歌单创建者
//获取用户的喜欢歌曲的列表
async function getUseLikeAlbum(ctx) {
    const { userId } = ctx.query
    var albumdetailid
    const userlike = await User_Album.findOne({
        where: {
            userId,
            isLike: 1
        }
    })
    console.log(' userlike====',  userlike)
    if (userlike != null) {
        albumdetailid = userlike.dataValues.albumId
    } else {
        const ownerlike = await Album.create({
            name: '我的喜欢',
            picUrl:'like.png'
        });
        albumdetailid = ownerlike.dataValues.id;
        await User_Album.create({
            albumId: albumdetailid,
            userId,
            isLike: 1
        });
    }
    const userLikeDetail = await Album.findOne({
        where: {
            id: albumdetailid
        },
        include: [
            {
                model: Song
            }
        ]
    })
    return ctx.success('获取用户的喜欢歌曲的列表成功', userLikeDetail)

}



//获得用户收藏歌单列表
async function getUserCollectAlbumList(ctx) {
    const { userId } = ctx.query
    var albumdetailid
    const collectlist = await User_Album.findAll({
        where: {
            userId,
            isCollection: 1
        }
    })
    var result = []
    for(let i = 0; i < collectlist.length; i++) {
        const id  = collectlist[i].dataValues.albumId
        let albumdata = await Album.findOne({
            where: {
                id
            }
        })
        result.push(albumdata)
    }
   console.log(result)
    return ctx.success('用户收藏歌单列表成功', result)

}

//添加收藏
async function addCollect(ctx) {
    const { userId, albumId} = ctx.query;
    //先查找有没有收藏这个歌单
    const isUsercollect  = await User_Album.findOne({
        where: {
            userId,
            albumId
        }
    })
    if(isUsercollect != null) {
        if(isUsercollect.dataValues.isCollection == 1) {
            return ctx.success('该歌单已经收藏')
        }else{
            const useralbum = await User_Album.update({
                isCollection: 1
            },{
                where: {
                    userId,
                    albumId
                }
            })
            return ctx.success('添加收藏成功', useralbum)
        }
    }else {
        const usercollect  = await User_Album.create({
            userId,
            albumId,
            isCollection: 1
        })
        return ctx.success('添加收藏成功', usercollect)
    }


}

//取消收藏
async function deleteCollect(ctx) {
    const { userId, albumId} = ctx.query;

    const useralbum = await User_Album.update({
        isCollection: 0
    },{
        where: {
            userId,
            albumId
        }
    })

    return ctx.success('删除收藏成功')

}


//=========================歌单创建者
//给歌单添加歌曲
async function addSongToAlbum(ctx) {
    const { songId, albumId} = ctx.query;
    const mysong = await Song.findOne({
        where: {
            id: songId
        }
    })
    if(mysong != null) {
        const res = await Album_Song.create({
            songId,
            albumId
        })
        return ctx.success('给歌单添加歌曲成功', res)
    }  else {
        return ctx.success('找不到该歌曲')
    }

}

// 删除歌单里的歌曲(先获取我的喜欢和歌单列表)
async function deleteSongInAlbum(ctx) {
    const { songId, albumId } = ctx.query;
    const unialbum =  await Album_Song.findOne({
      where: {
        songId,
        albumId
      }
    })
    console.log('======unialbum=====', unialbum)
    if (unialbum != null) {
        await Album_Song.destroy({
          where: {
            songId,
            albumId
          }
        })
        return ctx.success('删除歌曲成功')
      } else {
        return ctx.success('歌单不存在此歌曲')
    }
}




module.exports = {
    getUseLikeAlbum,
    addCollect,
    deleteCollect,
    addSongToAlbum,
    deleteSongInAlbum,
    getUserCollectAlbumList,
}

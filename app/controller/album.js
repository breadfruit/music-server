///personalized
const db = require('../models/index')
const Album = db['album'];
const Song = db['song'];
const Album_Song = db['album_song']
const User_Album = db['user_album']
const User = db['user']
async function getAlbumById(id) {
  const myalbum = await Album.findOne({
    where: {
      id
    }
  })
  if ( myalbum  != null) {
    return myalbum .dataValues
  } else {
    return 0
  }
}

async function getAlbumList(ctx) {
  const res = await Album.findAll({
  });
  return ctx.success('查询全部歌单', res);
}

//获取热门推荐歌单
async function getRecommendList(ctx) {
  const albumData = await Album.findAll({
  })
  return  ctx.success('获取热门推荐歌单成功', albumData)

}

//获取排行榜歌单
async function getRankList(ctx) {
    const albumData = await Album.findAll({
      where: {
        isRank: 1
      },
      include: [
        {
          model: Song,
        },
      ],
      limit: 4
    })

  return ctx.success('获取排行榜成功', albumData)

}

async function getGlobalList(ctx) {
    const albumData = await Album.findAll({
      where: {
        globalList: 1
      },
      include: [
        {
          model: Song,
        },
      ],
    })

  return ctx.success('获取排行榜成功', albumData)

}

//获取歌单详情
async function getAlbumDetail(ctx) {
  const { id } = ctx.query
  const albumData = await Album.findOne({
    where: {
      id
    },
    include: [
      {
        model: Song,
      },
      {
        model: User
      }
    ],
  })
  if (albumData) {
    ctx.success('获取歌单详情成功', albumData)
  } else {
    ctx.fail('获取歌单详情失败')
  }
}

//获取用户歌单列表
async function getUserAlbumList(ctx) {
  const {userId} = ctx.query;
  const albumlist = await User_Album.findAll({
      where: {
        userId,
        isCollection: 0,
        isDelete: 0
      }
  })
  var result = []
  for(let i = 0; i < albumlist.length; i++) {
    const id  = albumlist[i].dataValues.albumId
    let albumdata = await Album.findOne({
      where: {
        id
      }
    })
    result.push(albumdata)
  }

  return ctx.success('获取歌单成功', result)
}

//新建歌单
async function addAlbum(ctx) {
  console.log('ctx.request.body;====', ctx.request.body)
  const {
        name,
        picUrl,
        updateFrequency,
        globalList,
        isRank,
        userId
   } = ctx.request.body;
  const newalbum = await Album.create({
        name,
        picUrl,
        updateFrequency,
        globalList,
        isRank,
        userId
    })
    const albumId = newalbum.dataValues.id
    await User_Album.create({
      userId:userId,
      albumId
    })

    return ctx.success('新建歌单成功', newalbum)
}

//更新歌单名字
async function updateAlbum(ctx) {
  const {
        id,
        name,
        picUrl,
  } = ctx.request.body;

  const havealbum = getAlbumById(id)
  if (havealbum) {
    const newalbum = await Album.update({
      name,
      picUrl,
      updateFrequency,
      globalList,
      isRank
    }, {
      where: {
        id
      }
    })
    return ctx.success('更新歌单名字成功')
  } else {
    return ctx.fail('歌单不存在')
  }

}

//删除歌单
async function deleteAlbum(ctx) {
  const { id, userId } = ctx.query;
  //确定有这个歌手
  const unialbum = await Album.findOne({
    where: {
      id
    }
  })
  if (unialbum != null) {
    await Album.destroy({
      where: {
        id
      }
    })
    await User_Album.update({
      isDelete: 1
    },{
      where: {
        albumId: id,
        userId: userId
      }
    })
    return ctx.success('删除歌单成功')
  } else {
    return ctx.fail('歌单不存在，删除失败')
  }
}


//模糊查找
async function fuzzySearchByAlbum(ctx) {
  const { name } = ctx.request.body;
  const fuzzAlbumList = await Album.findAll({
    where: {
      name: {
        [Op.like]: '%' + name + '%'
      }
    },

  })
  return ctx.success('查询歌曲结果', fuzzAlbumList)
}



module.exports = {
  getRecommendList,
  getAlbumDetail,
  addAlbum,
  updateAlbum,
  deleteAlbum,
  fuzzySearchByAlbum,
  getUserAlbumList,
  getRankList,
  getGlobalList,
  getAlbumList
}

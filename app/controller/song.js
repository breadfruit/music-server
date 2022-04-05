const db = require('../models/index')
const Song = db['song'];
const Singer = db['singer'];
const Album = db['album'];
const Album_Song = db['album_song'];
const User_Album = db['user_album'];
const Sequlize = require('sequelize');
const Op = Sequlize.Op
//歌曲歌词
async function getLyric(ctx) {
    const { id } = ctx.query;
    const lyric = await Song.findOne({
      where: {
        id
      },
      attributes: ['id', 'lyric']
    })

    return ctx.success('查询歌曲结果成功', lyric)

}
//歌曲详细内容
async function getSongDetail(ctx) {
  const { id } = ctx.request.query;
  const singerDetail = await Singer.findOne({
    where: {
      id
    }
  })
  const songData = await Album_Song.findAll({
    where: {
      singerId: id
    }
  })
  ctx.success('歌曲详情获取成功', [singerDetail, songData])
}
//全部歌曲列表
async function getSongList(ctx) {
  const songlist = await Song.findAll({

  })
  return ctx.success('获取全部歌曲列表', songlist)
}
//添加歌曲
async function addSong(ctx) {
  console.log(ctx.request.body)
  const { name, lyric, dt, picUrl, artistName, singerId, songUrl} = ctx.request.body;
  const unisong = await Song.create({
    name,
    lyric,
    dt,
    picUrl,
    artistName,
    songUrl,
    singerId
  });
  //查找歌手的详细信息
  const singerDetail = Singer.findOne({
    where: {
      id: singerId
    }
  })
 //判断歌手是否有个人歌单
  const userAlbumDetail = await User_Album.findOne({
    where: {
      userId: singerId
    }
  });
  var albumId;
  if (userAlbumDetail != null) {
      albumId =userAlbumDetail .dataValues.albumId;
      return
  }else{
    //创建歌单
    const newAlbum = await Album.create({
      name: `${singerDetail.dataValues.name}的专属歌单`,
      picUrl: singerDetail.dataValues.picUrl
    });
    albumId =newAlbum.dataValues.id;
  };
  //将歌曲加入歌单
  await Album_Song.create({
    albumId: albumId,
    songId: unisong.dataValues.id
  })

  return ctx.success("添加歌曲", unisong)
}
//更新歌曲
async function updateSong(ctx) {
  const { name, lyric, dt, picUrl, artistName,  songUrl, id } = ctx.request.body;
  console.log('更新歌曲', ctx.request.body)
  const unisong = await Song.update({
    name,
    lyric,
    dt,
    picUrl,
    artistName,
    songUrl,
  }, {
    where: {
      id
    }
  })
  return ctx.success("更新歌曲成功", unisong)
}
//删除歌曲
async function deleteSong(ctx) {
  const { id } = ctx.query;
  //确定有这个歌手
  const unisong = await Song.findOne({
    where: {
      id
    }
  })
  if (unisong) {
    Song.destroy({
      where: {
        id
      }
    })
    return ctx.success('删除歌曲成功')
  } else {
    return ctx.fail('歌曲不存在，删除失败')
  }
}
//模糊查找
async function fuzzySearchBySong(ctx) {
  const { name } = ctx.request.body;
  const fuzzSongList = await Song.findAll({
    where: {
      name: {
        [Op.like]: '%' + name + '%'
      }
    },

  })
  return ctx.success('查询歌曲结果', fuzzSongList)
}
//获得播放歌曲url
async function getSongUrl(ctx) {
  const { id } = ctx.query;
  const songData = await Song.findOne({
    where: {
    id
    }
  });

  const songUrl = songData.dataValues.songUrl;
  console.log(`http://localhost:6060/songUrl/${songUrl}`)
  ctx.success('获得播放歌曲url', `http://localhost:6060/songUrl?url=${songUrl}`);
}


module.exports = {
  getLyric,
  getSongDetail,
  addSong,
  updateSong,
  deleteSong,
  fuzzySearchBySong,
  getSongList,
  getSongUrl
}

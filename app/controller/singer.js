const db = require('../models/index')
const Singer = db['singer'];
const Song = db['song'];
const Album = db['album'];
const Album_Song = db['album_song'];
//获取热门歌手
async function getHotSingerList(ctx) {
  const { offset = 30 } = ctx.request.query
  const singerDate = await Singer.findAll({
    limit: Number(offset),
  })
  ctx.success('歌手列表获取成功', singerDate)
}

//获取歌手列表
async function getSingerList(ctx) {
  //进行分页查询
  let limit = 30;
  // const myobj = ctx.query;
  // if (myobj.limit) {
  //   limit = myobj.limit
  // }
  // let singerDate = await Singer.findAll({
  //   where: myobj,
  //   limit
  // })
  const myobj = ctx.query;
  const paramsobj = {}
  Object.getOwnPropertyNames(myobj).forEach(function(key){
    if(myobj[key] != -1) {
      paramsobj[key] = myobj[key]
    }
  });
  let singerDate = await Singer.findAll({
    where: paramsobj,
    limit
  })
  ctx.success('歌手列表获取成功', singerDate)
}

//获取歌手详情
async function getSingerDetail(ctx) {
  //进行分页查询
  console.log(ctx.query)
  const { singerId, albumId } = ctx.query;
  console.log('获取歌手详情', singerId, albumId)


  const singerDetail = await Singer.findOne({
    where: {
      id: singerId
    }
  });
  const albumSongData = await Album.findOne({
    where: {
      id: albumId
    },
    include: [
      {
        model: Song,
      }
    ],
  });
  return ctx.success('获取歌手详情', [singerDetail, albumSongData])
}


//新增歌手
async function addSinger(ctx) {
  const { name, picUrl, sex, area, initial, isHot } = ctx.request.body;
  const unisinger = await  Singer.findOne({
    where: {
      name
    }
  })
  if (!unisinger) {
    Singer.create({
      name,
      picUrl,
      type: sex,
      area,
      initial,
      isHot
    })
    return ctx.success('新增歌手成功')
  } else {
    return ctx.fail('歌手姓名已经存在')
  }
}

//删除歌手
async function deleteSinger(ctx) {
  const { id } = ctx.query;
  //确定有这个歌手
  const unisinger = Singer.findOne({
    where: {
      id
    }
  })
  if (unisinger) {
    Singer.destroy({
      where: {
        id
      }
    })
    return ctx.success('删除歌手成功')
  } else {
    return ctx.fail('歌手不存在，删除失败')
  }

}

//更新歌手
async function updateSinger(ctx) {
  const { id, name, picUrl, type, area, initial, isHot } = ctx.request.body;
  const unisinger = await Singer.findOne({
    where: {
      id
    }
  })
  if (unisinger) {
    let singerdata = Singer.update({
      name,
      picUrl,
      type,
      area,
      initial,
      isHot
    }, {
      where: {
        id
      }
    })
    return ctx.success('更新歌手成功', singerdata)
  } else {
    return ctx.fail('更新歌手失败')
  }

}

//模糊查找
async function fuzzySearchBySinger(ctx) {
  const { name } = ctx.request.body;
  const fuzzSingerList = await Singer.findAll({
    where: {
      name: {
        [Op.like]: '%' + name + '%'
      }
    },

  })
  return ctx.success('查询歌手结果', fuzzSingerList)
}

async function getSingerIdByAlbumId(ctx) {
  const { id } = ctx.query;
  const singerdetail = await Singer.findOne({
    where: {
      id
    }
  });
  console.log('singerdetail', singerdetail)
  const albumdata = await Album.findOne({
    where: {
      name: `${singerdetail.dataValues.name}的专属歌单`
    }
  });
  return ctx.success('歌单id查询成功', albumdata.dataValues.id);
}

//  返回指定歌手ID的歌曲
module.exports = {
  getHotSingerList,
  getSingerList,
  getSingerDetail,
  addSinger,
  deleteSinger,
  updateSinger,
  fuzzySearchBySinger,
  getSingerIdByAlbumId
}

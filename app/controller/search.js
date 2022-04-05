const db = require('../models/index')
const Sequlize = require('sequelize');
const Op = Sequlize.Op
const Hot_Word = db['hot_word'];
const Song = db['song'];
const Singer = db['singer'];
const Album = db['album'];
async function getHotName(name) {
  const hotname = HotWord.findOne({
    where: {
      name
    }
  })
  if (hotname != null) {
    return hotname.dataValues
  } else {
    return 0
  }
}
async function getHotList(ctx) {
  const { word } = ctx.request.body;
  const uniword = await Hot_Word.findOne({
      where: {
        word
      }
  })
  if(!uniword) {
    const hotData = await Hot_Word.findAll({})
    if (hotData) {
      ctx.success('热词推荐成功', hotData)
    } else {
      ctx.fail('获取热词推荐失败')
    }
  } else {
    const myhotword = uniword.dataValues.id;
    const myfrequency = uniword.dataValues.frequency;
    const updatefre = await Hot_Word.update({
      frequency: myfrequency + 1
    }, {
      where: {
        id
      }
    })
    if(update.code === 1) {
      return ctx.success('更新搜索频率成功')
    }else {
      return ctx.fail('更新搜索频率失败')
    }
  }
}
async function getHotTop(ctx) {
  const toplist = await Hot_Word.findAll({
    limit: 10,
    order: [
        ['frequency', 'DESC']
    ],
    attributes: ['word','frequency']
  })

  return ctx.success('获取前十搜索热词成功', toplist)
}
async function deleteHot(ctx) {
  const {id} = ctx.query;
  const res = await Hot_Word.destroy({
    where: {
      id
    }
  })
  if(res.code === 1) {
    return ctx.success('删除成功');
  } else {
    return ctx.fail('删除失败')
  }
}
//批量删除
async function deleteArr(ctx) {
  //传入字符串
  const { ids } = ctx.request.body;
  //处理成数组
  const arr = ids.split(',')
  const res = await Hot_Word.destroy({
    where: {
      id: arr
    }
  })
  if (res.code == 1) {
    return ctx.success('批量删除成功')
  } else {
    return ctx.fail('批量删除失败')
  }

}
//
async function getResult(ctx) {
  const { name } = ctx.request.body;
  //更新搜索热词的频率
  const searchword = await Hot_Word.findOne({
    where: {
        word: name
    }
  })
  if(searchword != null) {
    let oldFrequency = searchword.dataValues.frequency;
    let id = searchword.dataValues.id;
    await Hot_Word.update({
      frequency: oldFrequency + 1
    }, {
      where:{
        id
      }
    })
  }else {
    await Hot_Word.create({
      word: name,
      frequency: 1
    })
  }
  var result = []
  const fuzzSingerList = await Singer.findAll({
    where: {
      name: {
        [Op.like]: '%' + name + '%'
      }
    },
  })
  console.log('====fuzzSingerList====', fuzzSingerList)
  if(fuzzSingerList !== null) {
    result.push(fuzzSingerList)
  }
  const fuzzSongList = await Song.findAll({
    where: {
      name: {
        [Op.like]: '%' + name + '%'
      }
    },
  })
  if(fuzzSongList !== null) {
    result.push(fuzzSongList)
  }
  const fuzzAlbumList = await Album.findAll({
    where: {
      name: {
        [Op.like]: '%' + name + '%'
      }
    },
  })
  if(fuzzAlbumList !== null) {
    result.push(fuzzAlbumList)
  }
  return ctx.success('搜索结果', result)
}
module.exports = {
  getHotList,
  deleteHot,
  deleteArr,
  getHotTop,
  getResult
}

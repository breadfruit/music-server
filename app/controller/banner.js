const db = require('../models/index')
const Banner = db['banner'];
//获取轮播图

async function getBanner(ctx) {
  const bannerData = await Banner.findAll({
    attributes: ['id', 'imageUrl'],
  })
  if (bannerData) {
    ctx.success('获取轮播图成功', bannerData)
  } else {
    ctx.fail('获取轮播图失败')
  }
}

async function addBanner(ctx) {
  const { imageUrl } = ctx.request.body;
  const banner = await Banner.create({
    imageUrl
  })
  return ctx.success('轮播图增加成功', banner)
}

async function deleteBanner(ctx) {
  const { id } = ctx.request.body;
  const newbanner = await Banner.destroy({
    where: {
      id
    }
  })
  if(newbanner.code === 1) {
    return ctx.success('轮播删除成功')
  }else {
    return ctx.fail('轮播删除失败')
  }
}

async function updateBanner(ctx) {
  const { imageUrl, id } = ctx.request.body;
  const newbanner = await Banner.update({
    imageUrl
  }, {
    where: {
      id
    }
  })
  if(newbanner.code === 1) {
    return ctx.success('轮播图修改成功')
  }else {
    return ctx.fail('轮播修改失败')
  }
}
module.exports = {
  getBanner,
  addBanner,
  deleteBanner,
  updateBanner
}

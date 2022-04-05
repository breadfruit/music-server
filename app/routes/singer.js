const router = require('koa-router')()
const {
  getHotSingerList,
  getSingerList,
  getSingerDetail,
  addSinger,
  deleteSinger,
  updateSinger,
  getSingerIdByAlbumId
} = require('../controller/singer')
router.prefix('/singer')

router.get('/top/artists', getHotSingerList)//获取热门歌手
router.get('/artist/list', getSingerList)//获取分类歌手列表
router.get('/detail', getSingerDetail)//获取歌手详情


router.post('/add', addSinger)//添加歌手
router.get('/delete', deleteSinger)//删除歌手
router.post('/update', updateSinger)//更新歌手

router.get('/album', getSingerIdByAlbumId);
module.exports = router

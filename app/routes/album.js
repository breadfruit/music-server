const router = require('koa-router')()
const {
    getRecommendList,
    getAlbumDetail,
    addAlbum,
    updateAlbum,
    deleteAlbum,
    getAlbumList,
    getRankList,
    getGlobalList,
    getUserAlbumList
} = require('@controller/album')

router.prefix('/album')

router.get('/personalized', getRecommendList)//获取热门推荐歌单
router.get('/detail', getAlbumDetail)//获取歌单详情
router.get('/ranklist', getRankList)//获取排行榜
router.get('/globallist', getGlobalList)//获取全球榜
router.get("/user/list", getUserAlbumList)//获取用户歌单列表

router.get('/list', getAlbumList)//获取歌单列表
router.post('/add', addAlbum)//添加歌单
router.get('/delete', deleteAlbum)//删除歌单
router.post('/update', updateAlbum)//更新歌单




module.exports = router

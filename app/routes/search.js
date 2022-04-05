const router = require('koa-router')()
const {
    getHotList,
    deleteHot,
    deleteArr,
    getHotTop,
    getResult
} = require('@controller/search')
const {
    fuzzySearchBySinger
} = require('@controller/singer')
const {
    fuzzySearchBySong
} = require('@controller/song')
const {
    fuzzySearchByAlbum
} = require('@controller/album')
router.prefix('/search')

router.get('/hot', getHotList)//搜索热词
router.get('/delete', deleteHot)//删除搜索热词
router.post('/delarr', deleteArr)//批量删除
router.get('/toplist', getHotTop)

router.post('/result', getResult)
router.post('/song', fuzzySearchBySong)//搜索歌曲
router.post('/singer', fuzzySearchBySinger)//搜索歌手
router.post('/album', fuzzySearchByAlbum)//搜索歌单


module.exports = router

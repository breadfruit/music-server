const router = require('koa-router')()
const {
    getBanner,
    addBanner,
    deleteBanner,
    updateBanner
} = require('@controller/banner')

router.prefix('/banner')

router.get('/list', getBanner)
router.post('/add', addBanner)
router.get('/delete', deleteBanner)
router.post('/update', updateBanner)

module.exports = router

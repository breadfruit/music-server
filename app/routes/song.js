const router = require('koa-router')()
const {
    getLyric,
    getSongDetail,
    addSong,
    updateSong,
    deleteSong,
    getSongList,
    getSongUrl
} = require('@controller/song')

router.prefix('/song')


router.get('/detail', getSongDetail);
router.get('/lyric', getLyric);

router.get('/list', getSongList);
router.post('/add', addSong);
router.post('/update', updateSong);
router.get('/delete', deleteSong);
router.get('/play', getSongUrl);

module.exports = router

const router = require('koa-router')()
const {
    getUseLikeAlbum,
    addCollect,
    deleteCollect,
    addSongToAlbum,
    deleteSongInAlbum,
    getUserCollectAlbumList
} = require('@controller/user_album_song')



router.prefix('/album');

router.get('/user/owner', getUseLikeAlbum)
router.get('/user/collect/list', getUserCollectAlbumList);
router.get('/user/collect/add', addCollect);
router.get('/user/collect/delete', deleteCollect)

router.get('/song/add', addSongToAlbum)
router.get('/song/delete', deleteSongInAlbum)

module.exports = router



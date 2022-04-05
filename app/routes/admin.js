const router = require('koa-router')()
const { 
    getAdminById,
    login,
    updateAdminInfo,
    resetPassword,
    getAdminInfo
} = require('@controller/admin')


router.prefix('/admin');

router.get('/info', getAdminInfo)
router.post('/login', login);
router.post('/updateinfo', updateAdminInfo);
router.post('/resetpassword', resetPassword);


module.exports = router
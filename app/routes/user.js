const router = require('koa-router')()
const {
  getUserInfo,
  postUserAuth,
  addUser,
  updateUser,
  logoutUser,
  getUserList,
  resetPassword,
  deleteArr,
  updateAvatarUrl,
  getCode,
  registerActive
} = require('@controller/user')


router.prefix('/user');


router.post('/login', postUserAuth);
router.post('/register', addUser);//注册
router.post('/update', updateUser);
router.get('/logout', logoutUser);
router.get('/info', getUserInfo);
router.get('/list', getUserList);
router.post('/resetpassword', resetPassword);
router.post('/batchdel', deleteArr)
router.get('/active', registerActive)//获得邮箱激活码
router.get('/code', getCode)//获取验证码

module.exports = router

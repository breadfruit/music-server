const db = require('../models/index')
const User = db['user'];
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mailer = require('../lib/mailer')


async function getUserById(id) {
  const userinfo = await User.findOne({
    where: {
      id
    }
  })
  if (userinfo != null) {
    return userinfo.dataValues
  } else {
    return '用户不存在'
  }
}

async function getUserByName(name) {
  const userInfo = await User.findOne({
    where: {
      name
    }
  })

  return ctx.success('查询用户成功',userInfo)
}

async function getUserByEmail(email) {
  const userInfo = await User.findOne({
    where: {
      email
    }
  })

  return userInfo
}

async function getUserByPhone(phone) {
  const userInfo = await User.findOne({
    where: {
      phone
    }
  })

  return userInfo
}

async function getUserInfo(ctx) {
  const id = ctx.query.id // 获取url里传过来的参数里的id
  const result = await await User.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })
  return ctx.success('查询用户信息成功', result)
}

//用户鉴权
async function postUserAuth (ctx) {
  const data = ctx.request.body // post过来的数据存在request.body里
  var userInfo;
  console.log(data)
  if (data.username) {
    userInfo = await getUserByName(data.username)
  } else if (data.email) {
    const email = data.email;
    const confirmedActiveCode = data.activeCode
    userInfo = await getUserByEmail(email)
    const activeCode = userInfo.dataValues.activeCode;
    const activeExpires = userInfo.dataValues.activeExpires;
    console.log('填入的激活码',confirmedActiveCode, '数据库里面的激活码', activeCode)
    if(userInfo != null) {
      console.log('检查用户是否激活', userInfo)
      const active = userInfo.active
      //如果激活了
      if(active == 1) {
        let nowtime = Date.now();
        //验证码过期
        if (nowtime > activeExpires) {
          return ctx.fail('请重新发送验证码～')
        }else {
          //验证信息
          if( activeCode ==  confirmedActiveCode ) {
            //返回令牌
            const userToken = {
              name: userInfo.name,
              id: userInfo.id
            }
            const secret = 'musicToken' // 指定密钥
            const token = jwt.sign(userToken, secret, {expiresIn: 60 * 60}) // 签发token
            return ctx.success('获取令牌成功', {token, userInfo})
          }else {
            return ctx.fail('验证码错误')
          }
        }
      }else{
        return ctx.fail('你好,当前用户还未激活，请先前往注册进行激活！') //用户激活页面
      }
    }else {
      return ctx.fail('用户不存在')
    }
  } else if (data.phone) {
    userInfo = await getUserByPhone(data.phone)
    console.log('data=======', userInfo)
  }
  if (userInfo != null) { // 如果查无此用户会返回null
    console.log('userinfo', userInfo.dataValues)
    if (!bcrypt.compareSync(data.password, userInfo.password)) {
      return ctx.fail('密码错误!')
    } else {
      const userToken = {
        name: userInfo.name,
        id: userInfo.id
      }
      const secret = 'musicToken' // 指定密钥
      const token = jwt.sign(userToken, secret, {expiresIn: 60 * 60}) // 签发token
      return ctx.success('获取令牌成功', {token, userInfo})
    }
  } else {
    return ctx.fail('用户不存在')
  }
}

//修改用户信息
async function updateUser(ctx) {
  const {
    name,
    avatarUrl,
    sex,
    birth,
    introduction,
    email,
    phone,
    id,
  } = ctx.request.body;
  console.log(ctx.request.body)
  const updateuser = await User.update({
    name,
    avatarUrl,
    sex,
    birth,
    phone,
    introduction,
    email
  }, {
    where: {
      id
    }
  })
  const newuser = await User.findOne({
    where:{
      id
    }
  })
  return ctx.success('修改用户信息', newuser)
}
//注册
async function addUser(ctx) {
  const data = ctx.request.body;
  const name = data.name;
  const birth = data.birth;
  const sex = data.sex;
  const avatarUrl = data.avatarUrl;
  const introduction = data.introduction;
  console.log('data========', data)
  var newuser;
  if (data.email) {
      console.log('1')
      const email = data.email;
      const confirmedActiveCode = data.activeCode;
      let myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if(!email){
        return ctx.fail('邮箱或者密码为空')
      }
      if(!myreg.test(email)) {
        return ctx.fail('邮箱错误')
      }
      //查找数据库是否有这个用户
      let userdata = await User.findOne({
        where: {
          email
        }
      })
      const activeCode = userdata.dataValues.activeCode;
      const activeExpires = userdata.dataValues.activeExpires;
      if(userdata != null) {
        //比较激活码
        console.log('填入的激活码',confirmedActiveCode, '数据库里面的激活码', activeCode)
        if(confirmedActiveCode == activeCode) {
          //判断激活码有效期是否过期
          //判断是否过期，有效期为一分钟
          let date = Date.now();
          //如果用户过期
          if(data >  activeExpires) {
            return ctx.fail('你好,你的激活码失效了')
          }else {
            //激活码有效，更新用户状态
            let userdata = await User.update({
              active: 1
            }, {
              where: {
                email
              }
            })
            return ctx.success('激活码成功', userdata)
          }
        }else {
          return ctx.fail('激活码错误')
        }
      }else {
        return ctx.fail('该用户不存在')
      }
      return ctx.success('已发送邮件至' + username + '，请在一分钟内按照邮件提示激活。', newuser)
  } else if (data.password) {
    let password = data.password;
    password = bcrypt.hashSync(password)
    if (data.phone) {
      const phone = data.phone;
      const phoneuser = await getUserByPhone(phone);
      if (phoneuser != null) {
        return ctx.fail('用户已存在')
      } else {
        newuser = await User.create({
          name,
          phone,
          password,
          birth,
          sex,
          introduction,
          avatarUrl
        })
        return ctx.success('注册成功', newuser)
      }
    }
  }

}

//注销
async function logoutUser(ctx) {
  const { id } = ctx.query;
  await User.update({
    isDelete: 1
  }, {
    where: {
      id
    }
  })
  return ctx.success('注销成功')
}
//获取用户列表
async function getUserList(ctx) {
  const userlist = await User.findAll({
    where: {
      isDelete: 0
    }
  })
  return ctx.success('获取用户列表成功', userlist)
}
//用户修改密码
async function resetPassword(ctx) {
  const { newpassword, password, phone  } = ctx.request.body;
  const userInfoResult = await getUserByPhone(phone)
  const userInfo = userInfoResult.dataValues
  //console.log('用户修改密码====', userInfo)
  if (!bcrypt.compareSync(password, userInfo.password)) {
    return ctx.fail('密码错误!')
  } else {
    const resetpwd = bcrypt.hashSync(newpassword)
    await User.update({
      password: resetpwd
    }, {
      where: {
        phone
      }
    })
    return ctx.success('用户修改密码成功', userInfo)
  }
}

//批量删除
async function deleteArr(ctx) {
  //传入字符串
  const { ids } = ctx.request.body;
  //处理成数组
  const arr = ids.split(',')
  const res = await User.update({
    isDelete: 1
  },{
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

//用户更换头像
async function updateAvatarUrl(ctx) {
  const { avtarurl, id } = ctx.request.body;
  const res = await User.update({
    avatarUrl: avtarurl
  }, {
    where: {
      id
    }
  })
  if (res.code == 1) {
    return ctx.success('更新头像成功')
  } else {
    return ctx.fail('更新头像失败')
  }
}

//获取邮件激活码
async function registerActive(ctx){
  let { email } = ctx.query;
  const res = await sendCode(email)
  console.log(res)
  let activeCode =  res.activeCode;
  let activeExpires = res.activeExpires;

  let newuser;
  let userdata = await User.findOne({
    where: {
      email
    }
  })

  if(userdata == null) {
    newuser = await User.create({
      email,
      activeCode,
      activeExpires
    })
  }else {
    let id = userdata.dataValues.id;
    newuser = await User.update({
      activeCode,
      activeExpires
    },{
      where: {
        id
      }
    })
  }
  return ctx.success('获取注册激活码成功', newuser)
}
//
async function sendCode(email) {
  console.log('sendCode接受的参数', email)
    let activeCode = 0;
    //随机生成随机码
    for(let i = 0; i< 4; i++){
      activeCode = activeCode * 10*i + Math.ceil(Math.random()*10);
    }
    // 设置过期时间为24小时
    let activeExpires = Date.now() + 60 * 1000;

    // 发送激活邮件
    mailer({
      to: email,
      subject: '欢迎注册',
      html: `你的验证码是:${activeCode},有效期为一分钟`
    });

    let newuser;
    let userdata = await User.findOne({
      where: {
        email
      }
    })
    if(userdata!= null) {
      let id = userdata.dataValues.id
      newuser = await User.update({
        activeCode,
        activeExpires,
        email
      },{
        where: {
          id
        }
      })
    } else {
      newuser = await User.create({
        email,
        activeCode,
        activeExpires
      })
    }

  // return ctx.success('发送验证码成功')
  return {
      email,
      activeCode,
      activeExpires
  }
}


async function getCode(ctx) {
  console.log('getCode接受的参数', ctx.query )
  const { email }= ctx.query;
  const res = await sendCode(email);
  return ctx.success('用户发送验证码成功')
}
module.exports = {
  getUserByEmail,
  getUserByName,
  getUserInfo,
  postUserAuth,
  addUser,
  updateUser,
  logoutUser,
  getUserList,
  resetPassword,
  deleteArr,
  updateAvatarUrl,
  registerActive,
  getCode
}

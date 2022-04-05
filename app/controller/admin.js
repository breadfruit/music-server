const db = require('../models/index')
const Admin = db['admin'];
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



async function getAdminById(id) {
    const userinfo = await Admin.findOne({
        where: {
            id
        }
    })
    if (userinfo != null) {
        return userinfo.dataValues
    } else {
        return 0
    }
    
}   
async function getAdminInfo(ctx) {
    const { id } = ctx.query // 获取url里传过来的参数里的id
  const result =  await Admin.findOne({ // 用await控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
    where: {
      id: id
    }
  })
  return ctx.success('查询用户信息成功', result)
}


async function login(ctx) {
    const { name, password } = ctx.request.body;
    const user = await Admin.findOne({
        where: {
            name, 
            password
        }
    })
    if (user != null) {
        return ctx.success('管理员登录登录成功')
    } else {
        return ctx.fail('管理员登录登录失败')
    }

}

//修改用户信息
async function updateAdminInfo(ctx) {
  const {
    name,
    avatarUrl,
    sex,
    id
  } = ctx.request.body;
  const updateAdmin = Admin.update({
    name,
    avatarUrl,
    sex
  }, {
    where: {
      id
    }
  })
  return ctx.success('修改用户信息', updateAdmin)
}
//用户修改密码
async function resetPassword(ctx) {
  const { newpassword, password, id,  } = ctx.request.body;
  const adminInfo = await getAdminById(id)
  if (password !== adminInfo.password) {
    return ctx.fail('密码错误!')
  } else {
    await Admin.update({
      password: newpassword
    }, {
      where: {
        id
      }
    })
  }
}



module.exports = {
    getAdminById,
    login,
    updateAdminInfo,
    resetPassword,
    getAdminInfo
}

const jwt = require("jsonwebtoken");
const { secretKey } = require("@config").jwt;
const db = require('../models/index')
const User = db['user'];

// jwt 错误处理方法
async function authVerify(ctx, next) {
  console.log(ctx.header)
  if (!ctx.header || !ctx.header.Authorization) {
    return ctx.fail("token效验错误", 1001);
  }
  const parts = ctx.header.Authorization.split(" ");
  if (parts.length !== 2) {
    return ctx.fail("token效验错误", 1002);
  }

  // Bearer 字段
  const schema = parts[0];
  // token 字段
  const token = parts[1];
  console.log()
  if (/^Bearer$/i.test(schema)) {
    let decode;
    try {
      decode = jwt.verify(token, secretKey);
    } catch (err) {
      return ctx.fail("token效验错误", 1003);
    }

    const user = await User.findOne(decode.id);
    if (!user) {
      return ctx.fail("该用户不存在");
    }

    // 把 user 挂在 ctx 上
    ctx.currentUser = {
      ...user,
      userId: user.id,
    };

    return next();
  }
}

// async function authVerify(ctx,next){
//   let utils = ctx.request.utils;
//   let authorization = ctx.request.header["Authentication"];
//   console.log(authorization)
//   if(authorization){
//     const parts = authorization.split(" ");
//     if (parts.length !== 2) {
//       return ctx.fail("token效验错误", 1001);
//     }
//
//     // Bearer 字段
//     const schema = parts[0];
//     // token 字段
//     const token = parts[1];
//     if (/^Basic$/i.test(schema)) {
//       let decode;
//       try {
//         decode = jwt.verify(token, 'musicToken', async (err, decoded) => {
//           if (error) {
//             ctx.body = {
//               status: -1,
//               error: error,
//               msg: "令牌失效，请重新登录"
//             };
//           } else {
//             console.log('鉴权成功', ctx)
//             // ctx.token = decoded;
//             await next();
//           }
//         })
//       } catch (err) {
//         return ctx.fail("token效验错误", 1001);
//       }
//
//
//       // let token = authorization;
//       // console.log('token=====',token)
//       // let payload = jwt.verify(token,'musicToken',async (error,decoded)=>{
//       //   if(error){
//       //     ctx.body = {
//       //       status:-1,
//       //       error: error,
//       //       msg:"令牌失效，请重新登录"
//       //     };
//       //   }
//       //   else{
//       //     console.log('鉴权成功', ctx)
//       //     ctx.token_data = decoded;
//       //     await next();
//       //   }
//       // });
//     }
//   }
//   else{
//     return next();
//   }
// }

module.exports = authVerify;

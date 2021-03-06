

const config = {
  PORT: 6060, // 启动端口

  TOKEN: {
    secret: 'music-token', // secret is very important!
    expiresIn: '4h', // token 有效期
  },
  DATABASE: {
    database: 'music',
    user: 'root',
    password: '123456',
    options: {
      host: '127.0.0.1', // 连接的 host 地址
      dialect: 'mysql', // 连接到 mysql
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      define: {
        timestamps: false, // 默认不加时间戳
        freezeTableName: true, // 表名默认不加 s
      },
      timezone: '+08:00',
    },
  },
  jwt: {
    secretKey: 'musicToken',
    whiteList: [
        /^\//,
      /^\/api\/user\/login/,
      /\/login/,
      /\/album\/personalized/],
    expiresIn: '4h',
  },
}
module.exports = config

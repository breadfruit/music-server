const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Admin = sequelize.define(
    'admin',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: '主键',
      },
      name: {
        type: DataTypes.STRING(200),
        comment: '管理者用户名',
      },
      password: {
        type: DataTypes.STRING(200),
        comment: '管理者密码',
      },
      avatarUrl: {
        type: DataTypes.STRING(300),
        comment: '管理者头像',
      },
      // sex: {
      //   type: DataTypes.TINYINT,
      //   defaultValue: -1,
      //   comment: '性别: -1 未公开 0女 1男',
      // }
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  )

  return Admin
}




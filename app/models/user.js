const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: '主键',
      },
      name: {
        type: DataTypes.STRING(200),
        comment: '用户名',
      },
      password: {
        type: DataTypes.STRING(200),
        comment: '用户密码',
      },
      avatarUrl: {
        type: DataTypes.STRING(300),
        comment: '用户头像',
      },
      sex: {
        type: DataTypes.TINYINT,
        defaultValue: 3,
        comment: '性别: 3未公开 0女 1男',
      },
      isDelete: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        comment: '是否已经删除用户，0：否 1：是',
      },
      phone: {
        type: DataTypes.STRING(200),
        comment: '用户手机号码',
      },
      email: {
        type: DataTypes.STRING(200),
        comment: '用户邮箱',
      },
      birth: {
        type: DataTypes.STRING(100),
        comment: '用户生日',
      },
      introduction: {
        type: DataTypes.STRING(200),
        comment: '用户签名',
      },
      activeCode: {
          type: DataTypes.BIGINT(100),
          comment: '邮箱激活码',
      },
      activeExpires: {
          type: DataTypes.BIGINT(100),
          comment: '激活有效时间',
      },
      active: {
          type:  DataTypes.TINYINT,
          comment: '是否激活， 0代表否，1代表是',
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  )
  User.associate = (model) => {
    User.belongsToMany(model.album, {
      through: model.user_album,
    })
  }
  return User
}




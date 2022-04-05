const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User_Album = sequelize.define(
    'user_album',
    {
      isCollection: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        comment: '是否是收藏，0：否 1：是',
      },
      isLike: {
          type: DataTypes.TINYINT,
          defaultValue: 0,
          comment: '是否是用户喜欢，0：否 1：是',
      },
      isDelete: {
        type: DataTypes.TINYINT,
        defaultValue: 0,
        comment: '是否删除歌单，0：否 1：是',
      },
    },
    {
      timestamps: false,
      freezeTableName: true
    },
  )
  return User_Album
}



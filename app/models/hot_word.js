const { DataTypes } = require('sequelize');
const sequelize = require('./index');


module.exports = (sequelize) => {
  const HotWord = sequelize.define(
    'hot_word',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: '主键',
      },
      word: {
        type: DataTypes.STRING(100),
        comment: '热词名',
      },
      frequency: {
          type: DataTypes.BIGINT(100),
          comment:'搜索频率',
          defaultValue: 0
      }
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  )
  return HotWord
}

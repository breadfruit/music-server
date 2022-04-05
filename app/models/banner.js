
const { DataTypes, Sequelize } = require('sequelize');



module.exports = (sequelize) => {
  const Banner = sequelize.define(
    'banner',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: '主键',
      },
      imageUrl: {
        type: DataTypes.STRING(500),
        comment: '图片的url',
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  )
  return Banner
}
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Album_Song = sequelize.define(
    'album_song',
    {
      order: DataTypes.INTEGER,
      // isDelete: {
      //   type: DataTypes.TINYINT,
      //   defaultValue: 0,
      //   comment: '，0：否 1：是',
      // },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  )
  return Album_Song
}
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Album = sequelize.define(
    'album',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: '主键',
      },
      name: {
        type: DataTypes.STRING(100),
        comment: '歌单名称',
      },
      picUrl: {
        type: DataTypes.STRING(500),
        comment: '封面图片',
      },
      // trackCount: {
      //   type: DataTypes.BIGINT,
      //   comment: '订阅量',
      //     defaultValue: 0
      // },
      playCount: {
        type: DataTypes.BIGINT,
        comment: '播放量',
        defaultValues: 0,
          defaultValue: 0
      },
      subscribedCount: {
        type: DataTypes.BIGINT,
        comment: '订阅数',
          defaultValue: 0
      },
      updateFrequency: {
        type: DataTypes.STRING,
        comment: '更新频率',
      },
      globalList: {
        type: DataTypes.TINYINT,
        comment: '是否是全球榜',
      },
      isRank: {
        type: DataTypes.TINYINT,
        comment: '是否是排行榜',
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  );
  Album.associate = (model) => {
    Album.belongsToMany(model.song, {
        through: model.album_song,
    }),
    Album.belongsToMany(model.user, {
      through: model.user_album,
    })
  }
  return Album

}


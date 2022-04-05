const { DataTypes } = require('sequelize');

// 歌曲.
module.exports = (sequelize) => {
  const Song = sequelize.define(
    'song',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: '主键',
      },
      name: {
        type: DataTypes.STRING(100),
        comment: '歌曲名称',
      },
      artistName: {
        type: DataTypes.STRING(100),
        comment: '作者',
      },
      playCount: {
         type: DataTypes.BIGINT,
         comment: '歌曲播放量',
          defaultValue: 0
      },
      picUrl: {
        type: DataTypes.STRING(500),
        comment: '预览图',
      },
      lyric: {
        type: DataTypes.TEXT,
        comment: '歌词',
      },
      // updateFrequency: {
      //   type: DataTypes.STRING(100),
      //   comment: '更新频率',
      //   defaultValue: 0,
      // },
      dt: {
        type: DataTypes.BIGINT,
        comment: '歌曲时长',
      },
        songUrl: {
            type: DataTypes.STRING(200),
            comment: '歌曲播放链接',
        }
    },
    {
      timestamps: false,
      freezeTableName: true,
    },
  )
  Song.associate = model => {
    Song.belongsTo(model.singer, {
        foreignKey: 'singerId',
    })
    Song.belongsToMany(model.album, {
      through: model.album_song,
    })
  }
  return Song
}



module.exports = function (sequelize, DataTypes) {
    const singer = sequelize.define(
        'singer', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                comment: '主键',
            },
            name: {
                type: DataTypes.STRING(100),
                comment: '歌手名称',
            },
            picUrl: {
                type: DataTypes.STRING(500),
                comment: '歌手图片预览图',
            },
            type: {
                type: DataTypes.TINYINT,
                comment: '1:男歌手 2:女歌手 3:乐队',
            },
            area: {
                type: DataTypes.TINYINT,
                comment: '1:华语 2:欧美 3:日本 4:其他',
            },
            initial: {
                type: DataTypes.STRING,
                comment: '',
            },
            isHot: {
                type: DataTypes.TINYINT,
                defaultValue: 0,
                comment: '是否是热门歌手 0否 1是',
            }
        }, {
            timestamps: false,
            freezeTableName: true,
        }
    )
    return singer

}


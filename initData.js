const db = require('./app/models/index')
const Singer = db['singer'];
const Song = db['song'];
const User = db['user'];
const Album = db['album'];
const Admin = db['admin'];
const HotWord = db['hot_word'];
const Album_Song = db['album_song'];
const User_Album = db['user_album'];
const Banner = db['banner'];
(async function () {

    await Banner.create({
        imageUrl: 'banner1.jpeg'
    })
    await Banner.create({
        imageUrl: 'banner2.jpeg'
    })
    await Banner.create({
        imageUrl: 'banner3.jpeg'
    })
    await Banner.create({
        imageUrl: 'banner4.jpeg'
    })
    await User.create({
        name:'用户1',
        phone: '15606926079',
        password:'$2a$10$NCHB5xlFZyDxBh/ahClhcugMLj4NxFS8wVsQ1PPAkd406q2xbN5zO',
        avatarurl:'user.jpg',
        sex:1,
        birth: '2001-1-1',
        introduction:'城市不错'
    })
    await User.create({
        name:'用户2',
        phone: '15889260889',
        password:'$2a$10$F5JEzpKy9EVvFu0u8DYJKOet53yoFFLJI1jCx9vsuEsq7KLTOwhtm',
        avatarurl:'user.jpg',
        sex:1,
        birth: '1991-1-1',
        introduction:'城市不从得不偿失错'
    })
    await User.create({
        name:'用户2',
        phone: '15889260459',
        password:'$2a$10$F5JEzpKy9EVvFu0u8DYJKOet53yoFFLJI1jCx9vsuEsq7KLTOwhtm',
        avatarurl:'user.jpg',
        sex: 2,
        birth: '1993-6-30',
        introduction:'城市不从得不偿失错'
    })
    await User.create({
        name:'用户2',
        eamil: '1845252983@qq.com',
        password:'$2a$10$VzRkgWOHzcxNgHiff2r3quBJV8kbKDq0BqTdXVUuBVE5VE.08sVVG',
        avatarurl:'user.jpg',
        sex: 2,
        birth: '1993-2-12',
        introduction:'城市不从得不偿失错'
    })

    await HotWord.create({
        word: '光的方向',
        frequency: 1
    })
    await HotWord.create({
        word: '漠河舞厅',
        frequency: 11
    })
    await HotWord.create({
        word: '哪里都是你',
        frequency: 143
    })
    await HotWord.create({
        word: '差别很大易',
        frequency: 32
    })
    await HotWord.create({
        word: '毛你说的6',
        frequency: 28
    })
    await HotWord.create({
        word: '都看见5成本草草收场办法',
        frequency: 89
    })
    await HotWord.create({
        word: '说的话4',
        frequency: 26
    })
    await HotWord.create({
        word: '毛不易3',
        frequency: 84
    })
    await HotWord.create({
        word: '不堵车',
        frequency: 78
    })
    await HotWord.create({
        word: '毛还是不易1',
        frequency: 23
    })
    await HotWord.create({
        word: '错步步错',
        frequency: 78
    })
    await HotWord.create({
        word: '就不会',
        frequency: 23
    })

    //30116848 1
    await Singer.create({
        name: '阿冗',
        picUrl: '阿冗.jpg',
        type: 2,
        area: 1,
        initial: 'a',
        isHot: 1
    });

    //31876221 2
    await Singer.create({
        name: '柏松',
        picUrl: '柏松.jpg',
        type: 1,
        area: 1,
        initial: 'b',
        isHot: 1
    });


    //2116 3
    await Singer.create({
        name: '陈奕迅',
        picUrl: '陈奕迅.jpg',
        type: 1,
        area: 1,
        initial: 'c',
        isHot: 1
    });


    //1143033 4
    await Singer.create({
        name: '队长',
        picUrl: '队长.jpg',
        type: 1,
        area: 1,
        initial: 'd',
        isHot: 1
    });


    //47607639 5
    await Singer.create({
        name: '贰万',
        picUrl: '贰万.jpg',
        type: 1,
        area: 1,
        initial: 'e',
        isHot: 1
    });


    //2738 6
    await Singer.create({
        name: '方大同',
        picUrl: '方大同.jpg',
        type: 1,
        area: 1,
        initial: 'f',
        isHot: 1
    });


    //2843 7
    await Singer.create({
        name: '郭顶',
        picUrl: '郭顶.jpg',
        type: 1,
        area: 1,
        initial: 'g',
        isHot: 1
    });

    //1019154 8
    await Singer.create({
        name: '黄礼格',
        picUrl: '黄礼格.jpg',
        type: 1,
        area: 1,
        initial: 'h',
        isHot: 1
    });

    //12121264 9
    await Singer.create({
        name: 'Ice Paper',
        picUrl: 'Ice Paper.jpeg',
        type: 1,
        area: 1,
        initial: 'i',
        isHot: 1
    });


    //1198123 10
    await Singer.create({
        name: '姜云升',
        picUrl: '姜云升.jpeg',
        type: 1,
        area: 1,
        initial: 'j',
        isHot: 1
    });


    //12788674 11
    await Singer.create({
        name: 'KEY.L刘聪',
        picUrl: 'KEY.L刘聪.jpeg',
        type: 1,
        area: 1,
        initial: 'k',
        isHot: 1
    });


    //3684 12
    await Singer.create({
        name: '林俊杰',
        picUrl: '林俊杰.jpg',
        type: 1,
        area: 1,
        initial: 'l',
        isHot: 1
    });

    //4292 13
    await Singer.create({
        name: '李荣浩',
        picUrl: '李荣浩.jpg',
        type: 1,
        area: 1,
        initial: 'l',
        isHot: 1
    });


    //12138269 14
    await Singer.create({
        name: '毛不易',
        picUrl: '毛不易.jpg',
        type: 1,
        area: 1,
        initial: 'm',
        isHot: 1
    });


    //31062035 15
    await Singer.create({
        name: '你的大表哥曲甲',
        picUrl: '你的大表哥曲甲.jpeg',
        type: 1,
        area: 1,
        initial: 'n',
        isHot: 1
    });


   //896460 16
    await Singer.create({
        name: '欧豪',
        picUrl: '欧豪.jpeg',
        type: 1,
        area: 1,
        initial: 'o',
        isHot: 1
    });


    //4721 17
    await Singer.create({
        name: '朴树',
        picUrl: '朴树.jpeg',
        type: 1,
        area: 1,
        initial: 'p',
        isHot: 1
    });

    //817039 18
    await Singer.create({
        name: '乔佳旭',
        picUrl: '乔佳旭.jpeg',
        type: 1,
        area: 1,
        initial: 'q',
        isHot: 1
    });


    //4895 19
    await Singer.create({
        name: '任贤齐',
        picUrl: '任贤齐.jpeg',
        type: 1,
        area: 1,
        initial: 'r',
        isHot: 1
    });


    //12002248 20
    await Singer.create({
        name: '沈以诚',
        picUrl: '沈以诚.jpg',
        type: 1,
        area: 1,
        initial: 's',
        isHot: 1
    });


    //5205
    await Singer.create({
        name: '谭咏麟',
        picUrl: '谭咏麟.jpeg',
        type: 1,
        area: 1,
        initial: 't',
        isHot: 1
    });


    //47451852 22
    await Singer.create({
        name: 'UyMusic6-19',
        picUrl: 'UyMusic6-19.jpeg',
        type: 1,
        area: 1,
        initial: 'u',
        isHot: 1
    });


    //47607557 23
    await Singer.create({
        name: 'VodKe',
        picUrl: 'VodKe.jpeg',
        type: 1,
        area: 1,
        initial: 'v',
        isHot: 1
    });


    //5538 24
    await Singer.create({
        name: '汪苏泷',
        picUrl: '汪苏泷.jpeg',
        type: 1,
        area: 1,
        initial: 'w',
        isHot: 1
    });


    //5781 25
    await Singer.create({
        name: '薛之谦',
        picUrl: '薛之谦.jpg',
        type: 1,
        area: 1,
        initial: 'x',
        isHot: 1
    });


    //31376161 26
    await Singer.create({
        name: '颜人中',
        picUrl: '颜人中.jpeg',
        type: 1,
        area: 1,
        initial: 'y',
        isHot: 1
    });


    //6452 27
    await Singer.create({
        name: '周杰伦',
        picUrl: '周杰伦.jpg',
        type: 1,
        area: 1,
        initial: 'z',
        isHot: 1
    });


    //46376 28
    await Singer.create({
        name: 'Zedd',
        picUrl: 'Zedd.jpg',
        type: 1,
        area: 2,
        initial: 122,
        isHot: 1
    });

    await Album.create({
        name: '好听到爆的翻唱系列（持续更新）',
        picUrl: 'album1.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 1
    })
    await Album.create({
        name: '神仙翻唱:每首都是神仙级的Cover',
        picUrl: 'album1.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 1
    })
    await Album.create({
        name: '200首好听的翻唱',
        picUrl: 'album2.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 1
    })
    await Album.create({
        name: '精选｜耳熟的翻唱合集',
        picUrl: 'album3.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 1
    })
    await Album.create({
        name: '听你爱的爱了很久的朋友（翻自 田馥甄） |华语私人定制',
        picUrl: 'album4.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 1
    })
    await Album.create({
        name: '如果以后再遇见你',
        picUrl: 'album5.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '控球 节奏 打球时听的歌 ＃ 控卫',
        picUrl: 'album6.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '『洗澡』收拾/打扫/化妆/面膜专用指南',
        picUrl: 'album7.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '很喜欢 很短暂 很遗憾',
        picUrl: 'album8.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '治愈向| 听歌是抚慰情绪最好的良药',
        picUrl: 'album9.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '这首翻唱送给你听',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '热歌榜1',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 1,
        userId: 2
    })
    await Album.create({
        name: '热歌榜2',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 1,
        userId: 2
    })
    await Album.create({
        name: '黑金榜3',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 1,
        userId: 2
    })
    await Album.create({
        name: '飙升榜4',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 0,
        isRank: 1,
        userId: 2
    })
    await Album.create({
        name: '欧美榜',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '欧美榜1',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '欧美榜2',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '欧美榜3',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '韩国榜1',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '韩国榜2',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '韩国榜3',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '韩国榜4',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '美国榜1',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '美国榜2',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '美国榜3',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '美国榜4',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '英国榜1',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '英国榜2',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '英国榜3',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    await Album.create({
        name: '英国榜4',
        picUrl: 'album10.jpeg',
        updateFrequency: '持续更新',
        subscribedCount:756 ,
        playCount:14639424,
        globalList: 1,
        isRank: 0,
        userId: 2
    })
    // await Album.create({
    //     name: '我的喜欢',
    //     picUrl: 'album10.jpeg',
    //     updateFrequency: '',
    //     subscribedCount:756 ,
    //     playCount:14639424,
    //     globalList: 0,
    //     isRank: 0,
    //     userId: 1
    // })
    // await Album.create({
    //     name: '我的喜欢',
    //     picUrl: 'album10.jpeg',
    //     updateFrequency: '',
    //     subscribedCount:756 ,
    //     playCount:14639424,
    //     globalList: 0,
    //     isRank: 0,
    //     userId: 3
    // })

    async function addToAlbum (songData) {
        const songId = songData.dataValues.id;
        const singerId = songData.dataValues.singerId;
        const singerName = songData.dataValues.artistName;
        const singerPicUrl = songData.dataValues.picUrl;
        const albumData = await Album.findOne({
            where: {
                name: `${singerName}的专属歌单`
            }
        });
        var albumId;
        console.log('的专属歌单====',albumData)
        if(albumData!= null) {
            albumId = albumData.dataValues.id;
        } else {
            //创建歌单
            const newAlbum = await Album.create({
                name: `${singerName}的专属歌单`,
                picUrl: singerPicUrl
            });
            albumId = newAlbum.dataValues.id;
        }
        ;
        //将歌曲加入歌单
        await Album_Song.create({
            albumId: albumId,
            songId: songId
        });
    }

    //29774171
    const songData1 = await Song.create({
        name: '新地球',
        lyric: '[00:00.000] 作词 : 林秋离\n[00:00.214] 作曲 : 林俊杰\n[00:00.428] 编曲 : 林俊杰\n[00:00.642] 制作人 : 林俊杰\n[00:00.856] 配唱编写 : 林俊杰\n[00:01.070] 制作协力 : 周信廷\n[00:01.284] 钢琴 : 林俊杰\n[00:01.498] 鼓 : Brendan Buckley\n[00:01.712] 和声编写 : 林俊杰\n[00:01.926] 和声 : 林俊杰\n[00:02.140] 录音室 : The JFJ Lab (Taipei)/Layer Cake Studio (LA)\n[00:02.354] 录音师 : 林俊杰/周信廷/Brendan Buckley\n[00:02.568] 混音室 : mixHaus (Encino/CA)\n[00:02.782] 混音师 : Richard Furch\n[00:03.000]\n[00:33.334]是一种蓝色的哀愁\n[00:41.364]我醒在荒凉的地球\n[00:49.125]纽约在海底的角落\n[00:57.147]阳光把大地变沙漠\n[01:04.125]变了味道\n[01:05.638]人们才开始哀悼\n[01:07.409]讽刺的是空气很好\n[01:09.637]烟囱在 水里 无声 飘摇\n[01:12.072]没了情调\n[01:13.584]人们为三餐奔跑\n[01:15.331]一切的爱 恨\n[01:18.059]都在自寻烦恼\n[01:20.089]新地球 他们这么叫\n[01:23.582]脸上没有笑 说着一口陌生腔调\n[01:28.082]新地球 他们很骄傲\n[01:31.589]只是眼 神 有意无意的逃\n[01:36.083]新地球 星星很闪耀\n[01:39.517]遥远海平面\n[01:41.572]总是一条直线 单调\n[01:44.046]新地球 永远回不到\n[01:47.638]那一年\n[01:48.922]那年被遗忘的小岛\n[01:52.863]\n[02:09.386]灰色的土地很枯燥\n[02:17.115]人们的娱乐好无聊\n[02:24.112]转圈圈 不停转圈圈\n[02:27.519]然后摔倒\n[02:32.066]地平线 眺望地平线\n[02:35.521]默默祈祷\n[02:38.056]没有飓风就好\n[02:40.594]\n[02:42.054]新地球 他们跑不了\n[02:45.524]像是个圈套 只能庸庸碌碌到老\n[02:50.047]新地球 他们的监牢\n[02:53.559]只是眼 神 悲伤难以去掉\n[02:58.064]新地球 从头来一遭\n[03:01.575]过去的错误 不能一直重弹老调\n[03:06.034]新地球 我却想回到\n[03:09.543]那一年\n[03:10.896]那年被遗忘的小岛\n[03:14.515]\n[03:46.050]新地球 他们这么叫\n[03:49.566]脸上没有笑 说着一口陌生腔调\n[03:54.051]新地球 他们很骄傲\n[03:57.553]只是眼 神 有意无意的逃\n[04:02.004]新地球 星星很闪耀\n[04:05.553]遥远海平面\n[04:07.577]总是一条直线 单调\n[04:10.083]新地球 永远回不到\n[04:13.553]那一年\n[04:14.874]那年被遗忘的小岛\n',
        dt: 277413,
        updateFrequency: '每周一更新',
        picUrl: '林俊杰.jpg',
        artistName: '林俊杰',
        singerId: 12,
        songUrl: '新地球-林俊杰.mp3'
    });
    await addToAlbum(songData1);

    //1293886117
    const songData2 = await Song.create({
        name: '年少有为',
        lyric:"[00:00.000] 作词 : 李荣浩\n[00:00.000] 作曲 : 李荣浩\n[00:00.000] 编曲 : 李荣浩\n[00:00.000] 制作人 : 李荣浩\n[00:00.00]\n[00:01.700]\n[00:02.700]\n[00:29.499]电视一直闪\n[00:33.141]联络方式都还没删\n[00:36.846]你待我的好\n[00:40.452]我却错手毁掉\n[00:44.092]也曾一起想\n[00:47.723]有个地方睡觉吃饭\n[00:51.374]可怎么去熬 日夜颠倒\n[00:54.763]连头款也凑不到\n[00:58.893]墙板 被我砸烂\n[01:02.274]到现在还没修\n[01:05.637]一碗热的粥\n[01:07.659]你怕我没够\n[01:09.528]都留一半带走\n[01:12.509]给你形容\n[01:14.975]美好今后 你常常眼睛会红\n[01:20.200]原来心疼我\n[01:22.217]我那时候不懂\n[01:27.016]假如我年少有为 不自卑\n[01:31.331]懂得什么是珍贵\n[01:33.873]那些美梦\n[01:37.483]没给你 我一生有愧\n[01:41.563]假如我年少有为 知进退\n[01:45.903]才不会让你替我受罪\n[01:49.732]婚礼上 多喝几杯\n[01:52.962]和你现在那位\n[02:00.129]\n[02:25.875]也曾一起想\n[02:29.497]有个地方睡觉吃饭\n[02:33.127]可怎么去熬 日夜颠倒\n[02:36.512]连头款也凑不到\n[02:40.657]墙板 被我砸烂\n[02:44.060]到现在还没修\n[02:47.430]一碗热的粥\n[02:49.456]你怕我没够\n[02:51.288]都留一半带走\n[02:54.322]给你形容\n[02:56.777]美好今后 你常常眼睛会红\n[03:01.979]原来心疼我\n[03:04.032]我那时候不懂\n[03:08.807]假如我年少有为 不自卑\n[03:13.163]懂得什么是珍贵\n[03:15.635]那些美梦\n[03:19.252]没给你 我一生有愧\n[03:23.377]假如我年少有为 知进退\n[03:27.674]才不会让你替我受罪\n[03:31.533]婚礼上 多喝几杯\n[03:34.706]和你现在那位\n[03:41.562]假如我年少有为 不自卑\n[03:45.881]尝过后悔的滋味\n[03:48.351]金钱地位\n[03:52.000]搏到了却好想退回\n[03:56.098]假如我年少有为 知进退\n[04:00.401]才不会让你替我受罪\n[04:04.329]婚礼上 多喝几杯\n[04:07.431]和你现在那位\n[04:14.961]在婚礼上 多喝几杯\n[04:18.454]祝我年少有为\n[04:27.555]\n[04:28.269] 吉他 : 李荣浩\n[04:28.983] 贝斯 : 李荣浩\n[04:29.697] 鼓 : Alex\n[04:30.411] 和声编写 : 李荣浩\n[04:31.125] 和声 : 李荣浩\n[04:31.839] 弦乐编写 : 李荣浩\n[04:32.553] 弦乐 : 国际首席爱乐乐团\n[04:33.267] 录音师 : 李荣浩\n[04:33.981] 混音师 : 李荣浩\n[04:34.695] 录音室 : 北京一样音乐录音室\n[04:35.409] 混音室 : 北京一样音乐录音室\n[04:36.123] 母带制作 : 李荣浩\n[04:36.837] 母带工程师 : 周天澈TC Z.\n[04:37.551] 母带后期处理录音室 : TC Faders\n[04:38.265] OP : 一样音乐工作室\n[04:38.979] SP : 酷亚音乐 (深圳) 有限公司 admin by One Asia Music Inc. 酷亚音乐股份有限公司\n",
        picUrl:'李荣浩.jpg',
        artistName:'李荣浩',
        singerId: 13,
        dt: 278989,
        songUrl:'李荣浩-年少有为.mp3'
    });
    await addToAlbum(songData2);
    //1400256289
    const songData3 = await Song.create({
        name: '你的答案',
        lyric: "[00:00.000] 作词 : 林晨阳/刘涛\n[00:01.000] 作曲 : 刘涛\n[00:02.21]编曲 : 谭侃侃\n[00:03.00](本作品声明：著作权权利保留，未经许可不得翻唱或使用！)\n[00:25.33]也许世界就这样\n[00:28.47]我也还在路上\n[00:31.25]没有人能诉说\n[00:36.32]也许我只能沉默\n[00:39.21]眼泪湿润眼眶\n[00:42.01]可又不甘懦弱\n[00:45.94]低着头期待白昼\n[00:50.90]接受所有的嘲讽\n[00:56.67]向着风拥抱彩虹\n[01:01.89]勇敢地向前走\n[01:06.71]黎明的那道光\n[01:08.88]会越过黑暗\n[01:11.52]打破一切恐惧我能\n[01:14.66]找到答案\n[01:17.29]哪怕要逆着光\n[01:19.72]就驱散黑暗\n[01:22.56]丢弃所有的负担\n[01:25.65]不再孤单\n[01:28.54]不再孤单\n[01:39.04]也许世界就这样\n[01:41.93]我也还在路上\n[01:44.87]没有人能诉说\n[01:49.86]也许我只能沉默\n[01:52.90]眼泪湿润眼眶\n[01:55.58]可又不甘懦弱\n[01:59.40]低着头期待白昼\n[02:04.61]接受所有的嘲讽\n[02:10.27]向着风拥抱彩虹\n[02:15.59]勇敢地向前走\n[02:20.34]黎明的那道光\n[02:22.47]会越过黑暗\n[02:25.15]打破一切恐惧我能\n[02:28.29]找到答案\n[02:30.92]哪怕要逆着光\n[02:33.50]就驱散黑暗\n[02:35.99]丢弃所有的负担\n[02:39.37]不再孤单\n[02:42.16]不再孤单\n[02:50.44]黎明的那道光\n[02:52.56]会越过黑暗\n[02:55.34]打破一切恐惧我能\n[02:58.33]找到答案\n[03:01.11]哪怕要逆着光\n[03:03.39]就驱散黑暗\n[03:06.07]有一万种的力量\n[03:09.31]淹没孤单\n[03:12.36]不再孤单\n[03:14.58]也许世界就这样\n[03:17.37]我也还在路上\n[03:20.38]没有人能诉说\n[03:25.28]也许我只能沉默\n[03:28.32]眼泪湿润眼眶\n[03:31.11]可又不甘懦弱\n[03:35.41]制作人 : 刘涛\n[03:35.56]吉他 : 谭侃侃\n[03:36.57]键盘 : 谭侃侃\n[03:36.73]合声 : 金天 / 胡阁\n[03:36.93]录音棚 : 北京好乐无荒录音棚\n[03:37.33]录音师 : 吴佳敏\n[03:37.49]混音师 : 刘三斤\n[03:37.69]母带后期混音师 : 刘三斤\n[03:38.04]监制 : 陶诗\n[03:38.14]封面设计 : kidult.\n[03:38.35]OP&SP : 好乐无荒\n[03:38.55]鸣谢 : 万物体验家 / 不要音乐\n",
        picUrl:'阿冗.jpg',
        artistName:'阿冗',
        singerId: 1,
        dt: 219874,
        songUrl:'你的答案-阿冗.mp3'
    });
    await addToAlbum(songData3);
    //1403215687 阿冗-想见你想见你想见你
    const songData4 = await Song.create({
        name: '想见你想见你想见你',
        lyric: "[00:00.000] 作词 : 八三夭阿璞\n[00:00.000] 作曲 : 八三夭阿璞\n[00:00.000] 编曲 : 八三夭/JerryC\n[00:00.000]\n[00:16.481]当爱情遗落成遗迹 用象形刻划成回忆\n[00:23.795]想念几个世纪 才是刻骨铭心\n[00:31.344]若能回到冰河时期 多想把你抱紧处理\n[00:38.377]你的笑多疗愈 让人生也苏醒\n[00:44.295]失去 你的风景 像座废墟 像失落文明\n[00:51.981]能否 一场奇迹 一线生机 能不能 有再一次 相遇\n[01:03.127]想见你 只想见你 未来过去 我只想见你\n[01:10.275]穿越了 千个万个 时间线里 人海里相依\n[01:17.727]用尽了 逻辑心机 推理爱情 最难解的谜\n[01:24.944]会不会 你也 和我一样 在等待一句 我愿意\n[01:41.678]任时光更迭了四季 任宇宙物换或星移\n[01:48.562]永远不退流行 是青涩的真心\n[01:54.577]未来 先进科技 无法模拟 你拥抱暖意\n[02:01.760]如果 另个时空 另个身体 能不能 换另一种 结局\n[02:13.293]想见你 只想见你 未来过去 我只想见你\n[02:20.513]穿越了 千个万个 时间线里 人海里相依\n[02:28.496]用尽了 逻辑心机 推理爱情 最难解的谜\n[02:35.794]会不会 你也 和我一样 在等待一句 我愿意\n[02:44.496]想见你 每个朝夕 想见你 每个表情\n[02:47.260]想穿越 每个平行 在未来 和过去 紧紧相依\n[02:51.078]想follow 每则IG 不错过 你的踪迹\n[02:54.595]会不会 你也一样 等待着那句 我愿意\n[02:57.660]想见你 只想见你 未来过去 我只想见你\n[03:04.758]穿越了 千个万个 时间线里 人海里相依\n[03:12.205]用尽了 逻辑心机 推理爱情 最难解的谜\n[03:19.473]会不会 你也 和我一样 在等待一句 我愿意\n[03:28.641]想见你 每个朝夕 想见你 每个表情\n[03:31.508]想穿越 每个平行 在未来 和过去 紧紧相依\n[03:35.274]想follow 每则IG 不错过 你的踪迹\n[03:38.673]会不会 你也一样 等待着那句 我愿意\n[03:42.538]想见你 每个朝夕 想见你 每个表情\n[03:46.257]想穿越 每个平行 在未来 和过去 紧紧相依\n[03:49.989]想follow 每则IG 不错过 你的踪迹\n[03:53.556]会不会 你也一样 等待着那句 我愿意\n[03:54.001] 制作 : 八三夭\n[03:54.446] 和声编写 : 林依霖/小橘/阿璞\n[03:54.891] 和声 : 阿璞/阿电/邹謦蓬\n[03:55.336] 制作助理 : 于世青\n[03:55.781] 录音 : 八三夭\n[03:56.226] 录音助理 : 张哲铭\n[03:56.671] 录音室 : 八豆夭录音室\n[03:57.116] 混音 : 黄文萱\n[03:57.561] 混音录音室 : Purring Sound Studio\n[03:58.006] 母带制作 : 八三夭\n[03:58.451] 母带后期处理 : Aya Merrill\n[03:58.896] 母带后期录音室 : Sterling Sound\n[03:59.341] OP : Rock Music Publishing Co./Ltd.\n[03:59.786] SP : Rock Music Publishing (HK) Ltd.\n",
        picUrl:'阿冗.jpg',
        artistName:'阿冗',
        singerId: 1,
        dt: 239794,
        songUrl:'想见你想见你想见你-阿冗.mp3'
    });
    await addToAlbum(songData4);
    //64561 陈奕迅-单车
    const songData5 = await Song.create({
        name: '单车',
        lyric:"[00:00.000] 作词 : 黄伟文\n[00:01.000] 作曲 : 柳重言\n[00:02.000] 编曲 : 柳重言\n[00:19.261]不要不要假设我知道\n[00:25.160]一切一切也都是为我而做\n[00:30.206]为何这么伟大\n[00:34.149]如此感觉不到\n[00:36.720]不说一句的爱有多好\n[00:40.752]只有一次记得实在接触到\n[00:45.748]骑着单车的我俩\n[00:50.035]怀紧贴背的拥抱\n[00:52.408]难离难舍想抱紧些\n[00:56.134]茫茫人生好像荒野\n[01:00.372]如孩儿能伏于爸爸的肩膀\n[01:04.454]谁要下车\n[01:08.544]难离难舍总有一些\n[01:12.480]常情如此不可推卸\n[01:17.260]任世间再冷酷\n[01:18.531]想起这单车还有幸福可借\n[01:40.467]经已给我怎会看不到\n[01:44.045]虽说演你角色实在有难度\n[01:48.887]从来虚位以待\n[01:52.771]何不给个拥抱\n[01:55.343]想我怎去相信这一套\n[01:59.340]多痛惜我却不便让我知道\n[02:03.531]怀念单车给你我\n[02:07.714]唯一有过的拥抱\n[02:09.882]难离难舍想抱紧些\n[02:13.466]茫茫人生好像荒野\n[02:17.394]如孩儿能伏于爸爸的肩膊\n[02:20.874]哪怕遥遥长路多斜\n[02:25.562]你爱我爱多些\n[02:27.579]让我他朝走得坚壮些\n[02:32.718]你介意来爱护\n[02:34.992]又靠谁施舍\n[03:10.382]难离难舍想抱紧些\n[03:15.170]茫茫人生好像荒野\n[03:20.266]如孩儿能伏于爸爸的肩膊\n[03:26.214]谁要下车\n[03:31.310]难离难舍总有一些\n[03:35.395]常情如此不可推卸\n[03:39.274]任世间怨我坏可知我只得你\n[03:44.774]承受我的狂或野\n",
        picUrl:'陈奕迅.jpg',
        artistName:'陈奕迅',
        singerId: 3,
        dt: 322694,
        songUrl:'陈奕迅-单车.mp3'
    });
    await addToAlbum(songData5);
    //1901371647 陈奕迅-孤勇者
    const songData6 = await Song.create({
        name: '孤勇者',
        lyric:"[00:00.000] 作词 : 唐恬\n[00:00.288] 作曲 : 钱雷\n[00:00.576] 编曲 : 钱雷\n[00:00.864] 吉他：高飞\n[00:01.152] 人声录音师：利伟明\n[00:01.440] 人声录音棚：雅旺录音室\n[00:01.728] Vocal edite：汝文博@SBMS Beijing\n[00:02.016] 混音&母带：周天澈@Studio 21A\n[00:02.304] 词版权管理方：北京梦织音传媒有限公司 \n[00:02.592] 曲版权管理方：索尼音乐版权代理（北京）有限公司 \n[00:02.880] 录音作品及MV版权：EAS MUSIC LTD\n[00:03.168] 联合出品：拳头游戏/腾讯游戏/腾讯视频\n[00:03.456] 联合出品监制：霍锦 卢泓宇\n[00:03.744] 制作人：钱雷\n[00:04.33]Vocal edite：汝文博@SBMS Beijing\n[00:04.49]混音&母带：周天澈@Studio 21A\n[00:04.63]词版权管理方：北京梦织音传媒有限公司\n[00:04.78]曲版权管理方：索尼音乐版权代理（北京）有限公司\n[00:04.92]录音作品及MV版权：EAS MUSIC LTD\n[00:05.07]出品监制：霍锦 卢泓宇\n[00:22.29]都 是勇敢的\n[00:28.50]你额头的伤口 你的 不同 你犯的错\n[00:36.96]都 不必隐藏\n[00:43.20]你破旧的玩偶 你的 面具 你的自我\n[00:51.46]\n[00:51.76]他们说 要带着光 驯服每一头怪兽\n[00:58.65]他们说 要缝好你的伤 没有人爱小丑\n[01:05.98]为何孤独 不可 光荣\n[01:09.25]人只有不完美 值得歌颂\n[01:13.52]谁说污泥满身的不算英雄\n[01:20.50]\n[01:20.80]爱你孤身走暗巷\n[01:22.88]爱你不跪的模样\n[01:24.61]爱你对峙过绝望\n[01:26.41]不肯哭一场\n[01:28.05]\n[01:28.35]爱你破烂的衣裳\n[01:30.11]却敢堵命运的枪\n[01:31.95]爱你和我那么像\n[01:33.83]缺口都一样\n[01:35.23]\n[01:35.53]去吗？配吗？这褴褛的披风\n[01:39.43]战吗？战啊！以最卑微的梦\n[01:43.08]致那黑夜中的呜咽与怒吼\n[01:50.35]谁说站在光里的才算英雄\n[02:08.41]\n[02:08.71]他们说 要戒了你的狂 就像擦掉了污垢\n[02:16.25]他们说 要顺台阶而上 而代价是低头\n[02:23.33]那就让我 不可 乘风\n[02:26.59]你一样骄傲着 那种孤勇\n[02:31.07]谁说对弈平凡的不算英雄\n[02:38.05]\n[02:38.35]爱你孤身走暗巷\n[02:40.29]爱你不跪的模样\n[02:42.10]爱你对峙过绝望\n[02:43.85]不肯哭一场\n[02:45.92]\n[02:45.92]爱你破烂的衣裳\n[02:47.62]却敢堵命运的枪\n[02:49.43]爱你和我那么像\n[02:51.37]缺口都一样\n[02:52.86]\n[02:53.16]去吗？配吗？这褴褛的披风\n[02:56.85]战吗？战啊！以最卑微的梦\n[03:00.55]致那黑夜中的呜咽与怒吼\n[03:07.82]谁说站在光里的才算英雄\n[03:12.25]\n[03:12.55]你的斑驳 与众不同\n[03:19.89]你的沉默 震耳欲聋 You Are The Hero\n[03:26.14]\n[03:26.44]爱你孤身走暗巷\n[03:28.27]爱你不跪的模样\n[03:30.09]爱你对峙过绝望\n[03:31.94]不肯哭一场 (You Are The Hero)\n[03:33.45]\n[03:33.75]爱你来自于蛮荒\n[03:35.75]一生不借谁的光\n[03:37.43]你将造你的城邦\n[03:39.25]在废墟之上\n[03:40.72]\n[03:41.02]去吗？去啊！以最卑微的梦\n[03:44.85]战吗？战啊！以最孤高的梦\n[03:48.54]致那黑夜中的呜咽与怒吼\n[03:55.81]谁说站在光里的才算英雄\n",
        picUrl:'陈奕迅.jpg',
        artistName:'陈奕迅',
        singerId: 3,
        dt: 256000,
        songUrl:'陈奕迅-孤勇者.mp3'
    });
    await addToAlbum(songData6);
    // 1897927515 陈奕迅-十年
    const songData7 = await Song.create({
        name: '十年',
        lyric: "[00:00.000] 作词 : Albert Leung\n[00:01.000] 作曲 : 陈小霞\n[00:02.000] 编曲 : 陈辉阳\n[00:16.199]如果那两个字没有颤抖\n[00:19.209]\n[00:19.948]我不会发现我难受\n[00:22.205]\n[00:24.691]怎么说出口\n[00:25.702]\n[00:27.691]也不过是分手\n[00:29.448]\n[00:31.443]如果对于明天没有要求\n[00:34.708]\n[00:35.702]牵牵手就像旅游\n[00:37.445]\n[00:38.948]成千上万个门口\n[00:40.645]\n[00:41.894]总有一个人要先走\n[00:46.137]\n[00:47.894]怀抱既然不能逗留\n[00:50.889]\n[00:52.139]何不在离开的时候\n[00:54.136]\n[00:55.147]一边享受 一边泪流\n[01:00.356]\n[01:02.353]十年之前\n[01:03.348]\n[01:04.345]我不认识你 你不属于我\n[01:06.862]\n[01:08.356]我们还是一样\n[01:09.857]\n[01:11.606]陪在一个陌生人左右\n[01:13.360]\n[01:14.613]走过渐渐熟悉的街头\n[01:16.353]\n[01:17.594]十年之后\n[01:18.854]\n[01:19.109]我们是朋友 还可以问候\n[01:22.111]\n[01:23.855]只是那种温柔\n[01:24.855]\n[01:26.095]再也找不到拥抱的理由\n[01:28.110]\n[01:30.109]情人最后难免沦为朋友\n[01:35.067]\n[01:57.062]怀抱既然不能逗留\n[02:00.057]\n[02:00.810]何不在离开的时候\n[02:03.053]\n[02:03.821]一边享受 一边泪流\n[02:10.055]\n[02:10.809]十年之前\n[02:12.511]\n[02:13.506]我不认识你 你不属于我\n[02:16.515]\n[02:17.254]我们还是一样\n[02:18.757]\n[02:19.510]陪在一个陌生人左右\n[02:22.515]\n[02:23.016]走过渐渐熟悉的街头\n[02:26.018]\n[02:26.764]十年之后\n[02:28.760]\n[02:29.260]我们是朋友 还可以问候\n[02:31.758]\n[02:32.525]只是那种温柔\n[02:34.255]\n[02:35.766]再也找不到拥抱的理由\n[02:37.515]\n[02:38.275]情人最后难免沦为朋友\n[02:45.504]\n[02:48.511]直到和你做了多年朋友\n[02:52.005]\n[02:53.517]才明白我的眼泪\n[02:55.017]\n[02:56.011]不是为你而流\n[02:58.766]\n[03:10.014]也为别人而流\n",
        picUrl:'陈奕迅.jpg',
        artistName:'陈奕迅',
        singerId: 3,
        dt: 205600,
        songUrl:'十年-陈奕迅.mp3'
    });
    await addToAlbum(songData7);
    //1333395577
    const songData8 = await Song.create({
        name: '哪里都是你',
        lyric:"[00:00.000] 作词 : 队长\n[00:01.000] 作曲 : 队长\n[00:12.27]我一直在想你 过得好不好\n[00:21.00]在深夜的时候会想念你的拥抱\n[00:29.80]永远太漫长了 你说看不到未来\n[00:39.00]不在你的心里面了 而你却叫我活在现在\n[00:51.91]但你知道的 哪里都是\n[00:57.93]一个人等晚班车冷风中等你\n[01:02.23]想要忘记但被回忆压得喘不过的气\n[01:06.46]耳机里面听着重复好多遍的歌\n[01:10.01]那首是你最喜欢听的\n[01:13.10]I can't let you go let you go let you go\n[01:19.17]woo~ 我想到 woo~\n[01:31.21]我不想每天晚上对着手机和你聊到深夜\n[01:36.02]我更想每天陪你身边 能看到你的笑脸\n[01:40.78]耳机里面听着重复好多遍的歌\n[01:43.70]那首是你最喜欢听的\n[01:47.43]我们之间有太多跨不过去的界线\n[01:51.54]只能盛开在黑夜\n[01:54.88]抹掉房间里面你的痕迹 删掉你美丽的照片\n[02:00.51]睁着眼熬到白天 也不要和你梦里相见\n[02:04.68]想你的原因 或许只是因为我是一个孤独的人吧\n[02:10.01]上一秒你的心还在我的这里\n[02:12.03]下一秒你却离我远去\n[02:15.51]永远太漫长了 让我们活在现在\n[02:21.30]不在你的心里面了\n[02:24.79]没有人陪我奔向未来\n[02:26.66]夜行奔跑 你听得到\n[02:32.00]我希望你也如此\n[02:38.36]听得到 你听得到\n[02:43.49]我希望你也如此\n[02:50.12]狠毒狠毒狠毒狠毒狠毒狠毒对我太狠毒\n[02:55.50]我试过太多方法都没能够让你把我记住\n[03:01.00]想你的原因 或许只是因为我是一个孤独的人吧\n[03:06.72]上一秒你的心还在我的这里\n[03:08.91]下一秒你却离我远去\n[03:12.39]永远太漫长了 让我们活在现在\n[03:17.88]不在你的心里面了\n[03:21.07]没有人陪我奔向未来\ufffc\n",
        picUrl:'队长.jpg',
        artistName:'队长',
        singerId: 4,
        dt: 208633,
        songUrl:'哪里都是你-队长.mp3'
    });
    await addToAlbum(songData8);
    //1432141836
    const songData9 = await Song.create({
        name: 'Falling Down',
        lyric:  "[00:00.000] 作词 : 队长/杨豪\n[00:01.000] 作曲 : 队长/余奔YuB\n[00:03.157]编曲:Running YuB\n[00:05.413]混音:队长/Running YuB\n[00:10.424]录音室:NewMoney Studio\n[00:15.181]母带处理：全相彦 @ OK Mastering Studio\n[00:16.684]\n[00:17.186]\n[00:17.436]\n[00:18.187]\n[00:24.200]I want somebody 拯救 when I see you\n[00:27.706]oh  太危险就好像末日到了\n[00:31.212]baby I don't wanna falling down，you know\n[00:34.469]想要从中脱离可我好像不能够\n[00:37.976]需要你拯救\n[00:42.485]会偷偷看你 心变得慌张\n[00:45.239]你也会逞强 头转到一旁\n[00:47.242]Don't want you to be sad\n[00:49.748]让我感觉real bad\n[00:52.001]我早就已经falling down you know that\n[00:54.256]当你第一次出现在我世界\n[00:58.764]you never ever know that\n[01:01.518]当知道你已变成我的所有\n[01:06.277]不论春夏秋冬都会陪你左右\n[01:11.037]好像没有任何的缘由\n[01:15.546]想在你身边牵你的手\n[01:19.304]失重下坠\n[01:21.557]Falling down\n[01:22.560]Falling down\n[01:23.812]你眼眸里拥有整个宇宙\n[01:26.066]不经意间流露出的温柔\n[01:28.321]毫无防备\n[01:30.827]Falling down\n[01:31.830]Falling down\n[01:33.083]我好像看到了路的尽头\n[01:35.338]就是陪你一直走到最后\n[01:38.094]\n[01:38.345]\n[01:38.595]\n[01:38.845]\n[01:39.096]\n[01:39.096]\n[01:39.346]\n[01:39.848]\n[01:43.354]..XxxxxxxxX..\n[01:47.110]\n[01:47.361]\n[01:47.612]\n[01:47.612]\n[01:47.862]\n[01:48.113]\n[01:48.364]\n[01:48.865]\n[01:57.133]不能入眠不能睡\n[01:59.636]不能陪你很伤悲\n[02:01.891]即使再多的疲惫\n[02:04.145]看你一眼就消退\n[02:06.649]不能入眠不能睡\n[02:08.904]不能陪你很伤悲\n[02:11.158]不想看你的眼泪\n[02:13.413]让我带你远走高飞\n[02:15.416]会偷偷看你 心得变得慌张\n[02:17.921]你也会逞强 头转到一旁\n[02:20.426]Don't want you to be sad\n[02:22.931]让我感觉real bad\n[02:25.187]我早就已经falling down you know that\n[02:27.441]当你第一次出现在我世界\n[02:31.950]you never ever know that\n[02:34.956]当知道你已变成我的所有\n[02:39.465]不论春夏秋冬都会陪你左右\n[02:44.226]好像没有任何的缘由\n[02:48.734]想在你身边牵你的手\n[02:52.240]失重下坠\n[02:54.745]Falling down\n[02:55.748]Falling down\n[02:56.998]你眼眸里拥有整个宇宙\n[02:59.254]不经意间流露出的温柔\n[03:01.758]毫无防备\n[03:04.012]Falling down\n[03:05.014]Falling down\n[03:06.265]我好像看到了路的尽头\n[03:08.772]就是陪你一直走到最后\n[03:12.027]\n[03:12.528]\n[03:13.029]\n[03:13.531]\n[03:14.032]\n[03:14.784]\n[03:15.284]\n[03:15.785]\n[03:19.545]..XxxxxxxxX..\n",
        picUrl:'队长.jpg',
        artistName:'队长',
        singerId: 4,
        dt: 216173,
        songUrl:'Falling Down-队长.mp3'
    });
    await addToAlbum(songData9);
    //1451860358 方大同-三人游
    const songData10 = await Song.create({
        name: '三人游',
        lyric: "[00:00.000] 作词 : 崔惟楷\n[00:01.000] 作曲 : 方大同\n[00:31.91]有些话你选择不对他说\n[00:37.67]你说某种脆弱 我才感同身受\n[00:46.30]我永远都愿意当个听众\n[00:51.85]安慰你的痛 保护着你从始至终\n[00:58.87]就算你的爱 属于他了\n[01:05.93]就算你的手 他还牵着\n[01:13.13]就算你累了 我会在这\n[01:17.60]一人留 两人疚 三人游\n[01:20.60]悄悄的 远远的 或许舍不得\n[01:24.24]默默的 静静的 或许很值得\n[01:27.94]我还在某处守候着\n[01:32.03]说不定这也是一种 幸福的资格\n[01:39.15]至少我们中还有人能快乐\n[01:42.76]这样就已足够了\n[01:49.06]有些话我选择保持沉默\n[01:54.61]别把实话说破 隐藏我的寂寞\n[02:03.04]你的情绪依然把我牵动\n[02:08.95]躲在你心中 角落的心事我能懂\n[02:15.98]就算你的爱 属于他了\n[02:23.13]就算你的手 他还牵着\n[02:30.32]就算你累了 我会在这\n[02:34.86]一人留 两人疚 三人游\n[02:37.96]悄悄的 远远的 或许舍不得\n[02:41.51]默默的 静静的 或许很值得\n[02:45.16]我还在某处守候着\n[02:49.24]说不定这也是一种 幸福的资格\n[02:56.52]至少我们中还有人能快乐\n[03:00.20]这样就已足够了\n[03:04.24]不知道 不知道 不知道\n[03:07.76]为什么 为什么 我的爱\n[03:11.42]我的爱还留不住你的离开\n[03:16.31]却总在 等待着你回来\n[03:25.25]一人留 两人疚 三人游\n[03:28.30]悄悄的 远远的 或许舍不得\n[03:31.82]默默的 静静的 或许很值得\n[03:35.35]我还在某处守候着\n[03:39.50]说不定这也是一种 得不到的\n[03:44.70]却美好的\n[03:46.57]至少我们中还有人能快乐\n[03:50.12]这样就已足够了\n[03:53.83]至少我们中还有人能快乐\n[03:57.34]这样就已足够了\n",
        picUrl:'方大同.jpg',
        artistName:'方大同',
        singerId: 6,
        dt: 279797,
        songUrl:'三人游-方大同.mp3'
    });
    await addToAlbum(songData10);
    //28403111 方大同-特别的人
    const songData11 = await Song.create({
        name: '特别的人',
        lyric: "[00:00.000] 作词 : 方大同\n[00:01.000] 作曲 : 方大同\n[00:02.000] 编曲 : Benjamin Wright\n[00:15.39]爱一个人或许要慷慨\n[00:20.43]若只想要被爱\n[00:22.58]最后没有了对白\n[00:27.11]必须有你我的情真\n[00:31.74]不求计分的平等\n[00:34.57]总有幸福有心疼\n[00:38.16]生命的起伏要认可\n[00:42.85]懂一个人也许要忍耐\n[00:47.79]要经过了意外\n[00:50.06]才了解所谓的爱\n[00:54.52]今后的岁月\n[00:56.95]让我们一起了解\n[01:00.45]多少天长地久\n[01:03.46]有几回细水长流\n[01:08.21]我们是对方 特别的人\n[01:15.41]奋不顾身难舍难分\n[01:18.76]不是一般人的认真\n[01:22.17]若只有一天 爱一个人\n[01:29.15]让那时间每一刻在倒退\n[01:33.35]生命中有万事的可能\n[01:38.36]你就是我要遇见的\n[01:41.96]特别的人\n[01:47.97]懂一个人也许要忍耐\n[01:53.16]要经过了意外\n[01:55.20]才了解所谓的爱\n[01:59.59]今后的岁月\n[02:02.16]让我们一起了解\n[02:05.57]多少天长地久\n[02:08.44]有几回细水长流\n[02:13.32]我们是对方 特别的人\n[02:20.52]奋不顾身难舍难分\n[02:23.94]不是一般人的认真\n[02:27.50]若只有一天 爱一个人\n[02:34.18]让那时间每一刻在倒退\n[02:38.45]生命中有万事的可能\n[02:43.42]你就是我要遇见的\n[02:47.13]特别的人\n[02:50.58]有时候我们都会寂寞\n[02:54.83]有时也会失败怕被淘汰\n[02:59.04]想去找一个明白\n[03:01.94]而我曾经多次的等待未来\n[03:08.38]你何时会来\n[03:10.72]人山人海总有你的存在\n[03:16.31]有你我的爱\n[03:18.30]我们是对方 特别的人\n[03:25.65]奋不顾身难舍难分\n[03:29.14]不是一般人的认真\n[03:32.59]若只有一天 爱一个人\n[03:39.29]让那时间每一刻在倒退\n[03:43.57]生命中有万事的可能\n[03:48.60]你就是我要遇见的\n[03:52.21]特别的人\n",
        picUrl:'方大同.jpg',
        artistName:'方大同',
        singerId: 6,
        dt: 259064,
        songUrl:'特别的人-方大同.mp3'
    });
    await addToAlbum(songData11);
    //1451860364 方大同-Love Song
    const songData12 = await Song.create({
        name: 'Love Song',
        lyric:"[00:00.000] 作词 : 方大同\n[00:01.000] 作曲 : 方大同\n[00:02.000] 编曲 : 方大同\n[00:03.000] 制作人 : Edward Chan\n[00:25.700]我写了这首歌\n[00:29.830]是一首简单的\n[00:33.980]不复杂也不难唱的那一种歌\n[00:40.510]这不是 那种\n[00:41.820]只剩下那钢琴的歌\n[00:44.700]也不是 那种\n[00:45.910]不能只是朋友的歌\n[00:49.400]这不是 那种\n[00:50.200]两个人的故事\n[00:51.460]写在一本小说\n[00:53.930]那小说里有谁\n[00:55.410]会在花田里犯的错\n[00:58.400]这就是\n[00:58.810]一首写给你听的一个\n[01:02.450]Love Song\n[01:04.418]一直想写一首 Love Song\n[01:08.660]你给了我一首 Love Song\n[01:12.520]那DJ会播放\n[01:14.590]这也许会上榜\n[01:16.580]如果我只想写出一首\n[01:19.000]Love Song\n[01:21.900]一直想写一首 Love Song\n[01:25.200]你给了我一首\n[01:27.600]你就像那夏天的凉风\n[01:30.620]吹过我的面孔\n[01:32.650]情翔飞\n[01:35.300]在我心底\n[01:36.509]你就是我第一 yeah\n[01:40.578]想说爱你\n[01:42.530]\n[01:46.690]我写了这首歌 是一首简单的\n[01:54.950]不复杂也不难唱的那一种歌\n[02:01.370]这不是 那种\n[02:02.360]童话里会遇见的歌\n[02:05.330]也不是 那种\n[02:06.600]真真切切爱我的歌\n[02:09.488]这不是 那种\n[02:10.889]两个人的故事\n[02:12.999]写在一本小说\n[02:14.619]那小说里有谁\n[02:16.297]陪在看流星在降落\n[02:18.799]这就是 一首写给你听的一个\n[02:23.890]Love Song\n[02:25.198]一直想写一首 Love Song\n[02:29.269]你给了我一首 Love Song\n[02:33.249]那DJ会播放\n[02:35.238]这也许会上榜\n[02:37.219]如果我只想写出一首\n[02:39.659]Love Song\n[02:41.989]一直想写一首 Love Song\n[02:45.939]你给了我一首\n[02:48.319]你就像那夏天的凉风\n[02:51.569]吹过我的面孔\n[02:53.379]情翔飞\n[02:56.399]在我心底\n[02:57.309]你就是我第一 yeah~\n[03:02.690]想说爱你\n[03:03.999]如果你是一幅画\n[03:06.409]你会是最珍贵的一幅画\n[03:09.629]如果那画家是梵高的话\n[03:13.390]有何贵人前来有钱花\n[03:16.448]个个向你求嫁\n[03:18.289]梵高他说你们都该回家\n[03:21.358]又或者你是Melody\n[03:23.839]就是最动听\n[03:25.499]所有的人都会跟着你齐唱\n[03:28.928]就算在夜晚\n[03:30.599]你的星太亮\n[03:32.689]让我忘了月亮代表我的\n[03:38.690]Love Song\n[03:43.399]你给了我一首 love song\n[03:47.890]那DJ会播放\n[03:50.290]这也许会上榜\n[03:51.799]不过我只想写出一首\n[03:54.698]Love Song\n[03:57.259]一直想写一首 Love Song\n[04:01.399]你给了我一首 love Song\n[04:05.249]那DJ会播放\n[04:07.279]这也许会上榜\n[04:09.228]不过我只想写出一首\n[04:11.698]Love Song\n[04:13.989]一直想写一首 Love Song\n[04:17.928]你给了我一首 love Song\n[04:21.950]那DJ会播放\n[04:23.960]这也许会上榜\n[04:26.190]不过我只想写出一首\n[04:28.330]Love Song\n[04:30.289]一直想写一首 Love Song\n[04:34.469]你给了我一首 love Song\n[04:40.990]吹过我的\n[04:42.900]情翔飞\n[04:43.979]在我心底\n[04:45.989]你就是我第一 yeah\n[04:49.979]想说爱你 yeah\n[04:52.609]\n[05:57.407] 监制 : Edward Chan/Charles Lee/方大同\n",
        picUrl:'方大同.jpg',
        artistName:'方大同',
        singerId: 6,
        dt: 357407,
        songUrl:"Love Song-方大同.mp3"
    });
    await addToAlbum(songData12);
    //442869203 郭顶-保留
    const songData13 = await Song.create({
        name: '保留',
        lyric: "[00:00.000] 作词 : 郭顶\n[00:00.375] 作曲 : 郭顶\n[00:00.750]看见 你在我眼前\n[00:06.050]不去猜想我们隔多远\n[00:14.810]当我 夜幕中准备\n[00:20.680]只想让沉默的能开解\n[00:29.920]在不同的遭遇里我发现你的瞬间\n[00:36.590]有种不可言说的温柔直觉\n[00:44.020]在有限的深夜消失之前触摸你的脸\n[00:51.230]我情愿这是幻觉 也不愿是种告别\n[00:58.140]已经忘了 你的名字\n[01:04.680]就在这座 寂静星石\n[01:12.450]怎么还有 你的样子\n[01:21.140]被保留\n[01:36.130]给我 一整个拥抱\n[01:41.950]好让我不至于 太潦倒\n[01:50.820]时间 过一分一秒\n[01:56.800]还是觉得相遇 太美好\n[02:05.880]在不同的遭遇里我发现你的瞬间\n[02:12.730]有种不可言说的温柔直觉\n[02:20.070]当不远的蓝色渐渐显现这无边境界\n[02:27.460]我始终等待再见 只不愿再也不见\n[02:34.040]已经忘了 你的名字\n[02:41.040]就在这座 寂静星石\n[02:48.350]怎么还有 你的样子\n[02:57.020]想形容你的句子 关于你所有心事\n[03:04.440]一眼能及的钻石 哪一个是你地址\n[03:11.340]忘了 你的名字\n[03:17.950]就在这座 寂静星石\n[03:25.300]怎么还有 你的样子\n[03:33.960]我始终等待再见 只不愿再也不见\n[03:40.380]真的忘了 你的名字\n[03:47.430]是在哪座 寂静星石\n[03:54.810]一直还有 你的样子\n[04:03.660]被保留\n",
        picUrl:'郭顶.jpg',
        artistName:'郭顶',
        singerId: 7,
        dt: 270133,
        songUrl:"保留-郭顶.mp3"
    });
    await addToAlbum(songData13);
    //441491828 郭顶-水星记
    const songData14 = await Song.create({
        name: '水星记',
        lyric: "[00:00.000] 作词 : 郭顶\n[00:01.000] 作曲 : 郭顶\n[00:02.000] 编曲 : 郭顶\n[00:03.000] 监制 : 郭顶\n[00:19.200]着迷于你眼睛\n[00:21.510]\n[00:22.910]银河有迹可循\n[00:25.040]\n[00:26.160]穿过时间的缝隙\n[00:28.980]\n[00:29.740]它依然真实地\n[00:32.750]\n[00:33.460]吸引我轨迹\n[00:36.230]\n[00:40.440]这瞬眼的光景\n[00:42.950]\n[00:43.970]最亲密的距离\n[00:46.550]\n[00:47.470]沿着你皮肤纹理\n[00:51.380]走过曲折手臂\n[00:54.040]\n[00:54.960]做个梦给你\n[00:57.230]\n[00:58.580]做个梦给你\n[01:01.249]\n[01:03.668]等到看你银色满际\n[01:06.260]\n[01:07.069]等到分不清季节更替\n[01:11.590]\n[01:12.938]才敢说沉溺\n[01:16.078]\n[01:19.980]还要多远才能进入你的心\n[01:26.200]\n[01:27.170]还要多久才能和你接近\n[01:33.310]\n[01:34.328]咫尺远近却\n[01:36.780]无法靠近的那个人\n[01:42.000]也等着和你相遇\n[01:47.610]\n[01:49.030]环游的行星\n[01:51.750]\n[01:52.269]怎么可以\n[01:55.170]\n[01:56.129]拥有你\n[01:57.989]\n[02:13.728]这瞬眼的光景\n[02:16.269]\n[02:17.119]最亲密的距离\n[02:19.679]\n[02:20.628]沿着你皮肤纹理\n[02:24.310]走过曲折手臂\n[02:27.359]\n[02:28.060]做个梦给你\n[02:30.478]\n[02:31.579]做个梦给你\n[02:34.619]\n[02:36.589]等到看你银色满际\n[02:40.288]等到分不清季节更替\n[02:44.660]\n[02:45.869]才敢说沉溺\n[02:53.138]还要多远才能进入你的心\n[02:59.399]\n[03:00.329]还要多久才能和你接近\n[03:06.478]\n[03:07.429]咫尺远近却\n[03:09.560]无法靠近的那个人\n[03:15.128]也等着和你相遇\n[03:20.638]\n[03:21.829]环游的行星\n[03:24.739]\n[03:25.388]怎么可以\n[03:29.079]拥有你\n[03:35.530]\n[04:05.218]还要多远才能进入你的心\n[04:10.869]\n[04:11.929]还要多久才能和你接近\n[04:18.028]\n[04:19.050]咫尺远近却无法靠近的那个人\n[04:26.687]要怎么探寻\n[04:30.319]要多么幸运\n[04:33.538]才敢让你发觉你并不孤寂\n[04:39.778]\n[04:40.509]当我还可以再跟你飞行\n[04:46.579]\n[04:47.690]环游是无趣\n[04:50.569]\n[04:51.339]至少可以\n[04:54.639]\n[04:55.240]陪着你\n",
        picUrl:'郭顶.jpg',
        artistName:'郭顶',
        singerId: 7,
        dt: 325266,
        songUrl:"水星记-郭顶.mp3"
    });
    await addToAlbum(songData14);
    //1405264283 黄礼格-今天没空
    const songData15 = await Song.create({
        name: '今天没空',
        lyric: "[00:00.000] 作词 : 黄礼格\n[00:00.671] 作曲 : 黄礼格\n[00:01.342]编曲 Arranger：bezimeni\n[00:04.550]\n[00:33.088]ay 你现在熟睡 在我的怀里\n[00:36.864]ay 就算胳膊麻了 也不抬起\n[00:40.866]ay 外界的吵闹 被我们排挤\n[00:44.936]ay 过去的坏情绪都沉入海底\n[00:49.535]你抽离我的怀抱\n[00:50.622]随手披上了件外套\n[00:53.279]却被我甩掉\n[00:54.362]想你的味道\n[00:55.361]充斥房间环绕\n[00:57.358]把烦恼全都忘掉\n[00:59.309]再和你开着玩笑\n[01:01.305]在你身后轻咬耳朵说着\n[01:03.859]**** with me right now\n[01:05.528]你要我 关掉手机 静静的陪你躺一整天\n[01:09.559]不用去 做着计划 就这样的浪费着时间\n[01:13.763]爱闹的你 爱笑的你\n[01:18.021]最好的总是要和你一起体验\n[01:21.832]今天没空 今天baby需要哄\n[01:25.745]今天没空 今天baby需要宠\n[01:30.023]今天没空今天就打算宅在家中\n[01:34.053]今天没空我说 今天没 空\n[01:37.910]\n[01:38.275]窗外的风景\n[01:39.358]变了又变换了又换\n[01:41.187]天气 时好时坏\n[01:42.637]把尘埃吹散\n[01:43.683]但不变的是你的陪伴\n[01:45.587]美的东西真的有太多\n[01:47.387]好话我们就不必多说\n[01:49.319]重要的是我们\n[01:50.833]彼此拥有相同的视角去看\n[01:53.566]别在意时间和地点\n[01:55.536]我们自导又自演\n[01:57.573]让争执递减\n[01:58.989]小吵小闹本身就无法避免\n[02:01.417]感觉生疏那不妨我们就多练习几遍\n[02:05.656]你要不怕腻的话\n[02:07.787]嗯？那剩下的只有甜\n[02:10.293]你要我关掉手机陪你躺一整天\n[02:14.687]不用去计划就这样浪费着时间\n[02:18.858]背景音乐是写给你最新的唱片\n[02:23.259]最好的总是第一时间让你体验\n[02:27.138]今天没空 今天baby需要哄\n[02:30.833]今天没空 今天baby需要宠\n[02:35.540]今天没空今天就打算宅在家中\n[02:39.328]今天没空我说 今天没空\n[02:43.038]\n[02:43.400]制作人 Producer: 黄礼格\n[02:43.729]录音工程师 Recording Engineer：黄礼格\n[02:44.013]录音室 Recording Studio：队长的家\n[02:44.297]混音工程师 Mixing Engineer: 队长\n[02:44.536]母带处理 Master：队长\n",
        picUrl:'黄礼格.jpg',
        artistName:'黄礼格',
        singerId: 8,
        dt: 167498,
        songUrl:"今天没空-黄礼格.mp3"
    });
    await addToAlbum(songData15);
    //1361386906 黄礼格-那个女孩
    const songData16 = await Song.create({
        name: '那个女孩',
        lyric: "[00:00.000] 作词 : 黄礼格\n[00:01.000] 作曲 : 黄礼格\n[00:02.894]编曲 Arranger：Seismic\n[00:04.978]\n[00:23.853]她不会来 你不用猜\n[00:26.761]她可不是那些你能驾驭的女孩\n[00:29.527]电话打不通 又过了一刻钟\n[00:32.522]emmm她说自己睡觉前又忘记设闹钟\n[00:35.120]朋友圈照片 仅自己不可见\n[00:38.306]昨晚出门穿的还是低胸V领那件\n[00:41.283]饥饿时候的外卖 打发时间的Wi-Fi\n[00:44.057]但还是掩饰不住 你不是她的菜\n[00:47.012]\n[00:47.209]She wanna say just be my friend\n[00:49.301]却还是用行为举止 让你去买单\n[00:52.154]只可惜你已习惯\n[00:53.636]她对物质的喜欢\n[00:54.990]已经源源不断\n[00:56.405]变成你的理所应当\n[00:58.025]你为她自暴自弃生活开始变得糜烂\n[01:00.881]送出的LV Gucci换来却是泡面稀饭\n[01:03.811]她说不敢爱 是因为那个混蛋\n[01:06.927]那个混蛋的背叛 让你更像个痴汉\n[01:08.027]\n[01:09.793]bridge：\n[01:10.132]那个女孩\n[01:12.091]那个女孩\n[01:13.498]you can’t control my life\n[01:16.464]那个女孩\n[01:17.772]那个女孩\n[01:19.290]I hate it when you lie\n[01:21.798]\n[01:22.362]她不会来 你不用猜\n[01:24.754]她可不是那些你能驾驭的女孩\n[01:28.031]电话打不通 又过了一刻钟\n[01:31.007]她说自己睡觉前又忘记设闹钟\n[01:33.900]朋友圈照片 仅自己不可见\n[01:36.924]昨晚出门穿的还是低胸V领那件\n[01:39.811]饥饿时候的外卖 打发时间的Wi-Fi\n[01:42.678]但还是掩饰不住 你不是她的菜\n[01:45.509]\n[01:45.726]那个女孩不简单\n[01:47.779]那个女孩不一般\n[01:48.636]当你想放弃\n[01:49.643]又开始跟你早晚安\n[01:51.325]一而再 再而三\n[01:52.561]攻势如同潮水般\n[01:54.078]疲惫不堪的心又开始死灰复燃\n[01:56.582] 她跟你暧昧\n[01:58.155]却从来不会跟你＊\n[01:59.758]去各种派对\n[02:00.842]肆无忌惮的宿醉\n[02:02.499]等你想进展跟亲密的关系\n[02:04.554]回复的是太累\n[02:05.835]你以为坚持就是胜利\n[02:07.698]收到的是再会\n[02:08.951]\n[02:09.235]那个女孩\n[02:10.556]那个女孩\n[02:11.987]you can’t control my life\n[02:14.423]那个女孩\n[02:16.089]那个女孩\n[02:17.721]I hate it when you lie\n[02:20.023]\n[02:20.572]hook\n[02:20.832]她不会来 你不用猜\n[02:23.557]她可不是那些你能驾驭的女孩\n[02:26.462]电话打不通 又过了一刻钟\n[02:29.404]她说自己睡觉前又忘记设闹钟\n[02:32.292]朋友圈照片 仅自己不可见\n[02:35.215]昨晚出门穿的还是低胸V领那件\n[02:38.292]饥饿时候的外卖 打发时间的Wi-Fi\n[02:41.089]但还是掩饰不住 你不是她的菜\n[02:44.076]\n[02:44.867]制作人 Producer: 队长\n[02:45.770]录音工程师 Recording Engineer：队长\n[02:46.789]录音室 Recording Studio：队长的家\n[02:48.174]混音工程师 Mixing Engineer: 队长\n[02:49.257]母带处理 Master：队长\n",
        picUrl:'黄礼格.jpg',
        artistName:'黄礼格',
        singerId: 8,
        dt: 175609,
        songUrl:"那个女孩-黄礼格.mp3"
    });
    await addToAlbum(songData16);
    //姜云升-成名 (Live)
    const songData17 = await Song.create({
        name: '成名',
        lyric:  "[00:00.000] 作词 : 姜云升\n[00:01.000] 作曲 : 姜云升\n[99:00.00]纯音乐，请欣赏\n",
        picUrl:'姜云升.jpg',
        artistName:'黄礼格',
        singerId: 10,
        dt: 175360,
        songUrl:"成名-姜云升.mp3"
    });
    await addToAlbum(songData17);
    //1920025919
    const songData18 = await Song.create({
        name: '浪漫主义2.0',
        lyric:  "[00:00.000] 作词 : 姜云升\n[00:01.000] 作曲 : 姜云升\n[00:02.000] 编曲 : Zane98\n[00:17.59]我和你在一起的时光总是过得特别快\n[00:21.09]来不及去想别的 只有最疯狂的爱\n[00:23.39]忘了一切世界 都被我们关到房门外\n[00:25.09]喜欢你的每个姿态 喜欢醒来有你在\n[00:28.09]卸下防备 我们在彼此面前不用去装\n[00:30.29]你提起我的兴趣 有你会的独家秘方\n[00:32.59]卫生间的镜子前 和卧室里的浴缸\n[00:35.59]在你我能够想象到的随便什么地方\n[00:37.59]像鸟儿扇动翅膀在那云层里飞着\n[00:40.09]拉开窗帘发现 外面天都黑了\n[00:43.09]别去问我最喜欢你对我怎么做\n[00:44.59]你听我说 只要是你\n[00:46.09]（都OK的）\n[00:47.59]脑袋一片空白 好像引爆了炸弹\n[00:50.09]这个时刻 我只想要永远把你霸占\n[00:52.09]你知道吗 这世界上最动听的情话\n[00:54.59]是你趴在我的耳边对我说着不要\n[00:57.09]爱是海水和礁石在相互碰撞\n[00:59.59]是四月份的玫瑰对夏日盛放\n[01:02.09]是占有欲刺激后心的动荡\n[01:04.09]爱是一张床 相叠两个梦的重量\n[01:06.59]爱是海水和礁石在相互碰撞\n[01:09.09]是四月份的玫瑰对夏日盛放\n[01:11.49]是占有欲刺激后心的动荡\n[01:13.49]爱是一张床 相叠两个梦的重量\n[01:35.49]我不害怕任何的威胁 只要我有你在\n[01:38.19]你在我心中地位根本没人能取代\n[01:40.09]如果失去了你 我估计会直接就疯癫\n[01:42.59]你已占据我的一切 包括时间和空间\n[01:45.49]周游这个世界最后我才发现你\n[01:47.59]我身边所有朋友全部叫我冷静\n[01:49.49]可是在你面前 没法藏住我的本性\n[01:51.59]我说了我特别地爱你 这点我很肯定\n[01:55.09]别说你自己差了 我可不这么觉得\n[01:57.09]你能够配得上我 我们是最好的结合\n[01:59.59]陪我获得一切 质疑的声音捏碎\n[02:02.09]一起爬上巅峰 就像碧昂斯和JAY-Z\n[02:05.49]我要的你都会\n[02:07.09]不用喝酒每当和你独处就会醉\n[02:08.49]有你在我身边就好 其他无所谓\n[02:11.09]这个世界是个游戏 我只想和你play\n[02:14.09]爱是海水和礁石在相互碰撞\n[02:16.09]是四月份的玫瑰对夏日盛放\n[02:18.59]是占有欲刺激后心的动荡\n[02:20.59]爱是一张床 相叠两个梦的重量\n[02:23.39]爱是海水和礁石在相互碰撞\n[02:25.59]是四月份的玫瑰对夏日盛放\n[02:28.09]是占有欲刺激后心的动荡\n[02:30.59]爱是一张床 相叠两个梦的重量\n[02:38.256] 混音 : Anthony Kilhoffer\n[02:46.453] 母带 : Anthony Kilhoffer\n[02:54.650] 海外制作统筹：马特彭\n",
        picUrl:'姜云升.jpg',
        artistName:'姜云升',
        singerId: 10,
        dt: 175360,
        songUrl:"浪漫主义2.0-姜云升.mp3"
    });
    await addToAlbum(songData18);
    //31654343 李荣浩-不将就
    const songData19 = await Song.create({
        name: '不将就',
        lyric:"[00:00.000] 作词 : 黄伟文/李荣浩\n[00:01.000] 作曲 : 李荣浩\n[00:02.000] 编曲 : 李浩然\n[00:03.000] 吉他 : 李荣浩\n[00:04.000] 贝斯 : 李荣浩\n[00:05.000] 和声 : 李荣浩\n[00:06.000] 鼓 : 荒井十一\n[00:07.000] 弦乐 : 国际首席爱乐乐团\n[00:08.000] 弦乐编写 : 李荣浩/陈迪\n[00:09.000] 录音/混音室 : 一样音乐工作室\n[00:10.000] 录音 : 曹飞\n[00:11.000] 混音师 : 曹飞\n[00:12.000] 音乐监制 : 乐视音乐\n[00:13.54]那时候 我以为爱的是生活\n[00:19.55]也算懂得 什么适合什么不可\n[00:26.24]最近还是一样努力着\n[00:29.76]配合你的性格\n[00:32.81]你的追求者 你的坎坷\n[00:36.27]我开的车\n[00:39.53]算一算 虚度了多少个年头\n[00:46.30]仿佛足够写一套错爱的春秋\n[00:52.50]如果以后 你还想为谁\n[00:56.47]浪费美好时候\n[00:59.48]眼泪只能在我的胸膛\n[01:03.21]毫无保留\n[01:09.63]互相折磨到白头\n[01:16.59]悲伤坚决不放手\n[01:23.16]开始纠缠之后\n[01:28.33]才又被人放大了自由\n[01:36.67]你的暴烈太温柔\n[01:43.17]感情又痛又享受\n[01:49.88]如果我说不吻你不罢休\n[01:56.07]谁能逼我将就\n[02:06.89]你问我 为什么顽固而专一\n[02:12.98]天下太大 总有人比你更合适\n[02:19.44]其实我觉得这样不值\n[02:23.01]可没选择方式\n[02:26.16]你一出场别人都显得不过如此\n[02:34.65]互相折磨到白头\n[02:41.54]悲伤坚决不放手\n[02:48.20]开始纠缠之后\n[02:53.38]才又被人放大了自由\n[03:01.58]你的暴烈太温柔\n[03:08.19]感情又痛又享受\n[03:14.89]如果我说不吻你不罢休\n[03:21.05]谁能逼我将就\n[03:48.46]不吻你不罢休\n[03:51.65]谁能逼我将就\n[03:58.53]互相折磨到白头\n[04:04.87]悲伤坚决不放手\n[04:11.39]开始纠缠之后\n[04:16.85]才又被人放大了自由\n[04:24.88]你的暴烈太温柔\n[04:31.66]感情又痛又享受\n[04:38.26]如果我说不吻你不罢休\n[04:44.29]谁能逼我将就\n[04:50.92]他们不过将就\n[04:57.91]\n",
        picUrl:'李荣浩.jpg',
        artistName:'李荣浩',
        singerId: 13,
        dt: 312000,
        songUrl:"不将就-李荣浩.mp3"
    });
    await addToAlbum(songData19);
    //133998 李荣浩-老街
    const songData20 = await Song.create({
        name: '老街',
        lyric:"[00:00.000] 作词 : 李荣浩\n[00:01.000] 作曲 : 李荣浩\n[00:16.690]一张褪色的照片\n[00:19.810]好像带给我一点点怀念\n[00:23.620]巷尾老爷爷卖的热汤面\n[00:27.600]味道弥漫过旧旧的后院\n[00:31.590]流浪猫睡熟在摇晃秋千\n[00:35.520]夕阳照了一遍他眯着眼\n[00:40.020]那张同桌寄的明信片\n[00:43.700]安静地躺在课桌的里面\n[00:48.750]快要过完的春天\n[00:51.560]还有雕刻着图案的门帘\n[00:55.630]窄窄的长长的过道两边\n[00:59.490]老房子依然升起了炊烟\n[01:03.479]刚刚下完了小雨的季节\n[01:07.540]爸妈又一起走过的老街\n[01:11.969]记不得哪年的哪一天\n[01:15.659]很漫长又很短暂的岁月\n[01:20.030]现在已经回不去\n[01:23.970]早已流逝的光阴\n[01:27.909]手里的那一张渐渐模糊不清的车票\n[01:32.709]成了回忆的信号\n[01:37.580]忘不掉的是什么我也不知道\n[01:42.140]想不起当年模样\n[01:45.989]看也看不到 去也去不了的地方\n[01:53.709]也许那老街的腔调是属于我的忧伤\n[02:02.000]嘴角那点微笑越来越勉强\n[02:08.349]\n[02:09.689]忘不掉的是什么我也不知道\n[02:13.919]放不下熟悉片段\n[02:18.009]回头望一眼 已经很多年的时间\n[02:25.580]透过手指间看着天\n[02:29.949]我又回到那老街\n[02:34.000]靠在你们身边渐行渐远\n[02:42.009]\n[03:10.659]快要过完的春天\n[03:13.659]还有雕刻着图案的门帘\n[03:17.590]窄窄的长长的过道两边\n[03:21.580]老房子依然升起了炊烟\n[03:25.599]刚刚下完了小雨的季节\n[03:29.610]爸妈又一起走过的老街\n[03:33.960]记不得哪年的哪一天\n[03:37.580]很漫长又很短暂的岁月\n[03:42.009]现在已经回不去\n[03:46.009]早已流逝的光阴\n[03:49.750]手里的那一张渐渐模糊不清的车票\n[03:54.710]成了回忆的信号\n[03:59.460]忘不掉的是什么我也不知道\n[04:03.889]想不起当年模样\n[04:07.960]看也看不到 去也去不了的地方\n[04:15.569]也许那老街的腔调是属于我的忧伤\n[04:23.959]嘴角那点微笑越来越勉强\n[04:31.579]忘不掉的是什么我也不知道\n[04:35.940]放不下熟悉片段\n[04:39.920]回头望一眼 已经很多年的时间\n[04:47.540]透过手指间看着天\n[04:52.029]我又回到那老街\n[04:55.959]靠在你们身边渐行渐远\n",
        picUrl:'李荣浩.jpg',
        artistName:'李荣浩',
        singerId: 13,
        dt: 318824,
        songUrl:"老街-李荣浩.mp3"
    });
    await addToAlbum(songData20);
    //27731176 李荣浩-模特
    const songData21 = await Song.create({
        name: '模特',
        lyric: "[00:00.000] 作词 : 周耀辉\n[00:01.000] 作曲 : 李荣浩\n[00:30.71]穿华丽的服装 为原始的渴望而站着\n[00:36.79]\n[00:38.04]用完美的表情 为脆弱的城市而撑着\n[00:44.22]\n[00:45.37]我冷漠的接受 你焦急的等待也困着\n[00:51.63]\n[00:52.82]像无数生存在橱窗里的模特\n[00:58.44]\n[01:00.38]除了灯以外 我还能看见什么\n[01:04.26]除了光以外 我还能要求什么\n[01:07.96]除了你以外 还能倚赖哪一个\n[01:13.99]\n[01:15.18]在千里以外 在呼喊的是什么\n[01:19.03]在百年以后 想回忆的是什么\n[01:22.77]在离开以前 能否再见那一刻\n[01:28.47]记得 你的眼睛将会亮着\n[01:33.79]我的手臂将会挥着\n[01:37.53]谁说世界早已没有选择\n[01:42.59]\n[01:43.97]趁着我会喜怒你会哀乐\n[01:48.53]唱几分钟情歌\n[01:51.34]没什么 至少证明我们还活着\n[01:58.09]\n[01:59.28]像单纯的蝴蝶 为玫瑰的甜美而飞着\n[02:06.66]像顽皮的小猫 为明天的好奇而睡着\n[02:12.61]\n[02:14.05]是混乱的时代 是透明的监狱也觉得\n[02:20.00]\n[02:21.38]是不能继续在橱窗里做模特\n[02:27.24]\n[02:29.24]除了风以外 我还能听到什么\n[02:33.06]除了尘以外 我还能拒绝什么\n[02:36.69]除了你以外 还能依赖哪一个\n[02:42.39]\n[02:43.78]在千里以外 在呼喊的是什么\n[02:47.64]在百年以后 想回忆的是什么\n[02:51.36]在离开以前 能否再见那一刻\n[02:57.00]记得 你的眼睛将会亮着\n[03:02.42]我的手臂将会挥着\n[03:06.01]谁说世界早已没有选择\n[03:11.62]\n[03:12.60]趁着 我会喜怒你会哀乐\n[03:17.08]唱几分钟情歌\n[03:19.83]没什么 至少证明我们还活着\n[03:27.28]\n[03:52.38]记得 你的眼睛将会亮着\n[03:57.88]我的手臂将会挥着\n[04:01.38]谁说世界早已没有选择\n[04:07.19]\n[04:08.03]趁着 我会喜怒你会哀乐\n[04:12.53]唱几分钟情歌\n[04:15.28]没什么 至少证明我们还活着\n",
        picUrl:'李荣浩.jpg',
        artistName:'李荣浩',
        singerId: 13,
        dt: 306000,
        songUrl:"模特-李荣浩.mp3"
    });
    await addToAlbum(songData21);
    //399354373 林俊杰-可惜没如果
    const songData22 = await Song.create({
        name: '可惜没如果',
        lyric: "[00:00.000] 作词 : 林夕\n[00:01.000] 作曲 : 林俊杰\n[00:16.76]假如把犯得起的错\n[00:20.54]能错的都错过\n[00:22.70]应该还来得及去悔过\n[00:28.78]假如没把一切说破\n[00:32.52]那一场小风波将一笑带过\n[00:39.27]在感情面前 讲什么自我\n[00:44.76]要得过且过才好过\n[00:51.21]全都怪我\n[00:53.82]不该沉默时沉默 该勇敢时软弱\n[00:59.80]如果不是我\n[01:02.73]误会自己洒脱 让我们难过\n[01:09.21]可当初的你和现在的我\n[01:12.24]假如重来过\n[01:15.27]倘若那天\n[01:17.65]把该说的话好好说\n[01:20.84]该体谅的不执着\n[01:23.84]如果那天我\n[01:26.82]不受情绪挑拨\n[01:29.87]你会怎么做\n[01:33.12]那么多如果 可能如果我\n[01:36.20]可惜没如果 只剩下结果\n[02:08.81]如果早点了解\n[02:11.78]那率性的你\n[02:14.73]或者晚一点\n[02:18.09]遇上成熟的我\n[02:20.61]不过 Oh\n[02:24.24]全都怪我\n[02:26.83]不该沉默时沉默 该勇敢时软弱\n[02:32.79]如果不是我\n[02:35.82]误会自己洒脱 让我们难过\n[02:42.20]可当初的你和现在的我\n[02:45.28]假如重来过\n[02:48.14]倘若那天\n[02:50.65]把该说的话好好说\n[02:53.79]该体谅的不执着\n[02:56.79]如果那天我\n[02:59.72]不受情绪挑拨\n[03:02.92]你会怎么做\n[03:06.17]那么多如果 可能如果我\n[03:09.24]可惜没如果 没有你和我 Oh\n[03:24.63]都怪我\n[03:26.87]不该沉默时沉默 该勇敢时软弱\n[03:32.82]如果不是我\n[03:35.83]误会自己洒脱 让我们难过\n[03:42.24]可当初的你和现在的我\n[03:45.18]假如重来过\n[03:48.22]倘若那天\n[03:50.71]把该说的话好好说\n[03:53.86]该体谅的不执着\n[03:56.75]如果那天我\n[03:59.76]不受情绪挑拨\n[04:02.87]你会怎么做\n[04:06.04]那么多如果 可能如果我\n[04:09.18]可惜没如果\n[04:14.80]只剩下结果\n[04:21.05]可惜没如果\n",
        picUrl:'林俊杰.jpg',
        artistName:'林俊杰',
        singerId: 12,
        dt: 273009,
        songUrl:"可惜没如果(Live)-林俊杰.mp3"
    });
    await addToAlbum(songData22);
    //1830263382 林俊杰-美人鱼
    const songData23 = await Song.create({
        name: '美人鱼',
        lyric:"[00:00.000] 作词 : 无\n[00:01.000] 作曲 : 暴风球hikoY。\n[99:00.00]纯音乐，请欣赏\n",
        picUrl:'林俊杰.jpg',
        artistName:'林俊杰',
        singerId: 12,
        dt: 127380,
        songUrl:"美人鱼-林俊杰.mp3"
    });
    await addToAlbum(songData23);
    // //1923248568 林俊杰-我们的爱 (Live)
    // await Song.create({
    //     name: '我们的爱',
    //     lyric: "[00:00.000] 作词 : 谢宥慧\n[00:01.000] 作曲 : F.I.R\n[00:02.000] 编曲 : Kenn C\n[00:05.09]我们的爱（林俊杰版本）\n[00:07.49]词：谢宥慧\n[00:10.39]曲：F.I.R\n[00:13.01]原唱：飞儿乐团\n[00:14.87]编曲：Kenn C\n[00:17.08]翻唱：痴笑\n[00:18.67]后期：楼宛心\n[00:48.40]回忆里想起模糊的小时候\n[00:56.02]云朵漂浮在蓝蓝的天空\n[01:02.03]那时的你说要和我手牵手\n[01:10.31]一起走到时间的尽头\n[01:19.98]从此以后我都不敢抬头看\n[01:27.29]仿佛我的天空失去了颜色\n[01:33.21]从那一天起我忘记了呼吸\n[01:41.56]眼泪啊永远不再不再哭泣\n[01:51.51]我们的爱 过了就不再回来\n[01:59.81]直到现在我还默默的等待\n[02:06.22]我们的爱 我明白 已变成你的负担\n[02:14.58]只是永远我还放不开 最后的温暖\n[02:25.42]Oh oh\n[02:29.36]最后的 温暖\n[02:50.90]Oh oh\n[02:52.38]Oh oh\n[02:54.04]Oh oh\n[02:55.63]Oh oh\n[02:57.29]Oh oh\n[02:58.77]Oh oh\n[03:00.43]Oh oh\n[03:01.84]Oh oh\n[03:03.57]从此以后我都不敢抬头看\n[03:10.02]仿佛我的天空失去了颜色\n[03:15.25]从那一天起 我忘记了呼吸\n[03:22.30]眼泪啊 永远不再 不再哭泣\n[03:28.76]Oh oh\n[03:31.15]我们的爱 过了就不再回来\n[03:38.28]直到现在我还默默的等待\n[03:43.80]我们的爱 我明白 已变成你的负担\n[03:51.00]只是永远我都放不开 最后的温暖\n[04:00.02]Oh oh\n[04:03.28]你给的温暖\n[04:06.55]不要再问你是否爱我\n[04:09.86]现在我想要自由天空\n[04:13.06]远离开这被绑架的世界不再寂寞喔\n[04:35.05]我们的爱过了它就不会再回来\n[04:38.13]直到现在还是默默默默等待\n[04:41.32]我们的爱 明明已经变成了负担\n[04:44.58]直到现在还是放不开放不开什么\n[04:47.95]我的爱 过了就不再回来\n[04:54.72]直到现在我还默默的 等待\n[05:00.31]我们的爱\n[05:03.45]我们的爱\n[05:06.58]我们的爱\n[05:12.37]最后的温暖\n[05:16.42]Oh\n[05:19.66]你给的温暖\n",
    //     picUrl:'林俊杰.jpg',
    //     artistName:'林俊杰',
    //     singerId: 12,
    //     dt: 354312,
    //     songUrl:"美人鱼-林俊杰.mp3"
    // });
    //1872177465 毛不易-牧马城市
    const songData24 = await Song.create({
        name: '牧马城市',
        lyric:"[00:00.000] 作词 : 无\n[00:01.000] 作曲 : 无\n[00:03.933]牧马城市\n[00:25.628]陈苏通Live\n[00:31.375]游历在大街和楼房\n[00:34.626]心中是骏马和猎场\n[00:37.634]最了不起的脆弱迷惘\n[00:41.129]不过就这样\n[00:44.136]天外有天有无常\n[00:47.384]山外有山有他乡\n[00:50.380]跌了撞了 心还是回老地方\n[00:56.627]游离于城市的痛痒\n[00:59.876]错过了心爱的姑娘\n[01:02.884]宣告世界的那个理想\n[01:06.126]已不知去向\n[01:09.385]为所欲为是轻狂\n[01:12.380]防不胜防是悲伤\n[01:15.632]后来才把成熟当偏方\n[01:21.625]当所有想的说的要的爱的\n[01:25.130]都挤在心脏\n[01:28.379]行李箱里装不下我 想去的远方\n[01:34.127]这来的去的给的欠的 算一种褒奖\n[01:40.630]风吹草低见惆怅 抬头至少还有光\n[02:12.626]游历在大街和楼房\n[02:15.376]心中是骏马和猎场\n[02:18.629]最了不起的脆弱迷惘\n[02:21.879]不过就这样\n[02:25.132]天外有天有无常\n[02:28.379]山外有山有他乡\n[02:31.375]跌了撞了 心还是回老地方\n[02:37.635]游离于城市的痛痒\n[02:40.629]错过了心爱的姑娘\n[02:43.880]宣告世界的那个理想\n[02:47.385]已不知去向\n[02:50.626]为所欲为是轻狂\n[02:53.377]防不胜防是悲伤\n[02:56.882]后来才把成熟当偏方\n[03:02.385]当所有想的说的要的爱的\n[03:06.379]都挤在心脏\n[03:09.374]行李箱里装不下我 想去的远方\n[03:15.135]这来的去的给的欠的算一种褒奖\n[03:21.624]风吹草低见惆怅\n[03:27.627]抬头至少还有光\n[03:29.124]把烦恼痛了吞了认了算了\n[03:31.632]不对别人讲\n[03:34.881]谁还没有辜负几段 昂贵的时光\n[03:40.631]若男孩笑了哭了累了\n[03:44.378]说要去流浪\n[03:47.131]留下大人的模样\n[03:48.884]看岁月剑拔弩张\n[03:53.633]总会有个人成为你的远方\n",
        picUrl:'毛不易.jpg',
        artistName:'毛不易',
        singerId: 14,
        dt: 258664,
        songUrl:"牧马城市-毛不易.mp3"
    });
    await addToAlbum(songData24);
    //569213220 毛不易-像我这样的人 (Live)
    const songData25 =   await Song.create({
        name: '像我这样的人',
        lyric:"[00:00.000] 作词 : 毛不易\n[00:01.000] 作曲 : 毛不易\n[00:02.000] 编曲 : 赵兆/宋涛\n[00:03.000] 制作人 : 李健/赵兆\n[00:09.840]\n[00:15.000]像我这样优秀的人\n[00:18.770]本该灿烂过一生\n[00:22.620]怎么二十多年到头来\n[00:26.700]还在人海里浮沉\n[00:30.240]\n[00:30.350]像我这样聪明的人\n[00:34.500]早就告别了单纯\n[00:38.380]怎么还是用了一段情\n[00:42.360]去换一身伤痕\n[00:44.680]\n[00:46.150]像我这样迷茫的人\n[00:49.840]像我这样寻找的人\n[00:53.800]像我这样碌碌无为的人\n[00:57.590]你还见过多少人\n[01:06.910]\n[01:18.640]像我这样庸俗的人\n[01:22.830]从不喜欢装深沉\n[01:26.540]怎么偶尔听到老歌时\n[01:30.620]忽然也晃了神\n[01:34.380]像我这样懦弱的人\n[01:38.240]凡事都要留几分\n[01:42.200]怎么曾经也会为了谁\n[01:45.950]想过奋不顾身\n[01:47.680]\n[01:49.870]像我这样迷茫的人\n[01:53.770]像我这样寻找的人\n[01:57.490]像我这样碌碌无为的人\n[02:01.450]你还见过多少人\n[02:04.690]\n[02:05.460]像我这样孤单的人\n[02:09.200]像我这样傻的人\n[02:13.260]像我这样不甘平凡的人\n[02:16.990]世界上有多少人\n[02:21.580]\n[02:26.760]像我这样迷茫的人\n[02:30.510]像我这样寻找的人\n[02:34.370]像我这样碌碌无为的人\n[02:38.230]你还见过多少人\n[02:41.240]\n[02:42.000]像我这样孤单的人\n[02:46.100]像我这样傻的人\n[02:49.970]像我这样不甘平凡的人\n[02:53.650]世界上有多少人\n[02:56.630]\n[02:59.630]像我这样莫名其妙的人\n[03:05.430]会不会有人心疼\n[03:14.050]\n[03:25.940]\n[03:26.049] 口琴 : 刘晓光\n[03:26.158] 键盘 : 赵兆\n[03:26.267] 吉他 : 薛峰\n[03:26.376] 贝斯 : 韩阳\n[03:26.485] 鼓 : 武勇恒\n[03:26.594] 弦乐 : 国际首席爱乐乐团International Master Philharmonic Orchestra\n[03:26.703] 混音 : 周天澈\n[03:26.812] 母带 : Joe LaPorta .（Sterling Sound. NY）\n[03:26.921] 录音棚 : 55TEC . Beijing\n[03:27.030] 录音 : 李游/李杨\n[03:27.139] 人声录音 : 李杨\n[03:27.248] 人声编辑 : 李杨\n[03:27.357] 录音助理 : 郭舒文/邢铜\n[03:27.466] 制作发行 : 哇唧唧哇×智慧大狗\n",
        picUrl:'毛不易.jpg',
        artistName:'毛不易',
        singerId: 14,
        dt: 207466,
        songUrl:"像我这样的人-毛不易.mp3"
    });
    await addToAlbum(songData25);
    // 1439916204 毛不易-消愁 (Live)
    const songData26 = await Song.create({
        name: '消愁',
        lyric:"作词 : 毛不易\n作曲 : 毛不易\n",
        picUrl:'毛不易.jpg',
        artistName:'毛不易',
        singerId: 14,
        dt: 177449,
        songUrl:"消愁-毛不易.mp3"
    });
    await addToAlbum(songData26);
    //1842991800 你的大表哥曲甲-大城小爱
    const songData27 = await Song.create({
        name: '大城小爱',
        artistName:'你的大表哥曲甲',
        lyric:"[00:00.000] 作词 : 王力宏|陈镇川|K.Tee\n[00:00.000] 作曲 : 王力宏\n[00:00.00]大城小爱 - 你的大表哥曲甲\n[00:01.88]词： 王力宏|陈镇川|K.Tee\n[00:03.77]曲： 王力宏\n[00:04.56]原唱：王力宏\n[00:05.50]编曲：牛子健\n[00:06.44]吉他：牛子健\n[00:07.39]和音：付垚\n[00:08.17]混音/母带：杨祎\n[00:09.43]OP： Homeboy Music Inc+Sony Music Publishing (Pte) Ltd. Taiwan Branch\n[00:11.16]SP：索雅音乐版权代理（北京）有限公司\n[00:13.83]监制出品：姜晗@TME制作家\n[00:15.40]乌黑的发尾 盘成一个圈\n[00:18.84]缠绕所有对你的眷恋\n[00:21.90]\n[00:22.43]隔着半透明门帘\n[00:24.39]嘴里说的语言 完全没有欺骗\n[00:29.43]\n[00:29.97]屋顶灰色瓦片 安静的画面\n[00:33.43]灯火是你美丽那张脸\n[00:37.15]终于找到所有流浪的终点\n[00:41.23]你的微笑结束了疲倦\n[00:44.46]\n[00:46.30]千万不要说天长地久\n[00:49.97]免得你觉得我不切实际\n[00:53.52]想多么简单就多么简单\n[00:57.71]是妈妈告诉我的哲理\n[01:00.71]脑袋都是你 心里都是你\n[01:04.30]小小的爱在大城里好甜蜜\n[01:07.93]念的都是你 全部都是你\n[01:11.61]小小的爱在大城里只为你倾心\n[01:15.54]\n[01:17.77]乌黑的发尾 盘成一个圈\n[01:21.05]缠绕所有对你的眷恋\n[01:24.63]终于找到所有流浪的终点\n[01:28.80]你的微笑结束了疲倦\n[01:32.07]千万不要说天长地久\n[01:35.36]\n[01:35.92]免得你觉得我不切实际\n[01:38.87]\n[01:39.39]想多么简单就多么简单\n[01:43.48]让我大声的对你说\n[01:46.20]I&apos;m thinking of you\n[01:48.99]\n[01:50.20]脑袋都是你 心里都是你\n[01:53.85]小小的爱在大城里好甜蜜\n[01:57.46]念的都是你 全部都是你\n[02:01.16]小小的爱在大城里只为你倾心\n[02:04.61]\n[02:05.60]那回程的票根你留做纪念\n[02:09.25]不必害怕面对离别\n[02:12.12]\n[02:13.02]剪掉一束头发 让我放在胸前\n[02:16.63]走到哪里都有你陪\n[02:19.36]\n[02:19.91]相随\n[02:22.20]\n[02:23.12]脑袋都是你 心里都是你\n[02:26.79]小小的爱在大城里好甜蜜\n[02:30.38]念的都是你 全部都是你\n[02:34.12]小小的爱在大城里只为你倾心\n[02:37.74]脑袋都是你 心里都是你\n[02:41.45]小小的爱在大城里好甜蜜\n[02:44.95]Oh 念的都是你 全部都是你\n[02:48.73]小小的爱在大城里只为你倾心\n[02:52.43]啦啦啦啦啦\n[03:24.12]乌黑的发尾 盘成一个圈\n[03:27.53]缠绕所有对你的眷恋\n[03:31.10]那一种寸步不离的感觉\n[03:35.22]我知道这叫做永远\n",
        picUrl:'你的大表哥曲甲.jpg',
        singerId: 15,
        dt: 229990,
        songUrl:"大城小爱.mp3"
    });
    await addToAlbum(songData27);
    //1824020909 你的大表哥曲甲-坠
    const songData28 = await Song.create({
        name: '坠',
        artistName:'你的大表哥曲甲',
        lyric:"[00:00.000] 作词 : 王韵澄\n[00:00.000] 作曲 : 王韵澄\n[00:00.00]坠 - 你的大表哥曲甲\n[00:01.56]词：王韵澄\n[00:03.13]曲：王韵澄\n[00:04.70]编曲：王韵澄\n[00:06.26]混音：王韵澄\n[00:07.83]制作人：王韵澄\n[00:09.40]发行：新鲜制造/重低音文化\n[00:10.97](未经许可,不得翻唱或使用)\n[00:13.98]想说的话 全都努力放在了脚下\n[00:21.56]那些难堪的卑微的全部都要放下\n[00:28.21]要走的话 其实对我来说不算惊讶\n[00:36.16]我可以歇斯底里避免了尴尬\n[00:42.89]看着我追 我追到海里变雨滴\n[00:46.24]看着我追 我追不到你的美丽\n[00:50.20]我恐惧 我喜剧 我无趣 我变虚拟\n[00:56.98]看着我退 我颓废到你隔壁\n[01:00.39]看着我退 我颓废到你恐惧\n[01:38.76]认真的吗 突然决定算不算抛下\n[01:46.40]把我给予的偏爱的扔到了一边吗\n[01:53.02]不用回答 你的表情真的太浮夸\n[02:00.86]我可以做好对你最后的了无牵挂\n[02:07.65]看着我追 我追到海里变雨滴\n[02:10.93]看着我追 我追不到你的美丽\n[02:14.93]我恐惧 我喜剧 我无趣 我变虚拟\n[02:21.66]看着我退 我颓废到你隔壁\n[02:25.08]看着我退 我颓废到你恐惧\n[02:35.89]想到那时陪你一起坠落的星际\n[02:39.23]保留仅剩那么一点憧憬的记忆\n[02:42.75]可我现在正在选择逃避或放弃\n[02:49.98]看着我追 我追到海里变雨滴\n[02:53.15]看着我追 我追不到你的美丽\n[02:57.26]我恐惧 我喜剧 我无趣 我变虚拟\n[03:03.96]看着我退 我颓废到你隔壁\n[03:07.31]看着我退 我颓废到你恐惧\n",
        picUrl:'你的大表哥曲甲.jpg',
        singerId: 15,
        dt: 214236,
        songUrl:"大城小爱.mp3"
    });
    await addToAlbum(songData28);
    //1299844911 朴树-平凡之路
    const songData29 = await Song.create({
        name: '平凡之路',
        artistName:'朴树',
        lyric: "[00:00.000] 作词 : 韩寒/朴树\n[00:00.000] 作曲 : 朴树\n[00:00.00]作曲 : 朴树\n[00:01.00]作词 : 韩寒/朴树\n[00:30.22]那也曾是我的模样\n[00:36.23]徘徊着的在路上的\n[00:41.98]你要走吗via via\n[00:47.50]谜一样的 沉默着的\n[00:53.42]那也曾是我的模样\n[00:57.65]我曾经跨过山和大海\n[01:03.56]我曾经拥有着一切\n[01:06.81]转眼都飘散如烟\n[01:09.00]我曾经失落失望失掉所有方向\n[01:14.92]直到看见平凡才是唯一的答案\n[01:33.25]当你仍然还在幻想\n[01:38.77]你的明天via via\n[01:44.53]她会好吗还是更糟\n[01:50.14]对我而言是另一天\n[01:54.43]我曾经毁了我的一切\n[01:57.60]只想永远地离开\n[02:00.20]我曾经堕入无边黑暗\n[02:03.17]想挣扎无法自拔\n[02:05.84]我曾经像你像他像那野草野花\n[02:11.77]绝望着也渴望着也哭也笑平凡着\n[02:40.91]我曾经跨过山和大海\n[02:42.57]也穿过人山人海\n[02:45.07]我曾经拥有着一切\n[02:48.07]转眼都飘散如烟\n[02:50.76]我曾经失落失望失掉所有方向\n[02:56.41]直到看见平凡才是唯一的答案\n[03:01.93]我曾经毁了我的一切\n[03:04.82]只想永远地离开\n[03:07.40]我曾经堕入无边黑暗\n[03:10.46]想挣扎无法自拔\n[03:13.38]我曾经像你像他像那野草野花\n[03:19.00]绝望着也渴望着也哭也笑平凡着\n[03:24.41]我曾经跨过山和大海\n[03:27.40]也穿过人山人海\n[03:30.01]我曾经问遍整个世界\n[03:33.15]从来没得到答案\n[03:35.91]我不过像你像他像那野草野花\n[03:42.13]冥冥中这是我唯一要走的路啊\n",
        picUrl:'朴树.jpg',
        singerId: 17,
        dt: 244500,
        songUrl:"平凡之路 (Live)-朴树.mp3"
    });
    await addToAlbum(songData29);
    //500665345 朴树-生如夏花
    const songData30 = await Song.create({
        name: '生如夏花',
        artistName:'朴树',
        lyric:"[00:00.000] 作词 : 朴树\n[00:00.510] 作曲 : 朴树\n[00:01.20]编曲：张亚东\n[00:31.79]也不知在黑暗中究竟沉睡了多久\n[00:40.98]也不知要有多难才能睁开双眼\n[00:50.96]我从远方赶来 恰巧你们也在\n[01:00.01]痴迷流连人间 我为她而狂野\n[01:08.62]我是这耀眼的瞬间\n[01:12.33]是划过天边的刹那火焰\n[01:16.73]我为你来看我不顾一切\n[01:21.50]我将熄灭永不能再回来\n[01:25.93]我在这里啊\n[01:30.58]就在这里啊\n[01:36.88]惊鸿一般短暂\n[01:41.42]像夏花一样绚烂\n[02:13.65]这是一个多美丽又遗憾的世界\n[02:22.42]我们就这样抱着笑着还流着泪\n[02:32.33]我从远方赶来 赴你一面之约\n[02:41.46]痴迷流连人间 我为她而狂野\n[02:49.98]我是这耀眼的瞬间\n[02:53.75]是划过天边的刹那火焰\n[02:58.21]我为你来看我不顾一切\n[03:02.91]我将熄灭永不能再回来\n[03:07.45]我在这里啊\n[03:12.01]就在这里啊\n[03:18.40]惊鸿一般短暂\n[03:22.85]如夏花一样绚烂\n[03:26.97]我是这耀眼的瞬间\n[03:30.66]是划过天边的刹那火焰\n[03:35.08]我为你来看我不顾一切\n[03:39.73]我将熄灭永不能再回来\n[03:44.38]不虚此行呀\n[03:48.97]不虚此行呀\n[03:55.29]惊鸿一般短暂\n[03:59.83]开放在你眼前\n[04:04.03]我是这耀眼的瞬间\n[04:07.59]是划过天边的刹那火焰\n[04:12.08]我要你来爱我不顾一切\n[04:16.88]我将熄灭永不能再回来\n[04:21.29]一路春光啊\n[04:25.93]一路荆棘呀\n[04:32.40]惊鸿一般短暂\n[04:36.78]如夏花一样绚烂\n[04:59.62]这是一个多美丽又遗憾的世界\n",
        picUrl:'朴树.jpg',
        singerId: 17,
        dt: 313480,
        songUrl:"生如夏花-朴树.mp3"
    });
    await addToAlbum(songData30);
    //1422715008 乔佳旭-发香
    const songData31 = await Song.create({
        name: '发香',
        artistName:'乔佳旭',
        "lyric": "[00:00.000] 作词 : 乔佳旭\n[00:00.539] 作曲 : 乔佳旭\n[00:01.79]编曲：高郡邦\n[00:01.79]\n[00:03.73]我怎么会忘 你那天发香\n[00:09.89]午后的倔强 像风中飘散的愿望\n[00:17.38]\n[00:19.78]阴天 在说爱你之前\n[00:24.68]你安静的瞬间 倒映出对他的思念\n[00:31.69]你说你喜欢 他长的睫毛微笑嘴角\n[00:39.01]路过的蜻蜓装听不到\n[00:44.82]\n[00:45.08]怎么 我突然不笑了\n[00:50.22]深情地安慰着 你那固执里的快乐\n[00:57.34]你甜美的笑 竟然是我最爱的毒药\n[01:04.57]在挥手以后 我吻的到\n[01:09.30]\n[01:12.97]我怎么会忘 你那天发香\n[01:18.97]午后的倔强 像风中飘散的愿望\n[01:26.23]我自救一场 被你一笑而过的逞强\n[01:33.57]说再见时候握紧不放\n[01:38.26]怎么会忘 你温柔发香\n[01:44.60]祝福的目光 就像你对他的痴狂\n[01:51.87]我所有期待 在你心碎时彻底明白\n[01:58.97]多希望转身后就释怀\n[02:03.86]我这就离开\n[02:29.99]\n[02:30.87]怎么 我突然不笑了\n[02:35.81]深情地安慰着 你那固执里的快乐\n[02:43.09]你甜美的笑 竟然是我最爱的毒药\n[02:50.10]在挥手以后 我吻的到\n[02:57.09]\n[02:58.40]我怎么会忘 你那天发香\n[03:04.54]午后的倔强 像风中飘散的愿望\n[03:11.73]我自救一场 被你一笑而过的逞强\n[03:18.94]说再见时候握紧不放\n[03:23.65]\n[03:24.04]怎么会忘 你温柔发香\n[03:30.38]祝福的目光 就像你对他的痴狂\n[03:37.51]我所有期待 在你心碎时彻底明白\n[03:44.52]多希望转身后就释怀\n[03:49.55]我这就离开\n[03:51.79]吉他/贝斯：高郡邦\n[03:51.79]混音：张栩赫（Ethan）\n[03:51.79]录音：Kent王健(觉醒爷爷)\n[03:51.79]和声编写/和声：Kent王健(觉醒爷爷)\n[03:51.79]制作人/配唱制作人：Kent王健(觉醒爷爷)\n[03:51.79]录音工作室：1803 Studio\n[03:51.79]混音工作室：Hot Music Studio\n[03:51.79]监制：Kingstar\n[03:51.79]企划营销：梦童娱乐\n[03:51.79]OP：千和世纪\n[03:51.79]（版权所有未经许可请勿使用）\n",
        picUrl:'乔佳旭.jpg',
        singerId: 18,
        dt: 253600,
        songUrl:"发香-乔佳旭.mp3"
    });
    await addToAlbum(songData31);
    //1493613608 任贤齐-还有我
    const songData32 = await Song.create({
        name: '还有我',
        artistName:'任贤齐',
        lyric:"[00:00.000] 作词 : 任贤齐\n[00:00.000] 作曲 : 任贤齐\n[00:00.000] 编曲 : feeson\n[00:00.000]这首歌仅唱给我的丹丹听\n[00:24.708]看着你有些累\n[00:27.464]想要一个人静一会\n[00:31.476]你的眼含着泪\n[00:34.481]我的心也跟着碎\n[00:37.983]你为哪个人憔悴\n[00:41.237]为他扛下所有罪\n[00:44.745]我为你执迷不悔\n[00:47.999]整夜无法入睡\n[00:53.006]就算全世界离开你\n[00:56.012]还有一个我来陪\n[00:59.516]怎么舍得让你受尽冷风吹\n[01:06.030]就算全世界在下雪\n[01:09.282]就算候鸟已南飞\n[01:12.788]还有我在这里\n[01:15.794]痴痴地等你归\n[01:46.095]你装作无所谓\n[01:49.600]其实已痛彻心扉\n[01:53.104]没想象中的坚强\n[01:56.111]坚强地面对是与非\n[01:59.617]想要给你的安慰\n[02:02.872]你淡淡笑着拒绝\n[02:06.381]满身伤痕的爱情\n[02:09.634]不值得你付出一切\n[02:14.389]就算全世界离开你\n[02:17.898]还有一个我来陪\n[02:21.402]怎么舍得让你受尽冷风吹\n[02:27.916]就算全世界在下雪\n[02:31.168]就算候鸟已南飞\n[02:34.672]还有我在这里\n[02:37.179]痴痴地等你归\n[02:41.185]就算全世界离开你\n[02:44.439]还有一个我来陪\n[02:47.948]怎么舍得让你受尽冷风吹\n[02:54.456]就算全世界在下雪\n[02:57.965]就算候鸟已南飞\n[03:01.469]还有我在这里\n[03:03.622]痴痴地等你归\n[03:08.126]还有我在这里\n[03:10.629]痴痴地等你归\n",
        picUrl:'任贤齐.jpg',
        singerId: 19,
        dt: 200176,
        songUrl:"还有我-任贤齐.mp3"
    });
    await addToAlbum(songData32);
    //144515 任贤齐-我是一只鱼
    const songData33 = await Song.create({
        name: '我是一只鱼',
        artistName:'任贤齐',
        lyric: "[00:00.000] 作词 : 刘思铭\n[00:00.750] 作曲 : 刘志宏\n[00:01.500] 编曲 : Mac Chew/Jenny Chin\n[00:02.250] 制作人 : 刘志宏/刘思铭\n[00:30.136]可不可以不想你\n[00:03.000]\n[00:35.175]我需要振作一下\n[00:40.228]七八九月的天气\n[00:45.309]像我和你 需要下一场雨\n[00:49.737]需要你 我是一只鱼\n[00:54.155]水里的空气\n[00:56.664]是你小心眼和坏脾气\n[00:59.863]没有你 像离开水的鱼\n[01:03.958]快要活不下去\n[01:06.524]不能在一起 游来游去\n[01:20.753]能不能让你清醒\n[01:11.364]\n[01:25.829]爱是快乐的事情\n[01:30.902]我只有真心而已\n[01:35.945]世界末日 我都不会离去\n[01:40.378]需要你 我是一只鱼\n[01:44.777]水里的空气\n[01:47.300]是你小心眼和坏脾气\n[01:50.478]没有你 像离开水的鱼\n[01:54.596]快要活不下去\n[01:57.163]不能在一起 游来游去\n[02:11.376]我是一只站在岸上的鱼 喔\n[02:01.961]\n[02:16.060]如何能忘记曾经活在海里\n[02:19.900]曾经我活在你的生命 oh yeah\n[02:25.923]需要你 我是一只鱼\n[02:30.385]水里的空气\n[02:32.895]是你小心眼和坏脾气\n[02:36.036]没有你 像离开水的鱼\n[02:40.158]快要活不下去\n[02:42.613]为什么不能在一起\n[02:45.841]我需要你 我是一只鱼\n[02:50.612]水里的空气\n[02:53.140]是你小心眼和坏脾气\n[02:56.317]没有你 像离开水的鱼\n[03:00.419]快要活不下去\n[03:02.955]不能在一起 游来游去\n[03:07.895]\n[03:17.000]录音工程师 : 黄卓叡 / Rahmad Ayob\n[03:22.000]混音工程师 : 钟国泰\n[03:27.000]录音室 : Babyboss (KL) / 谱丽音 / 白金\n[03:32.000]混音室 : 白金\n[03:37.000]吉他 : Jamie Wilson\n[03:42.000]鼓 : Luke Mason\n[03:47.000]贝斯 : Norman Abd Rahman\n[03:52.000]和声编写 : 马毓芬\n[03:57.000]和声 : 马毓芬 / 黄怡\n[04:02.000]TWA4598147004\n[04:07.000]OP : Rock Music Publishing (TWN) Co.,Ltd.\n",
        picUrl:'任贤齐.jpg',
        singerId: 19,
        dt: 254426,
        songUrl:"我是一只鱼-任贤齐.mp3"
    });
    await addToAlbum(songData33);
    //144619 任贤齐-心太软
    const songData34 = await Song.create({
        name: '心太软',
        artistName:'任贤齐',
        lyric: "[00:00.000] 作词 : 小虫\n[00:00.750] 作曲 : 小虫\n[00:01.500] 编曲 : Christopher Troy\n[00:02.250] 制作人 : 小虫\n[00:03.000]\n[00:25.991]你总是心太软 心太软\n[00:31.917]独自一个人流泪到天亮\n[00:37.107]你无怨无悔的爱着那个人\n[00:42.293]我知道你根本没那么坚强\n[00:46.847]你总是心太软 心太软\n[00:52.633]把所有问题都自己扛\n[00:57.546]相爱总是简单 相处太难\n[01:02.792]不是你的就别再勉强\n[01:07.296]\n[01:11.553]夜深了你还不想睡\n[01:16.758]你还在想着他吗\n[01:21.936]你这样痴情到底累不累\n[01:27.132]明知他不会回来安慰\n[01:32.357]只不过想好好爱一个人\n[01:37.557]可惜他无法给你满分\n[01:42.770]多余的牺牲 他不懂心疼\n[01:47.938]你应该不会只想做个好人\n[01:51.864]喔 算了吧\n[01:55.045]就这样忘了吧 该放就放\n[02:00.278]再想也没有用\n[02:02.638]傻傻等待 他也不会回来\n[02:08.124]你总该为自己想想未来\n[02:12.638]你总是心太软 心太软\n[02:18.525]独自一个人流泪到天亮\n[02:23.743]你无怨无悔的爱着那个人\n[02:28.923]我知道你根本没那么坚强\n[02:33.480]你总是心太软 心太软\n[02:39.345]把所有问题都自己扛\n[02:44.188]相爱总是简单 相处太难\n[02:49.433]不是你的就别再勉强\n[02:53.704]\n[03:37.191]夜深了你还不想睡\n[03:42.395]你还在想着他吗\n[03:47.551]你这样痴情到底累不累\n[03:52.766]明知他不会回来安慰\n[03:57.944]只不过想好好爱一个人\n[04:03.175]可惜他无法给你满分\n[04:08.406]多余的牺牲 他不懂心疼\n[04:13.611]你应该不会只想做个好人\n[04:17.426]喔 算了吧\n[04:20.725]就这样忘了吧 该放就放\n[04:25.949]再想也没有用\n[04:28.200]傻傻等待 他也不会回来\n[04:33.724]你总该为自己想想未来\n[04:38.262]你总是心太软 心太软\n[04:44.148]独自一个人流泪到天亮\n[04:49.359]你无怨无悔的爱着那个人\n[04:54.563]我知道你根本没那么坚强\n[04:59.074]你总是心太软 心太软\n[05:04.938]把所有问题都自己扛\n[05:09.774]相爱总是简单 相处太难\n[05:15.049]不是你的就别再勉强\n[05:20.257]不是你的就别再勉强\n[05:25.461]不是你的就别再勉强\n[05:30.660]不是你的就别再勉强\n[05:35.584]\n[05:38.000]吉他 : Michael Thompson\n[05:39.000]和声编写 : 小虫\n[05:40.000]和声 : 小虫\n[05:41.000]编曲录音室 : Our Own Studio L.A.\n[05:42.000]录音混音工程师 : Mark Nathan\n[05:43.000]录音混音室助理 : Aaron Lepley\n[05:44.000]录音混音室 : Sound Castle Studio's L.A.\n[05:45.000]混音后期处理制作人 : 小虫\n[05:46.000]混音后期处理工程师 : Brian \"Big Bass\" Gardner\n[05:47.000]混音后期处理录音室 : Bernie Grundman Mastering L.A.\n[05:48.000]OP : Rock Int'l Ms Publ Taiwan\n[05:49.000]ISRC TW-A45-96-53701\n",
        picUrl:'任贤齐.jpg',
        singerId: 19,
        dt: 350400,
        songUrl:"心太软-任贤齐.mp3"
    });
    await addToAlbum(songData34);
    //1363948882 世间美好与你环环相扣-柏松
    const songData35 = await Song.create({
        name: '世间美好与你环环相扣',
        artistName:'柏松',
        lyric: "[00:00.000] 作词 : 尹初七\n[00:01.000] 作曲 : 柏松\n[00:02.000] 编曲 : 彭圣杰\n[00:15.554]\n[00:28.054]偏偏秉烛夜游\n[00:31.054]午夜星辰 似奔走之友\n[00:34.554]爱你每个结痂伤口\n[00:37.554]酿成的陈年烈酒\n[00:40.804]\n[00:41.804]入喉尚算可口\n[00:44.803]怎么泪水 还偶尔失守\n[00:48.553]邀你细看心中缺口\n[00:51.053]裂缝中留存 温柔\n[00:55.804]\n[00:57.553]此时已莺飞草长 爱的人正在路上\n[01:01.802]我知他风雨兼程 途经日暮不赏\n[01:05.552]穿越人海 只为与你相拥\n[01:11.552]此刻已皓月当空 爱的人手捧星光\n[01:15.302]我知他乘风破浪 去了黑暗一趟\n[01:19.052]感同身受 给你救赎热望\n[01:25.302]\n[01:26.052]知道你不能 还要你感受\n[01:29.802]让星光加了一点彩虹\n[01:32.802]让樱花偷偷 吻你额头\n[01:36.553]让世间美好 与你环环相扣\n[01:41.303]\n[01:42.052]此时已莺飞草长 爱的人正在路上\n[01:46.302]我知他风雨兼程 途经日暮不赏\n[01:50.302]穿越人海 只为与你相拥\n[01:55.802]此刻已皓月当空 爱的人手捧星光\n[01:59.802]我知他乘风破浪 去了黑暗一趟\n[02:04.052]感同身受 给你救赎热望\n[02:09.051]\n[02:09.551]此时已莺飞草长 爱的人正在路上\n[02:13.550]我知他风雨兼程 途经日暮不赏\n[02:17.801]穿越人海 只为与你相拥\n[02:23.301]此刻已皓月当空 爱的人手捧星光\n[02:27.550]我知他乘风破浪 去了黑暗一趟\n[02:31.551]感同身受 给你救赎热望\n[02:37.051]\n[02:38.300]知道你不能 还要你感受\n[02:41.300]让星光加了一点彩虹\n[02:44.800]当樱花开的纷纷扬扬\n[02:48.301]当世间美好 与你环环相扣\n[02:58.300]特别鸣谢：槿葵，我们的海报制作妹妹。\n[03:05.554]原唱：柏松\n[03:06.055]吉他：柏松\n[03:07.054]和声：柏松\n[03:07.804]录音：柏松\n[03:08.804]混音：张强\n",
        picUrl:'柏松.jpg',
        singerId: 2,
        dt: 191960,
        songUrl:"世间美好与你环环相扣-柏松.mp3"
    });
    await addToAlbum(songData35);
    //32699987 谭咏麟-讲不出再见
    const songData36 = await Song.create({
        name: '讲不出再见',
        artistName:'谭咏麟',
        lyric:"[00:00.000] 作词 : 向雪怀\n[00:01.000] 作曲 : Cho Yong Pil 赵容弼\n[00:02.000] 编曲 : 杜自持\n[00:30.80]是对是错也好\n[00:33.91]不必说了\n[00:37.51]是怨是爱恋也好\n[00:40.43]不须揭晓\n[00:44.13]何事更重要\n[00:46.96]比两心的需要\n[00:50.69]柔情蜜意怎么可缺少\n[00:57.15]是进是退也好\n[01:00.21]有若狂潮\n[01:03.58]是痛是爱也好\n[01:06.86]不须发表\n[01:10.41]曾为你愿意\n[01:13.34]我梦想都不要\n[01:16.99]流言自此心知不会少\n[01:23.51]这段情\n[01:26.68]越是浪漫越美妙\n[01:30.99]离别最是吃不消\n[01:35.85]我最不忍看你\n[01:40.05]背向我转面\n[01:42.98]要走一刻请不必\n[01:45.38]诸多眷恋\n[01:48.95]浮沉浪似人潮\n[01:53.05]哪会没有思念\n[01:56.08]你我伤心到\n[01:57.95]讲不出再见\n[02:16.08]是进是退也好\n[02:19.20]有若狂潮\n[02:22.64]是痛是爱也好\n[02:25.68]不须发表\n[02:29.28]曾为你愿意\n[02:32.24]我梦想都不要\n[02:35.92]流言自此心知不会少\n[02:42.48]这段情\n[02:45.70]越是浪漫越美妙\n[02:49.86]离别最是吃不消\n[02:54.85]我最不忍看你\n[02:58.94]背向我转面\n[03:01.84]要走一刻请不必\n[03:04.27]诸多眷恋\n[03:08.00]浮沉浪似人潮\n[03:11.93]哪会没有思念\n[03:14.94]你我伤心到讲不出再见\n[03:36.91]我最不忍看你\n[03:40.88]背向我转面\n[03:43.81]要走一刻请不必\n[03:46.24]诸多眷恋\n[03:49.87]浮沉浪似人潮\n[03:54.08]哪会没有思念\n[03:56.83]你我伤心到讲不出再见\n[04:03.12]我最不忍看你\n[04:07.21]背向我转面\n[04:09.92]要走一刻请不必\n[04:12.57]诸多眷恋\n[04:16.24]浮沉浪似人潮\n[04:20.32]哪会没有思念\n[04:23.17]你我伤心到讲不出再见\n",
        picUrl:'谭咏麟.jpg',
        singerId: 21,
        dt: 294000,
        songUrl:"讲不出再见-谭咏麟.mp3"
    });
    await addToAlbum(songData36);
    //152428 谭咏麟-朋友
    const songData37 = await Song.create({
        name: '朋友',
        artistName:'谭咏麟',
        lyric: "[00:00.000] 作词 : 向雪怀\n[00:01.000] 作曲 : Hiroaki Serizawa\n[00:02.000] 编曲 : 卢东尼\n[00:03.000]Publisher : Fujipacific Ms Inc. / PolyGram\n[00:04.000]\n[00:17.62]繁星流动 和你同路\n[00:26.41]从不相识 开始心接近\n[00:30.51]默默以真挚待人\n[00:35.16]人生如梦 朋友如雾\n[00:43.92]难得知心 几经风暴\n[00:48.10]为着我不退半步 正是你\n[00:55.76]遥遥晚空 点点星光 息息相关\n[00:59.56]你我哪怕荆棘铺满路\n[01:06.23]替我解开心中的孤单 是谁明白我\n[01:13.32]情同两手 一起开心 一起悲伤\n[01:17.08]彼此分担 总不分我或你\n[01:23.73]你为了我 我为了你\n[01:28.70]共赴患难 绝望里紧握你手\n[01:35.80]朋友\n[02:16.30]繁星流动 和你同路\n[02:24.88]从不相识 开始心接近\n[02:29.06]默默以真挚待人\n[02:33.60]人生如梦 朋友如雾\n[02:42.40]难得知心 几经风暴\n[02:46.63]为着我不退半步 正是你\n[02:54.27]遥遥晚空 点点星光 息息相关\n[02:58.07]你我哪怕荆棘铺满路\n[03:04.74]替我解开心中的孤单 是谁明白我\n[03:11.89]情同两手 一起开心 一起悲伤\n[03:15.59]彼此分担 总不分我或你\n[03:22.26]你为了我 我为了你\n[03:27.20]共赴患难 绝望里紧握你手\n[03:34.37]朋友\n[03:38.24]遥遥晚空 点点星光 息息相关\n[03:41.94]你我哪怕荆棘铺满路\n[03:48.60]替我解开心中的孤单 是谁明白我\n[03:55.65]情同两手 一起开心 一起悲伤\n[03:59.56]彼此分担 总不分我或你\n[04:06.16]你为了我 我为了你\n[04:11.12]共赴患难 绝望里紧握你手\n[04:18.21]朋友\n",
        picUrl:'谭咏麟.jpg',
        singerId: 21,
        dt: 288400,
        songUrl:"朋友-谭咏麟.mp3"
    });
    await addToAlbum(songData37);
    //153784 谭咏麟-一生中最爱
    const songData38 = await Song.create({
        name: '一生中最爱',
        artistName:'谭咏麟',
        lyric:"[00:00.000] 作词 : 向雪怀\n[00:01.000] 作曲 : 伍思凯\n[00:02.000] 编曲 : 卢东尼\n[00:03.000] 制作人 : 叶广权/关维麟\n[00:04.000]\n[00:22.797]如果痴痴的等某日\n[00:25.149]终于可等到一生中最爱\n[00:30.641]谁介意你我这段情\n[00:32.795]每每碰上了意外\n[00:34.657]不清楚未来\n[00:37.988]何曾愿意 我心中所爱\n[00:46.584]每天要孤单看海\n[00:53.535]宁愿一生都不说话\n[00:55.623]都不想讲假说话欺骗你\n[01:01.138]留意到你我这段情\n[01:03.254]你会发觉间隔着一点点距离\n[01:08.516]无言地爱 我偏不敢说\n[01:17.075]说一句想跟你一起\n[01:23.624]WOOH...OH...\n[01:27.720]如真如假\n[01:31.580]如可分身饰演自己\n[01:35.452]会将心中的温柔\n[01:37.556]献出给你唯有的知己\n[01:43.060]如痴如醉\n[01:46.826]还盼你懂珍惜自己\n[01:50.669]有天即使分离我都想你\n[01:54.762]我真的想你\n[02:00.863]\n[02:17.340]宁愿一生都不说话\n[02:19.454]都不想讲假说话欺骗你\n[02:24.915]留意到你我这段情\n[02:27.040]你会发觉间隔着一点点距离\n[02:32.305]无言地爱 我偏不敢说\n[02:40.870]说一句想跟你一起\n[02:46.862]WOOH...OH...\n[02:51.567]如真如假\n[02:55.340]如可分身饰演自己\n[02:59.161]会将心中的温柔\n[03:01.396]献出给你唯有的知己\n[03:06.883]如痴如醉\n[03:10.670]还盼你懂珍惜自己\n[03:14.434]有天即使分离我都想你\n[03:18.554]我真的想你\n[03:25.909]如真如假\n[03:29.705]如可分身饰演自己\n[03:33.522]会将心中的温柔\n[03:35.707]献出给你唯有的知己\n[03:41.150]如痴如醉\n[03:44.965]还盼你懂珍惜自己\n[03:48.756]有天即使分离我都想你\n[03:52.841]我真的想你\n[04:00.198]如果痴痴的等某日\n[04:02.554]终于可等到\n[04:05.557]一生中最爱\n[04:07.839] 贝斯 : 林志宏\n[04:10.121] 鼓 : 陈伟强\n[04:12.403] 吉他 : 苏德华\n[04:14.685] 键盘 : 卢东尼\n[04:16.967] 和声 : 陈美凤/陈碧清/张伟文/谭锡禧\n[04:19.249] 混音师 : 叶广权\n[04:21.531] Publisher : Coden Records (In-Co) / PolyGram\n",
        picUrl:'谭咏麟.jpg',
        singerId: 21,
        dt: 261537,
        songUrl:"一生中最爱-谭咏麟.mp3"
    });
    await addToAlbum(songData38);
    //1341625329 汪苏泷-巴赫旧约
    const songData39 = await Song.create({
        name: '巴赫旧约',
        artistName:'汪苏泷',
        lyric: "[00:00.000] 作词 : 汪苏泷（Silence)\n[00:01.000] 作曲 : 汪苏泷\n[00:15.416]八五三月二十一\n[00:16.914]爱森纳赫小镇里\n[00:18.428]赫瑟尔河畔边流淌的旋律\n[00:21.178]在圣托马斯的教堂里\n[00:23.164]没人会去在意\n[00:24.175]那管风琴的声音\n[00:27.163]勃兰登堡协奏曲\n[00:28.413]克膝宫的大键琴\n[00:30.174]巴赫为了生计写着平均律\n[00:32.415]魏玛宫廷的月光是咏叹的前奏曲\n[00:38.174]你拉着提琴\n[00:39.914]优雅美丽\n[00:41.663]眼神却逃避\n[00:43.924]我会像巴赫记录我们约定的爱情\n[00:49.663]古典钢琴弹不出的回忆\n[00:52.176]像巴赫音乐隐没人海里\n[00:55.169]我为你创作了几百世纪\n[00:58.154]也是注定没结局\n[01:00.910]用笔在乐谱雕刻着唯一\n[01:03.428]叹息你永远不懂我的心\n[01:06.665]我的旧约圣经\n[01:08.672]也没挽回你\n[01:37.410]八五三月二十一\n[01:38.921]爱森纳赫小镇里\n[01:40.665]赫瑟尔河畔边流淌的旋律\n[01:43.169]在圣托马斯的教堂里\n[01:44.676]没人会去在意\n[01:46.174]那管风琴的声音\n[01:48.927]勃兰登堡协奏曲\n[01:50.165]克膝宫的大键琴\n[01:51.670]巴赫为了生计写着平均律\n[01:54.174]魏玛宫廷的月光是咏叹的前奏曲\n[02:00.175]你拉着提琴\n[02:02.161]优雅美丽\n[02:03.418]眼神却逃避\n[02:05.911]我会像巴赫记录我们约定的爱情\n[02:11.172]古典钢琴弹不出的回忆\n[02:14.179]像巴赫音乐隐没人海里\n[02:16.920]我为你创作了几百世纪\n[02:19.924]也是注定没结局\n[02:22.678]用笔在乐谱雕刻着唯一\n[02:25.663]叹息你永远不懂我的心\n[02:28.167]我的旧约圣经\n[02:30.419]也没挽回你\n[02:33.928]窗外摇曳着紫色的风铃\n[02:36.680]像你清脆在耳边的声音\n[02:39.914]我说对你的爱已经远去\n[02:42.426]你会不会也相信\n[02:45.423]去年秋天我为你写的信\n[02:48.166]记着我多么想与你相遇\n[02:50.924]可惜旧约圣经\n[02:52.919]已经没意义\n[02:56.671]古典钢琴弹不出的回忆\n[02:59.665]像巴赫音乐隐没人海里\n[03:02.414]我为你创作了几百世纪\n[03:05.165]也是注定没结局\n[03:07.673]用笔在乐谱雕刻着唯一\n[03:10.914]叹息你永远不懂我的心\n[03:13.655]我的旧约圣经\n[03:15.917]也没挽回你\n[03:19.172]窗外摇曳着紫色的风铃\n[03:22.172]像你清脆在耳边的声音\n[03:24.918]我说对你的爱已经远去\n[03:27.669]你会不会也相信\n[03:30.668]去年秋天我为你写的信\n[03:33.418]记着我多么想与你相遇\n[03:36.167]可惜旧约圣经\n[03:38.177]已经没意义\n",
        picUrl:'汪苏泷.jpg',
        singerId: 24,
        dt: 227070,
        songUrl:"巴赫旧约-汪苏泷.mp3"
    });
    await addToAlbum(songData39);
    //486188224 汪苏泷-一笑倾城
    const songData40 = await Song.create({
        name: '一笑倾城',
        artistName:'汪苏泷',
        lyric:"[00:00.000] 作词 : Finale\n[00:00.535] 作曲 : 汪苏泷\n[00:01.070]制作人：赵兆\n[00:01.600]编曲：宋涛\n[00:02.150]音乐总监/钢琴：赵兆\n[00:02.750]音响顾问：何飚\n[00:03.210]声乐指导：梁古驰\n[00:03.630]吉他：王传统/劳国贤\n[00:04.120]贝斯：韩阳\n[00:04.660]键盘：尹岳洋\n[00:05.140]鼓：郝稷伦\n[00:05.580]打击乐：刘效松\n[00:06.010]PGM：孔潇一\n[00:06.430]和声：张石荻/戈锐/胡维纳/王妞妞\n[00:06.890]弦乐：靳海音®弦乐团\n[00:07.380]混音：李卓/于昊/周天澈\n[00:08.880]杨梓鑫：我总是轻描淡写告诉你我的愿望\n[00:12.690]也给你千言万语都说不尽的目光\n[00:16.670]陈墨一：这世界总有人在忙忙碌碌寻宝藏\n[00:20.670]却误了浮世骄阳 也错过人间万象\n[00:24.540]明柏辰：古城里长桥上\n[00:28.470]明筱岩：人如海车成行\n[00:32.470]明柏辰/明筱岩：你笑得像光芒 蓦然把我照亮\n[00:36.870]陈墨一/杨梓鑫：你笑得像光芒 蓦然把我照亮\n[00:40.810]杨梓鑫：风轻扬夏未央\n[00:44.830]陈墨一：林荫路单车响\n[00:48.810]杨梓鑫：原来所谓爱情\n[00:51.830]素人合：是这模样\n[00:56.090]明筱岩：就承认一笑倾城一见自难忘\n[01:00.000]陈墨一：说什么情深似海我却不敢当\n[01:04.180]杨梓鑫：最浪漫不过与你并肩看夕阳 我心之所向\n[01:09.380]明柏辰/明筱岩：与你去看夕阳 我的心之所向\n[01:12.700]陈墨一：想和你游四方赏晴雨的风光\n[01:16.300]杨梓鑫：想和你铺纸笔写余生的篇章\n[01:20.470]明柏辰/明筱岩：笑与泪都分享管情节多跌宕\n[01:24.430]素人合：我们不散场\n[01:29.960]陈墨一：你是我偶然听闻铭感于心的歌唱\n[01:33.990]陈墨一：也是我惊鸿一瞥而后拥抱的芬芳\n[01:38.070]杨梓鑫：这世界风华正茂可别辜负好时光\n[01:42.020]杨梓鑫/陈墨一：六月风走街穿巷 六月花陌上盛放\n[01:45.940]明柏辰：古城里长桥上\n[01:49.760]明筱岩：人如海车成行\n[01:54.230]明柏辰/明筱岩：你笑得像光芒 蓦然把我照亮\n[01:58.030]陈墨一/杨梓鑫：你笑得像光芒 蓦然把我照亮\n[02:02.150]杨梓鑫：风轻扬夏未央\n[02:06.110]陈墨一：林荫路单车响\n[02:10.330]杨梓鑫：原来所谓爱情\n[02:13.080]素人合：是这模样\n[02:17.520]明柏辰：就承认一笑倾城一见自难忘\n[02:21.500]陈墨一：说什么情深似海我却不敢当\n[02:25.490]杨梓鑫：最浪漫不过与你并肩看夕阳 我心之所向\n[02:30.690]明柏辰/明筱岩：与你去看夕阳 我的心之所向\n[02:34.260]陈墨一：想和你游四方赏晴雨的风光\n[02:37.660]杨梓鑫：想和你铺纸笔写余生的篇章\n[02:41.840]明柏辰/明筱岩：笑与泪都分享管情节多跌宕\n[02:45.730]素人合：我们不散场\n[02:50.950]汪苏泷rap：你的笑就像光芒 蓦然回首把我照亮\n[02:55.290]这首歌《一笑倾城》我只想和你唱\n[02:59.130]说什么情深似海\n[03:01.480]我珍惜每一个现在\n[03:03.470]这首歌说过的的愿望\n[03:05.060]都是我内心最真的渴望\n[03:08.340]汪苏泷：就承认一笑倾城一见自难忘\n[03:12.270]说什么情深似海我却不敢当\n[03:16.320]最浪漫不过与你并肩看夕阳\n[03:20.350]我心之所向\n[03:21.450]明柏辰/明筱岩：与你去看夕阳 我的心之所向\n[03:25.230]合：想和你游四方赏晴雨的风光\n[03:28.650]想和你铺纸笔写余生的篇章\n[03:32.690]笑与泪都分享管情节多跌宕\n[03:36.670]我们不散场\n",
        picUrl:'汪苏泷.jpg',
        singerId: 24,
        dt: 226951,
        songUrl:"一笑倾城-汪苏泷.mp3"
    });
    await addToAlbum(songData40);
    //545313940  有点甜-汪苏泷、陈墨一
    const songData41 = await Song.create({
        name: '巴赫旧约',
        artistName:'汪苏泷,BY2',
        lyric:"[00:00.000] 作词 : 汪苏泷\n[00:00.516] 作曲 : 汪苏泷\n[00:01.33]原唱：汪苏泷&BY2\n[00:04.33]翻唱：伦桑&小吴太太\n[00:10.33]后期：小吴太太\n[00:12.33]曲绘：六等星\n[00:14.33]海报：麦浮\n[00:15.33]PV：时桑\n[00:17.33]题字：阿欣\n[00:20.33]摘一颗苹果\n[00:22.23]等你从门前经过\n[00:24.94]送到你的手中帮你解渴\n[00:28.74]像夏天的可乐\n[00:31.24]像冬天的可可\n[00:34.26]你是对的时间对的角色\n[00:38.44]已经约定过\n[00:40.33]一起过下个周末\n[00:43.54]你的小小情绪对我来说\n[00:47.30]我也不知为何\n[00:49.50]伤口还没愈合\n[00:52.63]你就这样闯进我的心窝\n[00:56.71]是你让我看见干枯沙漠开出花一朵\n[01:01.33]是你让我想要每天为你写一首情歌\n[01:05.92]用最浪漫的副歌\n[01:08.25]你也轻轻的附和\n[01:10.80]眼神坚定着我们的选择\n[01:14.92]是你让我的世界从那刻变成粉红色\n[01:19.59]是你让我的生活从此都只要你配合\n[01:24.14]爱要精心来雕刻\n[01:26.55]我是米开朗基罗\n[01:29.18]用心刻画最幸福的风格\n[01:33.97]用时间 去思念 爱情有点甜\n[01:42.84]这心愿 不会变 爱情有点甜\n[01:51.61]已经约定过\n[01:53.60]一起过下个周末\n[01:56.46]你的小小情绪对我来说\n[02:00.57]我也不知为何\n[02:02.72]伤口还没愈合\n[02:05.62]你就这样闯进我的心窝\n[02:09.90]是你让我看见干枯沙漠开出花一朵\n[02:14.36]是你让我想要每天为你写一首情歌\n[02:18.99]用最浪漫的副歌\n[02:21.39]你也轻轻的附和\n[02:23.99]眼神坚定着我们的选择\n[02:28.30]是你让我的世界从那刻变成粉红色\n[02:32.78]是你让我的生活从此都只要你配合\n[02:37.30]爱要精心来雕刻\n[02:39.62]我是米开朗基罗\n[02:42.25]用心刻画最幸福的风格\n[02:46.60]是你让我看见干枯沙漠开出花一朵\n[02:51.06]是你让我想要每天为你写一首情歌\n[02:55.59]用最浪漫的副歌\n[02:57.95]你也轻轻的附和\n[03:00.51]眼神坚定着我们的选择\n[03:04.80]是你让我的世界从那刻变成粉红色\n[03:09.40]是你让我的生活从此都只要你配合\n[03:13.85]爱要精心来雕刻\n[03:16.43]我是米开朗基罗\n[03:18.79]用心刻画最幸福的风格\n[03:23.53]用心刻画最幸福的风格\n",
        picUrl:'汪苏泷.jpg',
        singerId: 24,
        dt: 237205,
        songUrl:"有点甜-汪苏泷、陈墨一.mp3"
    });
    await addToAlbum(songData41);
    //27955653 薛之谦-你还要我怎样
    const songData42 = await Song.create({
        name: '你还要我怎样',
        artistName:'薛之谦',
        lyric: "[00:00.000] 作词 : 薛之谦\n[00:01.000] 作曲 : 薛之谦\n[00:24.150]你停在了这条我们熟悉的街\n[00:34.080]把你准备好的台词全念一遍\n[00:41.920]我还在逞强 说着谎\n[00:46.270]也没能力遮挡 你去的方向\n[00:51.730]至少分开的时候我落落大方\n[00:59.630]\n[01:03.618]我后来都会选择绕过那条街\n[01:12.819]又多希望在另一条街能遇见\n[01:21.399]思念在逞强 不肯忘\n[01:26.090]怪我没能力跟随 你去的方向\n[01:31.899]若越爱越被动 越要落落大方\n[01:39.550]\n[01:41.550]你还要我怎样 要怎样\n[01:46.200]你突然来的短信就够我悲伤\n[01:51.200]我没能力遗忘 你不用提醒我\n[01:56.550]哪怕结局就这样\n[02:01.140]我还能怎样 能怎样\n[02:06.099]最后还不是落得情人的立场\n[02:11.050]你从来不会想 我何必这样\n[02:19.498]\n[02:43.538]我慢慢的回到自己的生活圈\n[02:51.788]也开始可以接触新的人选\n[03:01.248]爱你到最后 不痛不痒\n[03:06.598]留言在计较 谁爱过一场\n[03:11.248]我剩下一张 没后悔的模样\n[03:19.248]\n[03:20.848]你还要我怎样 要怎样\n[03:26.098]你千万不要在我婚礼的现场\n[03:31.098]我听完你爱的歌 就上了车\n[03:36.998]爱过你很值得\n[03:41.199]我不要你怎样 没怎样\n[03:46.098]我陪你走的路你不能忘\n[03:51.399]因为那是我 最快乐的时光\n[04:01.649]\n[04:03.699]后来我的生活还算理想\n[04:13.949]没为你落到孤单的下场\n[04:22.028]有一天晚上 梦一场\n[04:26.458]你白发苍苍 说带我流浪\n[04:32.309]我还是没犹豫 就随你去天堂\n[04:41.999]不管能怎样 我能陪你到天亮\n[04:55.069]\n",
        picUrl:'薛之谦.jpg',
        singerId: 25,
        dt: 310000,
        songUrl:"你还要我怎样-薛之谦.mp3"
    });
    await addToAlbum(songData42);
    //1463165983 薛之谦-天外来物
    const songData43 = await Song.create({
        name: '天外来物',
        artistName:'薛之谦',
        lyric:"[00:00.000] 作词 : 薛之谦\n[00:01.000] 作曲 : 罗小黑\n[00:02.000] 编曲 : 周以力\n[00:03.000] 制作人 : 周以力/郑伟\n[00:18.042]你降落的 太突然了\n[00:24.240]我刚好呢 又路过了\n[00:32.325]机会难得 又主观觉得\n[00:38.725]想明抢 又碰不得\n[00:46.157]你带来了 我的快乐\n[00:53.157]让这世界 有点颜色\n[01:00.444]我好想指责 你太随意了\n[01:06.991]宝物该有人捧着 你是不是我的\n[01:17.333]你像 天外来物一样 求之不得\n[01:24.269]你在世俗里的名字 不重要了\n[01:31.516]正好 我隐藏的人格是锲而不舍\n[01:38.299]直到蜂拥而至的人都透明了\n[01:45.943]我在 不近又不远处\n[01:49.925]用明天换你 靠近我\n[02:07.554]你占领了 我的快乐\n[02:14.406]和这世界 已没有瓜葛\n[02:21.639]任事物干渴 都褪去颜色\n[02:28.340]只有你是天蓝色 我开始找你了\n[02:40.569]会像 天外来物一样 失而复得\n[02:47.769]你在世俗里的名字 被人用了\n[02:54.662]反正 我隐藏的人格是锲而不舍\n[03:01.730]直到蜂拥而至的人都透明了\n[03:08.793]我在 不近又不远处\n[03:12.651]用明天换你 靠近我\n[03:18.765]你就像 天外来物一样 求之不得\n[03:26.717]我在世俗里的描写被取笑了\n[03:33.681]反正我隐藏的人格是非你不可\n[03:40.352]直到别有用心的人都透明了\n[03:47.895]我在 不近又不远处\n[03:52.044]用明天换你 靠近我\n[03:54.560] 吉他 : 张淞\n[03:57.076] 大提琴 : 郎莹\n[03:59.592] 鼓 : 褚伟明\n[04:02.108] 贝斯 : 努而德柯\n[04:04.624] 人声录音 : 郑伟 夏之炜 吴身宝\n[04:07.140] 人声编辑 : 郑伟\n[04:09.656] 人声录音室 : 上海广播大厦200studio\n[04:12.172] 乐器录音棚 : soundhub studio\n[04:14.688] 混音 : 全相彦 @OK master studio\n[04:17.204] 母带 : 全相彦 @OK master studio\n",
        picUrl:'薛之谦.jpg',
        singerId: 25,
        dt: 257212,
        songUrl:"薛之谦-天外来物.mp3"
    });
    await addToAlbum(songData43);
    //1466476916 周杰伦-稻香
    const songData44 = await Song.create({
        name: '稻香',
        artistName:'周杰伦',
        lyric:"[00:00.000] 作词 : 潘源\n[00:00.377] 作曲 : 潘源\n[00:00.755]编曲/录音：边边\n[00:02.061]混音/母带：边边\n[00:03.365]睁开惺忪的眼在乍寒的三月\n[00:07.805]奔忙在先人的荒原\n[00:14.132]打磨好的刀镰拼出全家饱暖\n[00:21.800]收割着未知明天\n[00:41.616]擦干泥泞的手布满苍老的茧\n[00:49.020]刻满了生命的语言\n[00:55.580]天下最美烟火是寥寥的炊烟\n[01:02.990]吃饱饭才有明天\n[01:09.290]谁来抚慰他皲裂的脸\n[01:15.822]背着命运的双肩\n[01:22.160]深埋土里的欢笑悲哀\n[01:28.730]已成遥远的呼喊\n[01:57.862]童话里的剧情总被诗人装扮\n[02:05.011]粉饰后流传了千年\n[02:11.600]抬头望着天边总是繁星灿烂\n[02:19.000]低下头才是人间\n[02:25.301]谁来抚慰他皲裂的脸\n[02:31.891]背着命运的双肩\n[02:38.490]深埋土里的欢笑悲哀\n[02:44.800]已成遥远的呼喊\n[02:51.071]谁来解开那宿命的结\n[02:57.471]柴米油盐的心酸\n[03:04.051]多少人曾耕耘天地间\n[03:10.402]憧憬着稻香的甜\n[03:17.005]多少人曾耕耘天地间\n[03:23.660]飘散在悠悠岁月\n",
        picUrl:'周杰伦.jpg',
        singerId: 27,
        dt: 224206,
        songUrl:"周杰伦-告白气球.mp3"
    });
    await addToAlbum(songData44);
    //452804665 周杰伦-告白气球mp3
    const songData45 = await Song.create({
        name: '告白气球',
        artistName:'周杰伦',
        lyric:"[00:00.000] 作词 : Mc梦柯\n[00:01.000] 作曲 : Mc梦柯\n[00:03.310]若我把这告白写在气球上\n[00:05.500]让它随风飘荡，摇摇晃晃\n[00:07.750]你会接受这一切么\n[00:12.550]若把告白写在气球让它随风在漂流\n[00:15.000]是否还有别的理由让你再一次回头\n[00:17.530]告白写在气球之上让它随风在飘荡\n[00:19.940]随着微风摇摇晃晃是否记得我模样\n[00:22.430]再饮左岸的咖啡 紧握手中这一杯\n[00:24.860]你说你有点难追 花店是谁的玫瑰\n[00:27.460]名字是被谁写错 气球缓缓的飘过\n[00:29.960]能否让我许下承诺枫叶缓缓的飘落\n[00:32.720]什么才是最珍贵 对不起我不后退\n[00:35.010]营造浪漫的约会 让我看到你妩媚\n[00:37.430]一路香榭的落叶 不怕搞砸这一切\n[00:39.770]拥有你就拥有世界一轮皎洁的明月\n[00:42.530]自从爱你那天起 你就在我的心里\n[00:45.030]是你让我提起了笔写出情歌这一曲\n[00:47.420]你的笑在我心系 无法忘却的甜蜜\n[00:49.840]原来笑的那么轻易只要为你的努力\n[00:52.550]别任性你的眼睛 求你把我来看清\n[00:55.270]我愿做你的雄鹰 为你嘶吼碎流星\n[00:57.460]恋爱日记为你写 微笑嘴角为你咧\n[00:59.720]希望这情你能理解让我为你去狂野\n[01:02.510]为你做尽一生梦 为你我心在跳动\n[01:04.820]为你我心才会痛 这首歌我为你讼\n[01:07.220]能否说出你愿意 让我为你去努力\n[01:09.730]告白气球告白一句能否陪演一生戏\n[01:13.590]能陪我演一场从现在到死一直在一起的戏么\n",
        picUrl:'周杰伦.jpg',
        singerId: 27,
        dt: 95921,
        songUrl:"周杰伦-告白气球.mp3"
    });
    await addToAlbum(songData45);
    //1492150296 周杰伦-七里香
    const songData46 = await Song.create({
        name: '七里香',
        artistName:'周杰伦',
        lyric:"[00:00.000] 作词 : 无\n[00:01.000] 作曲 : 无\n[00:25.86]初次见你腼腆的露出微笑\n[00:30.53]谁让我收到恋爱的讯号\n[00:34.00]纷乱世界怦然心动的美好\n[00:39.81]喜欢轻轻吻你在我的怀抱\n[00:43.74]安静感受你那柔软的发梢\n[00:47.14]小小肩膀也有大大的依靠\n[00:52.4]把复杂的生活过简单\n[00:55.76]因为有你相伴\n[00:59.61]我多想就这样牵着你的手到永远\n[01:05.50]有幸与你相爱\n[01:07.83]余生为你而来\n[01:11.80]有幸命运安排\n[01:14.48]要和你一起看花海\n[01:18.59]有幸这份对白\n[01:20.82]长路漫漫不曾更改\n[01:26.12]只要你在\n[01:27.61]我三生都期待\n[01:45.27]把复杂的生活过简单\n[01:48.40]因为有你相伴\n[01:52.19]我多想就这样牵着你的手到永远\n[01:57.76]有幸与你相爱\n[02:00.43]余生为你而来\n[02:04.49]有幸命运安排\n[02:07.3]要和你一起看花海\n[02:11.27]有幸这份对白\n[02:13.59]长路漫漫不曾更改\n[02:18.65]只要你在\n[02:20.25]我三生都期待\n[02:33.85]有幸与你相爱\n[02:36.70]余生为你而来\n[02:40.55]有幸命运安排\n[02:43.35]要和你一起看花海\n[02:47.39]有幸这份对白\n[02:49.79]长路漫漫不曾更改\n[02:54.80]只要你在\n[02:56.50]我三生都期待\n[03:00.15]有幸与你相爱\n[03:02.94]余生为你而来\n[03:06.94]有幸命运安排\n[03:09.52]要和你一起看花海\n[03:13.50]有幸这份对白\n[03:15.98]长路漫漫不曾更改\n[03:21.11]只要你在\n[03:22.85]我三生都期待\n[03:27.51]只要你在\n[03:29.96]我三生都期待\n",
        picUrl:'周杰伦.jpg',
        singerId: 27,
        dt: 157120,
        songUrl:"周杰伦-七里香.mp3"
    });
    await addToAlbum(songData46);
    //1357068635 周杰伦-听妈妈的话
    const songData47 = await Song.create({
        name: '听妈妈的话',
        artistName:'周杰伦',
        lyric: "[00:00.000] 作词 : Toy killer\n[00:01.000] 作曲 : Toy killer\n[00:03.575]编曲：ROKOTENSEI\n[00:12.323]Hook：\n[00:13.074]要你听妈妈的话，不要再去恋爱啦\n[00:16.537]要你听妈妈的话，回学校好好学习吧\n[00:20.031]要你听妈妈的话，长大不要后悔啦\n[00:23.535]要你听妈妈的话，弹完钢琴学书法\n[00:27.036]Verse1：\n[00:27.287]在屋里熟悉你的主意\n[00:28.786]并努力收集你的书籍\n[00:30.533]有那么多的问题要处理\n[00:32.283]不要哭泣处理你的主题\n[00:34.036]诶 帅哥 加个微信\n[00:36.286]神秘感向我推进\n[00:38.033]没有那么多美金\n[00:39.287]不好意思 我妈不同意\n[00:41.282]先脱掉我的外衣\n[00:43.033]再熟悉你的来意\n[00:44.532]不需要对我猜忌\n[00:46.286]行为真有点怪异\n[00:48.037]不是不想同意只缺少一些本能力\n[00:51.280]我拥有实力只是不想浪费人民币~\n[00:55.032]Hook：\n[01:07.787]要你听妈妈的话，不要再去恋爱啦\n[01:11.283]要你听妈妈的话，回学校好好学习吧\n[01:14.786]要你听妈妈的话，长大不要后悔啦\n[01:18.036]要你听妈妈的话，弹完钢琴学书法\n[01:21.533]Verse：\n[01:22.036]我不想再看你一眼 看你一眼\n[01:25.537]你不要再对我欺骗 对我欺骗\n[01:28.786]像我这么乖的孩子从来不会喝酒吸烟\n[01:32.282]请不要再对我怀疑这就是我的意愿\n[01:35.536]我哪有那么多小baby\n[01:37.219]赶快送你一架纸飞机\n[01:38.969]不会拥有新的小回忆\n[01:40.715]那些******别打我的主意\n[01:42.469]我没有那么多的绝望 请你别对我在意\n[01:45.718]不会像你一样的倔强 请你找个人把我代替\n",
        picUrl:'周杰伦.jpg',
        singerId: 27,
        dt: 123998,
        songUrl:"周杰伦-听妈妈的话.mp3"
    });
    await addToAlbum(songData47);
    //1908002535 周杰伦-夜曲
    const songData48 = await Song.create({
        name: '夜曲',
        artistName:'周杰伦',
        lyric:"[00:00.000] 作词 : 我的周杰伦\n[00:01.000] 作曲 : 我的周杰伦\n[00:02.000] 编曲 : 我的周杰伦\n[00:24.800]仍然倚在失眠夜望天边星宿\n[00:30.800]仍然听见小提琴如泣似诉再挑逗\n[00:36.800]为何只剩一弯月留在我的天空\n[00:43.800]这晚以后音讯隔绝\n[00:48.800]人如天上的明月是不可拥有\n[00:54.800]情如曲过只遗留无可挽救再分别\n[00:59.800]为何只是失望填密我的空虚\n[01:06.800]这晚夜没有吻别\n[01:12.800]仍在说永久想不到是借口\n[01:19.800]从未意会要分手\n[01:27.800]但我的心每分每刻仍然被她占有\n[01:34.800]她似这月儿仍然是不开口\n[01:38.800]提琴独奏独奏着明月半倚深秋\n[01:45.800]我的牵挂我的渴望 直至以后\n[02:20.800]仍然倚在失眠夜望天边星宿\n[02:28.300]仍然听见小提琴如泣似诉再挑逗\n[02:34.300]为何只剩一弯月留在我的天空\n[02:41.300]这晚以后音讯隔绝\n[02:46.300]人如天上的明月是不可拥有\n[02:52.300]情如曲过只遗留无可挽救再分别\n[02:58.300]为何只是失望填密我的空虚\n[03:05.000]这晚夜没有吻别\n[03:10.000]仍在说永久想不到是借口\n[03:16.000]从未意会要分手\n[03:25.000]但我的心每分每刻仍然被她占有\n[03:32.000]她似这月儿仍然是不开口\n[03:37.000]提琴独奏独奏着明月半倚深秋\n[03:43.000]我的牵挂我的渴望 直至以后\n[03:49.000]仍在说永久想不到是借口\n[03:55.000]从未意会要分手\n[04:04.000]但我的心每分每刻仍然被她占有\n[04:11.000]她似这月儿仍然是不开口\n[04:16.000]提琴独奏独奏着明月半倚深秋\n[04:22.000]我的牵挂我的渴望 直至以后\n",
        picUrl:'周杰伦.jpg',
        singerId: 27,
        dt: 291134,
        songUrl:"周杰伦-夜曲.mp3"
    });
    await addToAlbum(songData48);
    //1926042033 周杰伦-一路向北
    const songData49 = await Song.create({
        name: '一路向北',
        artistName:'周杰伦',
        lyric: "作词 : CampNouu\n作曲 : CampNouu\n编曲 : CampNouu\n后视镜里的世界\n \n越来越远的道别\n你转身向背\n侧脸还是很美\n我用眼光去追\n竟听见你的泪\n \n在车窗外面徘徊\n \n是我错失的机会\n你站的方位\n跟我中间隔着泪\n街景一直在后退\n你的崩溃在窗外零碎\n我一路向北\n离开有你的季节\n你说你好累\n已无法再爱上谁\n风在山路吹\n过往的画面全都是我不对\n细数惭愧 我伤你几回\n \n后视镜里的世界\n \n越来越远的道别\n你转身向背\n侧脸还是很美\n我用眼光去追\n竟听见你的泪\n \n在车窗外面徘徊\n \n是我错失的机会\n你站的方位\n跟我中间隔着泪\n街景一直在后退\n你的崩溃在窗外零碎\n我一路向北\n离开有你的季节\n你说你好累\n已无法再爱上谁\n风在山路吹\n过往的画面全都是我不对\n细数惭愧 我伤你几回\n我一路向北\n离开有你的季节\n方向盘周围\n回转着我的后悔\n我加速超越\n却甩不掉紧紧跟随的伤悲\n细数惭愧 我伤你几回\n停止狼狈 就让错纯粹\n\n\n",
        picUrl:'周杰伦.jpg',
        singerId: 27,
        dt: 354831
    });
    await addToAlbum(songData49);
    //1349292048 Ice Paper-心如止水
    const songData50 = await Song.create({
        name: '心如止水',
        artistName:'Ice Paper',
        lyric: "[00:00.000] 作词 : Ice Paper\n[00:00.294] 作曲 : Ice Paper\n[00:00.588]编曲：Ice Paper\n[00:00.838]混音：Ice Paper\n[00:00.941]采样：QUIX - Deep Home\n[00:01.042]talking to the moon 放不下的理由\n[00:03.697]是不是会担心 变成一只野兽\n[00:07.957]walking on the roof 为心跳的节奏\n[00:11.214]是不是会暂停 在世界的尽头\n[00:16.225]浸泡在十公升的瓶里\n[00:18.732]单纯想要呼吸 讨厌云里雾里\n[00:23.744]出没在被遗忘的抽屉\n[00:26.250]你曾经的手笔 写着心口不一\n[00:31.264]现在是黑夜白昼我都随便\n[00:35.025]像迷路的天鹅游失在水面\n[00:38.785]尽力去捕捉噩梦里的碎片\n[00:42.544]不需要你的歌来帮我催眠\n[00:45.554]talking to the moon 放不下的理由\n[00:48.813]是不是会担心 变成一只野兽\n[00:53.075]walking on the roof 为心跳的节奏\n[00:56.333]是不是会暂停 在时间的尽头\n[01:00.593]说不完的话 找不完的借口\n[01:03.851]是不是会狠心 把我骄傲解剖\n[01:08.111]爱着谁的她 能否将你接受\n[01:11.370]是不是会上瘾 拜托慢些降落\n[01:15.381]华丽的红房间 发霉的旧唱片\n[01:19.140]没必要听个遍 掉了漆的播放键\n[01:22.900]你情愿冒着险 睡在他的身边\n[01:26.659]没耐心去分辨 谁和谁能够走多远\n[01:30.420]穿过几条街就能找到关键\n[01:34.180]解开我的问题没什么悬念\n[01:37.940]转了几个弯还是回到原点\n[01:41.697]我该如何出现在你的面前\n[01:45.458]talking to the moon 放不下的理由\n[01:48.715]是不是会担心 变成一只野兽\n[01:52.977]walking on the roof 为心跳的节奏\n[01:56.236]是不是会暂停 在时间的尽头\n[02:00.498]说不完的话 找不完的借口\n[02:03.757]是不是会狠心 把我骄傲解剖\n[02:08.020]爱着谁的她 能否将你接受\n[02:11.531]是不是会上瘾 拜托慢些降落\n[02:15.540]talking to the moon 放不下的理由\n[02:18.799]是不是会担心 变成一只野兽\n[02:23.058]walking on the roof 为心跳的节奏\n[02:26.318]是不是会暂停 在时间的尽头\n[02:30.579]说不完的话 找不完的借口\n[02:33.836]是不是会狠心 把我骄傲解剖\n[02:38.099]爱着谁的她 能否将你接受\n[02:41.359]是不是会上瘾 拜托慢些降落\n",
        picUrl:'Ice Paper.jpg',
        singerId: 9,
        dt: 185390,
        songUrl:"心如止水-Ice Paper.mp3"
    });
    await addToAlbum(songData50);
    //864498975 Ice Paper-中间人
    const songData51 = await Song.create({
        name: '心如止水',
        artistName:'Ice Paper',
        lyric:"[00:00.000] 作词 : Ice Paper\n[00:01.000] 作曲 : Ice Paper\n[00:16.640]编曲：Ice Paper\n[00:22.740]混音：Ice Paper\n[00:23.610]肯定一个我听说的非常简单\n[00:29.840]否定一个你认定的更加困难\n[00:35.580]还有什么不能说\n[00:38.930]还有什么不能做\n[00:41.860]WTF Baby\n[00:44.190]你向右或是左\n[00:48.430]总有个不起眼的人上着夜班\n[00:54.320]假如有天蚂蚁都会进化野蛮\n[01:00.509]身边还有多少人\n[01:03.718]忙忙碌碌的早晨\n[01:06.737]WTF Baby\n[01:08.750]你向右或是左\n[01:12.078]\n[01:25.360]想想曾经的我真是不留情面\n[01:31.518]当着朋友发的脾气无一幸免\n[01:37.470]每个人都会做错\n[01:40.660]错后应该怎么做\n[01:43.619]WTF Baby\n[01:45.878]你向右或是左\n[01:50.060]现在的我还没有资格去享受\n[01:56.080]管它耗了多久时间空空两手\n[02:02.259]也许是我的理由\n[02:05.298]也许是我不将就\n[02:08.280]WTF Baby\n[02:10.550]你向右或是左\n[02:14.979]少数的人知道该怎么走\n[02:21.288]超过一半的只会点着头\n[02:26.989]燃烧不完的烟我接着抽\n[02:32.929]没错头疼的不一定是我\n[02:39.679]天知道这片海要游多久\n[02:45.348]谁在渴望自己永垂不朽\n[02:51.878]现在是新的以后也会旧\n[02:57.628]所以我不向左也不向右\n[03:04.528]\n",
        picUrl:'Ice Paper.jpg',
        singerId: 9,
        dt: 200769,
        songUrl:"中间人-Ice Paper.mp3"
    });
    await addToAlbum(songData51);
    //1834403594 VodKe-Chase
    const songData52 = await Song.create({
        name: 'Chase',
        artistName:'VodKe',
        lyric:"[00:00.000] 作词 : VodKa/琛佬/HSHK\n[00:01.000] 作曲 : VodKa/HSHK/琛佬\n[00:02.726]And theres a woman\n[00:09.972]A woman... i love\n[00:16.959]And i got close\n[00:28.711]I nearly got ****ing everything\n[01:33.183]A woman... i love\n[01:39.935]And i got close\n",
        picUrl:'VodKe.jpg',
        singerId: 23,
        dt: 173629,

    });
    await addToAlbum(songData52);
    //1872000017 VodKe,KVKS,花凯-Ping (MP)
    const songData53 = await Song.create({
        name: 'Ping (MP)',
        artistName:'VodKe',
        lyric:"作曲 : Vodke\n无\n",
        picUrl:'VodKe.jpg',
        singerId: 23,
        dt: 142649,
        songUrl:"Ping (MP)-VodKe、HSHK.mp3"

    });
    await addToAlbum(songData53);
    //41631921 Zedd,Jon Bellion-Beautiful Now
    const songData54 = await Song.create({
        name: 'Beautiful Now',
        artistName:'Zedd',
        lyric:"[00:02.80]I see what you're wearing, there's nothing beneath it\n[00:06.27]Forgive me for staring, forgive me for breathing\n[00:10.13]We might not know why, we might not know how\n[00:13.59]But baby, tonight, we're beautiful now\n[00:17.56]\n[00:17.61]We're beautiful now\n[00:21.39]We're beautiful now\n[00:24.57]\n[00:25.35]We might not know why, we might not know how\n[00:28.83]But baby, tonight, we're beautiful now\n[00:32.62]We'll light up the sky, we'll open the clouds\n[00:36.19]'Cause baby, tonight, we're beautiful now, we're beautiful\n[00:41.24]\n[00:55.08]We're beautiful\n[00:56.66]\n[01:10.22]Wherever it's going, I'm gonna chase it\n[01:13.93]What's left of this moment, I'm not gonna waste it\n[01:17.66]Stranded together, our worlds have collided\n[01:21.31]This won't be forever, so why try to fight it?\n[01:24.97]\n[01:25.03]We're beautiful now\n[01:28.90]We're beautiful now\n[01:32.02]\n[01:32.69]We might not know why, we might not know how\n[01:36.35]But baby, tonight, we're beautiful now\n[01:40.07]We'll light up the sky, we'll open the clouds\n[01:43.64]'Cause baby, tonight, we're beautiful now, we're beautiful\n[01:48.86]\n[02:02.58]We're beautiful\n[02:03.64]\n[02:34.11]Let's live tonight like fireflies\n[02:37.91]And one by one light up the sky\n[02:41.44]We disappear and pass the crown\n[02:45.21]You're beautiful, you're beautiful\n[02:47.40]\n[02:47.72]We're beautiful now\n[02:50.95]We're beautiful now\n[02:54.76]We're beautiful now\n[02:58.50]We're beautiful now\n[03:02.00]\n[03:02.18]We're beautiful\n[03:09.34]We're beautiful, we're beautiful now\n[03:17.50]We're beautiful now\n[03:21.49]We're beautiful now\n[03:25.25]We're beautiful now\n[03:28.87]We're beautiful now, we're beautiful\n",
        picUrl:'Zedd.jpg',
        singerId: 28,
        dt: 218293,
        songUrl:"Beautiful Now-Zedd、Jon Bellion.mp3"
    });
    await addToAlbum(songData54);
    //514761281 白羊-徐秉龙、沈以诚
    const songData55 = await Song.create({
        name: '白羊',
        artistName:'沈以诚',
        lyric:"[00:00.000] 作词 : 徐秉龙\n[00:01.000] 作曲 : 徐秉龙\n[00:04.290]编曲：徐秉龙\n[00:05.290]你有多少胜算\n[00:07.250]把我困在里面\n[00:09.450]你设计的城堡太糟糕\n[00:13.990]我一起飞 就能逃跑\n[00:18.570]可你粲然一笑\n[00:20.600]我心事就潦草\n[00:23.170]你裙下的人间太美妙\n[00:27.690]好想把你 一口气全部吃掉\n[00:33.350]\n[00:34.940]多热烈的白羊\n[00:37.270]多善良多抽象\n[00:39.410]多完美的她呀\n[00:41.400]却是下落不详\n[00:44.100]心好空荡\n[00:46.230]都快要 失去形状\n[00:52.960]青春一记荒唐\n[00:55.230]亦然学着疯狂\n[00:57.510]这声色太张扬\n[00:59.620]这欢愉太理想\n[01:02.170]先熄灭心跳\n[01:05.060]才能拥抱\n[01:08.950]\n[01:31.170]几千几万个你\n[01:33.490]几千几万个我\n[01:35.520]一起躲进 这浪漫的回合\n[01:40.090]然后沉迷 你诗写一般的身体\n[01:47.490]多热烈的白羊\n[01:49.480]热烈得好抽象\n[01:51.700]抽象掩盖欲望\n[01:53.870]却又欲盖弥彰\n[01:56.520]我要嚣张\n[01:58.770]嚣张到 失去形状\n[02:05.250]青春一记荒唐\n[02:07.610]亦然学着疯狂\n[02:09.900]这声色太张扬\n[02:12.060]这欢愉太理想\n[02:14.850]先熄灭心跳\n[02:17.570]才能拥抱\n[02:22.090]\n[02:23.630]青春一记荒唐\n[02:25.820]亦然学着疯狂\n[02:28.050]这声色太张扬\n[02:30.260]这欢愉太理想\n[02:33.060]这归途太远\n[02:35.830]要迷人且倔强\n[02:41.240]制作人：徐秉龙\n[02:41.500]和声编写：徐秉龙\n[02:42.000]和声配唱：徐秉龙\n[02:42.400]吉他：徐秉龙\n[02:42.800]鼓：徐秉龙\n[02:43.200]B-Box:陆颢哲\n[02:43.600]Program：周果亦\n[02:44.400]吉他编写：徐秉龙 武言圣\n[02:45.000]混音：谭聪\n[02:45.400]封面设计：徐秉龙\n[02:46.240]母带：谭聪\n[02:47.999]发行公司：亚合娱乐\n",
        picUrl:'沈以诚.jpg',
        singerId: 20,
        dt: 168420,
        songUrl:"白羊-徐秉龙、沈以诚.mp3"
    });
    await addToAlbum(songData55);
    //1380262830 超喜欢你-沈以诚
    const songData56 = await Song.create({
        name: '超喜欢你',
        artistName:'沈以诚',
        lyric:"[00:00.000] 作词 : 陈信延\n[00:00.732] 作曲 : 杨子朴\n[00:01.464]原唱：飞轮海\n[00:02.970]制作人：胡皓@光合声动\n[00:04.657]编曲：张楚弦@光合声动\n[00:08.625]\n[00:13.138]心跳快得很可怕\n[00:15.956]呼吸大到有气压\n[00:18.706]手心冒汗可以浇花\n[00:24.415]生活变四格漫画\n[00:27.215]喜怒哀乐被放大\n[00:29.942]身不由己没有办法\n[00:34.842]怎么可以这样\n[00:36.093]怎么可以这样疯狂\n[00:40.434]怎么可以这样\n[00:41.640]怎么可以这样\n[00:43.375]爱超出了想象\n[00:46.043]就算世界与我为敌\n[00:48.819]我超喜欢你\n[00:51.638]超喜欢你不能分离\n[00:54.406]我只相信这个真理\n[00:57.224]百无禁忌万夫莫敌\n[01:00.003]我超喜欢你\n[01:02.481]我慢慢不能清醒\n[01:04.120]终于不想清醒\n[01:05.536]根本不用清醒 这个恶作剧\n[01:14.581]想要对你说的话\n[01:17.355]身体已替我表达\n[01:20.168]一旦爱了不能作假\n[01:25.769]一度觉得很头大\n[01:28.727]怀疑细胞有偏差\n[01:31.248]可是爱了没有办法\n[01:35.855]就是可以这样就是可以这样疯狂\n[01:41.962]就是可以这样就是可以这样\n[01:44.489]爱超出了想象\n[01:50.159]就算世界与我为敌\n[01:53.022]我超喜欢你\n[01:55.775]超喜欢你不能分离\n[01:58.546]我只相信这个真理\n[02:01.371]百无禁忌万夫莫敌\n[02:04.186]我超喜欢你\n[02:06.989]我慢慢不能清醒\n[02:08.354]终于不想清醒\n[02:09.703]根本不用清醒 这个恶作剧\n[02:35.000]就算世界与我为敌\n[02:37.580]我超喜欢你\n[02:40.399]超喜欢你不能分离\n[02:43.216]我只相信这个真理\n[02:46.006]百无禁忌万夫莫敌\n[02:48.785]我超喜欢你\n[02:51.602]我慢慢不能清醒\n[02:52.948]终于不想清醒\n[02:54.333]根本不用清醒这个恶作剧\n[02:57.473]就算世界与我为敌\n[03:00.032]我超喜欢你\n[03:02.782]超喜欢你不能分离\n[03:05.544]我只相信这个真理\n[03:08.383]百无禁忌万夫莫敌\n[03:11.133]我超喜欢你\n[03:13.734]我慢慢不能清醒\n[03:15.295]终于不想清醒\n[03:16.699]根本不用清醒 这个恶作剧\n[03:25.726]和声编写：何文锐@光合声动\n[03:26.028]和声：沈以诚 何文锐@光合声动\n[03:26.325]合唱：沈以诚 王欣宇 何文锐 胡皓\n[03:26.627]吉他 & Ukelele：张楚弦@光合声动\n[03:26.921]Banjo：Matt Hornbeck\n[03:27.240]Fiddle：Lacy Rostyak\n[03:27.561]Bass：王瀚一\n[03:27.864]鼓：祁大为\n[03:28.222]鼓录音师/室：樊俊@光合声动/Megawave Studio BJ\n[03:28.542]Banjo & Fiddle录音：Josh Lewis@The Evergreen Stage（L.A）\n[03:28.910]Vocal录音：徐志明@Studio 21A\n[03:29.132]音频编辑：樊俊@光合声动\n[03:29.397]Mixing & Mastering：张楚弦@光合声动\n[03:29.597]项目统筹：葛语谦\n[03:29.797]总策划：黄俊/乃可\n[03:29.997]企划：陈蓉/刘静雯/黄辉媛\n",
        picUrl:'沈以诚.jpg',
        singerId: 20,
        dt: 210836,
        songUrl:"超喜欢你-沈以诚.mp3"
    });
    await addToAlbum(songData56);
    //1365898499 失眠飞行-接个吻，开一枪、沈以诚、薛黛霏.mp3
    const songData57 = await Song.create({
        name: '失眠飞行-接个吻，开一枪',
        artistName:'沈以诚',
        lyric:"[00:00.000] 作词 : 沈以诚/刘思鉴/接个吻，开一枪\n[00:00.150] 作曲 : 接个吻，开一枪\n[00:00.300]编曲：接个吻，开一枪\n[00:00.800]混音：接个吻，开一枪\n[00:02.600]想要和你低空飞行\n[00:05.400]和你到处收集氧气\n[00:07.650]假如迷雾你看不清\n[00:10.440]不如坠入我的心里\n[00:13.150]想带你从吵闹到安宁\n[00:15.650]想带你从多云到转晴\n[00:17.700]想要为你整理衬衣\n[00:20.400]为你到处收集诗句\n[00:23.600]又过了每晚给你热牛奶的时间\n[00:26.400]床头还写着我们没看完的影片\n[00:28.700]离开后的时间里你是否还失眠\n[00:31.450]从不熬夜的我也明显黑了眼圈\n[00:33.700]你送的玩偶依然陪在身边\n[00:38.700]记忆逐渐浮现从开始到终点 又重演\n[00:42.700]我想和你 一起闯进森林潜入海底\n[00:47.700]我想和你 一起看日出到日落天气\n[00:52.650]我想和你穿过格林威治和时间飞行\n[00:57.700]我想见你 穿过教堂和人海拥抱你\n[01:02.499]我想和你\n[01:13.099]我想和你\n[01:23.599]想要和你低空飞行\n[01:25.900]和你到处收集氧气\n[01:28.400]假如迷雾你看不清\n[01:30.900]不如坠入我的心里\n[01:33.799]想带你从吵闹到安宁\n[01:36.549]想带你从多云到转晴\n[01:38.599]想要为你整理衬衣\n[01:41.450]为你到处收集诗句\n[01:44.450]又过了每晚给你热牛奶的时间\n[01:46.799]床头还写着我们没看完的影片\n[01:49.599]离开后的时间里你是否还失眠\n[01:52.299]从不熬夜的我也明显黑了眼圈\n[01:54.599]你送的玩偶依然陪在身边\n[01:59.599]记忆逐渐浮现从开始到终点 又重演\n[02:03.599]我想和你 一起闯进森林潜入海底\n[02:08.598]我想和你 一起看日出到日落天气\n[02:13.449]我想和你穿过格林威治和时间飞行\n[02:18.658]我想见你 穿过教堂和人海拥抱你\n[02:23.649]我想和你\n[02:33.699]我想和你\n[02:43.998]我想和你\n[02:46.098]再路过那家咖啡店\n[02:48.479]熟悉又陌生的地点\n[02:50.399]驻足希望你的身影会出现\n[02:55.998]还没说出口的抱歉\n[02:58.449]曾和你约定的诺言\n[03:00.498]抬头闭眼让泪流进心里面\n[03:04.348]我想和你 一起闯进森林潜入海底\n[03:09.449]我想和你 一起看日出到日落天气\n[03:14.479]我想和你穿过格林威治和时间飞行\n[03:18.748]我想见你 穿过教堂和人海拥抱你\n[03:24.799]电吉他：接个吻，开一枪\n[03:25.149]木吉他：接个吻，开一枪\n",
        picUrl:'沈以诚.jpg',
        singerId: 20,
        dt: 207157,
        songUrl:"失眠飞行-接个吻，开一枪、沈以诚、薛黛霏.mp3"
    });
    await addToAlbum(songData57);
    //471268393 狂恋你-沈以诚
    const songData58 = await Song.create({
        name: '狂恋你',
        artistName:'沈以诚',
        lyric:"[99:00.00]纯音乐，请欣赏\n",
        picUrl:'沈以诚.jpg',
        singerId: 20,
        dt: 278857,
        songUrl:"狂恋你-沈以诚.mp3"
    });
    await addToAlbum(songData58);

    await Album_Song.create({
        albumId: 1,
        songId: 1
    })
    await Album_Song.create({
        albumId: 1,
        songId: 2
    })
    await Album_Song.create({
        albumId: 1,
        songId: 3
    })
    await Album_Song.create({
        albumId: 1,
        songId: 4
    })
    await Album_Song.create({
        albumId: 1,
        songId: 5
    })
    await Album_Song.create({
        albumId: 1,
        songId: 6
    })
    await Album_Song.create({
        albumId: 1,
        songId: 7
    })
    await Album_Song.create({
        albumId: 1,
        songId: 8
    })
    await Album_Song.create({
        albumId: 1,
        songId: 9
    })
    await Album_Song.create({
        albumId: 1,
        songId: 10
    })
    await Album_Song.create({
        albumId: 2,
        songId: 11
    })
    await Album_Song.create({
        albumId: 2,
        songId: 12
    })
    await Album_Song.create({
        albumId: 2,
        songId: 13
    })
    await Album_Song.create({
        albumId: 2,
        songId: 14
    })
    await Album_Song.create({
        albumId: 2,
        songId: 15
    })
    await Album_Song.create({
        albumId: 2,
        songId: 16
    })
    await Album_Song.create({
        albumId: 2,
        songId: 17
    })
    await Album_Song.create({
        albumId: 2,
        songId: 18
    })
    await Album_Song.create({
        albumId: 2,
        songId: 19
    })
    await Album_Song.create({
        albumId: 2,
        songId: 10
    })
    await Album_Song.create({
        albumId:3,
        songId: 21
    })
    await Album_Song.create({
        albumId:3,
        songId: 22
    })
    await Album_Song.create({
        albumId: 3,
        songId:  23
    });
    await Album_Song.create({
        albumId: 3,
        songId:  24
    });
    await Album_Song.create({
        albumId: 3,
        songId:  25
    });
    await Album_Song.create({
        albumId: 23,
        songId:  26
    });
    await Album_Song.create({
        albumId: 3,
        songId:  27
    });
    await Album_Song.create({
        albumId: 3,
        songId:  28
    });
    await Album_Song.create({
        albumId: 12,
        songId:  21
    })
    await Album_Song.create({
        albumId: 12,
        songId:  22
    })
    await Album_Song.create({
        albumId: 12,
        songId:  23
    })
    await Album_Song.create({
        albumId: 12,
        songId:  24
    })
    await Album_Song.create({
        albumId: 13,
        songId:  25
    })
    await Album_Song.create({
        albumId: 13,
        songId:  2
    })
    await Album_Song.create({
        albumId: 13,
        songId:  3
    })
    await Album_Song.create({
        albumId: 13,
        songId:  4
    })
    await Album_Song.create({
        albumId: 13,
        songId:  5
    })
    await Album_Song.create({
        albumId: 14,
        songId:  6
    })
    await Album_Song.create({
        albumId: 14,
        songId:  1
    })
    await Album_Song.create({
        albumId: 14,
        songId:  2
    })
    await Album_Song.create({
        albumId: 14,
        songId:  3
    })
    await Album_Song.create({
        albumId: 14,
        songId:  4
    })
    await Album_Song.create({
        albumId: 14,
        songId:  5
    })
    await Album_Song.create({
        albumId: 15,
        songId:  1
    })
    await Album_Song.create({
        albumId: 15,
        songId:  2
    })
    await Album_Song.create({
        albumId: 15,
        songId:  3
    })
    await Album_Song.create({
        albumId: 15,
        songId:  4
    })
    await Album_Song.create({
        albumId: 15,
        songId:  5
    })
    await Album_Song.create({
        albumId: 15,
        songId:  6
    })
    await Album_Song.create({
        albumId: 16,
        songId:  1
    })
    await Album_Song.create({
        albumId: 16,
        songId:  2
    })
    await Album_Song.create({
        albumId: 16,
        songId:  3
    })
    await Album_Song.create({
        albumId: 16,
        songId:  4
    })
    await Album_Song.create({
        albumId: 16,
        songId:  5
    })
    await Album_Song.create({
        albumId: 16,
        songId:  6
    })
    await Admin.create({
        name: 'admin',
        password: '1234'
    });
    await User_Album.create({
        userId: 1,
        albumId: 1
    })
    await User_Album.create({
        userId: 1,
        albumId: 2
    })
    await User_Album.create({
        userId: 1,
        albumId: 32 ,
        isLike: 1
    })
    await User_Album.create({
        userId: 3,
        albumId: 33,
        isLike: 1
    })
    await User_Album.create({
        userId: 3,
        albumId: 2,
        isCollection: 1
    })
    await User_Album.create({
        userId: 2,
        albumId: 1,
        isCollection: 1
    });




})()




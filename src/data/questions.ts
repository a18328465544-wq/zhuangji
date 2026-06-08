import { QuizQuestion } from "../types";

export const questions: QuizQuestion[] = [
  {
    id: 1,
    title: "你决定装机的第一步，首先会打开什么去寻找『灵感』？",
    description: "这是切入极客世界的起点，你的首选决定了你的极客段位。",
    options: [
      {
        text: "B站/贴吧，找最硬核的高端装机视频或极限跑分拷机评测",
        scores: { rtx4090Gambler: 2, rtx5090Faith: 2, a6000Alchemist: 1 }
      },
      {
        text: "小红书/Pinterest，搜极简无杂物的高颜值纯白桌搭、无光轻奢设计",
        scores: { rgbAristocrat: 2, macElegantOffice: 2, itxEnthusiast: 1 }
      },
      {
        text: "闲鱼/拼多多，输入『带箱打包』、『工作室清仓』或『纯自用退役卡』",
        scores: { minerCardAdventurer: 2, scrapCollectorWarlord: 2, techMarketSlicker: 1 }
      },
      {
        text: "看看自己的存折或微信余额，然后洗一把脸，默念『够用就好，多看一秒都是不理智』",
        scores: { rtx4060Rational: 2, coreGraphicsSaint: 2, buildChiveRookie: 1, handheldGamer: 1 }
      }
    ]
  },
  {
    id: 2,
    title: "关于主机的『RGB 霓虹呼吸灯』，你的真实态度是？",
    description: "在这场无声的多彩光影大战中，你的信仰色彩到底指向哪里？",
    options: [
      {
        text: "灯！灯！灯！必须拉满神光同步！只要机箱会呼吸，性能心理战力暴涨 50% 哪怕晃瞎双眼！",
        scores: { rgbAristocrat: 3, buildChiveRookie: 1 }
      },
      {
        text: "克制温和。只接受主板卡缝透出的一丝高雅白光或高定单色气垫，拒绝马戏团迪厅风格",
        scores: { rtx4060Rational: 1, itxEnthusiast: 2, rtx4090Gambler: 1 }
      },
      {
        text: "零光污染。坚决不要一丝亮光，甚至机箱都要无侧透的金属闷罐，安心睡眠更重要",
        scores: { coreGraphicsSaint: 3, a6000Alchemist: 2, macElegantOffice: 2 }
      },
      {
        text: "随便，灯亮起来能稍微照亮我鞋盒或者墙上拴线的那堆散热铁鳍就行，有条件直接拔了线",
        scores: { scrapCollectorWarlord: 3, minerCardAdventurer: 1 }
      }
    ]
  },
  {
    id: 3,
    title: "当听到网上有『某高端卡电源线接口在高负荷下有概率熔毁』的传说，你会？",
    description: "在硬件安全性与绝对性能的极客悬崖边缘，你是一个温和派还是一个赌徒？",
    options: [
      {
        text: "慌什么？直接上顶级钛金电源 + 昂贵订制发光高硬硅胶线，信仰必须顶着电解融化继续冲！",
        scores: { rtx4090Gambler: 2, rtx5090Faith: 2 }
      },
      {
        text: "瞬间退缩。立刻把电源安全手册背诵三遍，果断锁定超稳超冷、只有 115W 功耗的低风险方案",
        scores: { coreGraphicsSaint: 2, rtx4060Rational: 2, macElegantOffice: 1 }
      },
      {
        text: "这算啥？我都敢上闲鱼捞核心微黄的二手矿卡买盲盒，电源线冒点烟都是极客生涯的一味调味剂",
        scores: { minerCardAdventurer: 2, scrapCollectorWarlord: 1 }
      },
      {
        text: "买下所有温度计传感器，时刻测接口温，或多砸 2000 元直接折腾定制昂贵的铜底硬通管水冷覆盖它",
        scores: { waterLeakSufferer: 3, itxEnthusiast: 1 }
      }
    ]
  },
  {
    id: 4,
    title: "你如何看待『ITX 小主机（鞋盒大体积）』装机的乐趣？",
    description: "在极致的空间压缩和散热警报之间，各路大佬的态度向来分化。",
    options: [
      {
        text: "智商妥协税！塞不进旗舰散热、硬件死贵、温度高 20 度，纯属花重金和自己的理线手指过不去",
        scores: { rtx4060Rational: 2, rtx4090Gambler: 1, buildChiveRookie: 1 }
      },
      {
        text: "极致优雅！把全部 4K 旗舰性能精密地封装进 8L 的小金属盒中，每一微米的卡缝都宛如微型雕塑",
        scores: { itxEnthusiast: 3, rgbAristocrat: 1, macElegantOffice: 1 }
      },
      {
        text: "只要便宜，不需要机箱！一块硬木板搭起架子，或者扎带栓一栓挂到防盗窗上就行，机箱纯属浪费钱",
        scores: { scrapCollectorWarlord: 3, minerCardAdventurer: 1 }
      },
      {
        text: "确实美观。但我宁愿购买免折腾的一体铝合金 mini 主机或 Mac ，插电即用享受丝般顺滑",
        scores: { macElegantOffice: 3, coreGraphicsSaint: 1 }
      }
    ]
  },
  {
    id: 5,
    title: "在挑选配置单里的『核心固态与内存条』时，你更容易被哪种话语打动？",
    description: "参数是冰冷的，但硬件背后的溢价和心理攻防是充满玄机的。",
    options: [
      {
        text: "『多花 500 元直升高频极佳 DDR5，可以在电竞游戏中拔高 1% 的最低帧极限稳定性！』",
        scores: { rtx5090Faith: 2, rtx4090Gambler: 2 }
      },
      {
        text: "『大厂丐版，终生质保，速度你日常根本没有差别。把这省下来的钱买排骨吃它不香吗？』",
        scores: { rtx4060Rational: 2, coreGraphicsSaint: 1, buildChiveRookie: 1, handheldGamer: 1 }
      },
      {
        text: "『数据中心强拆清配，服务器淘汰企业级 ECC 内存，双通道并联 64G 只要 80 元白菜包邮！』",
        scores: { scrapCollectorWarlord: 3, a6000Alchemist: 2 }
      },
      {
        text: "『这款极简黑胶外壳不带有任何花里胡哨的侧透外壳，高色温，和极简桌子搭配极度和谐。』",
        scores: { macElegantOffice: 2, itxEnthusiast: 2, rgbAristocrat: 1 }
      }
    ]
  },
  {
    id: 6,
    title: "朋友让你作为懂哥推荐一份 5000 元预算的整机配置单，你会：",
    description: "懂哥在圈内的地位与友情指数，往往就在这个电光石火的单子之间决定。",
    options: [
      {
        text: "精雕细琢性价比！CPU板卡缩到底，全部预算砸显卡。严格卡死在 4999 元，不让他超花一分钱",
        scores: { rtx4060Rational: 3, techMarketSlicker: 1 }
      },
      {
        text: "直接化身大加钱党：『都 5000 了，不如再咬牙加 2000 上 4070Super，不加你买回去三天百分百后悔！』",
        scores: { rtx4090Gambler: 3, rtx5090Faith: 1 }
      },
      {
        text: "狂热怂恿他下咸鱼深井：『听哥的，千元预算买这些全新都是电子垃圾，给你掏个退役矿神卡带你飞』",
        scores: { minerCardAdventurer: 3, scrapCollectorWarlord: 2 }
      },
      {
        text: "直接发某知名自营店铺的一键购买整机链接：『听我的，直接买这个！省事！坏了别找我上门修修电脑』",
        scores: { buildChiveRookie: 3, coreGraphicsSaint: 1 }
      }
    ]
  },
  {
    id: 7,
    title: "当你开开心心打开 3A 大作，却因为显存和性能不够经常出现爆卡甚至蓝屏闪退：",
    description: "这是生活对每个硬件玩家最严酷的暴击。",
    options: [
      {
        text: "根本无法忍受这种憋屈！立刻卸下卡挂闲鱼，打开橙色软件，搜旗舰大显存卡下单『物理防爆』",
        scores: { rtx4090Gambler: 2, rtx5090Faith: 2, a6000Alchemist: 2 }
      },
      {
        text: "心态平和。直接把分辨率调到 1080P，画质开中低，开 DLSS 极速，自我暗示：『画质都是虚的』",
        scores: { rtx4060Rational: 3, handheldGamer: 2 }
      },
      {
        text: "上论坛找精简画质贴图、降温降压驱动、甚至拿刷 Bios 软件手动魔改，强行通过技术榨压显存",
        scores: { scrapCollectorWarlord: 2, minerCardAdventurer: 2, techMarketSlicker: 2 }
      },
      {
        text: "算了，直接关了。拿出掌机舒服地躺在床上打玩一些小独立游戏或看别人云通关，彻底躺平不较劲",
        scores: { handheldGamer: 3, coreGraphicsSaint: 2, macElegantOffice: 1 }
      }
    ]
  },
  {
    id: 8,
    title: "水冷还是风冷？关于主机的『核心散热技术』，你站队哪一家？",
    description: "这几乎是电脑圈里堪比豆腐脑咸甜之争的终极信仰派系。",
    options: [
      {
        text: "分体式定制硬管水冷、精密亚克力、炫彩导热液！极佳工艺观赏性和极致压温，才是优雅的极客姿态",
        scores: { waterLeakSufferer: 3, rgbAristocrat: 2 }
      },
      {
        text: "双塔重金属大风冷！省心、超稳。哪怕世界末日、海枯石烂它也不会漏水，绝对没有任何安全风险",
        scores: { rtx4060Rational: 2, coreGraphicsSaint: 2, a6000Alchemist: 1 }
      },
      {
        text: "越薄越爽、或者直接拆了机箱顶盖，实在不行就装个最丑但风力最狂暴的暴力风扇，暴力才是正义",
        scores: { itxEnthusiast: 3, scrapCollectorWarlord: 1 }
      },
      {
        text: "要什么风扇？苹果的高集成芯片静音被动散热、或者是完全零噪音的被动散热片，安静到让我感觉世间清净",
        scores: { macElegantOffice: 3, coreGraphicsSaint: 2 }
      }
    ]
  },
  {
    id: 9,
    title: "请客观审视你目前的电脑桌面或者是装机空间现场的状态？",
    description: "空间美学不仅是眼前的景象，更是主人装机脑回路的真实投影。",
    options: [
      {
        text: "宛如赛博朋克蹦迪现场，整个屋子在神光同步的呼吸闪烁下，闪烁着充满高级人民币的气息",
        scores: { rgbAristocrat: 3, buildChiveRookie: 1 }
      },
      {
        text: "极度混乱的垃圾堆现场。到处是拆包的硬纸壳、散落的螺丝、装机扎带、没擦干净的硅脂纸和备用线材",
        scores: { scrapCollectorWarlord: 2, minerCardAdventurer: 2 }
      },
      {
        text: "空无一物。除了一台闪烁着金属光泽的主机、无线静音键盘外，多一张多余的线头都得立刻整理收纳",
        scores: { macElegantOffice: 3, itxEnthusiast: 1 }
      },
      {
        text: "插线板和接线稍微有些多，但电线用蛇皮管收纳得整整齐齐，桌上全都是生活实用物品，完全以安全可靠为先",
        scores: { rtx4060Rational: 2, rtx4090Gambler: 1, a6000Alchemist: 1 }
      }
    ]
  },
  {
    id: 10,
    title: "在咸鱼刷到一张只有市场价三分之一、写着『纯大牌女子自用打游戏、矿难求速清仓』的显卡，你会：",
    description: "咸鱼上的每一次成交，都是一次极客生存心理的博弈。",
    options: [
      {
        text: "妥妥的超级巨坑！什么女子自用，全是下井下到包浆的洗澡神卡！右上角点拉黑，顺便不屑一顾",
        scores: { techMarketSlicker: 3, rtx4060Rational: 1, macElegantOffice: 1 }
      },
      {
        text: "心跳瞬间漏跳一拍，狂热询问老板：『保点亮不？只要你敢保证开机，我都敢带着我的灭火器冲锋！』",
        scores: { minerCardAdventurer: 3, scrapCollectorWarlord: 1 }
      },
      {
        text: "无所谓，买回来直接丢洗板温水里来一通大保健。我自己能拆解换核心硅脂与电容，最享受这种复活术",
        scores: { scrapCollectorWarlord: 3, minerCardAdventurer: 2 }
      },
      {
        text: "感觉很实惠，有点想买但不知道那些参数代表什么，试图去朋友圈或群里让懂哥们帮我评评理分析",
        scores: { buildChiveRookie: 2, rtx5090Faith: 2 }
      }
    ]
  },
  {
    id: 11,
    title: "关于本地电脑部署人工智能大模型（AI 生成绘图、本地大语言大模型精调等）：",
    description: "当今这个 AI 的黄金时代，你手里的硬件准备好参与这场『学术炼丹』了吗？",
    options: [
      {
        text: "我的整机第一预算就是为了这个！不把大容量显存占满，不用尽每一滴 CUDA 核心，我的高级显卡就没有灵魂",
        scores: { a6000Alchemist: 3, rtx4090Gambler: 2, rtx5090Faith: 1 }
      },
      {
        text: "凑个热闹。下载了某些一键部署安装包结果发现连闪退三次，瞬间失去耐心将其卸载重装 3A 大作",
        scores: { buildChiveRookie: 3, minerCardAdventurer: 1 }
      },
      {
        text: "偶尔尝鲜，需要跑的时候直接调用网页端各种成熟 API，为啥要花昂贵的人民币去吃大显卡的溢价？",
        scores: { rtx4060Rational: 3, coreGraphicsSaint: 2 }
      },
      {
        text: "对这个没兴趣。我的优雅高分主机只应该用来处理更高效的工作流设计或者看一部舒心的 4K HDR 视频",
        scores: { macElegantOffice: 2, coreGraphicsSaint: 1, handheldGamer: 1 }
      }
    ]
  },
  {
    id: 12,
    title: "如果装机预算在最后一刻突然神奇地额外增加了 3000 元，你会把这笔钱花在哪里？",
    description: "钱是有灵性的，它流向的地方决定了你作为装机佬的终极归宿。",
    options: [
      {
        text: "废话！当然是直接升级显卡或者CPU，追求那极致澎湃、平时可能根本用不到的空虚超频性能！",
        scores: { rtx4090Gambler: 2, rtx5090Faith: 2, a6000Alchemist: 1 }
      },
      {
        text: "毫不犹豫砸向精巧机箱、全套高品质炫彩光效霓虹风扇或高级一体水冷，桌子也得顺手升级纯白桌搭",
        scores: { rgbAristocrat: 2, waterLeakSufferer: 2, itxEnthusiast: 1 }
      },
      {
        text: "存起来不舍得花，或者是在各大渠道精心比对差价买一个高品质外设、多备一张折价神卡备用",
        scores: { rtx4060Rational: 2, techMarketSlicker: 2, coreGraphicsSaint: 1 }
      },
      {
        text: "以我的白菜砍价手艺，这笔钱够我去咸鱼收 10 套老旧服务器残次配置，组多路服务器机组来玩乐",
        scores: { scrapCollectorWarlord: 3, minerCardAdventurer: 2 }
      }
    ]
  },
  {
    id: 13,
    title: "在硬件讨论群里，最容易让你一秒钟破防、想要疯狂打字对线的言论是？",
    description: "每个人都有他心里神圣不可侵犯的极客逆鳞。",
    options: [
      {
        text: "看到别人用『性价比』来指点你的顶级梦想：『你这买一万多的显卡纯属被老黄收了智商税，体验不如 4060』",
        scores: { rtx5090Faith: 3, rtx4090Gambler: 2 }
      },
      {
        text: "看到云玩家拿各种云评测的 PPT 去高谈阔论，连真实的线段、卡槽MOS管实物都没摸过就给人指点江山",
        scores: { techMarketSlicker: 3, a6000Alchemist: 1, scrapCollectorWarlord: 1 }
      },
      {
        text: "被人嘲笑配置缩水或者买到了坑货：『你这大牌拼装机，用的是当店店家特制的三流用料，吃大亏了』",
        scores: { buildChiveRookie: 2, rtx4060Rational: 2 }
      },
      {
        text: "嫌弃苹果除了优雅一无所有：『Mac 根本不能玩 3A 大游就是电子垃圾，买大铁皮箱子才是王道』，土味满满的发言",
        scores: { macElegantOffice: 3, itxEnthusiast: 1 }
      }
    ]
  },
  {
    id: 14,
    title: "对你而言，整个装机游玩过程中，称得上『最完美幸福』的瞬间是以下哪一项？",
    description: "这是你在冰冷的晶体管世界中，寻找热爱的终极回馈。",
    options: [
      {
        text: "历经二十余小时精巧布线、注水打压，当合上全透钢化盖并按开机键、神光神彩同频闪耀的一瞬间",
        scores: { itxEnthusiast: 2, rgbAristocrat: 2, waterLeakSufferer: 2 }
      },
      {
        text: "心仪显卡首发，终于撕开外层保膜的那一瞬间，吸进一小口带有神秘松香氮气味道的芯片新空风",
        scores: { rtx5090Faith: 3, rtx4090Gambler: 2 }
      },
      {
        text: "吃完爽口晚饭，舒适地躺在软绵绵的床上、拿着我的移动掌机或用静音被动主机平稳看部电影，舒服温馨",
        scores: { handheldGamer: 3, coreGraphicsSaint: 2, macElegantOffice: 2 }
      },
      {
        text: "在硬件群里舌战群儒，亮出你绝对统治级别的渠道底单折扣或垃圾复活包神分卡，让全群人尊称战神",
        scores: { rtx4060Rational: 2, techMarketSlicker: 2, scrapCollectorWarlord: 2 }
      }
    ]
  }
];

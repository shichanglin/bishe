<template>
  <div class="contant">
    <div class="top">
      <div class="topLeft" id="left"></div>
      <div class="topRight" id="right"></div>
    </div>
    <div class="bottom" id="bottom"></div>
  </div>
</template>

<script>
import echarts from "echarts";
// var echarts = require('echarts');
require('echarts-wordcloud');
export default {
  name: "userDatas",
  data() {
    return {};
  },
  created() {},
  mounted() {
      this.createleft();
    this.createBottom();
    this.createRight();
  },
  methods: {
    createleft() {
      let myChart = this.$echarts.init(document.getElementById("left"));
      var ydata = [
        {
          name: "A车模型",
          value: 18
        },
        {
          name: "B车模型",
          value: 16
        },
        {
          name: "暖心陪伴（定制蛋糕）",
          value: 15
        },
        {
          name: "嘉果荟萃（定制蛋糕）",
          value: 14
        },
        {
          name: "定制马克杯",
          value: 10
        },
        {
          name: "主题衬衫",
          value: 7.9
        },
        {
          name: "主题毛巾",
          value: 6.7
        },
        {
          name: "电动牙刷",
          value: 6
        },
        {
          name: "运动防晒衣",
          value: 4.5
        },
        {
          name: "梳妆镜",
          value: 3
        }
      ];
      var color = [
        "#8d7fec",
        "#5085f2",
        "#e75fc3",
        "#f87be2",
        "#f2719a",
        "#fca4bb",
        "#f59a8f",
        "#fdb301",
        "#57e7ec",
        "#cf9ef1"
      ];
      var xdata = [
        "A车模型",
        "B车模型",
        "暖心陪伴（定制蛋糕）",
        "嘉果荟萃（定制蛋糕）",
        "定制马克杯",
        "主题衬衫",
        "主题毛巾",
        "电动牙刷",
        "运动防晒衣",
        "梳妆镜"
      ];

      let option = {
        backgroundColor: "#05224d",
        color: color,
        legend: {
          textStyle: {
            fontSize: 11,
            color: "#fff"
          },
          orient: "vartical",
          x: "left",
          top: "center",
          left: "60%",
          bottom: "0%",
          data: xdata,
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 16,
          /*formatter:function(name){
	      var oa = option.series[0].data;
	      var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value+oa[4].value + oa[5].value + oa[6].value + oa[7].value+oa[8].value + oa[9].value ;
	      for(var i = 0; i < option.series[0].data.length; i++){
              if(name==oa[i].name){
              	return ' '+name + '    |    ' + oa[i].value + '    |    ' + (oa[i].value/num * 100).toFixed(2) + '%';
              }
	      }
	    }*/

          formatter: function(name) {
            return "" + name;
          }
        },
        series: [
          {
            type: "pie",
            clockwise: false, //饼图的扇区是否是顺时针排布
            minAngle: 2, //最小的扇区角度（0 ~ 360）
            radius: ["40%", "70%"],
            center: ["30%", "50%"],
            avoidLabelOverlap: false,
            itemStyle: {
              //图形样式
              normal: {
                borderColor: "#ffffff",
                borderWidth: 6
              }
            },
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{text|{b}}\n{c} ({d}%)",
                rich: {
                  text: {
                    color: "#fff",
                    fontSize: 14,
                    align: "center",
                    verticalAlign: "middle",
                    padding: 8
                  },
                  value: {
                    color: "#fff",
                    fontSize: 24,
                    align: "center",
                    verticalAlign: "middle"
                  }
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: 24,
                  color: "#fff"
                }
              }
            },
            data: ydata
          }
        ]
      };
      myChart.setOption(option);

      setTimeout(function() {
        myChart.on("mouseover", function(params) {
          if (params.name == ydata[0].name) {
            myChart.dispatchAction({
              type: "highlight",
              seriesIndex: 0,
              dataIndex: 0
            });
          } else {
            myChart.dispatchAction({
              type: "downplay",
              seriesIndex: 0,
              dataIndex: 0
            });
          }
        });

        myChart.on("mouseout", function(params) {
          myChart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: 0
          });
        });
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: 0
        });
      }, 1000);

      myChart.setOption(option);
    },
    createRight() {
      let myChart = this.$echarts.init(document.getElementById("right"));
  let option = {
        backgroundColor: "#05224d",

    tooltip: {
        show: true
    },
    series: [{
        type: "wordCloud",
        gridSize:6,
        shape:'diamond',
        sizeRange: [6, 66],
        // width:800,
        // height:500,
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 220),
                        Math.round(Math.random() * 220),
                        Math.round(Math.random() * 220)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 20,
                shadowColor: '#729ddd'
            }
        },
        data: [{
                name: "好评",
                value: 30,
            },
            {
                name: "汽车轮毂",
                value: 24
            },
            {
                name: " 不错",
                value: 21
            },
            {
                name: " 可以",
                value: 19
            },
            {
                name: " 发货",
                value: 18
            },
            {
                name: " 这个",
                value: 18
            },
            {
                name: " 什么",
                value: 17
            },
            {
                name: " 一个",
                value: 12
            },
            {
                name: " 不好",
                value: 12
            },
            {
                name: " 质量",
                value: 11
            },
            {
                name: " 快递",
                value: 11
            },
            {
                name: " 问题",
                value: 10
            },
            {
                name: " 物流",
                value: 9
            },
            {
                name: " 几天",
                value: 9
            },
            {
                name: " 一般",
                value: 9
            },
            {
                name: " 就是",
                value: 9
            },
            {
                name: " 使用",
                value: 8
            },
            {
                name: " 怎么",
                value: 8
            },
            {
                name: " 电池",
                value: 8
            },
            {
                name: " 不能",
                value: 8
            },
            {
                name: " 速度",
                value: 8
            },
            {
                name: " 客服",
                value: 8
            },
            {
                name: " 一星",
                value: 8
            },
            {
                name: " 拍照",
                value: 8
            },
            {
                name: " 摄像头",
                value: 7
            },
            {
                name: " 外观",
                value: 7
            },
            {
                name: " 包装",
                value: 7
            },
            {
                name: " 到货",
                value: 7
            },
            {
                name: " 有点",
                value: 7
            },
            {
                name: " 抢购",
                value: 6
            },
            {
                name: " 这样",
                value: 6
            },
            {
                name: " 性价比",
                value: 6
            },
            {
                name: " 一般般",
                value: 6
            },
            {
                name: " 出现",
                value: 6
            },
            {
                name: " 以前",
                value: 6
            },
            {
                name: " 知道",
                value: 6
            },
            {
                name: " 一次",
                value: 6
            },
            {
                name: " 真的",
                value: 6
            },
            {
                name: " 收到",
                value: 6
            },
            {
                name: " 其他",
                value: 6
            },
            {
                name: " 电量",
                value: 6
            },
            {
                name: " 还是",
                value: 6
            },
            {
                name: " 不行",
                value: 6
            },
            {
                name: " 红米",
                value: 6
            },
            {
                name: " 那么",
                value: 6
            },
            {
                name: " 挺快",
                value: 5
            },
            {
                name: " 现在",
                value: 5
            },
            {
                name: " 服务",
                value: 5
            },
            {
                name: " 充电",
                value: 5
            },
            {
                name: " 流畅",
                value: 5
            },
            {
                name: " 系统",
                value: 5
            },
            {
                name: " 非常",
                value: 5
            },
            {
                name: " 满意",
                value: 5
            },
            {
                name: " 购物",
                value: 5
            },
            {
                name: " 玩游戏",
                value: 5
            },
            {
                name: " 信号",
                value: 5
            },
            {
                name: " 不了",
                value: 5
            },
            {
                name: " 别人",
                value: 5
            },
            {
                name: " 死机",
                value: 5
            },
            {
                name: " 耗电",
                value: 5
            },
            {
                name: " 一直",
                value: 5
            },
            {
                name: " 像素",
                value: 5
            },
            {
                name: " 第一次",
                value: 5
            },
            {
                name: " 广告",
                value: 5
            },
            {
                name: " 买个",
                value: 5
            },
            {
                name: " 黑屏",
                value: 5
            },
            {
                name: " 为什么",
                value: 4
            },
            {
                name: " 猴王",
                value: 4
            },
            {
                name: " 视频",
                value: 4
            },
            {
                name: " 体验",
                value: 4
            },
            {
                name: " 好评",
                value: 4
            },
            {
                name: " 闪屏",
                value: 4
            },
            {
                name: " 价格",
                value: 4
            },
            {
                name: " 饥饿",
                value: 4
            },
            {
                name: " 营销",
                value: 4
            },
            {
                name: " 发热",
                value: 4
            },
            {
                name: " 还行",
                value: 4
            },
            {
                name: " 一天",
                value: 4
            },
            {
                name: " 需要",
                value: 4
            },
            {
                name: " 特别",
                value: 4
            },
            {
                name: " 而且",
                value: 4
            },
            {
                name: " 运行",
                value: 4
            },
            {
                name: " 等到",
                value: 4
            },
            {
                name: " 手机卡",
                value: 4
            },
            {
                name: " 呵呵",
                value: 4
            },
            {
                name: " 时候",
                value: 4
            },
            {
                name: " 东西",
                value: 4
            },
            {
                name: " 感觉",
                value: 4
            },
            {
                name: " 卡机",
                value: 4
            },
            {
                name: " 没什么",
                value: 4
            },
            {
                name: " 大家",
                value: 4
            },
            {
                name: " 没货",
                value: 4
            },
            {
                name: " 售后",
                value: 4
            },
            {
                name: " 比较",
                value: 4
            },
            {
                name: " 退货",
                value: 4
            },
            {
                name: " 加价",
                value: 3
            },
            {
                name: " 耳机",
                value: 3
            },
            {
                name: " 呜呜",
                value: 3
            },
            {
                name: " 一分钱",
                value: 3
            },
            {
                name: " 一分货",
                value: 3
            },
            {
                name: " 默认",
                value: 3
            },
            {
                name: " 说好",
                value: 3
            },
            {
                name: " 你们",
                value: 3
            },
            {
                name: " 一点",
                value: 3
            },
            {
                name: " 超级",
                value: 3
            },
            {
                name: " 耐用",
                value: 3
            },
            {
                name: " 很快",
                value: 3
            },
            {
                name: " 断流",
                value: 3
            },
            {
                name: " 套装",
                value: 3
            },
            {
                name: " 一样",
                value: 3
            },
            {
                name: " 发票",
                value: 3
            },
            {
                name: " 买回来",
                value: 3
            },
            {
                name: " 软件",
                value: 3
            },
            {
                name: " 还好",
                value: 3
            },
            {
                name: " 以后",
                value: 3
            },
            {
                name: " 下单",
                value: 3
            },
            {
                name: " 打游戏",
                value: 3
            },
            {
                name: " 我们",
                value: 3
            },
            {
                name: " 但是",
                value: 3
            },
            {
                name: " 一部",
                value: 3
            },
            {
                name: " 王者",
                value: 3
            },
            {
                name: " 不怎么样",
                value: 3
            },
            {
                name: " 看看",
                value: 3
            },
            {
                name: " 自己",
                value: 3
            },
            {
                name: " 里面",
                value: 3
            },
            {
                name: " 边框",
                value: 3
            },
            {
                name: " 看着",
                value: 3
            },
            {
                name: " 要死",
                value: 3
            },
            {
                name: " 原因",
                value: 3
            },
            {
                name: " 新机",
                value: 3
            },
            {
                name: " 不如",
                value: 3
            },
            {
                name: " 老是",
                value: 3
            },
            {
                name: " 购买",
                value: 3
            },
            {
                name: " 更好",
                value: 3
            },
            {
                name: " 相机",
                value: 3
            },
            {
                name: " 竟然",
                value: 3
            },
            {
                name: " 一分",
                value: 3
            },
            {
                name: " 天才",
                value: 3
            },
            {
                name: " 荣耀",
                value: 3
            },
            {
                name: " 正常",
                value: 3
            },
            {
                name: " 回复",
                value: 3
            },
            {
                name: " 联系",
                value: 3
            },
            {
                name: " 总体",
                value: 3
            },
            {
                name: " 反应",
                value: 3
            },
            {
                name: " 老爸",
                value: 3
            },
            {
                name: " 星期",
                value: 3
            },
            {
                name: " 半个",
                value: 3
            },
            {
                name: " 打电话",
                value: 3
            },
            {
                name: " 不是",
                value: 3
            },
            {
                name: " 保护膜",
                value: 3
            },
            {
                name: " 充电器",
                value: 3
            },
            {
                name: " 买不到",
                value: 2
            },
            {
                name: " 老子",
                value: 2
            },
            {
                name: " 差评",
                value: 2
            },
            {
                name: " 这么",
                value: 2
            },
            {
                name: " 真香",
                value: 2
            },
            {
                name: " 真是",
                value: 2
            },
            {
                name: " 三天",
                value: 2
            },
            {
                name: " 填写内容",
                value: 2
            },
            {
                name: " 帮别人",
                value: 2
            },
            {
                name: " 终于",
                value: 2
            },
            {
                name: " 有时候",
                value: 2
            },
            {
                name: " 极致",
                value: 2
            },
            {
                name: " 还有",
                value: 2
            },
            {
                name: " 希望",
                value: 2
            },
            {
                name: " 必须",
                value: 2
            },
            {
                name: " 好像",
                value: 2
            },
            {
                name: " 严重",
                value: 2
            },
            {
                name: " 反应速度",
                value: 2
            },
            {
                name: " 后面",
                value: 2
            },
            {
                name: " 音乐",
                value: 2
            },
            {
                name: " 商品",
                value: 2
            },
            {
                name: " 哈哈",
                value: 2
            },
            {
                name: " 垃圾",
                value: 2
            },
            {
                name: " 好用",
                value: 2
            },
            {
                name: " 突出",
                value: 2
            },
            {
                name: " 价钱",
                value: 2
            },
            {
                name: " 耍猴",
                value: 2
            },
            {
                name: " 磕碰",
                value: 2
            },
            {
                name: " 几次",
                value: 2
            },
            {
                name: " 失灵",
                value: 2
            },
            {
                name: " 支持",
                value: 2
            },
            {
                name: " 快充",
                value: 2
            },
            {
                name: " 意思",
                value: 2
            },
            {
                name: " 失败",
                value: 2
            },
            {
                name: " 整整",
                value: 2
            },
            {
                name: " 没收",
                value: 2
            },
            {
                name: " 已经",
                value: 2
            },
            {
                name: " 无法",
                value: 2
            },
            {
                name: " 方面",
                value: 2
            },
            {
                name: " 为啥",
                value: 2
            },
            {
                name: " 喜欢",
                value: 2
            },
            {
                name: " 套餐",
                value: 2
            },
            {
                name: " 完全",
                value: 2
            },
            {
                name: " 专业",
                value: 2
            },
            {
                name: " 选择",
                value: 2
            },
            {
                name: " 48mp",
                value: 2
            },
            {
                name: " 无线",
                value: 2
            },
            {
                name: " 一个月",
                value: 2
            },
            {
                name: " 不过",
                value: 2
            },
            {
                name: " ldquo",
                value: "-"
            },
            {
                name: " rdquo",
                value: "-"
            },
            {
                name: " 这种",
                value: 2
            },
            {
                name: " 送货",
                value: 2
            },
            {
                name: " 卡死",
                value: 2
            },
            {
                name: " 来看",
                value: 2
            },
            {
                name: " 糊弄人",
                value: 2
            },
            {
                name: " note7",
                value: 2
            },
            {
                name: " 时间",
                value: 2
            },
            {
                name: " 短信",
                value: 2
            },
            {
                name: " 滑落",
                value: 2
            },
            {
                name: " 那样",
                value: 2
            },
            {
                name: " vivo",
                value: 2
            },
            {
                name: " 防水",
                value: 2
            },
            {
                name: " 等待",
                value: 2
            },
            {
                name: " 直播",
                value: 2
            },
            {
                name: " 难受",
                value: 2
            },
            {
                name: " 四个",
                value: 2
            },
            {
                name: " 到手",
                value: 2
            },
            {
                name: " 发现",
                value: 2
            },
            {
                name: " 掉电",
                value: 2
            },
            {
                name: " 华为",
                value: 2
            },
            {
                name: " 再也",
                value: 2
            },
            {
                name: " 不用",
                value: 2
            },
            {
                name: " 给力",
                value: 2
            },
            {
                name: " 两天",
                value: 2
            },
            {
                name: " 立马",
                value: 2
            },
            {
                name: " 两周",
                value: 2
            },
            {
                name: " 处理器",
                value: 2
            },
            {
                name: " 关机",
                value: 2
            },
            {
                name: " 要么",
                value: 2
            },
            {
                name: " 满血",
                value: 2
            },
            {
                name: " 不会",
                value: 2
            },
            {
                name: " 定金",
                value: 2
            },
            {
                name: " 付款",
                value: 2
            },
            {
                name: " 心情",
                value: 2
            },
            {
                name: " 另外",
                value: 2
            },
            {
                name: " 游戏",
                value: 2
            },
            {
                name: " 公司",
                value: 2
            },
            {
                name: " 按键",
                value: 2
            },
            {
                name: " 卡顿",
                value: 2
            },
            {
                name: " 晚上",
                value: 2
            },
            {
                name: " 百分之",
                value: 2
            },
            {
                name: " 手机信号",
                value: 2
            },
            {
                name: " 一下",
                value: 2
            },
            {
                name: " 开学",
                value: 2
            },
            {
                name: " 上班",
                value: 2
            },
            {
                name: " 上天",
                value: 2
            },
            {
                name: " 配送",
                value: 2
            },
            {
                name: " 最后",
                value: 2
            },
            {
                name: " 太慢",
                value: 2
            },
            {
                name: " 手机套",
                value: 2
            },
            {
                name: " 笨重",
                value: 2
            },
            {
                name: " 半年",
                value: 2
            },
            {
                name: " 屏险",
                value: 2
            },
            {
                name: " 先发",
                value: 2
            },
            {
                name: " 不灵敏",
                value: 2
            },
            {
                name: " 硬度",
                value: 2
            },
            {
                name: " 这次",
                value: 2
            },
            {
                name: " 性能",
                value: 2
            },
            {
                name: " 介绍",
                value: 2
            },
            {
                name: " 卡针",
                value: 2
            },
            {
                name: " 不理",
                value: 2
            },
            {
                name: " 这是",
                value: 2
            },
            {
                name: " 买来",
                value: 2
            },
            {
                name: " 两次",
                value: 2
            },
            {
                name: " 网络",
                value: 2
            },
            {
                name: " 就裂",
                value: 2
            },
            {
                name: " 没用",
                value: 2
            },
            {
                name: " 多次",
                value: 2
            },
            {
                name: " 钢化",
                value: 2
            },
            {
                name: " 一星怪",
                value: 1
            },
            {
                name: " 新款",
                value: 1
            },
            {
                name: " 你行",
                value: 1
            },
            {
                name: " 没送",
                value: 1
            },
            {
                name: " 一个多",
                value: 1
            },
            {
                name: " 礼拜",
                value: 1
            },
            {
                name: " 只能",
                value: 1
            },
            {
                name: " 价位",
                value: 1
            },
            {
                name: " 闪退",
                value: 1
            },
            {
                name: " 抢到",
                value: 1
            },
            {
                name: " 其它",
                value: 1
            },
            {
                name: " 便宜",
                value: 1
            },
            {
                name: " 两百",
                value: 1
            },
            {
                name: " 盈利",
                value: 1
            },
            {
                name: " 机智",
                value: 1
            },
            {
                name: " 更新换代",
                value: 1
            },
            {
                name: " 太乱",
                value: 1
            },
            {
                name: " 赔付",
                value: 1
            },
            {
                name: " 自营",
                value: 1
            },
            {
                name: " 产品",
                value: 1
            },
            {
                name: " 手持",
                value: 1
            },
            {
                name: " 夜景",
                value: 1
            },
            {
                name: " 机子",
                value: 1
            },
            {
                name: " 拆过",
                value: 1
            }
        ],
    }]

};
      myChart.setOption(option);
    },
    createBottom() {
      let myChart = this.$echarts.init(document.getElementById("bottom"));
      let option = {
        backgroundColor: "#05224d",
        tooltip: {},
        grid: {
          top: "8%",
          left: "1%",
          right: "1%",
          bottom: "8%",
          containLabel: true
        },
        legend: {
          itemGap: 50,
          data: ["注册总量", "最新注册量"],
          textStyle: {
            color: "#f9f9f9",
            borderColor: "#fff"
          }
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            axisLine: {
              //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: "#f9f9f9"
              }
            },
            axisLabel: {
              //坐标轴刻度标签的相关设置
              textStyle: {
                color: "#d1e6eb",
                margin: 15
              }
            },
            axisTick: {
              show: false
            },
            data: ["1月", "2月", "3月", "4月", "5月"]
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            // max: 140,
            splitNumber: 7,
            splitLine: {
              show: true,
              lineStyle: {
                color: "#0a3256"
              }
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              margin: 20,
              textStyle: {
                color: "#d1e6eb"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "注册总量",
            type: "line",
            // smooth: true, //是否平滑曲线显示
            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: "#28ffb3" // 线条颜色
              },
              borderColor: "#f0f"
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#fff"
              }
            },
            itemStyle: {
              normal: {
                color: "#28ffb3"
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: {
              //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0,154,120,1)"
                    },
                    {
                      offset: 1,
                      color: "rgba(0,0,0, 0)"
                    }
                  ],
                  false
                ),
                shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [393, 438, 485, 631, 689, 824, 987]
          },
          {
            name: "最新注册量",
            type: "bar",
            barWidth: 20,
            tooltip: {
              show: false
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#fff"
              }
            },
            itemStyle: {
              normal: {
                // barBorderRadius: 5,
                // color: new echarts.graphic.LinearGradient(
                //     0, 0, 0, 1,
                //     [{
                //             offset: 0,
                //             color: '#14c8d4'
                //         },
                //         {
                //             offset: 1,
                //             color: '#43eec6'
                //         }
                //     ]
                // )
                color: function(params) {
                  var colorList = [
                    "#0ec1ff",
                    "#10cdff",
                    "#12daff",
                    "#15ebff",
                    "#17f8ff",
                    "#1cfffb",
                    "#1dfff1"
                  ];
                  return colorList[params.dataIndex];
                }
              }
            },
            data: [200, 382, 102, 267, 186, 315, 316]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.contant {
  width: 100%;
  height: 620px;
  border: 1px solid rgb(157, 231, 175);
  //   display: flex;
}
.top {
  //   flex: 1;
  width: 100%;
  height: 400px;
  //   border: 1px solid rgb(157, 231, 175);
  display: flex;
  .topLeft {
    flex: 1;
    border-right: 1px solid rgb(157, 231, 175);
  }
  .topRight {
    flex: 1;
    // height: 498px;
    // border: 1px solid rgb(157, 231, 175);
  }
}
.bottom {
  width: 100%;
  height: 220px;
//   background:#729ddd;
  border-top: 1px solid rgb(157, 231, 175);
}
</style>
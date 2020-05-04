<template>
  <div class="contant">
    <!-- 划分三个模块 -->
    <div class="center">
      <p class="title"></p>
      <!--全国门店分布 使用map-->
      <div class="topCenter" id="mainBox"></div>
      <!-- 合作单位 设计为饼图-->
      <div class="bottomCenter" id="partenr"></div>
      <div class="bottomCenter1" id="partenr1"></div>
    </div>
    <!-- 划分三个模块 -->
    <!-- <div class="right"> -->
    <!-- <div class="rightTop" id="rightTop"></div> -->
    <!-- </div> -->
  </div>
</template>

<script>
import echarts from "echarts";
// import bg from '../assets/bg.png'
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    // this.createCenterTop();
  },
  mounted() {
    this.createCenterTop();
    this.createdPatener();
    this.createdPatener1();

    // this.createdRightTop();
    // this.createdNew();
  },
  methods: {
    //center
    createdPatener() {
      //选中表哥
      let myChart = this.$echarts.init(document.getElementById("partenr"));

      let option = {
        // backgroundColor: "",
        color: ["#ffd285", "#ff733f", "#ec4863"],

        title: [
          {
            text: "本周随车APP新增用户",
            left: "1%",
            top: "6%",
            textStyle: {
              color: "#fff"
            }
          },
          {
            text: "用户来源占比",
            left: "83%",
            top: "6%",
            textAlign: "center",
            textStyle: {
              color: "#fff"
            }
          }
        ],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          x: 300,
          top: "7%",
          textStyle: {
            color: "#ffd285"
          },
          data: ["A车", "B车", "其他"]
        },
        grid: {
          left: "1%",
          right: "35%",
          top: "16%",
          bottom: "6%",
          containLabel: true
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#FF4500"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "#fff"
            }
          },
          type: "value"
        },
        series: [
          {
            name: "A车",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: [90, 50, 39, 50, 120, 82, 80]
          },
          {
            name: "B车",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: [70, 50, 50, 87, 90, 80, 70]
          },
          {
            name: "其他",
            smooth: true,
            type: "line",
            symbolSize: 8,
            symbol: "circle",
            data: [290, 200, 20, 132, 15, 200, 90]
          },
          {
            type: "pie",
            center: ["83%", "33%"],
            radius: ["25%", "30%"],
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 335,
                name: "用户来源分析",
                itemStyle: {
                  normal: {
                    color: "#ffd285"
                  }
                },
                label: {
                  normal: {
                    formatter: "{d} %\n",
                    textStyle: {
                      color: "#ffd285",
                      fontSize: 20
                    }
                  }
                }
              },
              {
                value: 180,
                name: "占位",
                tooltip: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    color: "#87CEFA"
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#ffd285"
                    },
                    formatter: "\n手机号注册"
                  }
                }
              }
            ]
          },

          {
            type: "pie",
            center: ["83%", "72%"],
            radius: ["25%", "30%"],
            label: {
              normal: {
                position: "center"
              }
            },
            data: [
              {
                value: 435,
                name: "用户来源分析",
                itemStyle: {
                  normal: {
                    color: "#ff733f"
                  }
                },
                label: {
                  normal: {
                    formatter: "{d} %\n",
                    textStyle: {
                      color: "#ff733f",
                      fontSize: 20
                    }
                  }
                }
              },
              {
                value: 100,
                name: "占位",
                tooltip: {
                  show: false
                },
                itemStyle: {
                  normal: {
                    color: "#87CEFA"
                  }
                },
                label: {
                  normal: {
                    textStyle: {
                      color: "#FF4500"
                    },
                    formatter: "\n三方快捷登陆"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    createCenterTop() {
      //选中表哥
      let myChart = this.$echarts.init(document.getElementById("mainBox"));
      function randomData() {
        return Math.round(Math.random() * 1000);
      }

      var data = [
        {
          name: "北京",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "天津",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "上海",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "重庆",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "河北",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "河南",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "云南",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "辽宁",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "黑龙江",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "湖南",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "安徽",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "山东",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "新疆",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "江苏",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "浙江",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "江西",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "湖北",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "广西",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "甘肃",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "山西",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "内蒙古",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "陕西",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "吉林",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "福建",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "贵州",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "广东",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "青海",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "西藏",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "四川",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "宁夏",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "海南",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "台湾",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "香港",
          value1: randomData(),
          value2: randomData()
        },
        {
          name: "澳门",
          value1: randomData(),
          value2: randomData()
        }
      ];

      var resultdata0 = [];
      var resultdata1 = [];
      var resultdata2 = [];
      var sum0 = 0;
      var sum1 = 0;
      var sum2 = 0;
      var titledata = [];
      for (var i = 0; i < data.length; i++) {
        var d0 = {
          name: data[i].name,
          value: data[i].value1 + data[i].value2
        };
        var d1 = {
          name: data[i].name,
          value: data[i].value1
        };
        var d2 = {
          name: data[i].name,
          value: data[i].value2
        };
        titledata.push(data[i].name);
        resultdata0.push(d0);
        resultdata1.push(d1);
        resultdata2.push(d2);
        sum0 += data[i].value1 + data[i].value2;
        sum1 += data[i].value1;
        sum2 += data[i].value2;
      }

      function NumDescSort(a, b) {
        return a.value - b.value;
      }

      resultdata0.sort(NumDescSort);
      resultdata1.sort(NumDescSort);
      resultdata2.sort(NumDescSort);

      let option = {
        title: [
          {
            text: "公司销售量统计",
            textStyle: {
              color: "white"
            },
            subtext: "",
            left: "center"
          },
          {
            text: "全部: " + sum0,
            right: 300,
            top: 40,
            width: 100,
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          },
          {
            text: "A车: " + sum1,
            right: 200,
            top: 40,
            width: 100,
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          },
          {
            text: "B车: " + sum2,
            right: 100,
            top: 40,
            width: 100,
            textStyle: {
              color: "#fff",
              fontSize: 16
            }
          }
        ],
        tooltip: {
          trigger: "item",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            }
        },
        legend: {
          orient: "vertical",
          left: "left",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
          data: ["全部", "A车", "B车"],
          selectedMode: "single"
        },
        visualMap: {
          min: 0,
          max: 2500,
          left: "left",
          top: "bottom",
          text: ["高", "低"],
          textStyle: {
            color: "white"
          },
          calculable: true,
          colorLightness: [0.2, 100],
          color: ["#c05050", "#e5cf0d", "#5ab1ef"],
          dimension: 0
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        grid: {
          right: 40,
          top: 100,
          bottom: 40,
          width: "30%"
        },
        xAxis: [
          {
            position: "top",
            type: "value",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            boundaryGap: false,
            splitLine: {
              show: false
            },
            // axisLine: {
              
            // },
               axisLine: {
                 show: false,
              lineStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "category",
               textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            data: titledata,
             axisLine: {
                 show: false,
              lineStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        series: [
          {
            z: 1,
            name: "全部",
            type: "map",
            map: "china",
            left: "10",
            right: "35%",
            top: 100,
            bottom: "35%",
            zoom: 1,
              textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true,
                label: {
                  color: "#fff"
                },
                itemStyle: {
                  color: "#fff"
                }
              }
            },
            //roam: true,
            data: resultdata0
          },
          {
            z: 1,
            name: "A车",
            type: "map",
            map: "china",
            left: "10",
            right: "35%",
            top: 100,
            bottom: "35%",
            zoom: 0.75,
              textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            //roam: true,
            data: resultdata1
          },
          {
            z: 1,
            name: "B车",
            type: "map",
            map: "china",
            left: "10",
            right: "35%",
            top: 100,
            bottom: "35%",
              textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            zoom: 0.85,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            //roam: true,
            data: resultdata2
          },
          {
            name: "全部",
            z: 2,
            type: "bar",
              textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata0
          },
          {
            name: "A车",
            z: 2,
            type: "bar",
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
              textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata1
          },
          {
            name: "B车",
            z: 2,
            type: "bar",
              textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata2
          },
          {
            name: "全部",
            z: 2,
            type: "pie",
              textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            radius: ["17%", "25%"],
            center: ["30%", "82.5%"],
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata0
          },
          {
            name: "A车",
            z: 2,
            type: "pie",
              textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            radius: ["17%", "25%"],
            center: ["30%", "82.5%"],
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata1
          },
          {
            name: "B车",
            z: 2,
              textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            },
            type: "pie",
            radius: ["17%", "25%"],
            center: ["30%", "82.5%"],
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              emphasis: {
                color: "rgb(254,153,78)"
              }
            },
            data: resultdata2
          }
        ]
      };
      myChart.setOption(option);
    },
    createdPatener1() {
      let myChart = this.$echarts.init(document.getElementById("partenr1"));
      let [in_new, in_min, in_max, in_avg] = ["0", "0", "0", "0"];
      let [out_new, out_min, out_max, out_avg] = ["0", "0", "0", "0"];
      let { date, in_data, out_data } = {
        date: [],
        in_data: [],
        out_data: []
      };
      // 格式化时间
      function getTime() {
        var ts = arguments[0] || 0;
        var t, h, i, s;
        t = ts ? new Date(ts * 1000) : new Date();
        h = t.getHours();
        i = t.getMinutes();
        s = t.getSeconds();
        // 可根据需要在这里定义时间格式
        return (
          (h < 10 ? "0" + h : h) +
          ":" +
          (i < 10 ? "0" + i : i) +
          ":" +
          (s < 10 ? "0" + s : s)
        );
      }
      // 生成初始数据
      for (var i = 0; i < 100; i++) {
        in_data.push(Math.ceil(Math.random() * 500));
        out_data.push(Math.ceil(Math.random() * 800));
        date.push(getTime(Math.round(new Date().getTime() / 1000) - i));
      }
      let option = {
        title: [
          {
            text: "图表名称",
            x: 15,
            y: "20",
            textBaseline: "middle",
            textStyle: {
              fontSize: 20,
              fontWeight: "500",
              color:'white'
            }
          },
          {
            text: "设备接口",
            x: 15,
            y: "40",
            textBaseline: "middle",
            textStyle: {
              color: "#fff",
              fontSize: 16,
              fontWeight: "400"
            }
          },
          {
            text: "最新",
            x2: 235,
            y: "10",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            }
          },
          {
            text: "最小",
            x2: 165,
            y: "10",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            }
          },
          {
            text: "最大",
            x2: 95,
            y: "10",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'

            }
          },
          {
            text: "平均",
            x2: 20,
            y: "10",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            }
          },
          {
            text: in_new,
            x2: 235,
            y: "26",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            }
          },
          {
            text: in_min,
            x2: 165,
            y: "26",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'

            }
          },
          {
            text: in_max,
            x2: 95,
            y: "25",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'

            }
          },
          {
            text: in_avg,
            x2: 20,
            y: "25",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            }
          },
          {
            text: out_new,
            x2: 235,
            y: "40",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            }
          },
          {
            text: out_min,
            x2: 165,
            y: "40",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'
            }
          },
          {
            text: out_max,
            x2: 95,
            y: "40",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'

            }
          },
          {
            text: out_avg,
            x2: 20,
            y: "40",
            textBaseline: "middle",
            textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'

            }
          }
        ],
        legend: [
          {
            x2: 300,
            y: 20,
            icon: "rect",
            itemGap: 3,
            itemWidth: 11,
            itemHeight: 11,
            orient: "vertical",
                textStyle: {
              fontSize: 12,
              fontWeight: "400",
              color:'#fff'

            },
            data: ["接收", "发送"]
          }
        ],
        grid: [
          {
            left: 30,
            right:20,
            top: 80,
            bottom: 20,
            containLabel: true
          }
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B"
            }
          }
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            data: date
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              formatter: "{value}Mbps",
              textStyle: {
                fontSize: 12
              }
            },
            splitLine: {
              lineStyle: {
                color: "#cccccc"
              }
            }
          }
        ],
        series: [
          {
            name: "发送",
            type: "line",
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 0
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(0,0,255)"
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(0,0,255, 1)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0,0,255, 0.5)"
                  }
                ])
              }
            },
            data: out_data
          },
          {
            name: "接收",
            type: "line",
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 0
              }
            },
            itemStyle: {
              normal: {
                color: "rgba(0,255,0)"
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(0,255,0,1)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0,255,0, 0.5)"
                  }
                ])
              }
            },
            data: in_data
          }
        ]
      };
      setInterval(function() {
        date.shift();
        in_data.shift();
        out_data.shift();
        in_data.push(Math.ceil(Math.random() * 500));
        out_data.push(Math.ceil(Math.random() * 800));
        date.push(getTime(Math.round(new Date().getTime() / 1000)));
        in_new = in_data[in_data.length - 1];
        out_new = out_data[out_data.length - 1];
        in_min = Math.min.apply(null, in_data);
        in_max = Math.max.apply(null, in_data);
        out_min = Math.min.apply(null, out_data);
        out_max = Math.max.apply(null, out_data);
        in_avg = in_data.reduce(function(tmp, item, index) {
          if (index != in_data.length - 1) {
            return tmp + item;
          } else {
            return (tmp + item) / out_data.length;
          }
        });
        out_avg = out_data.reduce(function(tmp, item, index) {
          if (index != out_data.length - 1) {
            return tmp + item;
          } else {
            return (tmp + item) / out_data.length;
          }
        });

        myChart.setOption({
          title: [
            {
              text: "APP流量监控"
            },
            {
              text: ""
            },
            {
              text: "最新"
            },
            {
              text: "最小"
            },
            {
              text: "最大"
            },
            {
              text: "平均"
            },
            {
              text: in_new + "Mbps"
            },
            {
              text: in_min + "Mbps"
            },
            {
              text: in_max + "Mbps"
            },
            {
              text: in_avg + "Mbps"
            },
            {
              text: out_new + "Mbps"
            },
            {
              text: out_min + "Mbps"
            },
            {
              text: out_max + "Mbps"
            },
            {
              text: out_avg + "Mbps"
            }
          ],
          series: [
            {
              data: out_data
            },
            {
              data: in_data
            }
          ],
          xAxis: [
            {
              data: date
            }
          ]
        });
      }, 1000);
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.contant {
  display: flex;
  color:white;
  .center {
    flex: 3;
    background:url('../assets/bg.png');

    .title {
      margin: auto auto;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
    }
    .topCenter {
      width: 100%;
      height: 700px;
      // background: violet;
    }

    .bottomCenter {
      width: 100%;
      height: 700px;
      // background: red;
    }
        .bottomCenter1 {
      width: 500px;
      height: 300px;
      // background: red;
    }
  }
  .right {
    // flex: 1;
    // background: #021d31;
    .rightTop {
      height: 300px;
    }
  }
  .center {
    height: 2000px;
  }
}
</style>

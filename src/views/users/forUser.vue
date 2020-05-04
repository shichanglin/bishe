<template>
  <div class="contant">
    <div class="left">
      <div class="left-top" id="leftTop"></div>
      <div class="left-bottom" id="leftBottom"></div>
    </div>
    <div class="center">
      <div id="centerTop" class="center-Top"></div>
      <div id="centerBottom" class="center-Bottom"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
require("echarts/map/js/china");
export default {
  name: "forUsers",
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.createLeftTop();
    this.createLeftBottom();
    this.createCenterTop();
    this.createCenterBottom();
  },
  methods: {
    createLeftTop() {
      let myChart = this.$echarts.init(document.getElementById("leftTop"));

      var scaleData = [
        {
          name: "预约试驾人数",
          value: 4700
        },
        {
          name: "已购买",
          value: 1000
        },
        {
          name: "已试驾",
          value: 4000
        }
      ];
      var placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(0, 0, 0, 0)",
          borderWidth: 0
        }
      };
      var data = [];
      var color = [
        "rgb(255, 153, 153)",
        "rgb(255, 176, 63)",
        "rgb(61, 186, 45)",
        "rgb(43, 166, 254)"
      ];
      var colorBorder = [
        "rgba(255, 153, 153, 0.4)",
        "rgba(255, 176, 63, 0.4)",
        "rgba(61, 186, 45, 0.4)",
        "rgba(43, 166, 254, 0.4)"
      ];
      for (var i = 0; i < scaleData.length; i++) {
        data.push(
          {
            data: scaleData[i].value,
            value: 20,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                color: color[i],
                borderWidth: 20,
                borderColor: colorBorder[i]
              }
            }
          },
          {
            value: 8,
            name: "",
            itemStyle: placeHolderStyle
          }
        );
      }
      data.push({
        value: 40,
        name: "",
        itemStyle: placeHolderStyle
      });
      var seriesObj = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [50, 100],
          hoverAnimation: false,
          left: "30",
          startAngle: 70,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "inner",
                fontSize: 14,
                lineHeight: 15,
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    // return params.name + '\n' + params.data.data;
                    if (params.name.length > 4) {
                      return (
                        params.name.slice(0, 3) + "\n" + params.name.slice(3)
                      );
                    } else {
                      return params.name;
                    }
                  } else {
                    return "";
                  }
                }
              },
              labelLine: {
                length: 30,
                length2: 60,
                show: true
              }
            }
          },
          data: data
        },
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [50, 100],
          hoverAnimation: false,
          startAngle: 70,
          left: "30",
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                fontSize: 16,
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < scaleData.length; i++) {
                    total += scaleData[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== "") {
                    return params.data.data;
                  } else {
                    return "";
                  }
                }
              },
              labelLine: {
                length: 15,
                length2: 30,
                show: true
              }
            }
          },
          data: data
        }
      ];
      let option = {
        backgroundColor: "#fff",
        left: "50",
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        toolbox: {
          show: false
        },
        series: seriesObj,
        graphic: [
          {
            type: "group",
            right: "165",
            top: "middle",
            children: [
              {
                type: "text",
                z: 100,
                right: "100",
                top: "0",
                style: {
                  fill: "#333",
                  text: ["购买率"],
                  font: "16px Microsoft YaHei"
                }
              },
              {
                type: "text",
                z: 100,
                right: "100",
                top: "32",
                style: {
                  fill: "red",
                  text: ["25%"],
                  font: "26px Microsoft YaHei"
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    createLeftBottom() {
      let myChart = this.$echarts.init(document.getElementById("leftBottom"));
      let innerFontColor = "#FFFFFF";
      let outerFontColor = "#666666";
      let scale = 1;
      let echartData = {
        inner: [
          {
            value: 700,
            unit: "个",
            name: "行业大类1"
          },
          {
            value: 679,
            unit: "个",
            name: "行业大类2"
          },
          {
            value: 1548,
            unit: "个",
            name: "行业大类3"
          }
        ],
        outer: [
          {
            value: 310,
            unit: "个",
            name: "邮件营销"
          },
          {
            value: 234,
            unit: "个",
            name: "联盟广告"
          },
          {
            value: 335,
            unit: "个",
            name: "视频广告"
          },
          {
            value: 548,
            unit: "个",
            name: "百度"
          },
          {
            value: 351,
            unit: "个",
            name: "谷歌"
          },
          {
            value: 247,
            unit: "个",
            name: "必应"
          }
        ]
      };

      let legend1 = echartData.inner.map(v => v.name);
      let legend2 = echartData.outer.map(v => v.name);
      let legendData = [...legend1, ...legend2];

      let option = {
        backgroundColor: "#fff",
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
          "#FFEA01",
          "#B8D07C",
          "#fca4bb",
          "#dc69aa",
          "#07a2a4",
          "#9a7fd1",
          "#588dd5",
          "#f5994e",
          "#c05050",
          "#59678c",
          "#c9ab00",
          "#7eb00a",
          "#6f5553",
          "#c14089"
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: [0, "35%"],
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 2
              }
            },
            label: {
              normal: {
                position: "inner"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: echartData.inner
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["45%", "55%"],
            data: echartData.outer,
            labelLine: {
              normal: {
                length: 20,
                length2: 140,
                lineStyle: {
                  color: "#e6e6e6"
                }
              }
            },
            label: {
              normal: {
                formatter: params => {
                  return (
                    "{icon|●}{name|" +
                    params.name +
                    "}{percent|" +
                    params.percent.toFixed(1) +
                    "%}{value|" +
                    params.value +
                    "}"
                  );
                },
                padding: [0, -160, 25, -160],
                rich: {
                  color: "#333",
                  icon: {
                    fontSize: 16
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 5, 0, 5],
                    color: "#666666"
                  },
                  percent: {
                    color: "#333",
                    padding: [0, 5, 0, 0]
                  },
                  value: {
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#333333"
                  }
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    createCenterTop() {
      let myChart = this.$echarts.init(document.getElementById("centerTop"));
      //数据定义区
      //参见秋枫雁飞
      //改进之处：地图visualmap和饼图相结合，修改了经纬坐标防止饼图重叠
      var province = [
        "北京",
        "天津",
        "河北",
        "山西",
        "内蒙古",
        "辽宁",
        "吉林",
        "黑龙江",
        "上海",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "广西",
        "海南",
        "重庆",
        "四川",
        "贵州",
        "云南",
        "西藏",
        "陕西",
        "甘肃",
        "青海",
        "宁夏",
        "新疆"
      ];
      var gdp = [
        //['A车','B车','其他',‘GDP’]
        [129.79, 4944.44, 20594.9, 25669.13],
        [220.22, 7571.35, 10093.82, 17885.39],
        [3492.81, 15256.93, 13320.71, 32070.45],
        [784.78, 5028.99, 7236.64, 13050.41],
        [1637.39, 8553.63, 7937.08, 18128.1],
        [2173.06, 8606.54, 11467.3, 22246.9],
        [1498.52, 7004.95, 6273.33, 14776.8],
        [2670.46, 4400.69, 8314.94, 15386.09],
        [109.47, 8406.28, 19662.9, 28178.65],
        [4077.18, 34619.5, 38691.6, 77388.28],
        [1965.18, 21194.61, 24091.57, 47251.36],
        [2567.72, 11821.58, 10018.32, 24407.62],
        [2363.22, 14093.47, 12353.89, 28810.58],
        [1904.53, 8829.54, 7764.93, 18499],
        [4929.13, 31343.67, 31751.69, 68024.49],
        [4286.21, 19275.82, 16909.76, 40471.79],
        [3659.33, 14654.38, 14351.67, 32665.38],
        [3578.37, 13341.17, 14631.83, 31551.37],
        [3694.37, 35109.66, 42050.88, 80854.91],
        [2796.8, 8273.66, 7247.18, 18317.64],
        [948.35, 905.95, 2198.9, 4053.2],
        [1303.24, 7898.92, 8538.43, 17740.59],
        [3929.33, 13448.92, 15556.29, 32934.54],
        [1846.19, 4669.53, 5261.01, 11776.73],
        [2195.11, 5690.16, 6903.15, 14788.42],
        [115.78, 429.17, 606.46, 1151.41],
        [1693.85, 9490.72, 8215.02, 19399.59],
        [983.39, 2515.56, 3701.42, 7200.37],
        [221.19, 1249.98, 1101.32, 2572.49],
        [241.6, 1488.44, 1438.55, 3168.59],
        [1648.97, 3647.01, 4353.72, 9649.7]
      ];
      var typeIndex = 1;
      var selectedRange = null;
      var option = null;
      var str = "";
      var data = [];
      var geoCoordMap = {};
      var name = "各省市各类产品销售额";
      var mapName = "china";
      // 地图特征
      var mapFeatures = echarts.getMap(mapName).geoJson.features;
      for (var i = 0; i < province.length; i++) {
        data.push({
          name: province[i],
          value: [
            {
              name: "A车",
              value: gdp[i][0]
            },
            {
              name: "B车",
              value: gdp[i][1]
            },
            {
              name: "其他",
              value: gdp[i][2]
            }
          ]
        });
      }
      var geoCoordMap = {
        //为了保证饼图不互相重叠，我对经纬坐标进行了调整
        上海: [121.472644, 31.231706],
        云南: [102.712251, 24.040609],
        内蒙古: [111.670801, 40.818311],
        北京: [116.405285, 39.904989],
        // '台湾': [121.509062, 25.044332],
        吉林: [125.3245, 43.886841],
        四川: [103.065735, 30.659462],
        天津: [119.190182, 39.125596],
        宁夏: [106.278179, 38.46637],
        安徽: [117.283042, 31.86119],
        山东: [118.000923, 36.675807],
        山西: [112.049248, 37.057014],
        广东: [113.280637, 23.125178],
        广西: [108.320004, 22.82402],
        新疆: [87.617733, 43.792818],
        江苏: [119.467413, 33.741544],
        江西: [115.892151, 28.676493],
        河北: [114.802461, 37.745474],
        河南: [113.665412, 33.757975],
        浙江: [120.153576, 29.287459],
        海南: [110.33119, 20.031971],
        湖北: [113.298572, 30.984355],
        湖南: [112.12279, 28.19409],
        // '澳门': [113.54909, 22.198951],
        甘肃: [103.823557, 36.058039],
        福建: [119.306239, 26.075302],
        西藏: [91.132212, 29.660361],
        贵州: [106.713478, 26.578343],
        辽宁: [123.029096, 41.396767],
        重庆: [106.504962, 29.933155],
        陕西: [108.948024, 34.263161],
        青海: [100.578916, 36.623178],
        // '香港': [114.173355, 22.320048],
        黑龙江: [126.642464, 46.756967]
      };

      /*变换地图数据（格式）：pie*/
      function convertMapDta(type, data) {
        var mapData = [];
        for (var i = 0; i < data.length; i++) {
          mapData.push({
            name: province[i],
            value: gdp[i][3]
          });
        }
        return mapData;
      }

      /*resetPie*/
      function resetPie(myChart, params, geoCoordMap, typeIndex) {
        var op = myChart.getOption();
        var ops = op.series;
        ops.forEach(function(v, i) {
          if (i > 0) {
            var geoCoord = geoCoordMap[v.name];
            var p = myChart.convertToPixel(
              {
                seriesIndex: 0
              },
              geoCoord
            );
            v.center = p;
            if (params != 0 && params.zoom) {
              v.radius = v.radius * params.zoom;
            }
            if (params != 0 && params.selected) {
              var rangeFirstNumber = params.selected[0];
              var rangeSecondNumber = params.selected[1];
              var pd = v.data[typeIndex].value;
              if (pd < rangeFirstNumber || pd > rangeSecondNumber) {
                v.itemStyle.normal.opacity = 0;
              } else {
                v.itemStyle.normal.opacity = 1;
              }
            }
          }
        });
        myChart.setOption(op, true);
      }

      /*addPie*/
      function addPie(chart, data) {
        var op = chart.getOption();
        var sd = option.series;
        for (var i = 0; i < data.length; i++) {
          var randomValue = 15;
          var radius = randomValue;
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            var vr = [];
            data[i].value.map(function(v) {
              vr.push({
                name: v.name,
                value: v.value,
                visualMap: false
              }); //饼图的数据不进行映射
            });
            var p = chart.convertToPixel(
              {
                seriesIndex: 0
              },
              geoCoord
            );
            sd.push({
              name: data[i].name,
              type: "pie",
              // roseType: 'radius',
              tooltip: {
                formatter: function(params) {
                  return (
                    params.seriesName +
                    "<br/>" +
                    params.name +
                    " : " +
                    params.value +
                    " 万"
                  );
                }
              },
              radius: radius,
              center: p,
              data: vr,
              zlevel: 4,
              tooltip: {
                formatter: "{a}<br/>{b}: {c}万 ({d}%)"
              },
              label: {
                normal: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                opacity: 0.6
              }
            });
          }
        }
        return sd;
      }

      /* 指定图表的配置项和数据:pie*/
      var option = {
        title: {
          text: name,
          left: "center",
          textStyle: {
            color: "black"
          }
        },
        legend: {
          data: ["其他", "B车", "A车"],
          orient: "vertical",
          top: "10%",
          left: "left",
          zlevel: 100
        },
        toolbox: {
          feature: {
            saveAsImage: {
              pixelRatio: 5
            }
          }
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (params.value) {
              return params.name + "<br/>" + "总额: " + params.value + "万";
            }
          }
        },
        visualMap: {
          type: "continuous",
          show: true,
          min: 0,
          max: 100000,
          left: "left",
          top: "bottom",
          text: ["高    (万)", "低    (万)"], // 文本，默认为数值文本
          calculable: true,
          // seriesIndex: [0],
          inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color:['#3C3B3F','#EE2C2C']//黑红
            color: ["lightskyblue", "yellow", "orangered"]
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
          }
        },

        series: [
          {
            name: "chinaMap",
            type: "map",
            mapType: mapName,
            roam: true,

            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            geo: {
              show: true,
              map: mapName,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              roam: true,
              itemStyle: {
                normal: {
                  areaColor: "#031525",
                  borderColor: "#3B5077"
                },
                emphasis: {
                  areaColor: "#2B91B7"
                }
              }
            },

            data: convertMapDta(province[typeIndex], data),
            zlevel: 3
          }
        ]
      };
      // console.log('========visualMapdata==========')
      // console.log(convertMapDta(province[typeIndex], data))
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
      /*pie*/
      addPie(myChart, data);
      /*bar*/
      // // addBar(myChart,data);
      // console.log("===========option=================");
      // console.log(option);
      myChart.setOption(option, true);

      /*饼图跟着地图移动:pie*/
      myChart.on("georoam", function(params) {
        resetPie(myChart, params, geoCoordMap, typeIndex);
      });
      myChart.on("datarangeselected", function(params) {
        resetPie(myChart, params, geoCoordMap, typeIndex);
      });
      window.addEventListener("resize", function() {
        myChart.resize();
        resetPie(myChart, 0, geoCoordMap);
      });

      myChart.setOption(option);
    },
    createCenterBottom() {
      let myChart = this.$echarts.init(document.getElementById("centerBottom"));

      var xData = (function() {
        var data = [];
        for (var i = 1; i < 15; i++) {
          data.push(i + "");
        }
        return data;
      })();

      let option = {
        // backgroundColor: "",
        title: {
        //   text: "16年1月-16年11月充值客单分析",
        //   subtext: "BY MICVS",
          x: "4%",

          textStyle: {
            color: "#fff",
            fontSize: "22"
          },
          subtextStyle: {
            color: "#90979c",
            fontSize: "16"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          borderWidth: 0,
          top: 110,
          bottom: 95,
          textStyle: {
            color: "#fff"
          }
        },
        legend: {
          x: "4%",
          top: "11%",
          textStyle: {
            color: "#90979c"
          },
          data: ["老用户", "新用户", "总"]
        },

        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: "#90979c"
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0
            },
            splitArea: {
              show: false
            }
          }
        ],
        dataZoom: [
          {
            show: true,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 10,
            end: 80,
            // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: "110%",
            handleStyle: {
              color: "#d3dee5"
            },
            textStyle: {
              color: "#fff"
            },
            borderColor: "#90979c"
          },
          {
            type: "inside",
            show: true,
            height: 15,
            start: 1,
            end: 35
          }
        ],
        series: [
          {
            name: "老用户",
            type: "bar",
            stack: "总量",
            barMaxWidth: 35,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "rgba(255,144,128,1)",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff"
                  },
                  position: "insideTop",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [
              198.66,
              330.81,
              151.95,
              160.12,
              222.56,
              229.05,
              128.53,
              250.91,
              224.47,
              473.99,
              126.85,
              260.5
            ]
          },

          {
            name: "新用户",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "rgba(0,191,183,1)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "top",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [
              82.89,
              67.54,
              62.07,
              59.43,
              67.02,
              67.09,
              35.66,
              71.78,
              81.61,
              78.85,
              79.12,
              72.3
            ]
          },
          {
            name: "总",
            type: "line",
            stack: "总量",
            symbolSize: 20,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "rgba(252,230,48,1)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "top",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [
              281.55,
              398.35,
              214.02,
              219.55,
              289.57,
              296.14,
              164.18,
              322.69,
              306.08,
              552.84,
              205.97,
              332.79
            ]
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
  height: 800px;
  display: flex;
  //   background: url("../../assets/bg03.png");
  //   background-image: url("../../assets/bg03.png");
  // background-repeat:no-repeat;
  // background-size: auto 100%;
}
.left {
  flex: 3;
  border: 1px #59d6df solid;
  border-right: 0px;
  .left-top {
    width: 100%;
    height: 399px;
  }
  .left-bottom {
    width: 100%;
    height: 399px;
    border-bottom: 1px #59d6df solid;

  }
}

.center {
  flex: 5;
  border: 1px #59d6df solid;
  .center-Top {
    width: 100%;
    height: 500px;
    border: 1px solid rgb(56, 205, 224);
    border-left: 0px;
  }
  .center-Bottom{
       width: 100%;
       height: 300px;
  }
}
</style>
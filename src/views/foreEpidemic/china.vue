<template>
  <div id="myChart" :style="{width: '100%', height: '630px'}"></div>
</template>

<script>
import echarts from 'echarts'
import chinaDatas from '../../mock/school'
require('echarts/map/js/china')
export default {
  name: 'china',
  data () {
    return {
        days:'',
        yiQing:'',
        newsDatas:''
    }
  },
  created () {
      this.days = chinaDatas.chinaData.days;
      this.newsDatas = chinaDatas.chinaData.newsDatas;
      this.yiQing = chinaDatas.chinaData.yiQingData
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
var days = this.days;

var province = ['湖北', '广东', '浙江', '湖南', '河南', '安徽', '重庆', '山东', '江西', '四川', '江苏', '北京', '福建', '上海', '广西', '河北', '陕西', '云南', '海南', '黑龙江', '辽宁', '山西', '天津', '甘肃', '内蒙古', '新疆', '宁夏', '吉林', '贵州', '青海', '西藏', '澳门', '香港', '台湾'];
var news = this.newsDatas;
var data = this.yiQing;
      let option ={
        baseOption: {
        timeline: {
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            playInterval: 3000,
            symbolSize: 12,
            left: '5%',
            right: '5%',
            bottom: '0%',
            width: '90%',
                textStyle: {
                color: '#fff'
            },
            data: days,
            tooltip: {
                formatter: days,
             
            },
        },

        tooltip: {
            show: true,
            formatter: function(params) {
                return params.name + '：' + params.data['value']
            },
        },
        visualMap: {
            type: 'piecewise',
            pieces: [{
                    min: 1002,
                    color: '#73240D'
                },
                {
                    min: 501,
                    max: 1001,
                    color: '#BB0000'
                },
                {
                    min: 251,
                    max: 500,
                    color: '#BD430A'
                },
                {
                    min: 101,
                    max: 250,
                    color: '#E08150'
                },
                {
                    min: 11,
                    max: 100,
                    color: '#E9B090'
                },
                {
                    min: 1,
                    max: 10,
                    color: '#F2DDD2'
                },
                {
                    value: 0,
                    color: 'white'
                }
            ],
            orient: 'vertical',
            itemWidth: 25,
            itemHeight: 15,
            showLabel: true,
            seriesIndex: [0],

            textStyle: {
                color: '#fff'
            },
            bottom: '10%',
            left: "5%",
        },
        grid: {
            right: '5%',
            top: '20%',
            bottom: '10%',

            textStyle: {
                color: '#fff'
            },
            width: '20%'
        },
        xAxis: {
            min: 0,
            max: 4000,
            show: false,

            textStyle: {
                color: '#fff'
            },
        },
        yAxis: [{
            inverse: true,
            offset: '2',
            'type': 'category',
            data: '',
            nameTextStyle: {
                color: '#fff'
            },
            axisTick: {
                show: false,
            },

            textStyle: {
                color: '#fff'
            },
            axisLabel: {
                //rotate:45,
                textStyle: {
                    fontSize: 14,
                    color: '#fff',
                },
                interval: 0
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                },
                  textStyle: {
                color: '#fff'
            },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
        }],
        geo: {
            map: 'china',
            right: '35%',
            left: '5%',

            textStyle: {
                color: '#fff'
            },
            label: {
                emphasis: {
                    show: false,
                },
            },
            itemStyle: {
                emphasis: {
                    areaColor: '#00FF00'
                }
            }
        },
        series: [{
                name: 'mapSer',
                type: 'map',
                map: 'china',
                roam: false,
                geoIndex: 0,
                label: {
                    show: false,

          
                },
            },
            {
                'name': '',
                'type': 'bar',
                zlevel: 2,
                barWidth: '40%',
                label: {
                    normal: {
                        show: true,
                        fontSize: 14,
                        color:'#fff',
                        position: 'right',
                        formatter: '{c}'
                    },

            textStyle: {
                color: '#fff'
            },
                },
            }
        ],

    },
    animationDurationUpdate: 3000,
    animationEasingUpdate: 'quinticInOut',
    options: []
};
for (var n = 0; n < days.length; n++) {

    var res = [];
    for (var j = 0; j < data[n].length; j++) {
        res.push({
            name: province[j],
            value: data[n][j]
        });
    }
    res.sort(function(a, b) {
        return b.value - a.value;
    }).slice(0, 6);

    res.sort(function(a, b) {
        return a.value - b.value;
    });
    var res1 = [];
    var res2 = [];
    for (var t = 0; t < 10; t++) {
        res1[t] = res[res.length - 1 - t].name;
        res2[t] = res[res.length - 1 - t].value;
    }
    option.options.push({
        title: [{
                 text: days[n] + "日  " + news[n],
                textStyle: {
                    color: '#fff',
                    fontSize: 28
                },
                left: 20,
                top: 20,
            },
            {
                show: true,
                text: '感染人数前十的省份',
                textStyle: {
                    color: '#fff',
                    fontSize: 18
                },
                right: '10%',
                top: '15%'
            }
        ],
        yAxis: {
            data: res1,

            textStyle: {
                color: '#fff'
            },
        },
        series: [{
            type: 'map',
            data: res,

            textStyle: {
                color: '#fff'
            },
        }, {
            type: 'bar',
            data: res2,

            textStyle: {
                color: '#fff'
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [{
                                colorStops: [{
                                    offset: 0,
                                    color: '#FF0000' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#990000' // 100% 处的颜色
                                }]
                            },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#00C0FA' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#2F95FA' // 100% 处的颜色
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                }
            },
        }]
    });
}
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>       
<style scoped>
#myChart{
  background: url('../../assets/bg07.png');
}
</style>

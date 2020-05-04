<template>
  <div id="myChart" :style="{width: '100%', height: '640px'}"></div>
</template>

<script>
import echarts from "echarts";
import schoolData from "../../mock/school";
export default {
  name: "school",
  data() {
    return {
      schoolDatas: [],
      someCollage: [],
      schoolLink: [],
      schoolCategories: []
    };
  },
  created() {
    this.schoolDatas = [...schoolData.schoolData.schoolData];
    this.someCollage = [...schoolData.schoolData.someCollage];
    this.schoolLink = [...schoolData.schoolData.schoolLink];
    this.schoolCategories = [...schoolData.schoolData.schoolCategories];
  },
  mounted() {
    //   console.log(schoolData.schoolData.schoolData)
    this.createSchool();
  },
  methods: {
    createSchool() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let option = {
        // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [
        //   {
        //     offset: 0,
        //     color: "#f7f8fa"
        //   },
        //   {
        //     offset: 1,
        //     color: "#cdd0d5"
        //   }
        // ]),
        title: {
          text: "哈尔滨理工大学数据分析",
          subtext: "各学院专业关系",
          top: "top",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          label: {
         
          }
        },
        legend: [
          {
            formatter: function(name) {
              return echarts.format.truncateText(
                name,
                40,
                "14px Microsoft Yahei",
                "…"
              );
            },
            tooltip: {
              show: true
            },
            selectedMode: "false",
            bottom: 20,
               textStyle: {
              color: "#fff"
            },
            data: this.someCollage
          }
        ],
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: true },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        animationDuration: 3000,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            name: "哈尔滨理工大学",
            type: "graph",
            layout: "force",

            force: {
              repulsion: 50
            },
            data: this.schoolDatas,
            links: this.schoolLink,
            categories: [
              {
                name: "软件与微电子学院"
              },
              {
                name: "机械动力工程学院"
              },
              {
                name: "计算机科学与技术学院"
              },
              {
                name: "建筑工程学院"
              },
              {
                name: "法学院"
              },
              {
                name: "荣成学院"
              },
              {
                name: "材料科学与工程学院"
              },
              {
                name: "	测控技术与通信工程学院"
              },
              {
                name: "理学院"
              },
              {
                name: "艺术学院"
              },
              {
                name: "成人与继续教育学院"
              },
              {
                name: "电气与电子工程学院"
              },
              {
                name: "化学与环境工程学院"
              },
              {
                name: "经济与管理学院"
              },
              {
                name: "马克思主义学院"
              },
              {
                name: "自动化学院"
              },
              {
                name: "外国语学院"
              },
              {
                name: "国际文化与教育学院"
              }
            ],
            focusNodeAdjacency: true,
            roam: true,
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            lineStyle: {
              normal: {
                color: "source",
                curveness: 0,
                type: "solid"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style  scoped>
#myChart {
  background: url("../../assets/bg07.png");
}
</style>
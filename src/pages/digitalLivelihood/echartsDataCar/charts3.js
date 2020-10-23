
// 车辆异常进出次数统计图数据

import echarts from 'echarts'
export default {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08'],
        splitLine:{show: false}, //隐藏网格线
            axisTick:{
                show:false//不显示坐标轴刻度线
            },
            axisLine: {
                show: false,//不显示坐标轴线
            },
    },
    yAxis: {
        type: 'value',
        splitLine:{show: false}, //隐藏网格线
            axisTick:{
                show:false//不显示坐标轴刻度线
            },
            axisLine: {
                show: false,//不显示坐标轴线
            },
    },
    grid: {
        left: '3%',
        right: '8%',
        top: '5%',
        bottom: '5%',
        containLabel: true
    },
    series: [{
        data: [5, 15, 10, 33, 15, 10, 5],
        type: 'line',
        symbol: 'none',  //取消折点圆圈
        smooth:true, // 折线圆角
        areaStyle: {},
        itemStyle:{
            normal: {
                lineStyle:{
                    color: "#5B8FF9" // 折线图-线条颜色
                },
                //柱形图圆角，初始化效果
                barBorderRadius:[20, 20, 20, 20],
                // 柱子渐变色
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: "#111940"  // 0% 处的颜色
                }, {
                    offset: 1,
                    color: "#5B8FF9"// 100% 处的颜色
                }], false)
            }
        }
    }]
};
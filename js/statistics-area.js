/**
 * Created by Administrator on 2016/9/30.
 */
var myChart = echarts.init(document.getElementById('area')) ;

var option = {
    //图表的标题
    title: {
        text: '总发送统计',
        x:'5%',
        y:'5%'
    },
    //图表展示的类别，这里的data和series中得name对应
    legend: {
        show:false,
        data: ['标题1', '标题二', '标题三']
    },
    //这里的是采用什么方式触发数据，这里显示的竖轴，跟随鼠标移动到节点上会显示内容
    tooltip: {
        trigger: 'axis'
    },
    //代表x轴，这里type类型代表字符
    xAxis: [{
        type: 'category',
        boundaryGap: false,//这里表示是否补齐空白
        //splitNumber: 10,
        //scale: true,
        min:'dataMin',
        axisLine:{
            show:false
        },
        axisTick:{
            show:false //刻度线
        },
        splitLine:{
            show:false
        },
        data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    }],
    //代表y轴，这里type类型代表num类型
    yAxis: [{
        type: 'value',
        splitNumber: 0,
        scale: true,
        splitLine:{
            show:false
        },
        axisTick:{
            show:false //刻度线
        },
        axisLine:{
            show:false //y轴线
        },
        axisLabel:{
            show:false  //y轴值
        }
    }],
    //图表类型，type表示按照什么类型图表显示，line代表折线，下面的内容与
    //legend一一对应
    series: [{
        name: '短信消费',
        type: 'line',
        smooth: true,       //折线圆滑
        symbol:'none',  //取消折线标示圆点
        lineStyle:{
            normal:{
                width:0 ,//设置边线宽度

            }
        },
        itemStyle: {
            normal: {
                areaStyle: {
                    /*shadowColor: '#333',
                     shadowBlur: 12,
                     shadowOffsetX:0,
                     shadowOffsetY:3,
                     opacity:0.8,
                     // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                     /* color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0, color: '#ffa800' // 0% 处的颜色
                     }, {
                     offset: 1, color: '#df980e' // 100% 处的颜色
                     }], false)*/
                }
            }
        },
        data: [1, 2, 2, 4, 10, 12, 31,30, 32, 22, 14, 50]
    }, {
        name: '语音消费',
        type: 'line',
        smooth: true,
        symbol:'none',
        lineStyle:{
            normal:{
                width:0 //设置边线宽度
            }
        },
        itemStyle: {
            normal: {
                areaStyle: {
                    /*shadowColor: '#333',
                     shadowBlur: 12,
                     shadowOffsetX:0,
                     shadowOffsetY:3,
                     opacity:0.8,
                     // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                     /* color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                     offset: 0, color: '#53cdbd' // 0% 处的颜色
                     }, {
                     offset: 1, color: '#30b3a2' // 100% 处的颜色
                     }], false)*/
                }
            }
        },
        data: [3, 2, 6, 4, 10, 11, 2, 4, 12, 10, 4, 12]
    },
        {
            name: '富媒体消费',
            type: 'line',
            symbol:'none',
            smooth: true,
            lineStyle:{
                normal:{
                    width:0 //设置边线宽度
                }
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        /* shadowColor: '#333',
                         shadowBlur: 12,
                         shadowOffsetX:0,
                         shadowOffsetY:3,
                         opacity:0.8,
                         // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                         /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0, color: '#2a9be2' // 0% 处的颜色
                         }, {
                         offset: 1, color: '#1580c4' // 100% 处的颜色
                         }], false)*/
                    }
                }
            },
            data: [20, 6, 14, 3, 23, 3, 9, 5, 6, 7, 9, 1]
        },
        {
            name: '国际短信消费',
            type: 'line',
            symbol:'none',
            smooth: true,
            lineStyle:{
                normal:{
                    width:0 //设置边线宽度
                }
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        /* shadowColor: '#333',
                         shadowBlur: 12,
                         shadowOffsetX:0,
                         shadowOffsetY:3,
                         opacity:0.8,
                         // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                         /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0, color: '#2a9be2' // 0% 处的颜色
                         }, {
                         offset: 1, color: '#1580c4' // 100% 处的颜色
                         }], false)*/
                    }
                }
            },
            data: [33, 32, 4, 7, 9, 3, 10, 7, 3, 7, 3, 2]
        },{
            name: '其他',
            type: 'line',
            symbol:'none',
            smooth: true,
            lineStyle:{
                normal:{
                    width:0 //设置边线宽度
                }
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        /* shadowColor: '#333',
                         shadowBlur: 12,
                         shadowOffsetX:0,
                         shadowOffsetY:3,
                         opacity:0.8,
                         // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                         /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0, color: '#2a9be2' // 0% 处的颜色
                         }, {
                         offset: 1, color: '#1580c4' // 100% 处的颜色
                         }], false)*/
                    }
                }
            },
            data: [3, 12, 34, 7, 9, 30, 10, 71, 30, 21, 39, 9]
        }

    ],color: ['rgb(242,119,28)','rgb(255,208,0)','rgb(100,100,243)','rgb(11,192,231)','rgb(235,104,119)']
};
//配置图表设置并读取
myChart.setOption(option);
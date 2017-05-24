/**
 * Created by Administrator on 2016/9/30.
 */
var myChart = echarts.init(document.getElementById('area')) ;//图形容器

var option = {
    //图表的标题
    title: {
     text: '总发送统计',
     x:'5%',//横向距离可设PX与百分比值
     y:'5%'//竖向向距离可设PX与百分比值
     },
    //图表展示的类别，这里的data和series中得name对应
    legend: {
     show:false,
     data: ['标题1', '标题二', '标题三'],
     },
    //这里的是采用什么方式触发数据，这里显示的竖轴，跟随鼠标移动到节点上会显示内容
    tooltip: {
        trigger: 'axis'
    },
    //图形x轴属性设置，这里type类型代表字符
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
        splitArea: { //背景块
            show: true,
            areaStyle: {
                color: ['#fff', '#ebf5f4']
            }
        },
        data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    }],
    //代表y轴，这里type类型代表num类型
    yAxis: [{
        type: 'value',
        splitNumber: 0,
        scale: true,
        z:1,
        splitLine:{
            show:true,
            lineStyle:{
                color: '#fee'
            }
        },
        axisTick:{
            show:false //刻度线
        },
        axisLine:{
            show:false //y轴线
        },
        axisLabel:{
            show:false //y轴值
        }
    }],
    //图表类型，type表示按照什么类型图表显示，line代表折线，下面的内容与
    //legend一一对应
    series: [{
        name: '验证码/短信',
        z:5,
        type: 'line',
        smooth: true,       //折线圆滑
        symbol:'none',  //取消折线标示圆点
        lineStyle:{
            z:0,
            normal:{
                width:0 ,//设置边线宽度

            }
        },
        itemStyle: {
            normal: {
                areaStyle: {
                    shadowColor: '#8d3f06',//设置图层阴影颜色
                    shadowBlur: 15, //阴影范围
                    shadowOffsetX:0, //X偏移像素
                    shadowOffsetY:4, //Y轴偏移像素
                    opacity:0.78, //图层透明度
                    // 线性渐变，此处是为了满足对图层渐变色彩异常执着的小美工的需求进行的调试正常设置颜色可下滑至最下方代码【color】属性处
                  // 前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                    /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#5caada' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#5caada' // 100% 处的颜色
                    }], false)*/
                }
            }
        },
        data: [11, 12, 21, 14, 10, 20, 70,30, 22, 32, 54, 20]
    },
        {
            name: '流量分发',
            type: 'line',
            z:4,
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
                        shadowColor: '#0e86b0'
                        ,
                        shadowBlur: 15,
                        shadowOffsetX:0,
                        shadowOffsetY:4,
                        opacity:0.78,
                        // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                        /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0, color: '#f9673e' // 0% 处的颜色
                         }, {
                         offset: 1, color: '#f9673e' // 100% 处的颜色
                         }], false)*/
                    }
                }
            },
            data: [33, 132, 4, 7, 9, 3, 10, 7, 3, 71, 39, 12]
        },
        {
        name: '语音呼叫',
        z:3,
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
                    shadowColor: '#ae8607',
                    shadowBlur: 15,
                    shadowOffsetX:0,
                    shadowOffsetY:4,
                    opacity:0.78,
                    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                   /* color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#f9673e' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#f9673e' // 100% 处的颜色
                    }], false)*/
                }
            }
        },
        data: [32, 12, 61, 24, 10, 11, 2, 4, 12, 10, 24, 12]
    },
        {
            name: '国际短信',
            z:2,
            type: 'line',
            symbol:'none',
            smooth: true,
            lineStyle:{
                normal:{
                    width:0, //设置边线宽度
                    z:0
                }
            },
            itemStyle: {
                normal: {
                    areaStyle: {
                        shadowColor: '#a43542',
                         shadowBlur: 15,
                         shadowOffsetX:0,
                         shadowOffsetY:4,
                         opacity:0.78,
                         // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                        /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0, color: '#2a9be2' // 0% 处的颜色
                         }, {
                         offset: 1, color: '#1580c4' // 100% 处的颜色
                         }], false)*/
                    }
                }
            },
            data: [30, 12, 34, 71, 39, 30, 10, 71, 30, 71, 39, 91]
        },
        {
            name: '富媒体',
            z:1,
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
                        shadowColor: '#474bb6',
                        shadowBlur: 15,
                        shadowOffsetX:0,
                        shadowOffsetY:4,
                        opacity:0.78,
                        // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                        /*color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                         offset: 0, color: '#2a9be2' // 0% 处的颜色
                         }, {
                         offset: 1, color: '#1580c4' // 100% 处的颜色
                         }], false)*/
                    }
                }
            },
            data: [20, 26, 14, 31, 23, 32, 19, 51, 36, 27, 39, 1]
        },

    ],
    //自定义图层颜色只需按照图层顺序依次指定就好支持css所有颜色设置也可以通过rgba设置图层透明度
    color: ['rgb(11,192,231)','rgb(235,104,119)','rgb(100,100,243)','rgb(255,208,0)','rgb(242,119,28)']
};
//配置图表设置并读取
myChart.setOption(option);
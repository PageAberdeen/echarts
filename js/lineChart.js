/**
 * Created by Administrator on 2016/10/12.
 */
var myChart = echarts.init(document.getElementById('lineChart')) ;

var option = {
    //图表的标题
    /*title: {
        text: '总发送统计',
        x:'5%',
        y:'5%'
    },
    //图表展示的类别，这里的data和series中得name对应
    legend: {
        show:false,
        data: ['标题1', '标题二', '标题三'],
        getColor:{

        },
    },*/
    //这里的是采用什么方式触发数据，这里显示的竖轴，跟随鼠标移动到节点上会显示内容
    tooltip: {
        trigger: 'item'
    },
    //代表x轴，这里type类型代表字符
    xAxis: [{
        type: 'category',
        boundaryGap: false,//这里表示是否补齐空白
        //splitNumber: 10,
        //scale: true,
        //min:'dataMin',
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
        data:['三月','四月','五月','六月','七月','八月','九月']
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
        type: 'line',
        smooth: false,       //折线圆滑
        z:2,
        hoverAnimation:true,
        symbolSize:15,
        //symbol:'arrow',  //取消折线标示圆点 //'circle', 'rect'实心正方形, 'roundRect' 倒圆角正方形, 'triangle'实心三角形, 'diamond'实心菱形, 'pin'实心地图标示, 'arrow'
        lineStyle:{
            normal:{
                width:2 ,//设置边线宽度

            }
        },
       /* itemStyle: {
            normal: {
                areaStyle: {
                    shadowColor: '#333',
                    shadowBlur: 12,
                    shadowOffsetX:0,
                    shadowOffsetY:3,
                    opacity:0.5,
                    // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果最后一个参数传 `true`，则该四个值是绝对的像素位置
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#5caada' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#5caada' // 100% 处的颜色
                    }], false)
                }
            }
        },*/
        data: [14, 10, 20, 70,30,22,55]
    }
    ],
    color: ['#00b7ee']
};
//配置图表设置并读取
myChart.setOption(option);
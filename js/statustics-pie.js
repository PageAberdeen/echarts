/**
 * Created by Administrator on 2016/9/30.
 */
/**
 * Created by Administrator on 2016/9/30.
 */
var myChart = echarts.init(document.getElementById('pie')) ;

option = {
    /*title: {
     text: '消费占比'
     },*/
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"       //提示框
    },
    legend: {
        textStyle:{
            fontSize:16
        },
        orient: 'vertical',
        x: 'right',
        y:'bottom',
        data:['停机/空号','号码限制','黑名单']
    },
    itemStyle: {
        emphasis: {
            shadowBlur: 50,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    },
    series: [
        {
            orient: 'horizontal',
            name:'失败原因',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '90%'],  //内层扇形图圆心倒角度数，宽度

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show:false
                }
            },
            data:[
                {value:50, name:'停机/空号', selected:true}, //内层图形值 ，名字 ，默认选中
                {value:100, name:'号码限制'},
                {value:30, name:'黑名单'}
            ]
        }


    ],
    color: ['rgb(242,119,28)','rgb(255,208,0)','rgb(100,100,243)']
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
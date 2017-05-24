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
        padding:15,
        backgroundColor:'#ebf5f4',
        orient: 'vertical',
        x: '70%',
        y:'bottom',
        data:['验证码/短信','流量分发','语音呼叫','国际短信','富媒体']
    },
    itemStyle: {
        emphasis: {
            shadowBlur: 50,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    },
    series: [
        {
            //orient: 'horizontal',
            name:'消费占比',
            type:'pie',
            //selectedMode: 'single',
            center: ['40%', '50%'],  //内层扇形图圆心倒角度数，宽度

            /*label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show:true
                }
            },*/
            data:[
                {value:0, name:'验证码/短信', selected:true}, //内层图形值 ，名字 ，默认选中
                {value:0, name:'流量分发'},
                {value:0, name:'语音呼叫'},
                {value:0, name:'国际短信'},
                {value:0, name:'富媒体'}
            ]
        },

        /*{
            name:'发送失败原因',  //弹出提示标题
            type:'pie',
            radius: ['60%', '80%'], //圆环圆心倒角度数，圆环宽度

            data:[  //圆环json数据
                {value:335, name:'停机/空号'},
                {value:310, name:'号码限制'},
                {value:234, name:'黑名单'},

            ]
        }*/

    ],
    color: ['rgb(11,192,231)','rgb(235,104,119)','rgb(100,100,243)','rgb(255,208,0)','rgb(242,119,28)']
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
(function () {
    $(function(){

        $('.content').eq(0).show()

        $('.Supervisory .inner .tabs span').click(function(){
            const _index = $(this).index()
            $(this).addClass('active').siblings('span').removeClass('active')

            $('.content').eq(_index).show().siblings('.content').hide()

            $('.marquee').each(function(){
                const children = $(this).children().clone()
                $(this).append(children)
              })
        })
    })
})();



(function(){
$(function(){
    const pie = document.getElementById('pie')

    console.log(pie);
    const echartInstance = echarts.init(pie)

    const options =  {
 
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9',
      '#1d9dff'],
       
        series: [
          {
            name: '点位分布统计',
            type: 'pie',
            radius: ["10%", "70%"],
            center: ['45%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            label: {
                fontSize: 10
            },
            labelLine:{
                length: 6,
                length2: 8
            },
            data: [
              { value: 20, name: '云南' },
              { value: 26, name: '北京' },
              { value: 24, name: '⼭东' },
              { value: 25, name: '河北' },
              { value: 20, name: '江苏' },
              { value: 25, name: '浙江' },
              { value: 30, name: '四川' },
              { value: 42, name: '湖北' }
            ]
          }
        ]
    };

    echartInstance && echartInstance.setOption(options)

   window.addEventListener('resize',function(){
    echartInstance.resize()
   })
})
})()
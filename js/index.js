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
})();

(function(){
  $(function(){
    const bar = document.getElementById('bar')

    const echartsInstance = echarts.init(bar)
    let item = {
      value: 1200,
      itemStyle: {
        color: '#254065'
      },
      tooltip:{
        show:false
      },
    }
    const  option = {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: '#00fffb' // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#0061ce' // 100% 处的颜色
          }
        ],
        global: false // 缺省为 false
      },
      tooltip:{
        show:true
      },
      grid:{
        top:'5%',
        left:'0',
        bottom:'3%',
        right:'3%',
        containLabel:true
      },

      xAxis: {
        type: 'category',
        data:  ['上海', '⼴州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦⻔', '济南', '成都', '重庆'],
        axisLabel:{
          color:'#0061ce',
          fontSize:'10'
        },
        axisTick:{
          show:false
        },
        axisLine:{
          show:true,
          lineStyle:{
            color:'rgba(0, 240, 255, 0.3)'
          }
        },
      },
      yAxis: {
        type: 'value',
        axisTick:{
          show:false
        },
        axisLabel:{
          color:'#0061ce',
          fontSize:'12'
        },
        axisLine:{
          show:true,
          lineStyle:{
            color:'rgba(0, 240, 255, 0.3)'
          }
        },
        splitLine:{
          lineStyle:{
            color:'rgba(0, 240, 255, 0.3)'
          }
        }
      },
      series: [
        {
          barWidth: '20%',
          data:[2100,1900,1700,1560,1400,item,item,item,900,750,600,480,240],
          type: 'bar'
        }
      ]
    };
    echartsInstance && echartsInstance.setOption(option)

    window.addEventListener('resize',function(){
      echartsInstance.resize()
    })

  })
})();

(function(){
  $(function(){
    let i = 0
    const data = {
      day365: { orders: '20,301,987', amount: '99834' },
      day90: { orders: '301,987', amount: '9834' },
      day30: { orders: '1,987', amount: '3834' },
      day1: { orders: '987', amount: '834' }
    }
      
    $('.order .dateTab span').click(function(){
      const _index = $(this).index()
      i = _index
      $(this).addClass('active').siblings('span').removeClass('active')

      render(_index)
    })

    $('.order .count .item h4').eq(0).html(data['day365'].orders)

    $('.order .count .item h4').eq(1).html(data['day365'].amount)

    function render(index) {
        const key = $('.order .dateTab span').eq(index).attr('data-index')
        $('.order .dateTab span').eq(index).addClass('active').siblings('span').removeClass('active')
        $('.order .count .item h4').eq(0).html(data[key].orders)

        $('.order .count .item h4').eq(1).html(data[key].amount)
    }

   
    let timer = null
    function toggleTime() {
      timer = setInterval(() => {
        i++
        if(i>3){
          i = 0
        }
        render(i)
      }, 1000);
    }
    toggleTime()


    $('.order').hover(()=>{
      clearInterval(timer)
    },()=>{
      toggleTime()
    })
  })
})();

(function(){
  $(function(){
    let i = 0
    const data = {
      year: {
        info: [
          '2099年',
          '2199年',
          '2299年',
          '2399年',
          '2499年',
          '2599年',
          '2699年',
          '2799年',
          '2899年',
          '2999年',
          '3099年',
          '3199年'
        ],
        detail: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
      },
    
      quarter: {
        info: ['1季度', '2季度', '3季度', '4季度'],
        detail: [
          [23, 75, 12, 97],
          [43, 31, 65, 23]
        ]
      },
    
      month: {
        info: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ],
        detail: [
          [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
          [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ]
      },
    
      week: {
        info: ['近1周', '近2周', '近3周', '近4周', '近5周', '近6周'],
        detail: [
          [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
          [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
      }
    };
      

    const line = document.getElementById('line')

    const echartInstance = echarts.init(line)

    const option = {

      tooltip: {
        trigger: 'axis'
      },
      legend: {
       data: ['预期销售额', '实际销售额'],
      
       textStyle:{
        color:'#4c9bfd'
       },
       right:'10%'
      },
      grid: {
        left: '0%',
        right: '2%',
        bottom: '0%',
        top:'18%',
        containLabel: true
      },
     
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.year.info,
        axisLabel:{
          color:'#4c9bfd'
        },

        splitLine: {
          lineStyle: {
            color: '#012f4a' // 分割线颜⾊
          }
        },
        axisTick:{
          show:false
        }
      },
      yAxis: {
        type: 'value',
        axisLabel:{
          color:'#4c9bfd'
        },

        splitLine: {
          lineStyle: {
            color: '#012f4a' // 分割线颜⾊
          }
        },
        axisTick:{
          show:false
        }
      },
      series: [
        {
          name: '预期销售额',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: data['year'].detail[0]
        },
        {
          name: '实际销售额',
          type: 'line',
          stack: 'Total',
          smooth: true,
          data: data['year'].detail[1]
        }
      ]
    };

    echartInstance && echartInstance.setOption(option)

    window.addEventListener('resize',()=>{
      echartInstance.resize()
    })

    $('.sales .Statistics span').click(function(){
      const _index = $(this).index() - 1
      i = _index
      render(_index)
    })

    function render(index){
      const key = $('.sales .Statistics span').eq(index).attr('data-index')
      $('.sales .Statistics span').eq(index).addClass('active').siblings('span').removeClass('active')
      
      option.series[0].data = data[key].detail[0]
      option.series[1].data = data[key].detail[1]
      option.xAxis.data = data[key].info
      echartInstance.setOption(option)
    }


    
    let timer = null
    function toggleTime() {
      timer = setInterval(() => {
        i++
        if(i>3){
          i = 0
        }
        render(i)
      }, 1000);
    }
    toggleTime()


    $('.sales').hover(()=>{
      clearInterval(timer)
    },()=>{
      toggleTime()
    })
  })
})();


(function(){
  $(function(){
    const radar = document.getElementById('radar')

    const echartInstance = echarts.init(radar)
    const dataBJ = [
      [90, 19, 56, 11, 34]
    ];
    
    
  const option = {
    tooltip:{
      show:true
    },
    
      radar: {

        indicator: [
          { name: '机场', max: 160 },
          { name: '商场', max: 79 },
          { name: '⽕⻋站', max: 100 },
          { name: '汽⻋站', max: 100 },
          { name: '地铁', max: 100 },
        ],
        shape: 'circle',
        splitNumber: 4,
        name:{
          textStyle:{
            color:'#4c9bfd'
          }
        },
       
        splitLine: {
          lineStyle: {
            color:'rgba(255,255,255,0.5)'
          }
        },
        splitArea: {
          show: false
        },
        axisLine: {
          lineStyle: {
             color:'rgba(255,255,255,0.5)'
          }
        },
        nameGap:"7",
        radius:"65%",
      },
      series: [
        {
         name:'销售渠道',
          type: 'radar',
          lineStyle: {
            width: 3,
            color:'#fff'
          },
      
          data: dataBJ,
          symbol: 'circle',
          itemStyle: {
            color: '#fff'
          },
          label:{
            show:true,
            color: '#fff',
            fontSize:'8'
          },
          
          areaStyle: {
             color: 'rgba(238, 197, 102, 0.6)'
          }
        }
      ]
    };
    

    echartInstance && echartInstance.setOption(option)

    window.addEventListener('resize',()=>{
      echartInstance.resize()
    })
  })
})();

(function(){
  $(function(){
      const gauge =  document.getElementById('gauge')
      const  chartsInstance  = echarts.init(gauge)        
      const option = {
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['120%', '140%'],
            center: ['50%', '80%'],
            avoidLabelOverlap: false,
            startAngle: 180,
            label: {
              show: false,
              position: 'center'
            },
            hoverAnimation: false,
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              {
             
                value: 100,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                    // (x1,y2) 点到点 (x2,y2) 之间进⾏渐变
                    0,
                    0,
                    0,
                    1,
                    [
                      { offset: 0, color: '#00c9e0' }, // 0 起始颜⾊
                      { offset: 1, color: '#005fc1' } // 1 结束颜⾊
                    ]
                  )
                }
                
              },
      
              { value: 100, itemStyle: { color: '#12274d' } },
              { value: 200, itemStyle: { color: 'transparent' } }
            ]
          }
        ]
      };
      
      chartsInstance && chartsInstance.setOption(option)

      window.addEventListener('resize',()=>{
        chartsInstance.resize()
      })
  })
})();


(function(){
  $(function(){

    let i = 0
    var hotData = [
      {
         city: '北京', // 城市
         sales: '25, 179', // 销售额
         flag: true, // 上升还是下降
         brands: [ // 品牌种类数据
          { name: '可爱多', num: '9,086', flag: true },
          { name: '娃哈哈', num: '8,341', flag: true },
          { name: '喜之郎', num: '7,407', flag: false },
          { name: '⼋喜', num: '6,080', flag: false },
          { name: '⼩洋⼈', num: '6,724', flag: false },
          { name: '好多⻥', num: '2,170', flag: true },
          ]
      },
      {
         city: '河北',
         sales: '23,252',
         flag: false,
         brands: [
          { name: '可爱多', num: '3,457', flag: false },
          { name: '娃哈哈', num: '2,124', flag: true },
          { name: '喜之郎', num: '8,907', flag: false },
          { name: '⼋喜', num: '6,080', flag: true },
          { name: '⼩洋⼈', num: '1,724', flag: false },
          { name: '好多⻥', num: '1,170', flag: false },
          ]
      },
      {
        city: '上海',
        sales: '20,760',
        flag: true,
        brands: [
         { name: '可爱多', num: '2,345', flag: true },
         { name: '娃哈哈', num: '7,109', flag: true },
         { name: '喜之郎', num: '3,701', flag: false },
         { name: '⼋喜', num: '6,080', flag: false },
         { name: '⼩洋⼈', num: '2,724', flag: false },
         { name: '好多⻥', num: '2,998', flag: true },
         ]
      },
      {
        city: '江苏',
        sales: '23,252',
        flag: false,
        brands: [
         { name: '可爱多', num: '2,156', flag: false },
         { name: '娃哈哈', num: '2,456', flag: true },
         { name: '喜之郎', num: '9,737', flag: true },
         { name: '⼋喜', num: '2,080', flag: true },
         { name: '⼩洋⼈', num: '8,724', flag: true },
         { name: '好多⻥', num: '1,770', flag: false },
         ]
      },
      {
     
        city: '⼭东',
        sales: '20,760',
        flag: true,
        brands: [
         { name: '可爱多', num: '9,567', flag: true },
         { name: '娃哈哈', num: '2,345', flag: false },
         { name: '喜之郎', num: '9,037', flag: false },
         { name: '⼋喜', num: '1,080', flag: true },
         { name: '⼩洋⼈', num: '4,724', flag: false },
         { name: '好多⻥', num: '9,999', flag: true },
        ]
      }

    ]
    let  listright   = $('.ProvincialHotList .list-right').html('')
    hotData[0].brands.forEach(item=>{
      listright.append(`
      <div class="list-item">
      <span class="position">${ item.name}</span>
      <div class="heat">
          <span class="heatNumber">${item.num}</span>
          <span class="iconfont ${item.flag ? 'icon-up':"icon-down"}" ></span>
      </div>
      </div>
  
      `)
    })
    

    $('.ProvincialHotList .list-left .list-item').mouseenter(function(){
        const _index = $(this).index()
        i = _index
        render(_index , $(this))
    })


    function render(_index,thisElc) {

      thisElc.addClass('active').siblings('.list-item').removeClass('active')
      listright = $('.ProvincialHotList .list-right').html('')
      hotData[_index].brands.forEach(item=>{
        listright.append(`
        <div class="list-item">
        <span class="position">${item.name}</span>
        <div class="heat">
            <span class="heatNumber">${item.num}</span>
            <span class="iconfont ${item.flag ? 'icon-up':"icon-down"}" ></span>
        </div>
        </div>
        `)
      })
    }
    

    let time = null

    function timer(){
      time = setInterval(()=>{
        i++

        if(i>4){
          i=0
        }
       const thisElc = $('.ProvincialHotList .list-left .list-item').eq(i)
        render(i , thisElc)
      },1000)
    }

    timer()


    $('.ProvincialHotList .list-left').hover(()=>{
      clearInterval(time)
    },()=>{
      timer()
    })
  })
})()


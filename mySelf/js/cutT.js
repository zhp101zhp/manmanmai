$(function(){

    //获取地址栏参数
    var search = location.search;
    // 降温好截取掉
    search = search.slice(1);

    //获取值
    search = search.split('=');
    search = search[1];
   // console.log(search);
    
    //发送ajax请求 获取数据将标题名称渲染到 页面
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcoupon',
      
        success:function(data){

            // 存id
            data.title = data.result[search].couponTitle;
            console.log(data);
            var html = template('tpl',data);
            $('.mm_header h3').html(html);
        }
    });


    // 发送ajax请求 获取数据 渲染到也页面

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data:{
            couponid:search
        },
        success:function(data){
            //console.log(data);
            //准备数据 与模板结合
            var html = template('tpl2',data);
            $('.cut_list ul').html(html);
        }
    });



    // 轮播图
    // 给攒然出来的li注册点击事件
    $('.cut_list ul').on('click','li',function(){
        //alert('kkk');
        //让轮播图显示
       $('.big').css('display','block');
       //获得slider插件对象
        var gallery = mui('.mui-slider');
        gallery.slider({
        interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
});
    })
     
    

   
})
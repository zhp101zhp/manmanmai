$(function(){

    //发送ajax请求和获取数据 渲染页面

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcoupon',
        success:function(data){
            console.log(data);

            //准备数据 与模板结合
            var html = template('tpl',data);
            $('.mm_main').html(html);

        }
    });

    // 给每一个li注册点击事件 跳转相应页面
    $('.mm_main').on('click','li',function(){
        //alert('lll');
        //获取当前元素的id 
        var id = $(this).data('id');
        
        //console.log(id);
        location.href = 'cutT.html?couponId='+id;
    })
})
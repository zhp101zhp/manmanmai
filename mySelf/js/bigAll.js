$(function(){

    //发送ajax请求 获取数据 渲染页面

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrandtitle',
        success:function(data){
            console.log(data);
            // 准备数据 与模板结合
            var html = template('tpl',data);
            $('.product_list ul').html(html);
        }
    });


    // 给动态生成的li注册点击事件 事件委托 获取当前的标题id
    $('.product_list ul').on('click','li',function(){
        //alert('kkk');
        var titleId = $(this).data('id');
        console.log(titleId);
        location.href ="brandList.html?titleid="+titleId;
    })
})
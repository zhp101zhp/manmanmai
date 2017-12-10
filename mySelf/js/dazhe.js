$(function(){

    //发送ajax获取数据
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getinlanddiscount',
        success:function(data){
            console.log(data);

            var html = template('tpl',data);

            $('.mm_main').html(html);
        }
    });

    // 给每个渲染出来的li注册点事件

    $('.mm_main').on('click','li',function(){
        //alert('kk');

        var id = $(this).data('id');
        //console.log(id);

        location.href="dazheT.html?="+id;
    })
})
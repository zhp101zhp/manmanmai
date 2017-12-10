
// 入口函数
$(function(){
    //发送ajax请求 获取后台数据 渲染页面
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrl',
        dataType:"json",
        success:function(data){
            console.log(data);
            var html = template('tpl',data);
            $('.mm_product ul').html(html);
        }
    });


    // 给更多注册点击事件 让其下面隐藏的元素显示
    $('.duo').on('click',function(){
        //alert('kkk');
       if($('li.one').hasClass('none')){
           $('li.one').removeClass('none');
       }else{
           $('li.one').addClass('none');
       }
    });

    // 给更多优惠注册点击事件
    $('.mm_more').on('click',function(){
        //跳转到 省钱空界面
        //alert("jjj");
        location.href='moneyctrl.html';
    });

    // 给页面所有的 li列表注册点击事件
    $('.mm_product ul').on('click','li',function(){
        //alert('kkk');
        //获取id 
        var $this = $(this);
        var id = $this.data('id');
        //console.log(id);

        location.href="zhekou.html?productid="+id;
    })
})
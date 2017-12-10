$(function(){

    //发送ajax请求 获取数据 渲染到页面
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        dataType:'json',
        success:function(data){
        //console.log(data);
         var html = template('tpl',data);
         $('.content').html(html);

         //给每一个a 驻鄂重点击事件让当前的a 下面的内容显示
         $('.content').on('click','a',function(){

             //alert('ajj');
             var $this = $(this);
            //  获取id 
            var id = $this.data('id');
            //console.log(id);
             //渲染页面
             $.ajax({
                 type:'get',
                 url:'http://127.0.0.1:9090/api/getcategory',
                 data:{
                    titleid:id
                 },
                 dataType:'json',
                 success:function(data){
                    console.log(data);
                    var html = template('tpl2',data);
                    $this.siblings().html(html);

                    $this.siblings().show();
                 }
             })
            
         })
        }
    });

    
})
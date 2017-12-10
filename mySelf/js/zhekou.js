$(function(){

    //发送ajax请求
    var search = location.search;

    search = search.slice(1);
    search = search.split('=');
    search = search[1];
    //console.log(search);

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
        data:{
            productid:search
        },
        success:function(data){
            console.log(data);
            var html = template('tpl',data);
            $('.product_content').html(html);
        }
    });
    
})
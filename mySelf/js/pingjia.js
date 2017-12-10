$(function(){

    //1 获取地址栏参数
    var search = location.search;
    search = search.slice(1);
    search = search.charAt(search.length-1);
    console.log(search);
    //2 发送ajax请求 获取信息渲染商品详情
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproduct',
        data:{
            productid : search
        },
        success:function(data){
            //console.log(data);
            //准备数据 将数据和模板结合
            var html = template('tpl',data);

            $('.product_desc').html(html);
        }
    });

    //3 发送ajax请求获取 数据 渲染评论
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{
            productid:search
        },
        success:function(data){
            console.log(data);
            var html = template('tpl2',data);

            $('.product_com_list').html(html);
        }
    })
})
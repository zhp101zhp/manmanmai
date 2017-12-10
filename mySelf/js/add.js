$(function(){

    // 获取商城的二级菜单
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshop',
        success:function(data){
            //console.log(data);

            //准备数据 与模板结合
            var html = template('tpl',data);

            $('#shop ul').html(html);
        }
    });


    // 获取城市的二级菜单
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        success:function(data){
            //console.log(data);

            //准备数据 与模板结合
            var html = template('tpl2',data);

            $('#area ul').html(html);
        }
    });


    var shopid = 0;
    //1 给一级菜单 中的 商城注册点击事件   
    $('.upJ').on('click',function(){
        // 让其对应的  二级下拉菜单显示
        $('.down#shop').slideDown();
    })

     //2  给一级菜单对应的 二级下拉菜单中 的 元素 注册点击事件
    $('#shop ul').on('click','li',function(){
        //2.1 获取当前元素的自定义数字那个的 值 id 
        shopid= $(this).data('id');
        //2.2 让其对应的 二级菜单隐藏
        $('.down#shop').slideUp();

        //4 给一级菜单 对应的下面的 二级菜单你元素注册点击事件
         $('#area ul').on('click','li',function(){
            //4.1 获取当前元素的自定义属性 id 的值
            areaid = $(this).data('id');
            //4.2 让其对应的 一级菜单隐藏
            $('.down#area').hide();
            render(shopid,areaid);
        })
    });

    //3 给一级菜单中的 城市 注册点击事件
    var areaid = 0;
    $('.upH').on('click',function(){
       //让其对应的二级下拉菜单显示
       $('.down#area').slideDown();
    });

    

    //5 给一级菜单中的 点击事件 让全部价格显示
    $('.upQ').on('click',function(){
        $('.all').slideDown();
    })
    //2 给其二级菜单注测点击事件 让其隐藏
    $('.all li').on('click',function(){
        $('.all').hide();
    })



    //页面一加载 发送Ajax请求获取数据  渲染页面
    function render(shopid,areaid){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success:function(data){
                console.log(data);
                var html = template('tpl3',data);
                $('.content').html(html);
            }
        })
    }
    
    render(shopid,areaid);
})
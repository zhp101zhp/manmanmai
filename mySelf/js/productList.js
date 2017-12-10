$(function(){
    
        //定义当前页
        var currentPage = 1;
        //每一信息个数
        var pageSize = 2;

        //获取地址栏参数
        var search = location.search;
        
        //切掉前面的？//把?切掉  name=hucc&age=18&desc=帅的一匹
        search = search.slice(1);

         //把字符串切割成一个数组  ["name=hucc", "age=18", "desc=帅的一匹"]
        //var search = search.split('&');
        search = search.charAt(search.length-1);
        console.log(search);        
    
     // 发送ajax 获取后台数据 渲染页面

   $.ajax({
       type:'get',
       url:'http://192.168.27.29:9090/api/getcategorybyid',
       data:{
           categoryid : search
       },
       dataType:'json',
       success:function(data){
           console.log(data);
           var html = template("tpl",data);
           $('.product_nav').html(html);
       }
   });

    //发送ajax 获取数据 渲染页面
    var page=1;
    function render(){
        $.ajax({
            type:'get',
            url:'http://192.168.27.22:9090/api/getproductlist',
            data:{
                categoryid: search,
                pageid:page
            },
    
            success:function(data){
                //console.log(data);
                //准备数据 与模板结合
                var html = template('tpl2',data);
                $('.product_content').html(html);
            }
        }) ;
    }
    render();
    
    // 分页功能
    $('#selectPage').on('change',function(){
        page=$(this).val();
        //console.log(page);
        render();
       
    });

    // 上一页 下一页
    $('.pre').on('click',function(){
        //alert('jjj');
        page = $('#selectPage').val()-1;
        //console.log(page);
        // 重新渲染页面
        render();
        $('#selectPage').val( page);
    })
    $('.next').on('click',function(){
        //alert('jjj');
        page = $('#selectPage').val();
        page++;
        //console.log(page);
        // 重新渲染页面
        render();
        $('#selectPage').val( page);
    })



    // 给页面中所有的li  都注册点击事件
    $('.product_content').on('click','li',function(){
        //获取当前元素id
        var $this = $(this);
        var id = $this.data('id');
        //console.log(id);
        location.href = 'pingjia.html?productid='+id;
    })
    
         
});


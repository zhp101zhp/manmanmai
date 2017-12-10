$(function(){

    //发送给ajax请求 获取后台数据 渲染页面
    var page = 1;

   function render(){
    $.ajax({
        type:'get',
        url:'http://192.168.27.22:9090/api/getmoneyctrl',
        data:{
            pageid:page
        },
        success:function(data){
            console.log(data);
            // 准备数据 数据与模板结合
            var html = template('tpl',data);

            $('.mm_product_list ul').html(html);

            //获取当前页码
            // var num = data.result[data.result.length-1].productId;
            // var currentPage = Math.ceil(num/10);
            // console.log(currentPage);
            
            //获取总页面
            var pageTotal = Math.ceil(data.totalCount/data.pagesize);
            //console.log(pageTotal);
            //data.currentPage = currentPage;
            data.pageTotal = pageTotal;
           //console.log(data);

           $('#selectPage').html(template('tpl2',data));
            
        }
    });
   }

   render();

    // 给每一个option注册事件 事件委托
    $('#selectPage').on('change',function(){
       // alert('jhhh');
        //获取当前元素的value值 赋值给page 
        var $this = $(this);
        page = $this.val();
        //console.log(page);

        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            data:{
                pageid:page
            },
            success:function(data){
                console.log(data);
                // 准备数据 数据与模板结合
                var html = template('tpl',data);
    
                $('.mm_product_list ul').html(html);
    
                //获取当前页码
                // var num = data.result[data.result.length-1].productId;
                // var currentPage = Math.ceil(num/10);
                // console.log(currentPage);
                
                //获取总页面
                var pageTotal = Math.ceil(data.totalCount/data.pagesize);
                //console.log(pageTotal);
                //data.currentPage = currentPage;
                data.pageTotal = pageTotal;
               //console.log(data);
    
               $('#selectPage').html(template('tpl2',data));
                
               $this.val(page);
            }
        });
    });



    // 上一页和下一页功能

    $('.pre').on('click',function(){
        page = $('#selectPage').val()-1;
        console.log(page);
        $.ajax({
            type:'get',
            url:'http://192.168.27.22:9090/api/getmoneyctrl',
            data:{
                pageid:page
            },
            success:function(data){
                console.log(data);
                // 准备数据 数据与模板结合
                var html = template('tpl',data);
    
                $('.mm_product_list ul').html(html);
    
                //获取当前页码
                // var num = data.result[data.result.length-1].productId;
                // var currentPage = Math.ceil(num/10);
                // console.log(currentPage);
                
                //获取总页面
                var pageTotal = Math.ceil(data.totalCount/data.pagesize);
                //console.log(pageTotal);
                //data.currentPage = currentPage;
                data.pageTotal = pageTotal;
               //console.log(data);
    
               $('#selectPage').html(template('tpl2',data));
               $('#selectPage').val(page); 
               
            }
        });
       
    });

    $('.next').on('click',function(){
        //alert("kkk");
        page = $('#selectPage').val();
        page++;
        console.log(page);
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            data:{
                pageid:page
            },
            success:function(data){
                console.log(data);
                // 准备数据 数据与模板结合
                var html = template('tpl',data);
    
                $('.mm_product_list ul').html(html);
    
                //获取当前页码
                // var num = data.result[data.result.length-1].productId;
                // var currentPage = Math.ceil(num/10);
                // console.log(currentPage);
                
                //获取总页面
                var pageTotal = Math.ceil(data.totalCount/data.pagesize);
                //console.log(pageTotal);
                //data.currentPage = currentPage;
                data.pageTotal = pageTotal;
               //console.log(data);
    
               $('#selectPage').html(template('tpl2',data));
               $('#selectPage').val(page); 
               
            }
        });
    })

    // 给每个li注册点击事件
    $('.mm_product_list ul').on('click',"li",function(){
        //alert('kkk');
        //获取当前元素 id 
        var $this=$(this);
        var id= $this.data('id');
        //console.log(id);
        //跳转到响应的折扣页面
        location.href="zhekou.html?productid="+id;
    })

})
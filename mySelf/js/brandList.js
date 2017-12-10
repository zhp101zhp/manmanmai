$(function(){
    //获取地址栏
    var search = location.search;

    // 截掉问号
    search = search.slice(1);

    // 切割成数组
    search = search.split('=');
    //取值
    search = search[1];
    //console.log(search);

    //发送ajax请求 获取数据 渲染页面
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbrand',
        data:{
            brandtitleid:search
        },
        success:function(data){
            //console.log(data);
            // 准备数据  数据与模板结合
            var html = template('tpl',data);
            $('.product_list ul').html(html);
        }
    });


   $.ajax({
       type:'get',
       url:'http://127.0.0.1:9090/api/getbrandproductlist',
       data:{
        brandtitleid:search,
        
       },
       success:function(data){
           console.log(data);

           var html = template('tpl2',data);
           $('.list ul').html(html);
       }
   });



   

  //商品排行里动态创建的li注册点击事件
  //发送ajax请求 获取数据 渲染页面
  function render(id){
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductcom',
        data:{
            productid:id,
        },
        success:function(data){
            //console.log(data)
            var html = template('tpl3',data);
            $('.comList ul').html(html);
        }
    })
  }
  render(search);

  $('.list').on('click','li',function(e){
      e.preventDefault();
      //console.log('llll');
    var id =$(this).data('id');
    render(id);
    id=id%10;

    //发送ajax请求 获取数据 渲染页面
   
    location.href="pingjia.html?productid="+id;

    
 })

   //注册点击事件 获取产品id 
   $('.product_list ul').on('click','li',function(){
        //alert('kkk');
       location.href="productList.html?categoryid="+0;
   });


   
    
})
$(function(){

    //发送ajax请求 获取数据 渲染tab栏标题
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        success:function(data){
            //console.log(data);
            var html = template('tpl',data);
            $('.tab_title ul').html(html);
        }
    });

    console.log($('a'));


    var id =0;
    // 发送ajax请求  渲染页面
    function render(){
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            data:{
                titleid:id
            },
            success:function(data){
                //console.log(data);

                var html = template('tpl2',data);
                $('.bcj-list').html(html);
            }
        });
    }


    render();
    //1  给每一变体注册点击事件 委托
    $('.tab_title ul').on('click','li',function(){
        //alert("kkk");
        var $this = $(this);
        
        // 给当前li的孩子添加now类
        $this.children().addClass('now');
        // 移除兄弟孩子的now类
        $this.siblings().children().removeClass('now');
        //获取id
        id = $this.data('id');
        console.log(id);

        // 向后发送ajax请求  回去与之对应的数据 重新渲染页面渲染页面
        render();
    })

})
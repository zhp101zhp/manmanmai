$(function(){

    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getsitenav',
        success:function(data){
            console.log(data);
            var html = template('tpl',data);
            $('.link').html(html);
        }
    })
})
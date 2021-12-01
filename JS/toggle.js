$(function(){
    $('button.left').click(function(){
        $('.swing').toggle(1000,'swing'); 
       
    });
    $('button.right').click(function(){
        $('.linear').toggle(1000,'linear');
    });
});
$(function(){
    $('button.left1').click(function(){
        $('.swing1').toggle(1000,'swing'); 
       
    });
    $('button.right1').click(function(){
        $('.linear1').toggle(1000,'linear');
    });
});
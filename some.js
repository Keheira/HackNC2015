$(document).ready(function()
{       
    $(".tabs").click(function()
    {
        var X=$(this).attr('id');
        console.log(X);
        if(X=='register')
        {
            $("#login").removeClass('select');
            $("#register").addClass('select');
            $("#loginBox").hide("fold");
            $("#registerBox").show("fold");
            //$("#loginBox").slideUp();
            //$("#registerBox").slideDown();
        }
        else
        {
            $("#register").removeClass('select');
            $("#login").addClass('select');
            $("#registerBox").hide("fold");
            $("#loginBox").show("fold");
            //$("#registerBox").slideUp();
            //$("#loginBox").slideDown();
        }

    });
});

$('#filter a').click(function() {
    if($(this).attr('rel')) {
        $('.image1').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
       $('.border7').show();
    } else {
        $('.image1').show();
        $("#srew").show();
    }

    return false;
});

$('#filter a').click(function() {
    if($(this).attr('rel')) {
        $('.image2').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
    } else {
        $('.image2').show();
    }

    return false;
});







$('#filter a').click(function() {
    if($(this).attr('rel')) {
        $('.image3').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
    } else {
        $('.image3').show();
    }

    return false;
});


$('#filter a').click(function() {
    if($(this).attr('rel')) {
        $('.image4').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
      $(".trey").hide();
      $(".tt").show();
      $(".rex").hide();
      $(".yis").hide();
      $(".tryy").hide();
      $(".idde").hide();
      $(".resc").hide();
      $(".yur").hide();
      $(".asc").hide();
      $(".border7").show();
      $(".o").hide();
    } else {
        $('.image4').show();
        $(".trey").hide();
        $(".tt").show();
        $(".rex").hide();
        $(".yis").hide();
    }

    return false;
});

$('#filter a').click(function() {
    if($(this).attr('rel')) {
        $('.image5').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
        $(".tt").hide();
        $(".ee").hide();
        $(".yy").hide();
    } else {
        $('.image5').show();
        $(".tt").hide();
        $(".ee").hide();
    }

    return false;
});

$('#container a').click(function() {
    if($(this).attr('rel')) {
        $('.image1').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
        $("#c").hide();
        $(".srew").hide();
    } else {
        $('.image1').show();
        $(".srew").hide();
        $(".sewq").hide();
        $(".seqe").hide();
        $(".stew").hide();
    }


    return false;
});

$('#container a').click(function() {
    if($(this).attr('rel')) {
        $('.image3').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
    } else {
        $('.image3').show();
        $(".srew").show();
        $(".qwr").hide();
    }

    return false;
});

$('#container a').click(function() {
    if($(this).attr('rel')) {
        $('.image3').hide().filter('[class="' + $(this).attr('rel') + '"]').show();

    } else {
        $('.image3').show();
    }

    return false;
});


$(document).ready(function(){
    $("form").submit(function(){
    var query = $("#search").val();
    var url = "http://search.twitter.com/search.json?callback=?&q="+query
    
    $("p#twt").remove();

    $.getJSON(url, function(json){
        $.each(json.results, function(i, twt){
            $("#result").append('<p id="twt"> <img src=' + twt.profile_image_url + '>'+twt.text+'</p>');
            
            console.log(twt);
        });
    }); 
    return false;
    });
});

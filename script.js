$("#click-me").click(function(){
    $("#click").show();
    $("#click").text("Double Click Here");
});

$("#click").dblclick(function(){
    $("#click").show();
    $("#click").text("Hover over the Snowman");
});
$("#snowman").mouseenter(function(){
    $("#click").show();
    $("#click").text("Nice job! You'll find your next clue by clicking on the Christmas Tree");
});
$("#tree").click(function(){

});    

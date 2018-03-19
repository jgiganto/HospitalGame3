var score = 0;
function arrastrar() {
    $("#draggable").draggable();
    $("#draggable2").draggable();
    $("#draggable3").draggable();
    $("#draggable4").draggable();
    $("div[id^='droppable']").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                //.find("p")
                .html("TOCAO!")
                .fadeOut(500, function () {
                    $(this).remove();                 
            
                    $("div[id^='draggable']").mouseup(function () {
                        //alert($(this).attr("id").toString());
                        if ($(this).attr("id").toString() == "draggable") {
                            $(this).fadeOut(250, function () {
                                $(this).remove();
                                $("#medicina1").append("<div id='draggable' class='ui-widget-content' style='z-index:4'><p>MEC</p> </div>");
                            });
                        }
                        if ($(this).attr("id").toString() == "draggable2") {
                            $(this).fadeOut(250, function () {
                                $(this).remove();
                                $("#medicina2").append("<div id='draggable2' class='ui-widget-content' style='z-index:4'><p>MEC</p> </div>");
                            });
                        }
                        if ($(this).attr("id").toString() == "draggable3") {
                            $(this).fadeOut(250, function () {
                                $(this).remove();
                                $("#medicina3").append("<div id='draggable3' class='ui-widget-content' style='z-index:4'><p>MEC</p> </div>");
                            });
                        }
                        if ($(this).attr("id").toString() == "draggable4") {
                            $(this).fadeOut(250, function () {
                                $(this).remove();
                                $("#medicina4").append("<div id='draggable4' class='ui-widget-content' style='z-index:4'><p>MEC</p> </div>");
                            });
                        }
                    });
                });
            $("#score").html(score+=100);
          
             
        }     
    });
    

   
        
        
    
    
}



//if ($("div[id^='draggable']").attr("class").toString() == "ui-widget-content ui-draggable ui-draggable-handle ui-draggable-dragging") {
//function crear() {

//    alert($(this).attr("id").toString());
////    $("#draggable").fadeOut(250, function () {
////        $(this).remove();
////        $("#medicina1").append("<div id='draggable' class='ui-widget-content' style='z-index:4'><p> MEC</p> </div>");
////    });
    
//}

 //// if ($(this).attr("id").toString() == "draggable") {
           //     crear();
           //// }

            //$("#draggable2").fadeOut(250, function () {
            //    if ($(this).attr("id").toString() == "draggable2") {
            //        alert($(this).attr("id").toString());
            //        $(this).remove();
            //        $("#medicina2").append("<div id='draggable2' class='ui-widget-content' style='z-index:4'><p> MEC</p> </div>");
            //    }
            //});
            //$("#draggable3").fadeOut(250, function () {
            //    if ($(this).attr("id").toString() == "draggable3") {
            //        $(this).remove();
            //        $("#medicina3").append("<div id='draggable3' class='ui-widget-content' style='z-index:4'><p> MEC</p> </div>");
            //    }
            //});
            //$("#draggable4").fadeOut(250, function () {
            //    if ($(this).attr("id").toString() == "draggable4") {
            //        alert($(this).attr("id").toString());
            //        $(this).remove();
            //        $("#medicina4").append("<div id='draggable4' class='ui-widget-content' style='z-index:4'><p> MEC</p> </div>");
            //    }
            //});
            //$("#draggable2").fadeOut(500, function () {
            //    $(this).remove();
            //    $("#medicina2").append("<div id='draggable2' class='ui-widget-content' style='z-index:4'><p> MEC</p> </div>");
            //});
            //$("#draggable3").fadeOut(500, function () {
            //    $(this).remove();
            //    $("#medicina3").append("<div id='draggable3' class='ui-widget-content' style='z-index:4'><p> MEC</p> </div>");
            //});
            //$("#draggable4").fadeOut(500, function () {
            //    $(this).remove();
            //    $("#medicina4").append("<div id='draggable4' class='ui-widget-content' style='z-index:4'><p> MEC</p> </div>");
            //});
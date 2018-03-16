function arrastrar() {
    $("#draggable").draggable();
    $("div[id^='droppable']").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });
}
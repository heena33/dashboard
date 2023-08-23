if (screen.width < 991) {
    $('.toggle-sec').hide();
    $('.bar').click(function() {
        $('.toggle-sec').slideToggle();
    });
}
$(function () {
    $(".navButton").click(function () {
        $(".menu").slideToggle(200)
        $(".header-NR").focus()
        $(".header-NR").blur(function () {
            $(".menu").slideUp(200)
        })
    })

})
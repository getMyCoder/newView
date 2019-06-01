$(function () {
    $(".navButton").click(function () {
        $(".menu").slideToggle(200);
        $(".header-NR").focus();
        $(".header-NR").blur(function () {
            $(".menu").slideUp(200)
        })
    });
    ImgLoop();
    bottomLoop()
});

// banner
function ImgLoop() {
    var infoInit = {
        size: $(".headImgUl li").length,
        itemsWidth: $(".headMobile").width(),
        index: 1,
        liImg: function () {
            var _this = this;
            _this.size = $(".headImgUl li").length;
            _this.itemsWidth = $(".headMobile").width();
            $(".headImgUl").width(_this.size * _this.itemsWidth);
            $(".headImgUl li").width(_this.itemsWidth);
        },
        load: function () {
            var _this = this;
            _this.liImg();
            $(".headMobile").append('<ul class="rollUl"></ul>');
            for (var i = 0; i < _this.size; i++) {
                $(".rollUl").append('<li></li>')
            }
            $(".rollUl li").css({
                width: (100 / _this.size - 8) + "%",
                margin: '0 4%'
            });
            $(".rollUl li").eq(0).addClass('activeMLi');
        },
        setRoll: function () {
            var _this = this, temporaryIndex = 0;
            setInterval(function () {
                if (_this.index >= _this.size) {
                    temporaryIndex = 0;
                    _this.index = 0
                } else {
                    temporaryIndex = -_this.index * _this.itemsWidth
                }
                $(".headImgUl").animate({
                    marginLeft: temporaryIndex + "px"
                });
                $(".rollUl li").eq(_this.index).addClass('activeMLi').siblings().removeClass('activeMLi');
                _this.index++;
            }, 2000);
        },
        resizeWin: function () {
            var _this = this;
            $(window).resize(function () {
                _this.liImg();
            })
        }
    };
    infoInit.load();
    infoInit.setRoll();
    infoInit.resizeWin();
}

// bottomBanner
function bottomLoop() {
    var int = {
        width: $(".aboutBanner").width(),
        load: function () {
            var _this = this;
            $(".aboutBannerUl ul").width(_this.width);
            $(".aboutBannerUl").append($(".aboutBannerUl").html());
            $(".aboutBannerUl ul").each(function (index) {
                $(this).css({
                    "left": index * _this.width + "px"
                })
            })
        },
        loop: function () {
            var getLeft;
            var _this = this;
            setInterval(function () {
                $(".aboutBannerUl ul").each(function (index) {
                    getLeft = $(".aboutBannerUl ul").eq(index).position().left;
                    getLeft--;
                    $(".aboutBannerUl ul").eq(index).css({
                        "left": getLeft + "px"
                    });
                    if (getLeft < -_this.width) {
                        $(".aboutBannerUl ul").eq(index).css({
                            "left": _this.width + "px"
                        });
                    }
                })
            }, 10)
        },
    };
    int.load();
    int.loop()
}
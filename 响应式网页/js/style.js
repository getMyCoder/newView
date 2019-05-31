$(function () {
    $(".navButton").click(function () {
        $(".menu").slideToggle(200)
        $(".header-NR").focus()
        $(".header-NR").blur(function () {
            $(".menu").slideUp(200)
        })
    });
    ImgLoop()


})
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
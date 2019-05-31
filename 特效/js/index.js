$(function () {
    // 多选组件
    var selectInit = {
        Arr: new Array($("#check-select span").length),
        items: 0,
        setChecked: function () {
            var _this = this;
            $("#check-select span").each(function (index) {
                $(this).click(function () {
                    _this.Arr[index] = $(this).find('input').prop('checked')
                })
            });
            $("#submit").click(function () {
                _this.items = 0;
                for (var i = 0; i < _this.Arr.length; i++) {
                    if (_this.Arr[i] !== false && _this.Arr[i] !== undefined) {
                        _this.items++
                    }
                }
                if (_this.items < 1) {
                    alert('最少选一个！')
                } else if (_this.items > 3) {
                    alert('最多选三个！')
                }
            })
        },
        delectChecked: function () {
            var _this = this;
            $("#delectAll").click(function () {
                $("#check-select span").each(function (index) {
                    $(this).find('input').prop('checked', false);
                    _this.Arr[index] = false
                });
            })
        }
    };
    selectInit.setChecked();
    selectInit.delectChecked();


// canvas
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var intItems = 0;
    window.requestAnimationFrame(setLoopBall);

    function setLoopBall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 1, 0, Math.PI * 2, false);
        ctx.moveTo(450, 250);
        ctx.arc(250, 250, 200, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.stroke();

        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(Math.PI / 180 * intItems);
        ctx.beginPath();
        ctx.arc(200, 0, 25, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        intItems++;
        window.requestAnimationFrame(setLoopBall)
    }

})

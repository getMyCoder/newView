$(function () {
    var selectInit = {
        Arr: new Array($("#check-select span").length),
        setChecked: function () {
            var _this = this;
            $("#check-select span").each(function (index) {
                $(this).click(function () {
                    _this.Arr[index] = $(this).find('input').prop('checked')
                })
            });
            $("#submit").click(function () {
                var items = 0;
                for (var i = 0; i < _this.Arr.length; i++) {
                    if (_this.Arr[i] !== false && _this.Arr[i] !== undefined) {
                        items++
                    }
                }
                if (items < 1) {
                    alert('最少选一个！')
                } else if (items > 3) {
                    alert('最多选三个！')
                }
            })
        }
    };
    selectInit.setChecked()
})

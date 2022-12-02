const obj = {
    resize_event: function(_this) {
        return function() {
            console.log(_this)
        }
    },
    current_resize: null,
    add: function() {
        var _this = this;
        this.current_resize = this.resize_event(_this);
        window.addEventListener("resize", this.current_resize);
    },
    remove: function() {
        window.removeEventListener("resize", this.current_resize);
    }
}

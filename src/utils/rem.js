!function(win, lib) {
    var flexible = lib.flexible || (lib.flexible = {});
    function a() {
        if (parseInt(document.documentElement.clientWidth) > 750) {
            document.documentElement.style.fontSize = 750 / 7.5 + "px";
        } else {
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + "px";
        }
    }
    var b = null;
    flexible.dpr = 1;
    flexible.rem = 100;
    flexible.rem2px = function(d) {
        var val = parseFloat(d * 75 / 100) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }
    win.addEventListener("resize",
    function() {
        clearTimeout(b);
        b = setTimeout(a, 300);
    },
    !1);
    a();
} (window, window['lib'] || (window['lib'] = {}));

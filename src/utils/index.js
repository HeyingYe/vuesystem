import $ from "jquery";
/**
 * @param {Object} ele 元素对象
 * @param {Json} json 运动属性
 * @param {Function} [callback] 回调函数
 * @param {String|Number} [interval] 每次执行的时间间隔
 * @param {Object|Number} [speed] 缓冲速度
 */
export function animate(ele, json, callback, interval = 30, speed = 10) {
    if (!ele && !json) return
        //清除元素对象自身计时器
    debugger
    clearInterval(ele.timer);
    //重新给元素对象绑定计时器
    ele.timer = setInterval(function() {
        var flag = true;
        for (let attr in json) {
            var icurrent = 0;
            if (attr == "opacity") {
                icurrent = Math.round(parseFloat(getStyle(ele, attr)) * 100);
            }else if(attr == "scrollTop"){
                icurrent = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            }else {
                icurrent = parseInt(getStyle(ele, attr));
            }
            var ispeed = (json[attr] - icurrent) / speed;
            ispeed = ispeed > 0 ? Math.ceil(ispeed) : Math.floor(ispeed);
            if (attr == "opacity") {
                //兼容IE
                ele.style.filter = "alpha(opacity:" + (icurrent + ispeed) + ")";
                ele.style.opacity = (icurrent + ispeed) / 100;
            } else if(attr == "scrollTop"){
                ele["scrollTop"] = icurrent + ispeed;
                window.pageYOffset = icurrent + ispeed;
                document.body.scrollTop = icurrent + ispeed;
                //ele[attr] = icurrent + ispeed;
            }else {
                ele.style[attr] = icurrent + ispeed + "px";
            }
            //运动未完成
            if (icurrent !== json[attr]) flag = false
            if (flag) {
                clearInterval(ele.timer);
                if (callback) {
                    callback();
                }
            }
        }
    }, interval)
}

/**
 * @param {Object} ele 元素对象
 * @param {String} attr 样式属性
 */
export function getStyle(ele, attr) {
    var style;
    if (window.getComputedStyle) {
        style = getComputedStyle(ele, false)[attr];
    } else {
        //兼容IE
        style = ele.currentStyle[attr];
    }
    return style;
}

/**
 * 
 */
export const carousel = {
    index: 0,
    init: function(ele, dot, interval = 3000) {
        this.timer = setInterval(function() {
            this.index++;
            this.index = this.index % ele.length;
            ele.eq(this.index % eles.length).stop().animate({ opacity: 1 }, 1000)
                .siblings('li').stop().animate({ 'opacity': 0 }, 1000);
        }.bind(this), interval)
    }
}
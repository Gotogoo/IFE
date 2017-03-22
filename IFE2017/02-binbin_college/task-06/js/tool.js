/**
 * Created by Yoga on 2017-3-20.
 */
/**
 *add handler to element
 * @type {{addEvent: EventListen.addEvent, removeEvent: EventListen.removeEvent}}
 */
EventListen = {
    addEvent: function (element,type,handler) {
        //通过判断调用的方式兼容IE678
        //判断浏览器是否支持该方法，如果支持那么调用，如果不支持换其他方法
        if(element.addEventListener){
            //直接调用
            element.addEventListener(type,handler);
        }else if(element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            //在addEventListener和attachEvent都不存在的情况下，用此代码
            element["on"+type] = handler;
        }
    },
    removeEvent: function (element,type,handler) {
        if(element.removeEventListener){
            element.removeEventListener(type,handler);
        }else if(element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+handler] = null;
        }
    }
};

function addHandler(element,type,handler) {
    if(element.addEventListener){
        element.addEventListener(type,handler);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,handler);
    }else{
        element["on"+type] = handler;
    }
}
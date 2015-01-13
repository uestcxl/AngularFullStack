'use strict';
Date.prototype.now=function(){
    var now=new Date();
    var time='';

    now=now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
    return time;
};

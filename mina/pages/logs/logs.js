!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=13)}({0:function(t,n){t.exports={formatTime:function(t){if("number"!=typeof t||t<0)return t;var n=parseInt(t/3600);return t%=3600,[n,parseInt(t/60),t%=60].map(function(t){return(t=t.toString())[1]?t:"0"+t}).join(":")},formatLocation:function(t,n){return"string"==typeof t&&"string"==typeof n&&(t=parseFloat(t),n=parseFloat(n)),t=t.toFixed(2),n=n.toFixed(2),{longitude:t.toString().split("."),latitude:n.toString().split(".")}}}},13:function(t,n,e){var r=e(0);Page({data:{logs:[]},onLoad:function(){this.setData({logs:(wx.getStorageSync("logs")||[]).map(function(t){return r.formatTime(new Date(t))})})}})}});
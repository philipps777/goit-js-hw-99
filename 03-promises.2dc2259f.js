!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function u(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}var a=document.querySelector('input[name="delay"]'),c=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=parseInt(a.value),o=parseInt(c.value),r=parseInt(l.value),d=t,f=1;f<=r;f++)u(f,d).then((function(n){var t=n.position,o=n.delay;e(i).Notify.Success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.Failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),d+=o}))}();
//# sourceMappingURL=03-promises.2dc2259f.js.map

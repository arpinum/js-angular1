!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("bluebird"),require("lodash"),require("moment")):"function"==typeof define&&define.amd?define(["bluebird","lodash","moment"],t):"object"==typeof exports?exports["@arpinum/angular1"]=t(require("bluebird"),require("lodash"),require("moment")):e["@arpinum/angular1"]=t(e.bluebird,e.lodash,e.moment)}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.RestService=t.DateService=t.indexArray=t.isPresent=t.isBlank=t.valueInFilter=t.placeholderFilter=t.limitStringFilter=t.orderByDayOfWeekFilter=t.momentFilter=t.Controller=t.detectOutsideClickDirective=void 0;var u=n(1),i=r(u),o=n(3),a=r(o),l=n(4),f=r(l),c=n(7),d=r(c),s=n(9),p=r(s),v=n(10),_=r(v),y=n(11),h=r(y),m=n(8),b=r(m),k=n(12),D=r(k),M=n(13),j=r(M),O=n(14),P=r(O),g=n(15),$=r(g);t.detectOutsideClickDirective=a["default"],t.Controller=i["default"],t.momentFilter=d["default"],t.orderByDayOfWeekFilter=f["default"],t.limitStringFilter=p["default"],t.placeholderFilter=_["default"],t.valueInFilter=h["default"],t.isBlank=b["default"],t.isPresent=D["default"],t.indexArray=j["default"],t.DateService=P["default"],t.RestService=$["default"]},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(2),o=function(){function e(){var t=this;r(this,e),this.construction=i.resolve().then(function(){return t.loading=!0,t.resolve()["finally"](function(){delete t.loading})})}return u(e,[{key:"resolve",value:function(){return i.resolve()}}]),e}();t["default"]=o},function(t,n){t.exports=e},function(e,t){"use strict";function n(e){function t(t,n,r){n.bind("click",function(e){e.stopPropagation()}),e.bind("click",function(){t.$apply(r.onOutsideClick)})}return{restrict:"A",link:t}}n.$inject=["$document"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){return function(t){var n=l["default"].localeData(e.id).firstDayOfWeek(),r=(t||[]).sort(),u=o["default"].filter(r,function(e){return e>=n}),i=o["default"].filter(r,function(e){return n>e});return u.concat(i)}}u.$inject=["$locale"],Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(6),l=r(a);t["default"]=u},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){return function(e,t){return(0,l["default"])(e)||(0,l["default"])(t)?"":(0,o["default"])(e).format(t)}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),o=r(i),a=n(8),l=r(a);t["default"]=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){return o["default"].isNumber(e)&&!o["default"].isNaN(e)?!1:o["default"].isBoolean(e)&&e?!1:o["default"].isRegExp(e)?!1:o["default"].isDate(e)?!1:o["default"].isEmpty(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i);t["default"]=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){return function(e,t){return o["default"].truncate(e,{length:t})}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i);t["default"]=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(){return function(e){return(0,o["default"])(e)?"&nbsp;":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),o=r(i);t["default"]=u},function(e,t){"use strict";function n(){return function(e,t){return t?t[e]:""}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){return!(0,o["default"])(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),o=r(i);t["default"]=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){return o["default"].reduce(e,function(e,n){return e[n[t]]=n,e},{})}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i);t["default"]=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(6),a=r(o),l=function(){function e(){u(this,e)}return i(e,[{key:"combineDateAndTime",value:function(e,t){var n=(0,a["default"])(t);return(0,a["default"])(e).set({hour:n.hour(),minute:n.minute(),second:n.second()}).toDate()}},{key:"dateFromTime",value:function(e,t){return(0,a["default"])("1970-01-01 "+e+":"+t+"Z","YYYY-MM-DD HH:mm").toDate()}},{key:"now",value:function(){return e._currentDate||new Date}},{key:"today",value:function(){return(0,a["default"])(this.now()).startOf("day").toDate()}}],[{key:"setCurrentDate",value:function(t){e._currentDate=t}}]),e}();t["default"]=l},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(t,r){n(this,e),this._$http=t,this._$q=r}return e.$inject=["$http","$q"],r(e,[{key:"get",value:function(e,t){return this._promiseData(this._$http.get(e,t||{}))}},{key:"head",value:function(e,t){return this._promiseData(this._$http.head(e,t||{}))}},{key:"post",value:function(e,t,n){return this._promiseData(this._$http.post(e,t,n||{}))}},{key:"put",value:function(e,t,n){return this._promiseData(this._$http.put(e,t,n||{}))}},{key:"patch",value:function(e,t,n){return this._promiseData(this._$http.patch(e,t,n||{}))}},{key:"delete",value:function(e,t){return this._promiseData(this._$http["delete"](e,t||{}))}},{key:"_promiseData",value:function(e){var t=this;return e.then(function(e){return e.data})["catch"](function(e){return t._$q.reject(e.data)})}}]),e}();t["default"]=u}])});
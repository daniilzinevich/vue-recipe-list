(function(t){function e(e){for(var r,c,u=e[0],s=e[1],l=e[2],p=0,f=[];p<u.length;p++)c=u[p],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);a&&a(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-recipe-list/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var a=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"04cd":function(t,e,n){},"0d48":function(t,e,n){"use strict";var r=n("1e26"),i=n.n(r);i.a},"1e26":function(t,e,n){},"1e92":function(t,e,n){"use strict";var r=n("04cd"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Recipe")],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.complete?t._e():n("timer",{attrs:{time:t.nextTimer}}),t._m(0),t._l(t.parts,(function(e,r){return n("part",{key:e.title,attrs:{title:e.title,description:e.description,complete:e.complete},on:{click:function(e){return t.handleClick(r)}}})})),t.complete?n("p",[t._v("Вуаля")]):n("p",[t._v(t._s(t.totalSteps)+" из "+t._s(t.parts.length)+" готово")])],2)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(" Простой и вкусный рецепт "),n("strong",[t._v("Пиццы")])])}],s=(n("a623"),n("13d5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["delimiter",{complete:t.complete}],on:{click:function(e){return t.$emit("click")}}},[n("h2",[t._v(t._s(t.title))]),t.complete?n("div",{staticClass:"right"},[t._v("🔘")]):n("div",{staticClass:"right"},[t._v("⚪️")]),n("p",{domProps:{innerHTML:t._s(t.description)}})])}),l=[],a={props:{title:String,description:String,complete:Boolean}},p=a,f=n("2877"),m=Object(f["a"])(p,s,l,!1,null,null,null),d=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"timer"}},[n("div",[t._v(t._s(t.formatedTimeout))]),t.pause?n("button",{on:{click:t.startTimer}},[t._v("Start timer")]):n("button",{on:{click:t.pauseTimer}},[t._v("Pause timer")])])},v=[],g=(n("99af"),n("a9e3"),n("d3b7"),n("25f0"),{data:function(){return{timeout:600,pause:!0,timer:0}},props:{time:Number},watch:{time:function(t){this.pauseTimer(),this.timeout=t}},computed:{formatedTimeout:function(){return"".concat(this.toHoursString(this.timeout),":").concat(this.toMinutesString(this.timeout),":").concat(this.toTwoDigitString(this.timeout%60))}},methods:{startTimer:function(){var t=this;this.pause=!1,this.timer=setInterval((function(){return t.timeout--}),1e3)},pauseTimer:function(){this.pause=!0,clearTimeout(this.timer)},toHoursString:function(t){return this.toTwoDigitString(Math.floor(t/3600))},toMinutesString:function(t){return this.toTwoDigitString(Math.floor(t/60%60))},toTwoDigitString:function(t){return 2==t.toString().length?t:"0"+t}}}),_=g,b=(n("1e92"),Object(f["a"])(_,h,v,!1,null,null,null)),T=b.exports,y={data:function(){return{parts:[{title:"Подготовить тесто",description:"Смешать тесто и раскатать на противне, поставить в духовку заранее разргретую до максимума. Подержать 10 минут пока тесто не станет слегка твердоватым.",time:600},{title:"Подготовить основу",description:"Eсть два варианта: <ol> <li>Взять кетчуп, барбекю, горчцу, перец и базилик, все перемешать;</li> <li>Обжарить лук и Чеснок, добавить туда томатную пасту и базилик.</li> </ol>"},{title:"Сделать начинку",description:"Смазываешь тесто основой, посыпаешь натертой моцареллой (можно добавить любой другой сыр). Сверху кладёшь тонко нарезанную колбасу, оливки, разрезанные пополам, помидорки (либо чери-порезать пополам и срезом вниз, либо в собственном соку из банки). Сверху можно добавить моцареллу."},{title:"Запечь",description:"Ставишь в духовку до того, как сыр растечется и будет красота, это от 5 до 10 минут (зависит от духовки). Достаёшь, посыпаешь натертым пармезаном.",time:300}],nextTimer:0}},methods:{handleClick:function(t){this.$set(this.parts[t],"complete",!this.parts[t].complete),t<this.parts.length&&this.parts[t+1].time&&(this.nextTimer=this.parts[t+1].time)}},components:{part:d,Timer:T},computed:{totalSteps:function(){return this.parts.reduce((function(t,e){return e.complete?t+1:t}),0)},complete:function(){return this.parts.every((function(t){return t.complete}))}}},S=y,w=(n("0d48"),Object(f["a"])(S,c,u,!1,null,null,null)),O=w.exports,x={name:"App",components:{Recipe:O}},j=x,k=(n("034f"),Object(f["a"])(j,i,o,!1,null,null,null)),M=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(M)}}).$mount("#app")},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.91004568.js.map
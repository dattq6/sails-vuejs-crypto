(function(e){function t(t){for(var s,i,c=t[0],o=t[1],u=t[2],l=0,b=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},r=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f67c06ef"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,s){a=n[e]=[t,s]}));t.push(a[2]=s);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(e);var u=new Error;r=function(t){o.onerror=o.onload=null,clearTimeout(l);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+r+")",u.name="ChunkLoadError",u.type=s,u.request=r,a[1](u)}n[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},2395:function(e,t,a){},"2a15":function(e,t,a){"use strict";a("6506")},"2f68":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56de":function(e,t,a){"use strict";a("2f68")},"5d1b":function(e,t,a){},6506:function(e,t,a){},6775:function(e,t,a){"use strict";a("aa1f")},"7c55":function(e,t,a){"use strict";a("2395")},aa1f:function(e,t,a){},c089:function(e,t,a){"use strict";a("5d1b")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"app-layout"}},[a("a-layout-sider",{attrs:{collapsible:""},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[a("div",{staticClass:"logo"}),a("a-menu",{attrs:{theme:"dark","default-selected-keys":["dashboard"],mode:"inline"}},e._l(e.menuList,(function(t){return a("a-sub-menu",{key:t.key,attrs:{disabled:e.$route.path===t.path},on:{titleClick:function(a){t.path&&e.$router.replace(t.path)}}},[t.title?a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:t.icon}}),a("span",[e._v(e._s(t.title))])],1):e._e(),e._l(t.subMenu,(function(t){return a("a-menu-item",{key:t.key,on:{click:function(a){return e.$router.replace(t.path)}}},[t.icon?a("a-icon",{attrs:{type:t.icon}}):e._e(),a("span",[e._v(e._s(t.title))])],1)}))],2)})),1)],1),a("a-layout",[a("a-layout-content",{staticStyle:{margin:"16px"}},[a("div",{style:{padding:"24px",background:"#fff",minHeight:"360px"}},[a("header",[a("h2",{staticClass:"title"},[e._v("Overview")]),a("a-divider",{staticClass:"divider"})],1),a("router-view")],1)]),a("a-layout-footer",{staticStyle:{"text-align":"center"}},[e._v(" Made with ❤️ | Team ©2020 ")])],1)],1)},r=[],i=a("d4ec"),c=a("262e"),o=a("2caf"),u=a("9ab4"),l=a("60a3"),d=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.collapsed=!0,e.menuList=[{menuKey:"at-glance",path:"/",title:"Dashboard",icon:"pie-chart",subMenu:[]},{menuKey:"user",title:"User",icon:"user",subMenu:[{key:"team-01",path:"/team-01",title:"Team 1"},{key:"team-02",path:"/team-02",title:"Team 2"}]},{menuKey:"team",title:"Team",icon:"team",subMenu:[{key:"user-01",path:"/user-01",title:"Tom"},{key:"user-02",path:"/user-02",title:"Bill"},{key:"user-03",path:"/user-03",title:"Alex"}]}],e}return a}(l["c"]);d=Object(u["a"])([Object(l["a"])({})],d);var b=d,f=b,j=(a("7c55"),a("2877")),h=Object(j["a"])(f,n,r,!1,null,null,null),p=h.exports,m=(a("d3b7"),a("8c4f")),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section-body"},[a("div",{staticClass:"flex-item left-section"},[a("MarketChart",{attrs:{"buy-in":e.buyIn,"current-value":e.currentValue}})],1),a("div",{staticClass:"flex-item right-section"},[a("MarketChartDetail",{attrs:{"buy-in":e.buyIn,"current-value":e.currentValue}})],1)])},y=[],g=a("bee2"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"market-pie-chart"},[a("highcharts",{attrs:{options:e.chartOptions}})],1)},O=[],w=(a("99af"),a("5530")),_=a("4452"),x={chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1,styledMode:!0},defs:{linearGradient1:{id:"linear1",tagName:"linearGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[{tagName:"stop",offset:"0%","stop-color":"#3bcad0"},{tagName:"stop",offset:"100%","stop-color":"#2660cb"}]},linearGradient2:{id:"linear2",tagName:"linearGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[{tagName:"stop",offset:"0%","stop-color":"#3ecc09"},{tagName:"stop",offset:"100%","stop-color":"#64df07"}]}},tooltip:{pointFormat:"<b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{series:{states:{hover:{enabled:!1}}},pie:{borderWidth:5,dataLabels:{enabled:!1,distance:-50,style:{fontWeight:"bold",color:"white"}},startAngle:0,endAngle:360,center:["50%","50%"],size:"100%"}}};function C(e,t){return new Intl.NumberFormat("en-US",{style:"currency",currency:t}).format(e)}function V(e,t){return new Intl.NumberFormat("en-US",{style:"currency",currency:t,minimumFractionDigits:0}).format(e)}var z=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(g["a"])(a,[{key:"getCurrentPairValueText",value:function(){return C(this._.get(this.currentValue,"pairValue",0),this._.get(this.currentValue,"pairValueUnit","USD"))}},{key:"getCurrentValuePairText",value:function(){return V(this._.get(this.buyIn,"pairValue",0),this._.get(this.buyIn,"pairValueUnit","USD"))}},{key:"chartOptions",get:function(){return Object(w["a"])(Object(w["a"])({},x),{},{title:{useHTML:!0,text:'<div class="inner-chart-container">\n        <div class="chart-inner-text current-value-text">\n        '.concat(this._.get(this.currentValue,"value","")," ").concat(this._.get(this.currentValue,"unit",""),'\n          </div>\n          <div class="current-pair-value-text">').concat(this.getCurrentPairValueText(),'</div>\n          <div class="chart-inner-text buy-in-value-text">').concat(this.getCurrentValuePairText(),'</div>\n          <div class="chart-inner-text buy-in-title">Buy In</h1>\n      </div>'),align:"center",style:{"text-align":"center"},verticalAlign:"middle",y:16,x:0},series:[{type:"pie",name:"Market",innerSize:"80%",data:[{name:"Buy In",y:this._.get(this.buyIn,"value",0),dataLabels:{enabled:!1}},{name:"Current Value",y:this._.get(this.currentValue,"value",0),dataLabels:{enabled:!1}}]}]})}}]),a}(l["c"]);Object(u["a"])([Object(l["b"])()],z.prototype,"buyIn",void 0),Object(u["a"])([Object(l["b"])()],z.prototype,"currentValue",void 0),z=Object(u["a"])([Object(l["a"])({components:{highcharts:_["Chart"]}})],z);var S=z,T=S,$=(a("c089"),a("2a15"),Object(j["a"])(T,k,O,!1,null,"2e15fece",null)),I=$.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"buy-in-container"},[a("div",{staticClass:"descriptor"}),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[e._v("Buy In")]),a("div",{staticClass:"subtitle"},[a("div",{staticClass:"text-value"},[e._v(e._s(e.$_.get(this.buyIn,"value",0))+" "+e._s(e.$_.get(this.buyIn,"unit","")))]),a("div",{staticClass:"text-value"},[e._v(e._s(e.buyInPairValueText))])])])]),a("div",{staticClass:"current-value-container"},[a("div",{staticClass:"descriptor"}),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[e._v("Current Value")]),a("div",{staticClass:"subtitle"},[a("div",{staticClass:"text-value"},[e._v(e._s(e.$_.get(this.currentValue,"value",0))+" "+e._s(e.$_.get(this.currentValue,"unit","")))]),a("div",{staticClass:"text-value"},[e._v(e._s(e.currentPairValueText))])])])])])},U=[],N=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return Object(g["a"])(a,[{key:"currentPairValueText",get:function(){return V(this._.get(this.currentValue,"pairValue",0),this._.get(this.currentValue,"pairValueUnit","USD"))}},{key:"buyInPairValueText",get:function(){return V(this._.get(this.buyIn,"pairValue",0),this._.get(this.buyIn,"pairValueUnit","USD"))}}]),a}(l["c"]);Object(u["a"])([Object(l["b"])()],N.prototype,"buyIn",void 0),Object(u["a"])([Object(l["b"])()],N.prototype,"currentValue",void 0),N=Object(u["a"])([Object(l["a"])({})],N);var D=N,M=D,P=(a("6775"),Object(j["a"])(M,E,U,!1,null,"105b5468",null)),L=P.exports,B=function(e){Object(c["a"])(a,e);var t=Object(o["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.buyIn={title:"Buy In",value:2.32,unit:"BTC",pairValue:1e4,pairUnit:"USD"},e.currentValue={title:"Current Value",value:11.45,unit:"BTC",pairValue:98890,pairUnit:"USD"},e}return Object(g["a"])(a,[{key:"mounted",value:function(){console.log("Connect sails socket ..."),this.$io.sails.connect().on("connect",(function(){console.log("Sails socket is now connected")})),this.$io.socket.isConnected()&&(this.$io.socket.post("/chat",{message:"test1 "}),window.io.socket.get("/chat",(function(e,t){console.log("Sails responded with: ",e),console.log("with headers: ",t.headers),console.log("and with status code: ",t.statusCode),window.io.socket.post("/chat",{message:"test1 "}),window.io.socket.post("/message",{message:"test2 "})})),console.log("subscribe to message"),this.$io.socket.on("message",(function(e){console.log("msg--\x3e ",e)})),console.log("subscribe to chat"),this.$io.socket.on("chat",(function(e){console.log("chat--\x3e ",e)})),this.$io.socket.get("/chat",(function(e,t){console.log("Sails responded with: ",e),console.log("with headers: ",t.headers),console.log("and with status code: ",t.statusCode),window.io.socket.post("/chat",{message:"test1 "}),window.io.socket.post("/message",{message:"test2 "})})))}},{key:"destroy",value:function(){this.$io.socket&&this.$io.socket.removeAllListeners()}}]),a}(l["c"]);B=Object(u["a"])([Object(l["a"])({components:{MarketChart:I,MarketChartDetail:L}})],B);var A=B,F=A,K=(a("56de"),Object(j["a"])(F,v,y,!1,null,"3d803f8b",null)),G=K.exports;s["a"].use(m["a"]);var q=[{path:"/",name:"Dashboard",component:G},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],W=new m["a"]({mode:"history",base:"/",routes:q}),H=W,J=a("2f62");s["a"].use(J["a"]);var R=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Q=a("55f1"),X=a("98c5"),Y=a("fbdf"),Z=a("0c63"),ee=a("a79d8"),te=a("f64c"),ae=a("9955"),se=a.n(ae),ne=a("2ef0");s["a"].use(Q["a"]).use(X["a"]).use(Y["a"]).use(Z["a"]).use(ee["a"]),s["a"].prototype.$message=te["a"],s["a"].use(se.a,{name:"$_",lodash:{map:ne["map"],random:ne["random"],get:ne["get"],reduce:ne["reduce"],includes:ne["includes"],set:ne["set"]}});var re={NODE_ENV:"production",SOCKET_URL:"http://ipv4.vtpexpress.com:3008"};window.io&&("development"===re.NODE_ENV&&(window.io.sails.url=re.SOCKET_URL),window.io.sails.autoConnect=!1,window.io.sails.reconnection=!0,window.io.sails.environment="staging"===re.NODE_ENV?"development":re.NODE_ENV,s["a"].prototype.$io=window.io,window.io.socket.on("message",(function(e){console.log("On message data",e)})));a("202f");s["a"].config.productionTip=!1,new s["a"]({router:H,store:R,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.dd0e1cb1.js.map
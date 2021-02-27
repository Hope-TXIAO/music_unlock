(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"002f":function(t,e,a){"use strict";a.r(e),a.d(e,"Decrypt",(function(){return l}));a("5cc6"),a("2b3d");var n=a("06dc"),r=a("fd2f");const o=a("cb96"),i=[105,102,109,116],s=[254,254,254,254],c={" WAV":".wav",FLAC:".flac"," MP3":".mp3"," A4M":".m4a"};async function l(t,e,a){const l=new Uint8Array(await Object(n["d"])(t));if(!Object(n["i"])(i,l.slice(0,4))||!Object(n["i"])(s,l.slice(8,12)))return"xm"===a?{status:!1,message:"此xm文件已损坏"}:await Object(r["Decrypt"])(t,e,a,!0);let u=(new TextDecoder).decode(l.slice(4,8));if(!c.hasOwnProperty(u))return{status:!1,message:"未知的xm文件类型"};let f=l[15],d=l[12]|l[13]<<8|l[14]<<16,m=l.slice(16),h=m.length;for(let n=d;n<h;++n)m[n]=m[n]-f^255;const p=c[u],b=n["a"][p];let g=new Blob([m],{type:b});const w=await o.parseBlob(g);"wav"===p&&(console.log(w.common),w.common.album="",w.common.artist="",w.common.title="");let y=-1===e.indexOf("_")?"-":"_";const v=Object(n["e"])(w.common.artist,w.common.title,e,y),k=Object(n["f"])(w);return{status:!0,title:v.title,artist:v.artist,ext:p,album:w.common.album,picture:k,file:URL.createObjectURL(g),mime:b,rawExt:"xm"}}},"06dc":function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"j",(function(){return i})),a.d(e,"a",(function(){return u})),a.d(e,"h",(function(){return f})),a.d(e,"d",(function(){return d})),a.d(e,"e",(function(){return m})),a.d(e,"f",(function(){return h})),a.d(e,"i",(function(){return p})),a.d(e,"b",(function(){return b})),a.d(e,"g",(function(){return g})),a.d(e,"k",(function(){return w}));a("2b3d");const n=a("7907"),r=(a("cb96"),[102,76,97,67]),o=[73,68,51],i=[79,103,103,83],s=[102,116,121,112],c=[48,38,178,117,142,102,207,17,166,217,0,170,0,98,206,108],l=[82,73,70,70],u={mp3:"audio/mpeg",flac:"audio/flac",m4a:"audio/mp4",ogg:"audio/ogg",wma:"audio/x-ms-wma",wav:"audio/x-wav"},f="https://stats.ixarea.com/apis";async function d(t){return await new Promise(e=>{const a=new FileReader;a.onload=t=>{e(t.target.result)},a.readAsArrayBuffer(t)})}function m(t,e,a,n="-"){let r="",o="",i=a.split(n);return i.length>1?(r=i[0].trim(),o=i[1].trim()):1===i.length&&(o=i[0].trim()),"string"==typeof t&&""!==t&&(r=t),"string"==typeof e&&""!==e&&(o=e),{artist:r,title:o}}function h(t){let e="";if(void 0!==t.common.picture&&t.common.picture.length>0){let a=new Blob([t.common.picture[0].data],{type:t.common.picture[0].format});e=URL.createObjectURL(a)}return e}function p(t,e){return t.every((t,a)=>t===e[a])}function b(t,e){return p(o,t.slice(0,o.length))?"mp3":p(r,t.slice(0,r.length))?"flac":p(i,t.slice(0,i.length))?"ogg":p(s,t.slice(4,4+s.length))?"m4a":p(c,t.slice(0,c.length))?"wma":p(l,t.slice(0,l.length))?"wav":e}async function g(t){try{let e=await fetch(t),a=e.headers.get("Content-Type");if(a.startsWith("image/")){let n=await e.arrayBuffer(),r=new Blob([n],{type:a}),o=URL.createObjectURL(r);return{buffer:n,src:t,url:o,type:a}}}catch(e){}return{buffer:null,src:t,url:"",type:""}}async function w(t,e,a,r,o=null,i="Cover",s=null){const c=new n(t);if(null!==s){e=s.common.artists||e,a=s.common.title||a,r=s.common.album||r;const t=s.native["ID3v2.4"]||s.native["ID3v2.3"]||s.native["ID3v2.2"]||[];t.forEach(t=>{if("TPE1"!==t.id&&"TIT2"!==t.id&&"TALB"!==t.id)try{c.setFrame(t.id,t.value)}catch(e){}})}return c.setFrame("TPE1",e).setFrame("TIT2",a).setFrame("TALB",r),null!==o&&c.setFrame("APIC",{type:3,data:o,description:i}),c.addTag(),c.arrayBuffer}},"0c6f":function(t,e,a){},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56bc":function(t,e,a){"use strict";a("0c6f")},"56d7":function(t,e,a){"use strict";a.r(e);a("46a1"),a("450d");var n=a("e5f2"),r=a.n(n),o=(a("6b30"),a("c284")),i=a.n(o),s=(a("0c67"),a("299c")),c=a.n(s),l=(a("b5d8"),a("f494")),u=a.n(l),f=(a("560b"),a("dcdc")),d=a.n(f),m=(a("f225"),a("89a9")),h=a.n(m),p=(a("f4f9"),a("c2cc")),b=a.n(p),g=(a("7a0f"),a("0f6c")),w=a.n(g),y=(a("aaa5"),a("a578")),v=a.n(y),k=(a("adec"),a("3d2d")),_=a.n(k),x=(a("bdc7"),a("aa2f")),j=a.n(x),O=(a("de31"),a("c69e")),D=a.n(O),M=(a("5466"),a("ecdf")),A=a.n(M),U=(a("38a0"),a("ad41")),T=a.n(U),B=(a("1951"),a("eedf")),C=a.n(B),S=(a("acb6"),a("c673")),E=a.n(S),L=(a("fd71"),a("a447")),P=a.n(L),F=a("2b0e"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{id:"app"}},[a("el-main",[a("x-upload",{on:{handle_error:t.showFail,handle_finish:t.showSuccess}}),a("div",{attrs:{id:"app-control"}},[a("el-row",{staticClass:"mb-3"},[a("span",[t._v("歌曲命名格式：")]),a("el-radio",{attrs:{label:"1",name:"format"},model:{value:t.download_format,callback:function(e){t.download_format=e},expression:"download_format"}},[t._v("歌手-歌曲名")]),a("el-radio",{attrs:{label:"2",name:"format"},model:{value:t.download_format,callback:function(e){t.download_format=e},expression:"download_format"}},[t._v("歌曲名")]),a("el-radio",{attrs:{label:"3",name:"format"},model:{value:t.download_format,callback:function(e){t.download_format=e},expression:"download_format"}},[t._v("歌曲名-歌手")]),a("el-radio",{attrs:{label:"4",name:"format"},model:{value:t.download_format,callback:function(e){t.download_format=e},expression:"download_format"}},[t._v("同原文件名")])],1),a("el-row",[a("el-button",{attrs:{icon:"el-icon-download",plain:""},on:{click:t.handleDownloadAll}},[t._v("下载全部")]),a("el-button",{attrs:{icon:"el-icon-delete",plain:"",type:"danger"},on:{click:t.handleDeleteAll}},[t._v("清除全部")]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top-start"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(" 当您使用此工具进行大量文件解锁的时候，建议开启此选项。"),a("br"),t._v(" 开启后，解锁结果将不会存留于浏览器中，防止内存不足。 ")]),a("el-checkbox",{staticClass:"ml-2",attrs:{border:""},model:{value:t.instant_download,callback:function(e){t.instant_download=e},expression:"instant_download"}},[t._v("立即保存")])],1)],1)],1),a("audio",{attrs:{autoplay:t.playing_auto,src:t.playing_url,controls:""}}),a("x-preview",{attrs:{download_format:t.download_format,"table-data":t.tableData},on:{music_changed:t.changePlaying}})],1),a("el-footer",{attrs:{id:"app-footer"}},[a("el-row",[a("a",{attrs:{href:"https://github.com/ix64/unlock-music",target:"_blank"}},[t._v("使用提示")])]),a("el-row",[t._v(" 目前支持网易云音乐(ncm), QQ音乐(qmc, mflac, mgg), 酷狗音乐(kgm), 酷我音乐(.kwm) "),a("a",{attrs:{href:"https://github.com/ix64/unlock-music/blob/master/README.md",target:"_blank"}},[t._v("更多")]),t._v("。 ")]),a("el-row",[a("span",[t._v("Copyright © 2019-")]),a("span",{domProps:{textContent:t._s((new Date).getFullYear())}}),t._v(" 下雪的夜晚 "),a("a",{attrs:{href:"https://github.com/ix64/unlock-music/blob/master/LICENSE",target:"_blank"}},[t._v("MIT许可协议")]),t._v(" 开放源代码 ")])],1)],1)},R=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-upload",{attrs:{"auto-upload":!1,"on-change":t.handleFile,"show-file-list":!1,action:"",drag:"",multiple:""}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),a("em",[t._v("点击选择")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("本工具仅在浏览器内对文件进行解锁，无需消耗流量")]),a("transition",{attrs:{name:"el-fade-in"}},[a("el-progress",{directives:[{name:"show",rawName:"v-show",value:t.progress_show,expression:"progress_show"}],staticStyle:{margin:"16px 6px 0 6px"},attrs:{format:t.progressFormat,percentage:t.progress_percent,"stroke-width":16,"text-inside":!0}})],1)],1)},N=[],$={name:"upload",data(){return{cacheQueue:[],workers:[],idle_workers:[],thread_num:1,progress_show:!1,progress_finished:0,progress_all:0,progress_percent:0}},mounted(){if(""!==document.location.host){this.thread_num=navigator.hardwareConcurrency||1;const t=a("bfa2");this.workers.push(t().CommonDecrypt),this.idle_workers.push(0),setTimeout(()=>{for(let e=1;e<this.thread_num;e++)this.workers.push(t().CommonDecrypt),this.idle_workers.push(e)},5e3)}else{const t=a("bd2e");this.workers.push(t.CommonDecrypt),this.idle_workers.push(0)}},methods:{progressFormat(){return this.progress_finished+"/"+this.progress_all},progressChange(t,e){this.progress_all+=e,this.progress_finished+=t,this.progress_percent=Math.round(this.progress_finished/this.progress_all*100),this.progress_finished===this.progress_all?setTimeout(()=>{this.progress_show=!1,this.progress_finished=0,this.progress_all=0},3e3):this.progress_show=!0},handleFile(t){this.progressChange(0,1),this.idle_workers.length>0?this.handleDoFile(t,this.idle_workers.shift()):this.cacheQueue.push(t)},handleCacheQueue(t){0!==this.cacheQueue.length?this.handleDoFile(this.cacheQueue.shift(),t):this.idle_workers.push(t)},handleDoFile(t,e){this.workers[e](t).then(t=>{this.$emit("handle_finish",t),this.handleCacheQueue(e),this.progressChange(1,0)}).catch(a=>{this.$emit("handle_error",a,t.name),this.handleCacheQueue(e),this.progressChange(1,0)})}}},Q=$,J=(a("56bc"),a("2877")),V=Object(J["a"])(Q,q,N,!1,null,"a829b4f6",null),H=V.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{label:"封面"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.row.picture}},[a("div",{staticClass:"image-slot el-image__error",attrs:{slot:"error"},slot:"error"},[t._v(" 暂无封面 ")])])]}}])}),a("el-table-column",{attrs:{label:"歌曲"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{attrs:{label:"歌手"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.artist))])]}}])}),a("el-table-column",{attrs:{label:"专辑"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.album))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{circle:"",icon:"el-icon-video-play",type:"success"},on:{click:function(a){return t.handlePlay(e.$index,e.row)}}}),a("el-button",{attrs:{circle:"",icon:"el-icon-download"},on:{click:function(a){return t.handleDownload(e.row)}}}),a("el-button",{attrs:{circle:"",icon:"el-icon-delete",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}})]}}])})],1)},K=[];a("2b3d");function z(t,e){const a=document.createElement("a");switch(a.href=t.file,e){default:case"1":a.download=t.artist+" - "+t.title+"."+t.ext;break;case"2":a.download=t.title+"."+t.ext;break;case"3":a.download=t.title+" - "+t.artist+"."+t.ext;break;case"4":a.download=t.rawFilename+"."+t.ext;break}document.body.append(a),a.click(),a.remove()}function G(t){URL.revokeObjectURL(t.file),t.picture.startsWith("blob:")&&URL.revokeObjectURL(t.picture)}var Y={name:"preview",props:{tableData:{type:Array,required:!0},download_format:{type:String,required:!0}},methods:{handlePlay(t,e){this.$emit("music_changed",e.file)},handleDelete(t,e){G(e),this.tableData.splice(t,1)},handleDownload(t){z(t,this.download_format)}}},X=Y,Z=Object(J["a"])(X,W,K,!1,null,"6d731108",null),tt=Z.exports,et=a("9224"),at=a("06dc"),nt={name:"app",components:{xUpload:H,xPreview:tt},data(){return{version:et.version,activeIndex:"1",tableData:[],playing_url:"",playing_auto:!1,download_format:"1",instant_download:!1}},created(){this.$nextTick((function(){this.finishLoad()}))},methods:{async finishLoad(){const t=document.getElementById("loader-mask");let e;t&&t.remove();try{const t=await fetch(at["h"]+"/music/app-version",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Version:this.version})});e=await t.json()}catch(a){}e&&(e.HttpsFound||e.Found&&"https:"!==window.location.protocol)?this.$notify.warning({title:"发现更新",message:"发现新版本 v"+e.Version+"<br/>更新详情："+e.Detail+'<br/><a target="_blank" href="'+e.URL+'">获取更新</a>',dangerouslyUseHTMLString:!0,duration:15e3,position:"top-left"}):this.$notify.info({title:"离线使用",message:"我们使用PWA技术，无网络也能使用<br/>最近更新："+et.updateInfo+'<br/><a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>',dangerouslyUseHTMLString:!0,duration:1e4,position:"top-left"})},showSuccess(t){if(t.status){this.instant_download?(z(t,this.download_format),G(t)):(this.tableData.push(t),this.$notify.success({title:"解锁成功",message:"成功解锁 "+t.title,duration:3e3}));{let e=[t.title,t.artist,t.album];window._paq.push(["trackEvent","Unlock",t.rawExt+","+t.mime,JSON.stringify(e)])}}else this.showFail(t.message,t.rawFilename+"."+t.rawExt)},showFail(t,e){this.$notify.error({title:"出现问题",message:t+"，"+e+'，参考<a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>',dangerouslyUseHTMLString:!0,duration:6e3}),window._paq.push(["trackEvent","Error",t,e]),console.error(t,e)},changePlaying(t){this.playing_url=t,this.playing_auto=!0},handleDeleteAll(){this.tableData.forEach(t=>{G(t)}),this.tableData=[]},handleDownloadAll(){let t=0,e=setInterval(()=>{t<this.tableData.length?(z(this.tableData[t],this.download_format),t++):clearInterval(e)},300)}}},rt=nt,ot=(a("5c0b"),Object(J["a"])(rt,I,R,!1,null,null,null)),it=ot.exports,st=a("9483");"https:"===window.location.protocol&&Object(st["a"])("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available."),window.location.reload()},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}}),F["default"].use(P.a),F["default"].use(E.a),F["default"].use(C.a),F["default"].use(T.a),F["default"].use(A.a),F["default"].use(D.a),F["default"].use(j.a),F["default"].use(_.a),F["default"].use(v.a),F["default"].use(w.a),F["default"].use(b.a),F["default"].use(h.a),F["default"].use(d.a),F["default"].use(u.a),F["default"].use(c.a),F["default"].use(i.a),F["default"].prototype.$notify=r.a,F["default"].config.productionTip=!1,document.getElementById("loader-source").remove(),new F["default"]({render:t=>t(it)}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},9224:function(t){t.exports=JSON.parse('{"name":"unlock-music","version":"1.8.1","updateInfo":"添加构建为Docker镜像","license":"MIT","description":"Unlock encrypted music file in browser.","repository":{"type":"git","url":"https://github.com/ix64/unlock-music"},"private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","fix-compatibility":"node ./src/fix-compatibility.js","make-extension":"node ./make-extension.js"},"dependencies":{"base64-js":"^1.5.1","browser-id3-writer":"^4.4.0","core-js":"^3.8.3","crypto-js":"^4.0.0","element-ui":"^2.15.0","iconv-lite":"^0.6.2","jimp":"^0.16.1","metaflac-js":"^1.0.5","music-metadata-browser":"^2.2.4","register-service-worker":"^1.7.2","vue":"^2.6.12"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.11","@vue/cli-plugin-pwa":"^4.5.11","@vue/cli-service":"^4.5.11","babel-plugin-component":"^1.1.1","vue-cli-plugin-element":"^1.0.1","vue-template-compiler":"^2.6.12","workerize-loader":"^1.3.0","sass-loader":"^10.1.1","node-sass":"^5.0.0"}}')},9603:function(t,e,a){"use strict";a.d(e,"d",(function(){return u})),a.d(e,"b",(function(){return f})),a.d(e,"c",(function(){return d})),a.d(e,"a",(function(){return m}));var n=a("06dc");const r=[79,103,103,83,0,2,0,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,255,255,255,255,1,30,1,118,111,114,98,105,115,0,0,0,0,2,68,172,0,0,0,0,0,0,0,238,2,0,0,0,0,0,184,1,79,103,103,83,0,0,0,0,0,0,0,0,0,0,255,255,255,255,1,0,0,0,255,255,255,255],o=[3,118,111,114,98,105,115,44,0,0,0,88,105,112,104,46,79,114,103,32,108,105,98,86,111,114,98,105,115,32,73,32,50,48,49,53,48,49,48,53,32,40,226,155,132,226,155,132,226,155,132,226,155,132,41,255,0,0,0,255,0,0,0,84,73,84,76,69,61],i=[9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,9,9,9,9,0,0,0,0,9,9,9,9,9,9,9,9,9,9,9,9,9,6,3,3,3,3,6,6,6,6,3,3,3,3,6,6,6,6,6,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,9,9,9,9,0,0,0,0],s=[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,1,3,3,0,1,3,3,3,3,3,3,3,3],c=[222,81,250,195,74,214,202,144,126,103,94,247,213,82,132,216,71,149,187,161,170,198,102,35,146,98,243,116,161,159,244,160,29,63,91,240,19,14,9,61,249,188,0,17];class l{constructor(t,e,a){void 0===e||void 0===a?(44===t.length?(this.Matrix44=t,this.generateMask128from44()):(this.Matrix128=t,this.generateMask44from128()),this.generateMask58from128()):(this.Matrix58=t,this.Super58A=e,this.Super58B=a,this.generateMask128from58(),this.generateMask44from128())}generateMask128from58(){if(56!==this.Matrix58.length)throw"incorrect mask58 matrix length";let t=[];for(let e=0;e<8;e+=1)t=t.concat([this.Super58A],this.Matrix58.slice(7*e,7*e+7),[this.Super58B],this.Matrix58.slice(49-7*e,56-7*e).reverse());this.Matrix128=t}generateMask58from128(){if(128!==this.Matrix128.length)throw"incorrect mask128 length";const t=this.Matrix128[0],e=this.Matrix128[8];let a=[];for(let r=0;r<8;r+=1){let o=16*r,i=120-o;if(this.Matrix128[o]!==t||this.Matrix128[o+8]!==e)throw"decode mask-128 to mask-58 failed";let s=this.Matrix128.slice(o+1,o+8),c=this.Matrix128.slice(i+1,i+8).reverse();if(!Object(n["i"])(s,c))throw"decode mask-128 to mask-58 failed";a=a.concat(s)}this.Matrix58=a,this.Super58A=t,this.Super58B=e}generateMask44from128(){if(128!==this.Matrix128.length)throw"incorrect mask128 matrix length";let t=g();this.Matrix44=[];let e=0;t.forEach(t=>{let a=t.length;for(let e=1;e<a;e++)if(this.Matrix128[t[0]]!==this.Matrix128[t[e]])throw"decode mask-128 to mask-44 failed";this.Matrix44[e]=this.Matrix128[t[0]],e++})}generateMask128from44(){if(44!==this.Matrix44.length)throw"incorrect mask length";this.Matrix128=[];let t=0;g().forEach(e=>{e.forEach(e=>{this.Matrix128[e]=this.Matrix44[t]}),t++})}Decrypt(t){let e=t.slice(0),a=-1,n=-1;for(let r=0;r<t.length;r++)a++,n++,(32768===a||a>32768&&(a+1)%32768===0)&&(a++,n++),n>=128&&(n-=128),e[r]^=this.Matrix128[n];return e}}function u(){return new l(c)}function f(t){let e,a=Math.min(32768,t.length);for(let o=0;o<a;o+=128)try{if(e=new l(t.slice(o,o+128)),Object(n["i"])(n["c"],e.Decrypt(t.slice(0,n["c"].length))))break}catch(r){}return e}function d(t){if(t.length<256)return;let e={};for(let n=0;n<44;n++)e[n]={};const a=t[84]^t[12]^r[12],o=y(a),i=v(a);for(let n=0;n<o.length;n++){if(0===i[n])continue;let a=w(n),r=t[n]^o[n],s=i[n];r in e[a]?e[a][r]+=s:e[a][r]=s}let s=[];try{for(let t=0;t<44;t++)s[t]=h(e[t])}catch(f){return}const c=new l(s);let u=c.Decrypt(t.slice(0,n["j"].length));return Object(n["i"])(n["j"],u)?c:void 0}function m(t,e,a){return new l(t,e,a)}function h(t){if(0===t.length)throw"can not match at least one key";t.length>1&&console.warn("There are 2 potential value for the mask!");let e,a=0;for(let n in t)t[n]>a&&(e=n,a=t[n]);return parseInt(e)}const p=[],b=[];function g(){return p}function w(t){return b[t%128]}function y(t){let e=[t,255];for(let a=2;a<t;a++)e.push(255);return e.push(255),r.concat(e,o)}function v(t){let e=[6,0];for(let a=2;a<t;a++)e.push(4);return e.push(0),i.concat(e,s)}(function(){for(let e=0;e<128;e++){let t=(e*e+27)%256;t in p?p[t].push(e):p[t]=[e]}let t=0;p.forEach(e=>{e.forEach(e=>{b[e]=t}),t++})})()},"9c0c":function(t,e,a){},a8ee:function(t,e,a){"use strict";a.r(e),a.d(e,"Decrypt",(function(){return i}));a("5cc6");var n=a("fd2f"),r=a("06dc");const o=[0,0,0,32,102,116,121,112];async function i(t,e){const a=await Object(r["d"])(t),i=new Uint8Array(a);for(let n=0;n<8;++n)i[n]=o[n];const s=new Blob([i],{type:"audio/mp4"});return await Object(n["Decrypt"])(s,e,"m4a",!1)}},b57b:function(t,e,a){"use strict";a.r(e),a.d(e,"Decrypt",(function(){return s}));a("5cc6"),a("2b3d");var n=a("06dc");const r=a("cb96"),o=[121,101,101,108,105,111,110,45,107,117,119,111,45,116,109,101],i="MoOtOiTvINGwd2E6n0E1i7L5t2IoOoNk";async function s(t,e,a){const i=new Uint8Array(await Object(n["d"])(t));if(!Object(n["i"])(o,i.slice(0,16)))return{status:!1,message:"Not a valid kwm file!"};let s=i.slice(24,32),l=c(s),u=i.slice(1024),f=u.length;for(let n=0;n<f;++n)u[n]^=l[n%32];const d=Object(n["b"])(u,"mp3"),m=n["a"][d];let h=new Blob([u],{type:m});const p=await r.parseBlob(h),b=Object(n["e"])(p.common.artist,p.common.title,e),g=Object(n["f"])(p);return{status:!0,title:b.title,artist:b.artist,ext:d,album:p.common.album,picture:g,file:URL.createObjectURL(h),mime:m}}function c(t){let e=new DataView(t.buffer),a=e.getBigUint64(0,!0).toString(),n=l(a),r=new Uint8Array(32);for(let o=0;o<32;o++)r[o]=i[o].charCodeAt()^n[o].charCodeAt();return r}function l(t){let e=t.length,a=t;return e>32?a=t.slice(0,32):e<32&&(a=t.padEnd(32,t)),a}},b6cf:function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"Decrypt",(function(){return f}));a("5cc6"),a("2b3d");var n=a("06dc"),r=a("9603"),o=a("1fb5");const i=a("b686"),s=(a("7907"),a("acf9")),c=s.decode,l=a("cb96"),u={mgg:{handler:r["c"],ext:"ogg",detect:!0},mflac:{handler:r["b"],ext:"flac",detect:!0},qmc0:{handler:r["d"],ext:"mp3",detect:!1},qmc2:{handler:r["d"],ext:"ogg",detect:!1},qmc3:{handler:r["d"],ext:"mp3",detect:!1},qmcogg:{handler:r["d"],ext:"ogg",detect:!1},qmcflac:{handler:r["d"],ext:"flac",detect:!1},bkcmp3:{handler:r["d"],ext:"mp3",detect:!1},bkcflac:{handler:r["d"],ext:"flac",detect:!1},tkm:{handler:r["d"],ext:"m4a",detect:!1},"666c6163":{handler:r["d"],ext:"flac",detect:!1},"6d7033":{handler:r["d"],ext:"mp3",detect:!1},"6f6767":{handler:r["d"],ext:"ogg",detect:!1},"6d3461":{handler:r["d"],ext:"m4a",detect:!1},776176:{handler:r["d"],ext:"wav",detect:!1}};async function f(e,a,r){if(!(r in u))return{status:!1,message:"File type is incorrect!"};const o=u[r],s=new Uint8Array(await Object(n["d"])(e));let f,p,b;if(o.detect){const t=new DataView(s.slice(s.length-4).buffer).getUint32(0,!0),e=s.length-4-t;if(f=s.slice(0,e),p=o.handler(f),b=s.slice(e,e+t),void 0===p&&(p=await m(b,a,r)),void 0===p)return{status:!1,message:r+"格式仅提供实验性支持"}}else f=s,p=o.handler(f);let g=p.Decrypt(f);const w=Object(n["b"])(g,o.ext),y=n["a"][w];let v=new Blob([g],{type:y});const k=await l.parseBlob(v);for(let t in k.native)k.native[t].some(t=>"TCON"===t.id&&"(12)"===t.value)&&(console.warn("The metadata is using gbk encoding"),k.common.artist=c(k.common.artist,"gbk"),k.common.title=c(k.common.title,"gbk"),k.common.album=c(k.common.album,"gbk"));const _=Object(n["e"])(k.common.artist,k.common.title,a);o.detect&&d(b,p.Matrix128,_.artist,_.title,k.common.album,a,r);let x=Object(n["f"])(k);if(""===x&&(x=await h(_.artist,_.title,k.common.album),""!==x)){const e=await Object(n["g"])(x);if(""!==e.url){x=e.url;try{if("mp3"===w)g=await Object(n["k"])(g,_.artist.split(" _ "),_.title,"",e.buffer,"Cover",k),v=new Blob([g],{type:y});else if("flac"===w){const a=new i(t.from(g));a.importPictureFromBuffer(t.from(e.buffer)),g=a.save(),v=new Blob([g],{type:y})}else console.info("writing metadata for "+w+" is not being supported for now")}catch(j){console.warn("Error while appending cover image to file "+j)}}}return{status:!0,title:_.title,artist:_.artist,ext:w,album:k.common.album,picture:x,file:URL.createObjectURL(v),mime:y}}function d(t,e,a,r,i,s,c){fetch(n["h"]+"/qmcmask/usage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Mask:Object(o["fromByteArray"])(new Uint8Array(e)),Key:Object(o["fromByteArray"])(t),Artist:a,Title:r,Album:i,Filename:s,Format:c})}).then().catch()}async function m(t,e,a){try{const i=await fetch(n["h"]+"/qmcmask/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Format:a,Key:Object(o["fromByteArray"])(t),Filename:e,Type:44})});let s=await i.json();return Object(r["a"])(Object(o["toByteArray"])(s.Matrix44))}catch(i){console.log(i)}}async function h(t,e,a){const r=n["h"]+"/music/qq-cover";try{const n={Artist:t,Title:e,Album:a};let o=r+"?";for(let t in n)o+=t+"="+encodeURIComponent(n[t])+"&";const i=await fetch(o);if(i.ok){let t=await i.json();return r+"/"+t.Type+"/"+t.Id}}catch(o){console.log(o)}return""}}.call(this,a("1c35").Buffer)},bd2e:function(t,e,a){"use strict";a.r(e),a.d(e,"CommonDecrypt",(function(){return u}));const n=a("dde9"),r=a("b57b"),o=a("002f"),i=a("b6cf"),s=a("fd2f"),c=a("a8ee"),l=a("e5b9");async function u(t){let e,a=t.name.substring(t.name.lastIndexOf(".")+1,t.name.length).toLowerCase(),u=t.name.substring(0,t.name.lastIndexOf("."));switch(a){case"ncm":e=await n.Decrypt(t.raw,u,a);break;case"kwm":e=await r.Decrypt(t.raw,u,a);break;case"xm":case"wav":case"mp3":case"flac":case"m4a":e=await o.Decrypt(t.raw,u,a);break;case"ogg":e=await s.Decrypt(t.raw,u,a);break;case"tm0":case"tm3":e=await s.Decrypt(t.raw,u,"mp3");break;case"qmc3":case"qmc2":case"qmc0":case"qmcflac":case"qmcogg":case"tkm":case"bkcmp3":case"bkcflac":case"mflac":case"mgg":case"666c6163":case"6d7033":case"6f6767":case"6d3461":case"776176":e=await i.Decrypt(t.raw,u,a);break;case"tm2":case"tm6":e=await c.Decrypt(t.raw,u);break;case"vpr":case"kgm":case"kgma":e=await l.Decrypt(t.raw,u,a);break;default:e={status:!1,message:"不支持此文件格式"}}return e.rawExt||(e.rawExt=a),e.rawFilename||(e.rawFilename=u),console.log(e),e}},bfa2:function(t,e,a){var n=a("3d67"),r=["CommonDecrypt"];t.exports=function(){var t=new Worker(a.p+"85509713085812894f1d.worker.js",{name:"[hash].worker.js"});return n(t,r),t}},dde9:function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"Decrypt",(function(){return d}));a("5319"),a("5cc6"),a("2b3d");var n=a("ef21"),r=a.n(n),o=a("06dc");const i=a("3452"),s=a("b686"),c=i.enc.Hex.parse("687a4852416d736f356b496e62617857"),l=i.enc.Hex.parse("2331346C6A6B5F215C5D2630553C2728"),u=[67,84,69,78,70,68,65,77],f=a("cb96");async function d(e,a,n){const i=await Object(o["d"])(e),c=new DataView(i);if(!Object(o["i"])(u,new Uint8Array(i,0,8)))return{status:!1,message:"此ncm文件已损坏"};const l=m(c,i,10),d=h(l.data),b=p(c,i,l.offset),g=b.data;let w=b.offset+c.getUint32(b.offset+5,!0)+13,y=new Uint8Array(i,w),v=y.length;for(let t=0;t<v;++t)y[t]^=d[255&t];void 0===g.album&&(g.album="");const k=[];g.artist&&g.artist.forEach(t=>k.push(t[0]));const _=Object(o["e"])(k.join("; "),g.musicName,a);0===k.length&&k.push(_.artist),void 0===g.format&&(g.format=Object(o["b"])(y,"mp3")),console.log(g);const x=await Object(o["g"])(g.albumPic);while(x.buffer&&x.buffer.byteLength>=16777216){let t=await r.a.read(x.buffer);await t.resize(Math.round(t.getHeight()/2),r.a.AUTO),x.buffer=await t.getBufferAsync("image/jpeg")}console.log(x);const j=o["a"][g.format];try{let e=new Blob([y],{type:j});const a=await f.parseBlob(e);console.log(a);let n=!a.common.album&&!a.common.artists&&!a.common.title;if("mp3"===g.format)y=await Object(o["k"])(y,k,_.title,g.album,x.buffer,g.albumPic,n?null:a);else if("flac"===g.format){const e=new s(t.from(y));n&&(e.setTag("TITLE="+_.title),e.setTag("ALBUM="+g.album),e.removeTag("ARTIST"),k.forEach(t=>e.setTag("ARTIST="+t))),e.importPictureFromBuffer(t.from(x.buffer)),y=e.save()}}catch(D){console.warn("Error while appending cover image to file "+D)}const O=new Blob([y],{type:j});return{status:!0,title:_.title,artist:_.artist,ext:g.format,album:g.album,picture:x.url,file:URL.createObjectURL(O),mime:j}}function m(t,e,a){const n=t.getUint32(a,!0);a+=4;const r=new Uint8Array(e,a,n).map(t=>100^t);a+=n;const o=i.AES.decrypt({ciphertext:i.lib.WordArray.create(r)},c,{mode:i.mode.ECB,padding:i.pad.Pkcs7}),s=new Uint8Array(o.sigBytes),l=o.words,u=o.sigBytes;for(let i=0;i<u;i++)s[i]=l[i>>>2]>>>24-i%4*8&255;return{offset:a,data:s.slice(17)}}function h(t){const e=new Uint8Array(Array(256).keys()),a=t.length;let n=0;for(let r=0;r<256;r++)n=e[r]+n+t[r%a]&255,[e[r],e[n]]=[e[n],e[r]];return e.map((t,e,a)=>{e=e+1&255;const n=a[e],r=a[e+n&255];return a[n+r&255]})}function p(t,e,a){const n=t.getUint32(a,!0);if(a+=4,0===n)return{data:{},offset:a};const r=new Uint8Array(e,a,n).map(t=>99^t);a+=n;const o=i.AES.decrypt({ciphertext:i.enc.Base64.parse(i.lib.WordArray.create(r.slice(22)).toString(i.enc.Utf8))},l,{mode:i.mode.ECB,padding:i.pad.Pkcs7}).toString(i.enc.Utf8),s=o.indexOf(":");let c=JSON.parse(o.slice(s+1));return"dj"===o.slice(0,s)&&(c=c.mainMusic),c.albumPic&&""!==c.albumPic&&(c.albumPic=c.albumPic.replace("http://","https://")+"?param=500y500"),{data:c,offset:a}}}.call(this,a("1c35").Buffer)},e5b9:function(t,e,a){"use strict";a.r(e),a.d(e,"Decrypt",(function(){return c}));a("5cc6"),a("2b3d");var n=a("06dc");const r=a("cb96"),o=[5,40,188,150,233,228,90,67,145,170,189,208,122,245,54,49],i=[124,213,50,235,134,2,127,75,168,175,166,142,15,255,153,20],s=[37,223,232,166,117,30,117,14,47,128,243,45,184,182,227,17,0];async function c(t,e,a){try{if("file:"===window.location.protocol)return{status:!1,message:"请使用<a target='_blank' href='https://github.com/ix64/unlock-music/wiki/其他音乐格式工具'>CLI版本</a>进行解锁"}}catch{}const c=new Uint8Array(await Object(n["d"])(t));if("vpr"===a){if(!Object(n["i"])(o,c.slice(0,16)))return{status:!1,message:"Not a valid vpr file!"}}else if(!Object(n["i"])(i,c.slice(0,16)))return{status:!1,message:"Not a valid kgm/kgma file!"};let d=new DataView(c.slice(16,20).buffer),m=d.getUint32(0,!0),h=c.slice(m),p=h.length;if(h.byteLength>1<<26)return{status:!1,message:"文件过大，请使用<a target='_blank' href='https://github.com/ix64/unlock-music/wiki/其他音乐格式工具'>CLI版本</a>进行解锁"};let b=new Uint8Array(17);if(b.set(c.slice(28,44),0),null==u&&!await f())return{status:!1,message:"加载Kgm/Vpr Mask数据失败"};for(let n=0;n<p;n++){let t=b[n%17]^h[n];t^=(15&t)<<4;let e=l(n);e^=(15&e)<<4,h[n]=t^e}if("vpr"===a)for(let n=0;n<p;n++)h[n]^=s[n%17];const g=Object(n["b"])(h,"mp3"),w=n["a"][g];let y=new Blob([h],{type:w});const v=await r.parseBlob(y),k=Object(n["e"])(v.common.artist,v.common.title,e),_=Object(n["f"])(v);return{status:!0,title:k.title,artist:k.artist,ext:g,album:v.common.album,picture:_,file:URL.createObjectURL(y),mime:w}}function l(t){return d[t%272]^u[t>>4]}let u=null;async function f(){try{let t=await fetch("./static/kgm.mask",{method:"GET"});return u=new Uint8Array(await t.arrayBuffer()),!0}catch(t){return console.error(t),!1}}const d=[184,213,61,178,233,175,120,140,131,51,113,81,118,160,205,55,47,62,53,141,169,190,152,183,231,140,34,206,90,97,223,104,105,137,254,165,182,222,169,119,252,200,189,189,229,109,62,90,54,239,105,78,190,225,233,102,28,243,217,2,182,242,18,155,68,208,111,185,53,137,182,70,109,115,130,6,105,193,237,215,133,194,48,223,162,98,190,121,45,98,98,61,13,126,190,72,137,35,2,160,228,213,117,81,50,2,83,253,22,58,33,59,22,15,195,178,187,179,226,186,58,61,19,236,246,1,69,132,165,112,15,147,73,12,100,205,49,213,204,76,7,1,158,0,26,35,144,191,136,30,59,171,166,62,196,115,71,16,126,59,94,188,227,0,132,255,9,212,224,137,15,91,88,112,79,251,101,216,92,83,27,211,200,198,191,239,152,176,80,79,15,234,229,131,88,140,40,44,132,103,205,208,158,71,219,39,80,202,244,99,99,232,151,127,27,75,12,194,193,33,76,204,88,245,148,82,163,243,211,224,104,244,0,35,243,94,10,123,147,221,171,18,178,19,232,132,215,167,159,15,50,76,85,29,4,54,82,220,3,243,249,78,66,233,61,97,239,124,182,179,147,80]},fd2f:function(t,e,a){"use strict";a.r(e),a.d(e,"Decrypt",(function(){return o}));a("5cc6"),a("2b3d");var n=a("06dc");const r=a("cb96");async function o(t,e,a,o=!0){let i=a;if(o){const e=new Uint8Array(await Object(n["d"])(t));i=Object(n["b"])(e,a),i!==a&&(t=new Blob([e],{type:n["a"][i]}))}const s=await r.parseBlob(t),c=Object(n["e"])(s.common.artist,s.common.title,e);return{status:!0,title:c.title,artist:c.artist,ext:i,album:s.common.album,picture:Object(n["f"])(s),file:URL.createObjectURL(t),mime:n["a"][i]}}}});
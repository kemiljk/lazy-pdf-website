(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e859afe"],{8872:function(t){t.exports=JSON.parse('[{"id":0,"img":"https://res.cloudinary.com/kejk/image/upload/v1585993877/Picking_selection_ckdioy.png"},{"id":1,"img":"https://res.cloudinary.com/kejk/image/upload/v1585993878/Rendered_PDF_zpdrza.png"}]')},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-left"},[a("v-col",[a("h1",{staticClass:"display-2 font-weight-bold mb-3 mt-10",attrs:{"aria-label":"Lazy PDF product"}},[t._v(" Lazy-PDF ")]),a("h2",{staticClass:"display font-weight-bold mb-3 mt-10",attrs:{"aria-label":"Karl's posts"}},[t._v(" Effortless and interfaceless PDF creation. ")]),a("v-img",{staticClass:"mt-10 img",attrs:{src:""+t.hero,alt:"image of Lazy PDF app in use"}})],1)],1),a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("a",{attrs:{href:"https://www.producthunt.com/posts/lazy-pdf?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lazy-pdf",target:"_blank"}},[a("img",{staticStyle:{width:"250px",height:"54px"},attrs:{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=191366&theme=light",alt:"Lazy PDF - Effortless and interfaceless PDF creation | Product Hunt Embed",width:"250px",height:"54px"}})])]),a("v-col",{attrs:{cols:"12"}},[a("h3",{staticClass:"mb-3"},[t._v("Lazy PDF")]),a("p",{staticClass:"body-1"},[t._v("Lazy PDF is a little free macOS utility that allows you to effortlessly create a PDF from a set of selected images. It's interfaceless and relies only on a Finder selection UI. This is designed to be simple and have a low overhead to make it easier to grab a set of design files and throw them together into a PDF. It'll listen to your logical file order, so number your files if you want to order in sequence, otherwise, you can move them around afterwards in Preview. Lazy PDF respects your image sizes so doesn't try to compress everything to printable sizes, ideal for sharing work to teammates and management.")])])],1),a("v-row",{staticClass:"text-left"},t._l(t.images,(function(t){return a("v-col",{key:""+t.id,attrs:{cols:"12"}},[a("v-img",{staticClass:"img",attrs:{src:""+t.img}})],1)})),1)],1)},r=[],i=a("8872"),s={name:"LazyPDF",data:function(){return{images:i,hero:"https://res.cloudinary.com/kejk/image/upload/v1585992488/macbook-pro-space-gray-on-the-wooden-table_e6bu8w.jpg",url:"https://res.cloudinary.com/kejk/raw/upload/v1585911201/Lazy_PDF.zip"}}},o=s,l=a("2877"),c=a("6544"),d=a.n(c),u=a("62ad"),f=(a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a"),a("a026"));function p(t){return f["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,r=a.data,i=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,i)}})}var g=a("d9f7"),m=p("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,r=e.data,i=e.children,s=r.attrs;return s&&(r.attrs={},a=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(g["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),i)}}),y=a("adda"),v=(a("4160"),a("caad"),a("13d5"),a("4ec9"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0"),a("ade3")),h=a("5530"),b=a("80d2"),w=["sm","md","lg","xl"],j=["start","end","center"];function k(t,e){return w.reduce((function(a,n){return a[t+Object(b["m"])(n)]=e(),a}),{})}var C=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},P=k("align",(function(){return{type:String,default:null,validator:C}})),_=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},z=k("justify",(function(){return{type:String,default:null,validator:_}})),F=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},O=k("alignContent",(function(){return{type:String,default:null,validator:F}})),S={align:Object.keys(P),justify:Object.keys(z),alignContent:Object.keys(O)},D={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,a){var n=D[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var L=new Map,E=f["a"].extend({name:"v-row",functional:!0,props:Object(h["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:C}},P,{justify:{type:String,default:null,validator:_}},z,{alignContent:{type:String,default:null,validator:F}},O),render:function(t,e){var a=e.props,n=e.data,r=e.children,i="";for(var s in a)i+=String(a[s]);var o=L.get(i);return o||function(){var t,e;for(e in o=[],S)S[e].forEach((function(t){var n=a[t],r=x(e,t,n);r&&o.push(r)}));o.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(v["a"])(t,"align-".concat(a.align),a.align),Object(v["a"])(t,"justify-".concat(a.justify),a.justify),Object(v["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),L.set(i,o)}(),t(a.tag,Object(g["a"])(n,{staticClass:"row",class:o}),r)}}),I=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=I.exports;d()(I,{VCol:u["a"],VContainer:m,VImg:y["a"],VRow:E})}}]);
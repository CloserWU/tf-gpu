(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"4Ofr":function(e,t,a){e.exports={themeColor:"antd-pro-components-setting-drawer-theme-color-themeColor",title:"antd-pro-components-setting-drawer-theme-color-title",colorBlock:"antd-pro-components-setting-drawer-theme-color-colorBlock"}},BFsb:function(e,t,a){e.exports={content:"antd-pro-components-setting-drawer-index-content",blockChecbox:"antd-pro-components-setting-drawer-index-blockChecbox",item:"antd-pro-components-setting-drawer-index-item",selectIcon:"antd-pro-components-setting-drawer-index-selectIcon",color_block:"antd-pro-components-setting-drawer-index-color_block",title:"antd-pro-components-setting-drawer-index-title",handle:"antd-pro-components-setting-drawer-index-handle",productionHint:"antd-pro-components-setting-drawer-index-productionHint"}},PceP:function(e,t,a){"use strict";a.r(t);a("bbsP");var n,o,r,i=a("/wGt"),c=(a("fOrg"),a("+KLJ")),l=(a("+L6B"),a("2/Rp")),s=(a("miYZ"),a("tsqr")),d=(a("/zsF"),a("PArb")),m=(a("Pwec"),a("CtXQ")),p=(a("5Dmo"),a("3S7+")),g=(a("Mwp2"),a("VXEj")),u=(a("BoS7"),a("Sdc0")),h=a("lwsE"),f=a.n(h),y=a("W8MJ"),b=a.n(y),k=a("a1gu"),E=a.n(k),v=a("Nsbk"),w=a.n(v),C=a("7W2i"),j=a.n(C),O=a("MVZn"),M=a.n(O),x=(a("OaEy"),a("2fM7")),S=a("q1tI"),N=a.n(S),z=a("LLXN"),F=a("P5Jw"),H=a("MuoO"),B=a("BGR+"),I=a("BFsb"),L=a.n(I),D=a("pVnL"),J=a.n(D),P=a("QILm"),W=a.n(P),A=a("4Ofr"),R=a.n(A),q=function(e){var t=e.color,a=e.check,n=W()(e,["color","check"]);return N.a.createElement("div",J()({},n,{style:{backgroundColor:t}}),a?N.a.createElement(m["a"],{type:"check"}):"")},T=function(e){var t=e.colors,a=e.title,n=e.value,o=e.onChange,r=t;return t||(r=[{key:"dust",color:"#F5222D"},{key:"volcano",color:"#FA541C"},{key:"sunset",color:"#FAAD14"},{key:"cyan",color:"#13C2C2"},{key:"green",color:"#52C41A"},{key:"daybreak",color:"#1890FF"},{key:"geekblue",color:"#2F54EB"},{key:"purple",color:"#722ED1"}]),N.a.createElement("div",{className:R.a.themeColor},N.a.createElement("h3",{className:R.a.title},a),N.a.createElement("div",{className:R.a.content},r.map(function(e){var t=e.key,a=e.color;return N.a.createElement(p["a"],{key:a,title:Object(z["formatMessage"])({id:"app.setting.themecolor.".concat(t)})},N.a.createElement(q,{className:R.a.colorBlock,color:a,check:n===a,onClick:function(){return o&&o(a)}}))})))},X=T,Q=function(e){var t=e.value,a=e.onChange,n=e.list;return N.a.createElement("div",{className:L.a.blockChecbox,key:t},n.map(function(e){return N.a.createElement(p["a"],{title:e.title,key:e.key},N.a.createElement("div",{className:L.a.item,onClick:function(){return a(e.key)}},N.a.createElement("img",{src:e.url,alt:e.key}),N.a.createElement("div",{className:L.a.selectIcon,style:{display:t===e.key?"block":"none"}},N.a.createElement(m["a"],{type:"check"}))))}))},V=Q,Y=x["a"].Option,Z=function(e){var t=e.children,a=e.title,n=e.style;return N.a.createElement("div",{style:M()({},n,{marginBottom:24})},N.a.createElement("h3",{className:L.a.title},a),t)},_=(n=Object(H["connect"])(function(e){var t=e.setting;return{setting:t}}),n((r=function(e){function t(){var e,a;f()(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return a=E()(this,(e=w()(t)).call.apply(e,[this].concat(o))),a.state={collapse:!1},a.getLayoutSetting=function(){var e=a.props.setting,t=e.contentWidth,n=e.fixedHeader,o=e.layout,r=e.autoHideHeader,i=e.fixSiderbar;return[{title:Object(z["formatMessage"])({id:"app.setting.content-width"}),action:N.a.createElement(x["a"],{value:t,size:"small",onSelect:function(e){return a.changeSetting("contentWidth",e)},style:{width:80}},"sidemenu"===o?null:N.a.createElement(Y,{value:"Fixed"},Object(z["formatMessage"])({id:"app.setting.content-width.fixed"})),N.a.createElement(Y,{value:"Fluid"},Object(z["formatMessage"])({id:"app.setting.content-width.fluid"})))},{title:Object(z["formatMessage"])({id:"app.setting.fixedheader"}),action:N.a.createElement(u["a"],{size:"small",checked:!!n,onChange:function(e){return a.changeSetting("fixedHeader",e)}})},{title:Object(z["formatMessage"])({id:"app.setting.hideheader"}),disabled:!n,disabledReason:Object(z["formatMessage"])({id:"app.setting.hideheader.hint"}),action:N.a.createElement(u["a"],{size:"small",checked:!!r,onChange:function(e){return a.changeSetting("autoHideHeader",e)}})},{title:Object(z["formatMessage"])({id:"app.setting.fixedsidebar"}),disabled:"topmenu"===o,disabledReason:Object(z["formatMessage"])({id:"app.setting.fixedsidebar.hint"}),action:N.a.createElement(u["a"],{size:"small",checked:!!i,onChange:function(e){return a.changeSetting("fixSiderbar",e)}})}]},a.changeSetting=function(e,t){var n=a.props.setting,o=M()({},n);o[e]=t,"layout"===e?o.contentWidth="topmenu"===t?"Fixed":"Fluid":"fixedHeader"!==e||t||(o.autoHideHeader=!1),a.setState(o,function(){var e=a.props.dispatch;e({type:"setting/changeSetting",payload:a.state})})},a.togglerContent=function(){var e=a.state.collapse;a.setState({collapse:!e})},a.renderLayoutSettingItem=function(e){var t=N.a.cloneElement(e.action,{disabled:e.disabled});return N.a.createElement(p["a"],{title:e.disabled?e.disabledReason:"",placement:"left"},N.a.createElement(g["a"].Item,{actions:[t]},N.a.createElement("span",{style:{opacity:e.disabled?"0.5":""}},e.title)))},a}return j()(t,e),b()(t,[{key:"render",value:function(){var e=this,t=this.props.setting,a=t.navTheme,n=t.primaryColor,o=t.layout,r=t.colorWeak,p=this.state.collapse;return N.a.createElement(i["a"],{visible:p,width:300,onClose:this.togglerContent,placement:"right",handler:N.a.createElement("div",{className:L.a.handle},N.a.createElement(m["a"],{type:p?"close":"setting",style:{color:"#fff",fontSize:20}})),onHandleClick:this.togglerContent,style:{zIndex:999}},N.a.createElement("div",{className:L.a.content},N.a.createElement(Z,{title:Object(z["formatMessage"])({id:"app.setting.pagestyle"})},N.a.createElement(V,{list:[{key:"dark",url:"https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg",title:Object(z["formatMessage"])({id:"app.setting.pagestyle.dark"})},{key:"light",url:"https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg",title:Object(z["formatMessage"])({id:"app.setting.pagestyle.light"})}],value:a,onChange:function(t){return e.changeSetting("navTheme",t)}})),N.a.createElement(X,{title:Object(z["formatMessage"])({id:"app.setting.themecolor"}),value:n,onChange:function(t){return e.changeSetting("primaryColor",t)}}),N.a.createElement(d["a"],null),N.a.createElement(Z,{title:Object(z["formatMessage"])({id:"app.setting.navigationmode"})},N.a.createElement(V,{list:[{key:"sidemenu",url:"https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg",title:Object(z["formatMessage"])({id:"app.setting.sidemenu"})},{key:"topmenu",url:"https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg",title:Object(z["formatMessage"])({id:"app.setting.topmenu"})}],value:o,onChange:function(t){return e.changeSetting("layout",t)}})),N.a.createElement(g["a"],{split:!1,dataSource:this.getLayoutSetting(),renderItem:this.renderLayoutSettingItem}),N.a.createElement(d["a"],null),N.a.createElement(Z,{title:Object(z["formatMessage"])({id:"app.setting.othersettings"})},N.a.createElement(g["a"].Item,{actions:[N.a.createElement(u["a"],{size:"small",checked:!!r,onChange:function(t){return e.changeSetting("colorWeak",t)}})]},Object(z["formatMessage"])({id:"app.setting.weakmode"}))),N.a.createElement(d["a"],null),N.a.createElement(F["CopyToClipboard"],{text:JSON.stringify(Object(B["a"])(t,["colorWeak"]),null,2),onCopy:function(){return s["a"].success(Object(z["formatMessage"])({id:"app.setting.copyinfo"}))}},N.a.createElement(l["a"],{block:!0,icon:"copy"},Object(z["formatMessage"])({id:"app.setting.copy"}))),N.a.createElement(c["a"],{type:"warning",className:L.a.productionHint,message:N.a.createElement("div",null,Object(z["formatMessage"])({id:"app.setting.production.hint"})," ",N.a.createElement("a",{href:"https://u.ant.design/pro-v2-default-settings",target:"_blank",rel:"noopener noreferrer"},"src/defaultSettings.js"))})))}}]),t}(S["PureComponent"]),o=r))||o);t["default"]=_}}]);
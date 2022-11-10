var L=Object.defineProperty;var R=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var U=(c,s,l)=>s in c?L(c,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[s]=l,A=(c,s)=>{for(var l in s||(s={}))q.call(s,l)&&U(c,l,s[l]);if(R)for(var l of R(s))z.call(s,l)&&U(c,l,s[l]);return c};var B=(c,s,l)=>new Promise((m,t)=>{var d=o=>{try{h(l.next(o))}catch(u){t(u)}},b=o=>{try{h(l.throw(o))}catch(u){t(u)}},h=o=>o.done?m(o.value):Promise.resolve(o.value).then(d,b);h((l=l.apply(c,s)).next())});import{_ as N,d as $,s as k,I as j,r as H,o as i,e as D,w as W,c as p,m as f,a as e,l as _,b as J,J as K,K as Q,L as X,M as C,g as v,j as G,x as E,D as Y,F as g,E as O,z as Z,T as F,C as w,y as V,B as T,p as ee,q as te,N as P,O as I,Q as se,R as ue,U as ne}from"./index.js";const le={key:0,id:"app-dialog"},ae={key:0,class:"app-dialog_bg"},oe={class:"app-dialog_header"},ie={class:"app-dialog_body"},de=$({__name:"index",props:{title:{type:String},bg:{type:Boolean,default:!0},width:{type:String}},emits:["change","update:modelValue","handleClose"],setup(c,{emit:s}){const l=k(!1),m=()=>{l.value=!1,s("update:modelValue",!1),s("handleClose")};return j(()=>{l.value=!0}),(t,d)=>{const b=H("icon-close");return i(),D(X,{name:"dialog1"},{default:W(()=>[l.value?(i(),p("div",le,[c.bg?(i(),p("div",ae)):f("",!0),e("div",{class:"app-dialog_container",style:Q({width:c.width})},[e("div",oe,[e("span",null,_(c.title),1),e("button",{class:"close",onClick:d[0]||(d[0]=h=>m())},[J(b)])]),e("div",ie,[K(t.$slots,"default",{},void 0,!0)])],4)])):f("",!0)]),_:3})}}});var ce=N(de,[["__scopeId","data-v-c956b020"]]);const re={class:"tab-content"},_e={class:"item-label"},pe=e("div",{class:"item-label_key"},[e("span",null,"\u540D\u79F0")],-1),ve={class:"item-label_value"},me={key:0,class:"item-label"},he=e("div",{class:"item-label_key"},[e("span",null,"\u578B\u53F7")],-1),Fe={class:"item-label_value"},be={class:"item-label"},fe=e("div",{class:"item-label_key"},[e("span",null,"\u8DEF\u5F84")],-1),ye={class:"item-label_value"},ke={class:"item-label"},Ce=e("div",{class:"item-label_key"},[e("span",null,"\u5BB9\u91CF")],-1),De={class:"item-label_value"},$e={class:"item-label"},Be=e("div",{class:"item-label_key"},[e("span",null,"\u7C7B\u578B")],-1),Ee={class:"item-label_value"},ge={key:1,class:"item-label"},xe=e("div",{class:"item-label_key"},[e("span",null,"\u7CFB\u7EDF\u5206\u533A")],-1),Ae=e("div",{class:"item-label_value"},[e("span",null,"true")],-1),Pe=[xe,Ae],Ie={key:2,class:"item-label"},Se=e("div",{class:"item-label_key"},[e("span",null,"docker\u5206\u533A")],-1),Me=e("div",{class:"item-label_value"},[e("span",null,"true")],-1),Ve=[Se,Me],we={key:3,class:"item-label"},Te=e("div",{class:"item-label_key"},[e("span",null,"\u63A5\u5165\u65B9\u5F0F")],-1),Ne=e("div",{class:"item-label_value"},[e("span",null,"\u5916\u63A5")],-1),Oe=[Te,Ne],Re={class:"item-label"},Ue=e("div",{class:"item-label_key"},[e("span",null,"\u5206\u533A\u6570\u91CF")],-1),We={class:"item-label_value"},Le={key:4,class:"item-label"},qe=e("div",{class:"item-label_key"},[e("span",null,"error")],-1),ze={class:"item-label_value"},je=$({__name:"main",setup(c){const s=C("disk");return(l,m)=>{var t;return i(),p("section",re,[e("div",_e,[pe,e("div",ve,[e("span",null,_(v(s).name),1)])]),v(s).venderModel?(i(),p("div",me,[he,e("div",Fe,[e("span",null,_(v(s).venderModel),1)])])):f("",!0),e("div",be,[fe,e("div",ye,[e("span",null,_(v(s).path),1)])]),e("div",ke,[Ce,e("div",De,[e("span",null,_(v(s).used)+"/"+_(v(s).total),1)])]),e("div",$e,[Be,e("div",Ee,[e("span",null,_(v(s).partyLabelType),1)])]),v(s).isSystemRoot?(i(),p("div",ge,Pe)):f("",!0),v(s).isDockerRoot?(i(),p("div",Ie,Ve)):f("",!0),v(s).isExternalDisk?(i(),p("div",we,Oe)):f("",!0),e("div",Re,[Ue,e("div",We,[e("span",null,_((t=v(s).childrens)==null?void 0:t.length),1)])]),v(s).errorInfo?(i(),p("div",Le,[qe,e("div",ze,[e("span",null,_(v(s).errorInfo),1)])])):f("",!0)])}}}),He={class:"tab-content"},Je=e("div",{class:"label-name"},[e("span",null,"\u76EE\u6807\u5206\u533A")],-1),Ke={class:"label-value"},Qe=e("option",{value:-1},"\u9009\u62E9\u8981\u6302\u8F7D\u7684\u5206\u533A",-1),Xe=["value"],Ge=e("div",{class:"label-name"},[e("span",null,"\u6302\u8F7D\u70B9")],-1),Ye={class:"label-value"},Ze={class:"label-btns"},et=["disabled"],tt=$({__name:"mount",props:{mountIndex:{type:Number,required:!0}},setup(c){const s=c,l=C("disk"),m=C("disabled"),t=G({index:s.mountIndex!=null?s.mountIndex:-1,mountPoint:"",item:{mountPoint:"",path:"",name:"",filesystem:"",total:"",used:"",usage:0,uuid:"",isReadOnly:!1,isSystemRoot:!1,sizeInt:""}}),d=()=>{var o;const h=l.value;t.index==-1&&(t.item=null,t.mountPoint=""),h.childrens&&(t.item=h.childrens[t.index],t.mountPoint="/mnt/data_"+((o=t==null?void 0:t.item)==null?void 0:o.name))},b=()=>B(this,null,function*(){const h=l.value,o=t.item;if(o==null||t.index==-1){F.Message("\u83B7\u53D6\u4E0D\u5230\u8981\u6302\u8F7D\u7684\u5206\u533A");return}if(o.path==null||o.path==""){F.Message("\u83B7\u53D6\u4E0D\u5230\u6302\u8F7D\u7684\u5206\u533A\u8DEF\u5F84");return}if(o.uuid==null||o.uuid==""){F.Message("\u83B7\u53D6\u4E0D\u5230\u6302\u8F7D\u7684\u5206\u533AID");return}if(t.mountPoint==""){F.Message("\u6302\u8F7D\u70B9\u4E0D\u80FD\u4E3A\u7A7A");return}const u=F.Loading("\u6302\u8F7D\u4E2D...");try{const a=yield w.Nas.Disk.Partition.Mount.POST({path:o.path,uuid:o.uuid,mountPoint:t.mountPoint});if(a!=null&&a.data){const{result:n,error:r}=a==null?void 0:a.data;if(r)throw r;n&&(h&&h.childrens&&h.childrens[t.index]&&(h.childrens[t.index].mountPoint=n.mountPoint),F.Success("\u6302\u8F7D\u6210\u529F,\u8BF7\u5173\u95ED\u7A97\u53E3"))}}catch(a){F.Error(`${a}`)}finally{u.Close(),m.value=!1}});return t.index>=0&&d(),(h,o)=>(i(),p("section",He,[Je,e("div",Ke,[E(e("select",{"onUpdate:modelValue":o[0]||(o[0]=u=>t.index=u),onChange:d},[Qe,(i(!0),p(g,null,O(v(l).childrens,(u,a)=>{var n;return i(),p(g,null,[u.mountPoint?f("",!0):(i(),p("option",{key:0,value:a},_(u.path)+"\uFF08"+_(u.total)+"\uFF0C"+_((n=u==null?void 0:u.filesystem)==null?void 0:n.toUpperCase())+"\uFF09 ",9,Xe))],64)}),256))],544),[[Y,t.index]])]),t.index!=-1?(i(),p(g,{key:0},[Ge,e("div",Ye,[E(e("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=u=>t.mountPoint=u)},null,512),[[Z,t.mountPoint,void 0,{trim:!0}]])]),e("div",Ze,[e("button",{class:"mount",disabled:v(m),onClick:o[2]||(o[2]=u=>b())},"\u6302\u8F7D",8,et)])],64)):f("",!0)]))}}),st={class:"tab-content"},ut=e("colgroup",null,[e("col"),e("col"),e("col"),e("col"),e("col")],-1),nt=e("thead",null,[e("tr",null,[e("th",null," \u540D\u79F0 "),e("th",null," \u8DEF\u5F84 "),e("th",null," \u5BB9\u91CF "),e("th",null,"\u683C\u5F0F"),e("th",null," \u72B6\u6001 "),e("th",null," \u6302\u8F7D\u70B9 ")])],-1),lt={key:0},at={key:1,class:"warning"},ot={key:0},it=["onClick"],dt=$({__name:"partition",setup(c){const s=C("disk"),l=C("onMount");return(m,t)=>(i(),p("section",st,[e("table",null,[ut,nt,e("tbody",null,[(i(!0),p(g,null,O(v(s).childrens,(d,b)=>(i(),p("tr",null,[e("th",null,[e("span",null,_(d.name),1)]),e("th",null,_(d.path),1),e("th",null,[e("span",null,_(d.used||0)+"/"+_(d.total||0),1)]),e("th",null,[d.filesystem=="ext4"?(i(),p("span",lt,_(d.filesystem),1)):(i(),p("span",at,_(d.filesystem),1))]),e("th",null,[e("span",null,_(d.isReadOnly?"\u53EA\u8BFB":"\u8BFB\u5199"),1)]),e("th",null,[d.mountPoint?(i(),p("span",ot,[e("span",null,_(d.mountPoint),1)])):(i(),p("a",{key:1,onClick:h=>v(l)(b)}," \u53BB\u6302\u8F7D ",8,it))])]))),256))])])]))}});const S=c=>(ee("data-v-21cbf624"),c=c(),te(),c),ct={class:"tab-content"},rt=S(()=>e("div",{class:"label-name"},[e("span",null,"\u8981\u683C\u5F0F\u5316\u7684\u76EE\u6807")],-1)),_t={class:"label-value2"},pt={class:"disk-item"},vt=S(()=>e("em",{class:"disk_main"},"\u5168\u76D8",-1)),mt={class:"disk-item"},ht=["value"],Ft=S(()=>e("em",null,"\u5206\u533A",-1)),bt=S(()=>e("div",{class:"label-name"},[e("span",null,"\u683C\u5F0F\u5316\u4E3A")],-1)),ft={class:"label-value2"},yt={class:"disk-item"},kt=T(" EXT4 "),Ct={class:"label-btns"},Dt=["disabled"],$t=$({__name:"foramt",setup(c){const s=C("disk"),l=C("updateDisk"),m=C("disabled"),t=k(-1),d=k("ext4"),b=()=>B(this,null,function*(){const u=A({},s.value),a=t.value;if(a==-1){if(!confirm(`\u8B66\u544A\uFF1A\u8BE5\u64CD\u4F5C\u5C06\u521D\u59CB\u5316 ${u.venderModel} \u786C\u76D8\u5E76\u521B\u5EFA\u4E00\u4E2A\u5206\u533A\uFF0C\u8BF7\u4F60\u8C28\u614E\u64CD\u4F5C`)||!confirm("\u662F\u5426\u786E\u5B9A\u521D\u59CB\u5316?"))return;h(u);return}if(u.childrens){const n=u.childrens[a],r=n.mountPoint||n.path;if(!confirm(`\u8B66\u544A\uFF1A\u683C\u5F0F\u5316\u4F1A\u6E05\u7A7A ${r} \u5206\u533A\u6570\u636E\uFF0C\u8BF7\u4F60\u8C28\u614E\u64CD\u4F5C`)||!confirm(`\u662F\u5426\u786E\u5B9A\u683C\u5F0F\u5316 ${r}?`))return;o(n,a);return}}),h=u=>B(this,null,function*(){if(m.value=!0,u.name==null||u.path==""){F.Warning("\u83B7\u53D6\u4E0D\u5230\u8BBE\u5907\u540D\u79F0");return}if(u.path==null||u.path==""){F.Warning("\u83B7\u53D6\u4E0D\u5230\u8BBE\u5907\u8DEF\u5F84");return}m.value=!0;const a=F.Loading("\u521D\u59CB\u5316\u4E2D...");try{const n=yield w.Nas.Disk.Init.POST({name:u.name,path:u.path});if(n!=null&&n.data){const{result:r,error:y}=n==null?void 0:n.data;if(y&&F.Warning(y),r){if(r.errorInfo){F.Warning(r.errorInfo);return}F.Success("\u521D\u59CB\u5316\u6210\u529F"),l(r)}}}catch(n){F.Error(n)}finally{a.Close(),m.value=!1}}),o=(u,a)=>B(this,null,function*(){if(m.value=!0,u.path==null||u.path==""){F.Warning("\u83B7\u53D6\u4E0D\u5230\u5206\u533A\u8DEF\u5F84");return}m.value=!0;const n=F.Loading("\u683C\u5F0F\u5316\u4E2D...");try{const r=yield w.Nas.Disk.Partition.Format.POST({path:u.path,uuid:u.uuid,mountPoint:u.mountPoint});if(r!=null&&r.data){const{result:y,error:x}=r==null?void 0:r.data;if(x&&F.Warning(x),y){F.Success("\u683C\u5F0F\u5316\u6210\u529F");const M=A({},s.value);M.childrens&&(M.childrens[a]=y),l(M)}}}catch(r){F.Error(r)}finally{n.Close(),m.value=!1}});return(u,a)=>(i(),p("section",ct,[rt,e("div",_t,[e("label",pt,[E(e("input",{type:"radio",value:-1,"onUpdate:modelValue":a[0]||(a[0]=n=>t.value=n)},null,512),[[V,t.value]]),vt,T(_(v(s).path)+"\uFF08"+_(v(s).total)+"\uFF09 ",1)]),(i(!0),p(g,null,O(v(s).childrens,(n,r)=>{var y;return i(),p("label",mt,[E(e("input",{type:"radio",value:r,"onUpdate:modelValue":a[1]||(a[1]=x=>t.value=x)},null,8,ht),[[V,t.value]]),Ft,T(_(n.path)+"\uFF08"+_(n.total)+"\uFF0C"+_((y=n==null?void 0:n.filesystem)==null?void 0:y.toUpperCase())+"\uFF09 ",1)])}),256))]),bt,e("div",ft,[e("label",yt,[E(e("input",{type:"radio",value:"ext4","onUpdate:modelValue":a[2]||(a[2]=n=>d.value=n)},null,512),[[V,d.value]]),kt])]),e("div",Ct,[e("button",{class:"mount",disabled:v(m),onClick:a[3]||(a[3]=n=>b())},"\u683C\u5F0F\u5316",8,Dt)])]))}});var Bt=N($t,[["__scopeId","data-v-21cbf624"]]);const Et={class:"tabls"},gt=["disabled"],xt=["disabled"],At=["disabled"],Pt=["disabled"],It=$({__name:"index",props:{disk:{type:Object,required:!0}},setup(c){const s=c,l=se(),m=()=>{o.value&&location.reload(),l&&l.appContext.config.globalProperties.$close()},t=k("main"),d=k(!1),b=k(s.disk),h=k(null),o=k(!1);P("disk",b),P("updateDisk",a=>{b.value=a,o.value=!0}),P("disabled",d),P("onMount",a=>{h.value=a,t.value="mount"});const u=a=>{a=="mount"&&(h.value=null),t.value=a};return(a,n)=>(i(),D(ce,{onHandleClose:m,title:"Storage Manager",width:"920px"},{default:W(()=>[e("ul",Et,[e("button",{class:I({on:t.value=="main"}),onClick:n[0]||(n[0]=r=>u("main")),disabled:d.value},"\u6458\u8981",10,gt),e("button",{class:I({on:t.value=="partition"}),onClick:n[1]||(n[1]=r=>u("partition")),disabled:d.value},"\u5206\u533A",10,xt),e("button",{class:I({on:t.value=="mount"}),onClick:n[2]||(n[2]=r=>u("mount")),disabled:d.value},"\u6302\u8F7D",10,At),e("button",{class:I({on:t.value=="foramt"}),onClick:n[3]||(n[3]=r=>u("foramt")),disabled:d.value},"\u683C\u5F0F\u5316",10,Pt)]),t.value=="main"?(i(),D(je,{key:0})):t.value=="partition"?(i(),D(dt,{key:1})):t.value=="mount"?(i(),D(tt,{key:2,mountIndex:h.value},null,8,["mountIndex"])):t.value=="foramt"?(i(),D(Bt,{key:3})):f("",!0)]),_:1}))}});var St=N(It,[["__scopeId","data-v-0d522196"]]);const wt=c=>{const s=document.createElement("div");document.body.appendChild(s);const l=ue(St,A({},c));l.config.globalProperties.$close=()=>{m()},l.use(ne);const m=()=>{l.unmount(),s.remove()};l.mount(s)};export{wt as O,ce as d};
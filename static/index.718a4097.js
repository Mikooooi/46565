import{a as e,R as o,i as a,b as l,e as r,z as s,w as n,Y as d,g as i,D as t,G as m,y as c,o as u,u as g,Z as p,$ as f,a0 as h,p as x,C as _,n as w,_ as b}from"./index.9f235613.js";import{_ as F}from"./index.vue_vue_type_script_setup_true_lang.211db38d.js";const v=""+new URL("logo-text-2.f252b556.png",import.meta.url).href,y={class:"login-container"},V={class:"login-card"},C=(e=>(t("data-v-d119bcf9"),e=e(),m(),e))((()=>s("div",{class:"title"},[s("img",{src:v})],-1))),U={class:"content"},z={class:"show-code"},k=["src"],L=_(" 登 录 "),R=b(e({__name:"index",setup(e){const t=w(),m=o(),_=a({loading:!1,codeUrl:"",loginForm:{username:"admin",password:"12345678",code:"abcd"},loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},handleLogin:()=>{m.value.validate((e=>{if(!e)return!1;_.loading=!0,c().login({username:_.loginForm.username,password:_.loginForm.password}).then((()=>{_.loading=!1,t.push({path:"/"}).catch((e=>{console.warn(e)}))})).catch((()=>{_.loading=!1,_.createCode(),_.loginForm.password=""}))}))},createCode:()=>{_.loginForm.code="",_.codeUrl="/api/v1/login/code?"+1e3*Math.random()}});return(e,o)=>{const a=i("el-input"),t=i("el-form-item"),c=i("el-button"),w=i("el-form");return u(),l("div",y,[r(F,{class:"theme-switch"}),s("div",V,[C,s("div",U,[r(w,{ref_key:"loginFormDom",ref:m,model:_.loginForm,rules:_.loginRules,onKeyup:d(_.handleLogin,["enter"])},{default:n((()=>[r(t,{prop:"username"},{default:n((()=>[r(a,{modelValue:_.loginForm.username,"onUpdate:modelValue":o[0]||(o[0]=e=>_.loginForm.username=e),placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":g(p),size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),r(t,{prop:"password"},{default:n((()=>[r(a,{modelValue:_.loginForm.password,"onUpdate:modelValue":o[1]||(o[1]=e=>_.loginForm.password=e),placeholder:"密码",type:"password",tabindex:"2","prefix-icon":g(f),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),r(t,{prop:"code"},{default:n((()=>[r(a,{modelValue:_.loginForm.code,"onUpdate:modelValue":o[2]||(o[2]=e=>_.loginForm.code=e),placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":g(h),maxlength:"4",size:"large"},null,8,["modelValue","prefix-icon"]),s("span",z,[s("img",{src:_.codeUrl,onClick:o[3]||(o[3]=(...e)=>_.createCode&&_.createCode(...e))},null,8,k)])])),_:1}),r(c,{loading:_.loading,type:"primary",size:"large",onClick:x(_.handleLogin,["prevent"])},{default:n((()=>[L])),_:1},8,["loading","onClick"])])),_:1},8,["model","rules","onKeyup"])])])])}}}),[["__scopeId","data-v-d119bcf9"]]);export{R as default};

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(e,t,o){"use strict";o.r(t);o("b0c0");var c=o("7a23"),i={id:"settings"},n={class:""},r={class:"col1"},a=Object(c["createVNode"])("h3",null,"Settings",-1),l=Object(c["createVNode"])("p",null,"Update your profile",-1),s={key:0,class:"success"},d=Object(c["createVNode"])("label",{for:"name"},"Name",-1),u=Object(c["createVNode"])("label",{for:"phone"},"Phone",-1),h=Object(c["createVNode"])("label",{for:"title"},"Job Title",-1);function p(e,t,o,p,b,m){var f=Object(c["resolveComponent"])("Sidebar");return Object(c["openBlock"])(),Object(c["createBlock"])("section",i,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])(f)]),Object(c["createVNode"])("div",r,[a,l,Object(c["createVNode"])(c["Transition"],{name:"fade"},{default:Object(c["withCtx"])((function(){return[b.showSuccess?(Object(c["openBlock"])(),Object(c["createBlock"])("p",s,"Profile updated")):Object(c["createCommentVNode"])("",!0)]})),_:1}),Object(c["createVNode"])("form",{onSubmit:t[5]||(t[5]=Object(c["withModifiers"])((function(){}),["prevent"]))},[d,Object(c["withDirectives"])(Object(c["createVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.name=e}),type:"text",placeholder:e.userProfile.name,id:"name"},null,8,["placeholder"]),[[c["vModelText"],b.name,void 0,{trim:!0}]]),u,Object(c["withDirectives"])(Object(c["createVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.name=e}),type:"number",placeholder:e.userProfile.phone,id:"phone"},null,8,["placeholder"]),[[c["vModelText"],b.name,void 0,{trim:!0}]]),h,Object(c["withDirectives"])(Object(c["createVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return b.title=e}),type:"text",placeholder:e.userProfile.title,id:"title"},null,8,["placeholder"]),[[c["vModelText"],b.title,void 0,{trim:!0}]]),Object(c["createVNode"])("button",{onClick:t[4]||(t[4]=function(e){return m.updateProfile()}),class:"button"},"Update Profile")],32)])])}var b=o("5530"),m=o("5502"),f=o("5ea5"),j={data:function(){return{Sidebar:f["a"],name:"",title:"",phone:"",showSuccess:!1}},computed:Object(b["a"])({},Object(m["b"])(["userProfile"])),methods:{updateProfile:function(){var e=this;this.$store.dispatch("updateProfile",{name:""!==this.name?this.name:this.user.name,title:""!==this.title?this.title:this.user.title,phone:""!==this.phone?this.phone:this.user.phone}),this.name="",this.title="",this.phone="",this.showSuccess=!0,setTimeout((function(){e.showSuccess=!1}),2e3)}}};j.render=p;t["default"]=j}}]);
//# sourceMappingURL=settings.9d9eb677.js.map
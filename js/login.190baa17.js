(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{a55b:function(e,t,o){"use strict";o.r(t);o("b0c0");var r=o("7a23"),c={id:"login"},n=Object(r["createVNode"])("div",{class:"col1"},[Object(r["createVNode"])("link",{rel:"icon",href:"<%= BASE_URL %>heart.png"}),Object(r["createVNode"])("h1",null,"Experimental Data-sharing Platform for Cardiomyopathies"),Object(r["createVNode"])("p",null," Welcome to the Platform Please Sign In Using your Credentials Or Create An Account Below ")],-1),i=Object(r["createVNode"])("h1",null,"Welcome Back",-1),a=Object(r["createVNode"])("label",{for:"email1"},"Email",-1),s=Object(r["createVNode"])("label",{for:"password1"},"Password",-1),l={class:"extras"},d=Object(r["createVNode"])("h1",null,"Get Started",-1),u=Object(r["createVNode"])("label",{for:"name"},"Name",-1),m=Object(r["createVNode"])("label",{for:"email2"},"Email",-1),p=Object(r["createVNode"])("label",{for:"password2"},"Password",-1),b=Object(r["createVNode"])("label",{for:"title"},"Title",-1),O=Object(r["createVNode"])("label",{for:"phone"},"Mobile Number",-1),j={class:"extras"};function h(e,t,o,h,g,w){var v=Object(r["resolveComponent"])("PasswordReset");return Object(r["openBlock"])(),Object(r["createBlock"])("div",c,[g.showPasswordReset?(Object(r["openBlock"])(),Object(r["createBlock"])(v,{key:0,onClose:t[1]||(t[1]=function(e){return w.togglePasswordReset()})})):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("section",null,[n,Object(r["createVNode"])("div",{class:[{"signup-form":!g.showLoginForm},"col2"]},[g.showLoginForm?(Object(r["openBlock"])(),Object(r["createBlock"])("form",{key:0,onSubmit:t[7]||(t[7]=Object(r["withModifiers"])((function(){}),["prevent"]))},[i,Object(r["createVNode"])("div",null,[a,Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return g.loginForm.email=e}),type:"text",placeholder:"you@email.com",id:"email1"},null,512),[[r["vModelText"],g.loginForm.email,void 0,{trim:!0}]])]),Object(r["createVNode"])("div",null,[s,Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.loginForm.password=e}),type:"password",placeholder:"******",id:"password1"},null,512),[[r["vModelText"],g.loginForm.password,void 0,{trim:!0}]])]),Object(r["createVNode"])("button",{onClick:t[4]||(t[4]=function(e){return w.login()}),class:"button"},"Log In"),Object(r["createVNode"])("div",l,[Object(r["createVNode"])("a",{onClick:t[5]||(t[5]=function(e){return w.togglePasswordReset()})},"Forgot Password"),Object(r["createVNode"])("a",{onClick:t[6]||(t[6]=function(e){return w.toggleForm()})},"Create an Account")])],32)):(Object(r["openBlock"])(),Object(r["createBlock"])("form",{key:1,onSubmit:t[15]||(t[15]=Object(r["withModifiers"])((function(){}),["prevent"]))},[d,Object(r["createVNode"])("div",null,[u,Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return g.signupForm.name=e}),type:"text",placeholder:"Eg.Henry Jackson",id:"name"},null,512),[[r["vModelText"],g.signupForm.name,void 0,{trim:!0}]])]),Object(r["createVNode"])("div",null,[m,Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[9]||(t[9]=function(e){return g.signupForm.email=e}),type:"text",placeholder:"youremailgoeshere@email.com",id:"email2"},null,512),[[r["vModelText"],g.signupForm.email,void 0,{trim:!0}]])]),Object(r["createVNode"])("div",null,[p,Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[10]||(t[10]=function(e){return g.signupForm.password=e}),type:"password",placeholder:"min 6 characters",id:"password2"},null,512),[[r["vModelText"],g.signupForm.password,void 0,{trim:!0}]])]),Object(r["createVNode"])("div",null,[b,Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[11]||(t[11]=function(e){return g.signupForm.title=e}),type:"Text",placeholder:"eg.MMU",id:"title"},null,512),[[r["vModelText"],g.signupForm.title,void 0,{trim:!0}]])]),Object(r["createVNode"])("div",null,[O,Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[12]||(t[12]=function(e){return g.signupForm.phone=e}),type:"Number",placeholder:"eg.07937333333",id:"phone"},null,512),[[r["vModelText"],g.signupForm.phone,void 0,{trim:!0}]])]),Object(r["createVNode"])("button",{onClick:t[13]||(t[13]=function(e){return w.signup()}),class:"button"},"Sign Up"),Object(r["createVNode"])("div",j,[Object(r["createVNode"])("a",{onClick:t[14]||(t[14]=function(e){return w.toggleForm()})},"Back to Log In")])],32))],2)])])}var g={class:"modal"},w={class:"modal-content"},v=Object(r["createVNode"])("h3",null,"Reset Password",-1),V={key:0},f=Object(r["createVNode"])("p",null,"Enter your email to reset your password",-1),N={key:0,class:"error"},k={key:1};function F(e,t,o,c,n,i){return Object(r["openBlock"])(),Object(r["createBlock"])("div",g,[Object(r["createVNode"])("div",w,[Object(r["createVNode"])("div",{onClick:t[1]||(t[1]=function(t){return e.$emit("close")}),class:"close"},"close"),v,n.showSuccess?(Object(r["openBlock"])(),Object(r["createBlock"])("p",k,"Success! Check your email for a reset link.")):(Object(r["openBlock"])(),Object(r["createBlock"])("div",V,[f,Object(r["createVNode"])("form",{onSubmit:t[3]||(t[3]=Object(r["withModifiers"])((function(){}),["prevent"]))},[Object(r["withDirectives"])(Object(r["createVNode"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.email=e}),type:"email",placeholder:"you@email.com"},null,512),[[r["vModelText"],n.email,void 0,{trim:!0}]])],32),""!==n.errorMsg?(Object(r["openBlock"])(),Object(r["createBlock"])("p",N,Object(r["toDisplayString"])(n.errorMsg),1)):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("button",{onClick:t[4]||(t[4]=function(e){return i.resetPassword()}),class:"button"},"Reset")]))])])}o("96cf");var y=o("1da1"),B=o("0242"),M={data:function(){return{email:"",showSuccess:!1,errorMsg:""}},methods:{resetPassword:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.errorMsg="",t.prev=1,t.next=4,B["a"].sendPasswordResetEmail(e.email);case 4:e.showSuccess=!0,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),e.errorMsg=t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}};M.render=F;var P=M,x={components:{PasswordReset:P},data:function(){return{loginForm:{email:"",password:""},signupForm:{email:"",password:"",title:"",name:"",phone:""},showLoginForm:!0,showPasswordReset:!1}},methods:{toggleForm:function(){this.showLoginForm=!this.showLoginForm},togglePasswordReset:function(){this.showPasswordReset=!this.showPasswordReset},login:function(){this.$store.dispatch("login",{email:this.loginForm.email,password:this.loginForm.password})},signup:function(){this.$store.dispatch("signup",{email:this.signupForm.email,password:this.signupForm.password,title:this.signupForm.title,name:this.signupForm.name,phone:this.signupForm.phone})}}};x.render=h;t["default"]=x}}]);
//# sourceMappingURL=login.190baa17.js.map
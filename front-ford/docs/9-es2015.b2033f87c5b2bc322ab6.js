(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"99Un":function(e,t,o){"use strict";o.r(t),o.d(t,"HomeModule",(function(){return d}));var i=o("ofXK"),n=o("tyNb"),r=o("quSY"),s=o("AytR"),l=o("fXoL"),a=o("vrOB"),p=o("wBT/");const c=[{path:"",component:(()=>{class e{constructor(e,t){this.router=e,this.authService=t,this.profileActions=[],this.profile={avatar:"",title:""},this.subs=new r.a,this.logo=`../../../${s.a.imagesPath}/img/logo/ford.png`}ngOnInit(){this.setHomeInfo()}ngOnDestroy(){this.subs.unsubscribe()}logout(){this.authService.logout(),this.router.navigate(["login"])}setHomeInfo(){this.user=this.authService.getAuthenticatedUser(),this.profileActions.push({label:"Logout",action:()=>this.logout()}),this.menu=this.getMenus(),this.profile.title=this.user.name}getMenus(){return[{label:"Home",shortLabel:"Home",link:"/front-ford/home",icon:"po-icon-user"},{label:"Dashboard",shortLabel:"Dashboard",link:"/front-ford/acoes",icon:"po-icon po-icon-parameters"}]}}return e.\u0275fac=function(t){return new(t||e)(l.Kb(n.d),l.Kb(a.a))},e.\u0275cmp=l.Eb({type:e,selectors:[["app-home"]],decls:4,vars:6,consts:[[1,"po-wrapper"],["p-notification-number","0",3,"p-title","p-show-notification","p-profile","p-profile-actions"],["p-collapsed","true",3,"p-menus","p-logo"]],template:function(e,t){1&e&&(l.Qb(0,"div",0),l.Lb(1,"po-toolbar",1),l.Lb(2,"po-menu",2),l.Lb(3,"router-outlet"),l.Pb()),2&e&&(l.xb(1),l.gc("p-title",t.title)("p-show-notification",!1)("p-profile",t.profile)("p-profile-actions",t.profileActions),l.xb(1),l.gc("p-menus",t.menu)("p-logo",t.logo))},directives:[p.Z,p.E,n.h],styles:[".po-menu-item-selected{border-left:3px solid #144067!important}.po-menu-item-selected:hover{border-left:3px solid #3a96cb!important}"],encapsulation:2}),e})(),children:[{path:"acoes",loadChildren:()=>o.e(7).then(o.bind(null,"/2RN")).then(e=>e.DashboardModule)},{path:"home",loadChildren:()=>o.e(8).then(o.bind(null,"ry1Y")).then(e=>e.HomePageModule)},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",redirectTo:"home"}]}];let u=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},imports:[[n.g.forChild(c)],n.g]}),e})();var h=o("PCNd");let d=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},imports:[[i.c,u,h.a]]}),e})()}}]);
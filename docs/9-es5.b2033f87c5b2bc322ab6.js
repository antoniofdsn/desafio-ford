!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"99Un":function(t,n,i){"use strict";i.r(n),i.d(n,"HomeModule",(function(){return y}));var r,u,a,s=i("ofXK"),l=i("tyNb"),c=i("quSY"),p=i("AytR"),f=i("fXoL"),h=i("vrOB"),b=i("wBT/"),d=[{path:"",component:(r=function(){function t(o,n){e(this,t),this.router=o,this.authService=n,this.profileActions=[],this.profile={avatar:"",title:""},this.subs=new c.a,this.logo="../../../".concat(p.a.imagesPath,"/img/logo/ford.png")}return o(t,[{key:"ngOnInit",value:function(){this.setHomeInfo()}},{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}},{key:"logout",value:function(){this.authService.logout(),this.router.navigate(["login"])}},{key:"setHomeInfo",value:function(){var e=this;this.user=this.authService.getAuthenticatedUser(),this.profileActions.push({label:"Logout",action:function(){return e.logout()}}),this.menu=this.getMenus(),this.profile.title=this.user.name}},{key:"getMenus",value:function(){return[{label:"Home",shortLabel:"Home",link:"/front-ford/home",icon:"po-icon-user"},{label:"Dashboard",shortLabel:"Dashboard",link:"/front-ford/acoes",icon:"po-icon po-icon-parameters"}]}}]),t}(),r.\u0275fac=function(e){return new(e||r)(f.Kb(l.d),f.Kb(h.a))},r.\u0275cmp=f.Eb({type:r,selectors:[["app-home"]],decls:4,vars:6,consts:[[1,"po-wrapper"],["p-notification-number","0",3,"p-title","p-show-notification","p-profile","p-profile-actions"],["p-collapsed","true",3,"p-menus","p-logo"]],template:function(e,t){1&e&&(f.Qb(0,"div",0),f.Lb(1,"po-toolbar",1),f.Lb(2,"po-menu",2),f.Lb(3,"router-outlet"),f.Pb()),2&e&&(f.xb(1),f.gc("p-title",t.title)("p-show-notification",!1)("p-profile",t.profile)("p-profile-actions",t.profileActions),f.xb(1),f.gc("p-menus",t.menu)("p-logo",t.logo))},directives:[b.Z,b.E,l.h],styles:[".po-menu-item-selected{border-left:3px solid #144067!important}.po-menu-item-selected:hover{border-left:3px solid #3a96cb!important}"],encapsulation:2}),r),children:[{path:"acoes",loadChildren:function(){return i.e(7).then(i.bind(null,"/2RN")).then((function(e){return e.DashboardModule}))}},{path:"home",loadChildren:function(){return i.e(8).then(i.bind(null,"ry1Y")).then((function(e){return e.HomePageModule}))}},{path:"",redirectTo:"home",pathMatch:"full"},{path:"**",redirectTo:"home"}]}],m=((u=o((function t(){e(this,t)}))).\u0275mod=f.Ib({type:u}),u.\u0275inj=f.Hb({factory:function(e){return new(e||u)},imports:[[l.g.forChild(d)],l.g]}),u),g=i("PCNd"),y=((a=o((function t(){e(this,t)}))).\u0275mod=f.Ib({type:a}),a.\u0275inj=f.Hb({factory:function(e){return new(e||a)},imports:[[s.c,m,g.a]]}),a)}}])}();
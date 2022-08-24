!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/2RN":function(t,n,c){"use strict";c.r(n),c.d(n,"DashboardModule",(function(){return k}));var a=c("ofXK"),o=c("tyNb"),r=c("3Pt+"),s=c("VRyK"),l=c("pLZG"),b=c("/uUt"),d=c("eIep"),u=c("lJxs"),h=c("fXoL"),p=c("tk/3");function v(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var n=t.length;if(0===n)throw new Error("list of properties cannot be empty.");return function(e){return Object(u.a)(function(e,t){return function(i){for(var n=i,c=0;c<t;c++){var a=n[e[c]];if(void 0===a)return;n=a}return n}}(t,n))(e)}}var f,g=c("AytR").a.api,m=((f=function(){function t(i){e(this,t),this.httpClient=i}return i(t,[{key:"getVehicles",value:function(){return this.httpClient.get(g+"/vehicle").pipe(v("vehicles"))}},{key:"getVehiclesModelData",value:function(){return this.httpClient.get(g+"/vehicle").pipe(v("vehicleData"))}},{key:"getVehiclesData",value:function(e){var t=e?(new p.f).append("valor",e):void 0;return this.httpClient.get(g+"/vehicleData",{params:t}).pipe(v("vehicleData"))}}]),t}()).\u0275fac=function(e){return new(e||f)(h.Ub(p.b))},f.\u0275prov=h.Gb({token:f,factory:f.\u0275fac,providedIn:"root"}),f),P=c("wBT/");function y(e,t){if(1&e&&(h.Qb(0,"option",21),h.Ac(1),h.Pb()),2&e){var i=t.index,n=h.Zb(2);h.gc("value",n.vehicles[i].id),h.xb(1),h.Cc(" ",n.vehicles[i].vehicle," ")}}function w(e,t){if(1&e&&(h.Qb(0,"div",22),h.Lb(1,"po-table",23),h.Pb()),2&e){var i=h.Zb(2);h.xb(1),h.gc("p-columns",i.columns)("p-items",i.items)("p-literals",i.customLiterals)}}function Q(e,t){if(1&e){var i=h.Rb();h.Qb(0,"div",2),h.Qb(1,"div",3),h.Qb(2,"div",4),h.Qb(3,"div",5),h.Qb(4,"div",6),h.Ac(5,"Ve\xedculo"),h.Pb(),h.Qb(6,"div",7),h.Qb(7,"select",8),h.Xb("change",(function(e){h.rc(i);var t=h.Zb();return t.selectVehicle(e.target.value),t.setCardValues(e.target.value),t.setVehicleData(e.target.value)})),h.Qb(8,"option",9),h.Ac(9,"Selecione um ve\xedculo"),h.Pb(),h.yc(10,y,2,2,"option",10),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(11,"div",4),h.Qb(12,"div",11),h.Qb(13,"div",6),h.Ac(14,"Total de vendas"),h.Pb(),h.Qb(15,"div",12),h.Qb(16,"h5",13),h.Ac(17),h.Pb(),h.Qb(18,"p",14),h.Ac(19,"Unid."),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(20,"div",4),h.Qb(21,"div",11),h.Qb(22,"div",6),h.Ac(23,"Conectados"),h.Pb(),h.Qb(24,"div",12),h.Qb(25,"h5",13),h.Ac(26),h.Pb(),h.Qb(27,"p",14),h.Ac(28,"Unid."),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(29,"div",4),h.Qb(30,"div",11),h.Qb(31,"div",6),h.Ac(32,"Update Software"),h.Pb(),h.Qb(33,"div",12),h.Qb(34,"h5",13),h.Ac(35),h.Pb(),h.Qb(36,"p",14),h.Ac(37,"Unid."),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(38,"div",15),h.Lb(39,"img",16),h.Pb(),h.Qb(40,"div",17),h.Qb(41,"div",18),h.Lb(42,"po-input",19),h.Pb(),h.yc(43,w,2,3,"div",20),h.ac(44,"async"),h.Pb(),h.Pb()}if(2&e){var n=h.Zb();h.xb(10),h.gc("ngForOf",n.vehicles),h.xb(7),h.Bc(n.totalSales),h.xb(9),h.Bc(n.connected),h.xb(9),h.Bc(n.softwareUpdates),h.xb(4),h.gc("src",n.vehicleImg,h.tc),h.xb(3),h.gc("formControl",n.vinInput),h.xb(1),h.gc("ngIf",h.bc(44,7,n.vehiclesData))}}function C(e,t){1&e&&(h.Qb(0,"p",24),h.Ac(1,"Dados n\xe3o encontrados"),h.Pb())}var D,O,x,M=[{path:"",component:(D=function(){function t(i){var n=this;e(this,t),this.DashboardService=i,this.columns=[{property:"vin",label:"C\xf3digo-Vin"},{property:"odometer",label:"Od\xf4metro"},{property:"fuelLevel",label:"N\xedvel de combustivel"},{property:"status",label:"Status"},{property:"lat",label:"Latitude"},{property:"long",label:"Longitude"}],this.customLiterals={noData:"Selecione um ve\xedculo ou digite um c\xf3digo-vin v\xe1lido"},this.vinInput=new r.c,this.noVehiclesData$=[{}],this.filterByInput$=this.vinInput.valueChanges.pipe(Object(l.a)((function(e){return e.length>=17})),Object(b.a)(),Object(d.a)((function(e){return n.DashboardService.getVehiclesData(e)})),Object(u.a)((function(e){return n.items=e}))),this.vehiclesData=Object(s.a)(this.noVehiclesData$,this.filterByInput$)}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.vehiclesSubscripition=this.DashboardService.getVehicles().subscribe((function(t){e.vehicles=t})),this.vehiclesModelDataSubscripition=this.DashboardService.getVehiclesData().subscribe((function(t){e.vehiclesModelData=t}))}},{key:"ngOnDestroy",value:function(){this.vehiclesSubscripition.unsubscribe(),this.vehiclesModelDataSubscripition.unsubscribe()}},{key:"selectVehicle",value:function(e){this.vehicleName=this.vehicles[e-=1].vehicle,this.vehicleName=this.vehicleName.replace(/\s/g,""),this.vehicleName=this.vehicleName.toLowerCase(),this.vehicleImg="../../../assets/img/cars/".concat(this.vehicleName,".png")}},{key:"setCardValues",value:function(e){this.totalSales=this.vehicles[e-=1].volumetotal,this.connected=this.vehicles[e].connected,this.softwareUpdates=this.vehicles[e].softwareUpdates}},{key:"setVehicleData",value:function(e){this.items=[this.vehiclesModelData[e]]}}]),t}(),D.\u0275fac=function(e){return new(e||D)(h.Kb(m))},D.\u0275cmp=h.Eb({type:D,selectors:[["app-dashboard"]],decls:8,vars:2,consts:[["class","td-page-wrapper",4,"ngIf","ngIfElse"],["elseBlock",""],[1,"td-page-wrapper"],[1,"po-row"],[1,"po-md-3","value-card"],[1,"card","mb-3",2,"max-width","18rem"],[1,"card-header"],[1,"card-body","text-dark"],[1,"custom-select",3,"change"],["value","","disabled","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],[1,"card","bg-light","mb-3",2,"max-width","18rem"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"po-row","container-img"],["onerror","this.src = '../../../assets/img/logo/ford.png'",1,"img-fluid","d-sm",3,"src"],[1,"po-row","container-data"],[1,"po-xl-2","po-lg-2","po-md-4","po-sm-7"],["p-label","Buscar pelo C\xf3digo do Ve\xedculo:",3,"formControl"],["class","po-row dy-table",4,"ngIf"],[3,"value"],[1,"po-row","dy-table"],[3,"p-columns","p-items","p-literals"],[1,"no-data"]],template:function(e,t){if(1&e&&(h.Qb(0,"po-page-default"),h.Qb(1,"header"),h.Qb(2,"h1"),h.Ac(3,"Dasboard FORD"),h.Pb(),h.Pb(),h.Qb(4,"body"),h.yc(5,Q,45,9,"div",0),h.Pb(),h.yc(6,C,2,0,"ng-template",null,1,h.zc),h.Pb()),2&e){var i=h.oc(7);h.xb(5),h.gc("ngIf",t.vehicles&&t.vehiclesModelData)("ngIfElse",i)}},directives:[P.K,a.o,r.l,r.n,a.n,P.z,r.h,r.d,P.V],pipes:[a.b],styles:["header[_ngcontent-%COMP%]{margin-bottom:50px}h1[_ngcontent-%COMP%]{color:#1075af}.container-img[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{display:flex;justify-content:center}.card-title[_ngcontent-%COMP%]{color:#3a96cb}img[_ngcontent-%COMP%]{width:40%;margin-top:25px}@media screen and (max-width:1024px){.value-card[_ngcontent-%COMP%]{width:50%}img[_ngcontent-%COMP%]{width:80%}.container-data[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{margin-top:20px}.dy-table[_ngcontent-%COMP%]{width:365px;display:inline-block}}.no-data[_ngcontent-%COMP%]{display:flex;color:red}.dy-table[_ngcontent-%COMP%], .no-data[_ngcontent-%COMP%]{justify-content:center}"]}),D)}],V=((O=i((function t(){e(this,t)}))).\u0275mod=h.Ib({type:O}),O.\u0275inj=h.Hb({factory:function(e){return new(e||O)},imports:[[o.g.forChild(M)],o.g]}),O),I=c("PCNd"),k=((x=i((function t(){e(this,t)}))).\u0275mod=h.Ib({type:x}),x.\u0275inj=h.Hb({factory:function(e){return new(e||x)},imports:[[a.c,V,I.a]]}),x)}}])}();
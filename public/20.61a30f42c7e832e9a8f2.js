(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/i+c":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("sE5F"),i=u("t/Na"),e=function(){function l(l,n){this.http=l,this.https=n,this.baseUrlUsuarios="usuarios/",this.headers=new t.d({"Content-Type":"application/json",token:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdGlnIiwiaWF0IjoxNTYxNjQxMjAxLCJleHAiOjE1NjE3Mjc2MDEsImlkVXN1YXJpbyI6MSwiaWRDbGllbnRlIjoxLCJ1c2VyIjoiR2FtYSIsInJvbCI6IkdhbWFzb2Z0IiwiY3JlYWRvUG9yIjoxLCJ1c2VyX2VtYWlsIjoiZ2FtYUBnYW1hLmNvbSIsImlkX3JvbCI6MX0.zV7bHZtkuwOA_UKTEZ5JWVrAYnye5ekWsNFNVUlOzrA"}),this.options=new t.g({headers:this.headers})}return l.prototype.getUsers=function(){return this.http.get("https://jsonplaceholder.typicode.com/users")},l.ngInjectableDef=o.S({factory:function(){return new l(o.W(i.c),o.W(t.e))},token:l,providedIn:"root"}),l}(),a=function(){function l(l,n){this.router=l,this.home=n,this.dataJson=[]}return l.prototype.ngOnInit=function(){},l.prototype.iniciar=function(){this.router.navigate(["/inicio"])},l.prototype.getData=function(){var l=this;this.home.getUsers().subscribe(function(n){return l.dataJson=n})},l}(),r=function(){return function(){}}(),b=u("dmMM"),c=u("pMnS"),s=u("oBZk"),p=u("ZZ/e"),d=u("Ip0R"),f=u("6jz6"),h=u("LmEr"),m=u("ZYCi"),g=o.nb({encapsulation:0,styles:[[".color1[_ngcontent-%COMP%]{background-color:#00f}.color2[_ngcontent-%COMP%]{background-color:teal}.avatar-size[_ngcontent-%COMP%]{height:200px;width:250px}.border-primary[_ngcontent-%COMP%]{border-color:#3b5998}"]],data:{}});function I(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,6,"ion-list",[],null,null,null,s.X,s.v)),o.ob(1,49152,null,0,p.N,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,4,"ion-item",[],null,null,null,s.V,s.q)),o.ob(3,49152,null,0,p.G,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,2,"ion-label",[],null,null,null,s.W,s.u)),o.ob(5,49152,null,0,p.M,[o.h,o.k],null,null),(l()(),o.Hb(6,0,["",""]))],null,function(l,n){l(n,6,0,n.context.$implicit.name)})}function k(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,3,"ion-header",[["no-border",""]],null,null,null,s.Q,s.o)),o.ob(1,49152,null,0,p.A,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,1,"ion-toolbar",[["color","facebook"]],null,null,null,s.db,s.B)),o.ob(3,49152,null,0,p.Ab,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,null,15,"ion-content",[["class","ion-padding"]],null,null,null,s.N,s.l)),o.ob(5,49152,null,0,p.t,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,13,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.pb(7,0,null,null,2,"ion-avatar",[["class","mx-auto my-5 border border-secondary avatar-size animated fadeIn fast"]],null,null,null,s.D,s.b)),o.ob(8,49152,null,0,p.e,[o.h,o.k],null,null),(l()(),o.pb(9,0,null,0,0,"img",[["src","../../../assets/img/carnal.jfif"]],null,null,null,null,null)),(l()(),o.pb(10,0,null,null,1,"h1",[["class","text-center animated fadeIn cls"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,["Realiza tu Pedido Aqu\xed !"])),(l()(),o.pb(12,0,null,null,5,"ion-button",[["class","custom-btn animated bounceIn "],["color","facebook"],["size","large"],["slot","icon-only"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.iniciar()&&o),o},s.G,s.e)),o.ob(13,49152,null,0,p.j,[o.h,o.k],{color:[0,"color"],size:[1,"size"]},null),(l()(),o.Hb(-1,0,[" Iniciar "])),(l()(),o.pb(15,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(16,0,null,0,1,"ion-icon",[["name","finger-print"]],null,null,null,s.R,s.p)),o.ob(17,49152,null,0,p.B,[o.h,o.k],{name:[0,"name"]},null),(l()(),o.gb(16777216,null,null,1,null,I)),o.ob(19,278528,null,0,d.j,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.pb(20,0,null,null,0,"img",[["class","custom-logo animated fadeIn "],["src","../../../assets/img/gamasoft.png"]],null,null,null,null,null)),(l()(),o.pb(21,0,null,null,1,"app-footer",[],null,null,null,f.c,f.b)),o.ob(22,114688,null,0,h.a,[],null,null)],function(l,n){var u=n.component;l(n,3,0,"facebook"),l(n,13,0,"facebook","large"),l(n,17,0,"finger-print"),l(n,19,0,u.dataJson),l(n,22,0)},null)}function x(l){return o.Jb(0,[(l()(),o.pb(0,0,null,null,1,"app-viewinicial",[],null,null,null,k,g)),o.ob(1,114688,null,0,a,[m.m,e],null,null)],function(l,n){l(n,1,0)},null)}var j=o.lb("app-viewinicial",a,x,{},{},[]),J=u("gIcY"),y=u("j1ZV");u.d(n,"ViewinicialPageModuleNgFactory",function(){return v});var v=o.mb(r,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[b.a,c.a,j,f.a]],[3,o.j],o.x]),o.xb(4608,d.m,d.l,[o.u,[2,d.t]]),o.xb(4608,p.b,p.b,[o.z,o.g]),o.xb(4608,p.Eb,p.Eb,[p.b,o.j,o.q]),o.xb(4608,p.Ib,p.Ib,[p.b,o.j,o.q]),o.xb(4608,J.m,J.m,[]),o.xb(1073742336,d.b,d.b,[]),o.xb(1073742336,p.Cb,p.Cb,[]),o.xb(1073742336,y.a,y.a,[]),o.xb(1073742336,J.k,J.k,[]),o.xb(1073742336,J.d,J.d,[]),o.xb(1073742336,m.o,m.o,[[2,m.u],[2,m.m]]),o.xb(1073742336,r,r,[]),o.xb(1024,m.k,function(){return[[{path:"",component:a}]]},[])])})}}]);
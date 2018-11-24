webpackJsonp([1],{142:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-title",{staticClass:"blue darken-1"},[a("h1",{staticClass:"white--text text-lg-center"},[e._v("Today's Review")])]),e._v(" "),e.editing&&!e.empty?a("v-card-text",[a("v-container",{attrs:{"grid-list-sm":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Title"},model:{value:e.myGrammar[0].title,callback:function(t){e.$set(e.myGrammar[0],"title",t)},expression:"myGrammar[0].title"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Short description"},model:{value:e.myGrammar[0].short_description,callback:function(t){e.$set(e.myGrammar[0],"short_description",t)},expression:"myGrammar[0].short_description"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{attrs:{items:e.items,label:"Tag"},model:{value:e.myGrammar[0].tag,callback:function(t){e.$set(e.myGrammar[0],"tag",t)},expression:"myGrammar[0].tag"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Grammar ressource"},model:{value:e.myGrammar[0].url,callback:function(t){e.$set(e.myGrammar[0],"url",t)},expression:"myGrammar[0].url"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{name:"input",label:"Grammar description",rows:"4","auto-grow":""},model:{value:e.myGrammar[0].grammar,callback:function(t){e.$set(e.myGrammar[0],"grammar",t)},expression:"myGrammar[0].grammar"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{name:"input",label:"Sample sentences (Romaji)",rows:"4","auto-grow":""},model:{value:e.myGrammar[0].sample_romaji,callback:function(t){e.$set(e.myGrammar[0],"sample_romaji",t)},expression:"myGrammar[0].sample_romaji"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{name:"input",label:"Sample sentences (Kana)",hint:"Write UPPERCASE for Katakana",rows:"4",id:"kana","auto-grow":""},model:{value:e.myGrammar[0].sample_kana,callback:function(t){e.$set(e.myGrammar[0],"sample_kana",t)},expression:"myGrammar[0].sample_kana"}})],1)],1)],1)],1):e._e(),e._v(" "),e.editing||e.empty?e._e():a("v-card-text",[a("v-container",{attrs:{fluid:"","grid-list-sm":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Title",disabled:""},model:{value:e.myGrammar[0].title,callback:function(t){e.$set(e.myGrammar[0],"title",t)},expression:"myGrammar[0].title"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Short description",disabled:""},model:{value:e.myGrammar[0].short_description,callback:function(t){e.$set(e.myGrammar[0],"short_description",t)},expression:"myGrammar[0].short_description"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{attrs:{items:e.items,label:"Tag",disabled:""},model:{value:e.myGrammar[0].tag,callback:function(t){e.$set(e.myGrammar[0],"tag",t)},expression:"myGrammar[0].tag"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Grammar ressource",disabled:""},model:{value:e.myGrammar[0].url,callback:function(t){e.$set(e.myGrammar[0],"url",t)},expression:"myGrammar[0].url"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{name:"input",label:"Grammar description",rows:"4",disabled:"","auto-grow":""},model:{value:e.myGrammar[0].grammar,callback:function(t){e.$set(e.myGrammar[0],"grammar",t)},expression:"myGrammar[0].grammar"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{name:"input",label:"Sample sentences (Romaji)",rows:"4",disabled:"","auto-grow":""},model:{value:e.myGrammar[0].sample_romaji,callback:function(t){e.$set(e.myGrammar[0],"sample_romaji",t)},expression:"myGrammar[0].sample_romaji"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{name:"input",label:"Sample sentences (Kana)",hint:"Write UPPERCASE for Katakana",rows:"4",disabled:"","auto-grow":""},model:{value:e.myGrammar[0].sample_kana,callback:function(t){e.$set(e.myGrammar[0],"sample_kana",t)},expression:"myGrammar[0].sample_kana"}})],1)],1)],1)],1),e._v(" "),e.empty?a("v-card-text",[e._v("\r\n                You have nothing to review! "),a("a",{on:{click:e.createNew}},[e._v("Create new")])]):e._e(),e._v(" "),e.empty?e._e():a("v-responsive",[e.editing?a("v-btn",{attrs:{color:"success"},on:{click:e.save}},[e._v("Save")]):e._e(),e._v(" "),e.editing?e._e():a("v-btn",{attrs:{color:"success"},on:{click:e.reviewed}},[e._v("Reviewed")]),e._v(" "),e.editing?e._e():a("v-btn",{attrs:{color:"info"},on:{click:e.edit}},[e._v("Edit")])],1)],1)],1)],1)},s=[],n={render:r,staticRenderFns:s};t.a=n},143:function(e,t){},144:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e.alert?a("v-alert",{attrs:{value:!0,type:"success"}},[e._v("\r\n            Great job! "),a("a",{on:{click:e.keepReviewing}},[e._v("Keep reviewing")])]):e._e(),e._v(" "),a("v-card",[a("v-card-title",{staticClass:"blue darken-1"},[a("h1",{staticClass:"white--text text-lg-center"},[e._v("New entry")])]),e._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-sm":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Title"},model:{value:e.myGrammar.title,callback:function(t){e.$set(e.myGrammar,"title",t)},expression:"myGrammar.title"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Short description"},model:{value:e.myGrammar.short_description,callback:function(t){e.$set(e.myGrammar,"short_description",t)},expression:"myGrammar.short_description"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-select",{attrs:{items:e.items,label:"Tag"},model:{value:e.myGrammar.tag,callback:function(t){e.$set(e.myGrammar,"tag",t)},expression:"myGrammar.tag"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{attrs:{label:"Grammar ressource"},model:{value:e.myGrammar.url,callback:function(t){e.$set(e.myGrammar,"url",t)},expression:"myGrammar.url"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{name:"input",label:"Grammar description",rows:"4"},model:{value:e.myGrammar.grammar,callback:function(t){e.$set(e.myGrammar,"grammar",t)},expression:"myGrammar.grammar"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{name:"input",label:"Sample sentences (Romaji)",rows:"4"},model:{value:e.myGrammar.sample_romaji,callback:function(t){e.$set(e.myGrammar,"sample_romaji",t)},expression:"myGrammar.sample_romaji"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{name:"input",label:"Sample sentences (Kana)",hint:"Write UPPERCASE for Katakana",rows:"4"},model:{value:e.myGrammar.sample_kana,callback:function(t){e.$set(e.myGrammar,"sample_kana",t)},expression:"myGrammar.sample_kana"}})],1)],1)],1)],1),e._v(" "),a("v-responsive",[a("v-btn",{attrs:{color:"success"},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)},s=[],n={render:r,staticRenderFns:s};t.a=n},145:function(e,t){},146:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-form",[a("v-container",{attrs:{"grid-list-sm":""}},[a("p",{staticClass:"display-1"},[e._v("Search")]),e._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1)],1),e._v(" "),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.grammar,function(t){return a("v-flex",{key:t.id,attrs:{xs12:"",sm4:""}},[a("v-card",[a("v-card-title",{staticClass:"blue darken-1"},[a("h2",{staticClass:"white--text text-xs-left"},[e._v(e._s(t.title))]),e._v(" "),t.is_reviewed?a("span",{staticClass:"white--text text-xs-right font-weight-light font-italic"},[e._v("Reviewed")]):e._e()]),e._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-sm":""}},[a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("p",{staticClass:"text-xs-left subheading"},[a("strong",[e._v("Tag:")]),e._v(" "+e._s(t.tag))]),e._v(" "),a("p",{staticClass:"text-xs-left subheading"},[a("strong",[e._v("Short description: ")]),e._v(e._s(t.short_description))])])],1)],1)],1),e._v(" "),a("v-responsive",[a("v-btn",{attrs:{flat:"",color:"info"}},[e._v("view")])],1)],1)],1)}))],1)],1)],1)},s=[],n={render:r,staticRenderFns:s};t.a=n},147:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-layout",[a("v-flex",[e.showReview?a("Review",{on:{reviewed:e.reviewed,createNew:e.newCard}}):e._e(),e._v(" "),e.showNew?a("New",{attrs:{alert:e.showAlert},on:{keepReviewing:e.show}}):e._e(),e._v(" "),e.showSearch?a("Search"):e._e()],1)],1)],1)},s=[],n={render:r,staticRenderFns:s};t.a=n},148:function(e,t,a){"use strict";var r=a(64),s=a(149),n=a(4),i=n(r.a,s.a,!1,null,null,null);t.a=i.exports},149:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",[a("v-container",{attrs:{"grid-list-sm":""}},[a("p",{staticClass:"display-2"},[e._v("Sign Up")]),e._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{label:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),e._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),a("v-btn",{attrs:{color:"info"},on:{click:e.signUp}},[e._v("Sign Up!")])],1)],1)},s=[],n={render:r,staticRenderFns:s};t.a=n},150:function(e,t,a){"use strict";var r=a(66),s=a(151),n=a(4),i=n(r.a,s.a,!1,null,null,null);t.a=i.exports},151:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",[a("v-container",{attrs:{"grid-list-sm":""}},[a("p",{staticClass:"display-2"},[e._v("Login")]),e._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{label:"Username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1)],1),e._v(" "),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{label:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),a("v-btn",{attrs:{color:"info"},on:{click:e.login}},[e._v("Login")]),e._v(" "),a("v-btn",{on:{click:e.logout}},[e._v("Logout")])],1)],1)},s=[],n={render:r,staticRenderFns:s};t.a=n},153:function(e,t){},30:function(e,t,a){"use strict";var r=a(53);t.a={index:function(e){return Object(r.a)().get("grammar",{params:{search:e}})},show:function(e){return Object(r.a)().get("grammar/"+e)},post:function(e){return Object(r.a)().post("grammar",e)},put:function(e){return Object(r.a)().put("grammar",e)}}},33:function(e,t,a){"use strict";t.a={name:"app",data:function(){return{drawer:!0,showReview:!0,showNew:!1,showSearch:!1}},methods:{show:function(){this.showReview=!0,this.showNew=!1,this.showSearch=!1},newCard:function(){this.showNew=!0,this.showReview=!1,this.showSearch=!1},search:function(){this.showSearch=!0,this.showNew=!1,this.showReview=!1},reviewed:function(){this.showReview=!1,this.showNew=!0}}}},34:function(e,t,a){"use strict";var r=a(35),s=a(60),n=a(62);t.a={props:["showReview","showNew","showSearch"],data:function(){return{showAlert:!1}},components:{Review:r.a,New:s.a,Search:n.a},methods:{reviewed:function(){this.showAlert=!0,this.$emit("reviewed")},newCard:function(){this.$emit("newCard")},show:function(){this.showAlert=!1,this.$emit("show")}}}},35:function(e,t,a){"use strict";function r(e){a(78)}var s=a(36),n=a(142),i=a(4),o=r,l=i(s.a,n.a,!1,o,null,null);t.a=l.exports},36:function(e,t,a){"use strict";var r=a(7),s=a.n(r),n=a(8),i=a.n(n),o=a(52),l=a.n(o),c=a(19),m=a(30);t.a={name:"Review",data:function(){return{message:"",items:["Noun","Verb","Adjective"],myGrammar:{title:null,short_description:null,tag:null,url:null,grammar:null,sample_romaji:null,sample_kana:null,is_reviewed:null},editing:!1,empty:!1}},computed:l()({},Object(c.b)(["isLoggedIn","user"])),methods:{save:function(){this.editing=!1,this.update()},edit:function(){this.editing=!0},reviewed:function(){this.myGrammar[0].is_reviewed=!0,this.update(),this.$emit("reviewed")},createNew:function(){this.$emit("createNew")},update:function(){var e=this;return i()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.put(e.myGrammar[0]);case 3:a=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}},beforeMount:function(){var e=this;return i()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.user.id,t.next=4,m.a.show(a);case 4:e.myGrammar=t.sent.data,e.myGrammar.length<1&&(e.empty=!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()}}},53:function(e,t,a){"use strict";var r=a(120),s=a.n(r),n=a(59);t.a=function(){return s.a.create({baseURL:"http://localhost:3000/",headers:{Authorization:"Bearer "+n.a.state.token}})}},59:function(e,t,a){"use strict";var r=a(13),s=a(19),n=a(139);r.default.use(s.a),t.a=new s.a.Store({strict:!0,plugins:[Object(n.a)()],state:{token:null,user:null,isLoggedIn:!1},mutations:{setToken:function(e,t){e.token=t,e.isLoggedIn=!!t},setUser:function(e,t){e.user=t}},actions:{setToken:function(e,t){(0,e.commit)("setToken",t)},setUser:function(e,t){(0,e.commit)("setUser",t)}}})},60:function(e,t,a){"use strict";function r(e){a(143)}var s=a(61),n=a(144),i=a(4),o=r,l=i(s.a,n.a,!1,o,"data-v-14ce723a",null);t.a=l.exports},61:function(e,t,a){"use strict";var r=a(7),s=a.n(r),n=a(8),i=a.n(n),o=a(52),l=a.n(o),c=a(19),m=a(30);t.a={props:["alert"],name:"New",data:function(){return{message:"",items:["Noun","Verb","Adjective"],myGrammar:{title:"",short_description:"",tag:"",url:"",grammar:"",sample_romaji:"",sample_kana:"",is_reviewed:!1}}},computed:l()({},Object(c.b)(["isLoggedIn","user"])),methods:{save:function(){this.create()},keepReviewing:function(){this.$emit("keepReviewing")},create:function(){var e=this;return i()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.post({title:e.myGrammar.title,short_description:e.myGrammar.short_description,tag:e.myGrammar.tag,url:e.myGrammar.url,grammar:e.myGrammar.grammar,sample_romaji:e.myGrammar.sample_romaji,sample_kana:e.myGrammar.sample_kana,UserId:e.user.id,is_reviewed:e.myGrammar.is_reviewed});case 3:a=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,e,[[0,6]])}))()}}}},62:function(e,t,a){"use strict";function r(e){a(145)}var s=a(63),n=a(146),i=a(4),o=r,l=i(s.a,n.a,!1,o,"data-v-0e1f44de",null);t.a=l.exports},63:function(e,t,a){"use strict";var r=a(7),s=a.n(r),n=a(8),i=a.n(n),o=(a(19),a(30));t.a={name:"Search",data:function(){return{search:"",grammar:null,title:"",short_description:""}},watch:{search:function(){function e(e){return t.apply(this,arguments)}var t=i()(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a={name:""},""!==this.search&&(a.query={search:this.search}),this.$router.push(a);case 3:case"end":return e.stop()}},e,this)}));return e}(),"$route.query.search":{immediate:!0,handler:function(e){var t=this;return i()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.search=e,a.next=3,o.a.index(e);case 3:t.grammar=a.sent.data;case 4:case"end":return a.stop()}},a,t)}))()}}}}},64:function(e,t,a){"use strict";var r=a(7),s=a.n(r),n=a(8),i=a.n(n),o=a(65);t.a={name:"Form",data:function(){return{username:"",password:""}},methods:{signUp:function(){var e=this;return i()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.register({username:e.username,password:e.password});case 3:a=t.sent,e.$store.dispatch("setToken",a.data.token),e.$store.dispatch("setUser",a.data.user),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()}}}},65:function(e,t,a){"use strict";var r=a(53);t.a={register:function(e){return Object(r.a)().post("register",e)},login:function(e){return Object(r.a)().post("login",e)}}},66:function(e,t,a){"use strict";var r=a(7),s=a.n(r),n=a(8),i=a.n(n),o=a(65);t.a={name:"Login",data:function(){return{username:"",password:""}},methods:{login:function(){var e=this;return i()(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.login({username:e.username,password:e.password});case 3:a=t.sent,e.$store.dispatch("setToken",a.data.token),e.$store.dispatch("setUser",a.data.user),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 11:case"end":return t.stop()}},t,e,[[0,8]])}))()},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"root"})}}}},67:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(13),s=a(70),n=a(74),i=a(152),o=a.n(i),l=a(153),c=(a.n(l),a(59));r.default.use(o.a,{iconfont:"mdi"}),r.default.config.productionTip=!1,new r.default({el:"#app",router:n.a,store:c.a,template:"<App/>",components:{App:s.a}})},70:function(e,t,a){"use strict";function r(e){a(71)}var s=a(33),n=a(73),i=a(4),o=r,l=i(s.a,n.a,!1,o,null,null);t.a=l.exports},71:function(e,t){},73:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("v-app",[a("header",[a("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Material+Icons",rel:"stylesheet"}})]),e._v(" "),a("v-layout",[a("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-tile",{on:{click:e.show}},[a("v-list-tile-action",[a("v-icon",[e._v("check")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Review")])],1)],1),e._v(" "),a("v-list-tile",{on:{click:e.newCard}},[a("v-list-tile-action",[a("v-icon",[e._v("add")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("New")])],1)],1),e._v(" "),a("v-list-tile",{on:{click:e.search}},[a("v-list-tile-action",[a("v-icon",[e._v("search")])],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[e._v("Search")])],1)],1)],1)],1),e._v(" "),a("v-toolbar",{staticClass:"blue darken-1",attrs:{app:"",fixed:"","clipped-left":"",dark:""}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),a("v-toolbar-title",[e._v("Mouichido")])],1),e._v(" "),a("v-content",[a("router-view",{attrs:{showReview:this.showReview,showNew:this.showNew,showSearch:this.showSearch},on:{newCard:e.newCard,show:e.show,reviewed:e.reviewed}})],1)],1)],1)],1)},s=[],n={render:r,staticRenderFns:s};t.a=n},74:function(e,t,a){"use strict";var r=a(13),s=a(75),n=a(76),i=a(148),o=a(150),l=a(35),c=a(60),m=a(62);r.default.use(s.a),t.a=new s.a({routes:[{path:"/grammar",name:"Main",component:n.a},{path:"/form",name:"Form",component:i.a},{path:"/login",name:"Login",component:o.a},{path:"/review",name:"Review",component:l.a},{path:"/new",name:"New",component:c.a},{path:"/search",name:"Search",component:m.a}]})},76:function(e,t,a){"use strict";function r(e){a(77)}var s=a(34),n=a(147),i=a(4),o=r,l=i(s.a,n.a,!1,o,null,null);t.a=l.exports},77:function(e,t){},78:function(e,t){}},[67]);
//# sourceMappingURL=app.3e3ba191ac07daa6e6ec.js.map
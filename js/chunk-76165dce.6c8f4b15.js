(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76165dce"],{"057f":function(t,e,r){var n=r("c6b6"),i=r("fc6a"),o=r("241c").f,a=r("4dae"),c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(e){return a(c)}};t.exports.f=function(t){return c&&"Window"==n(t)?s(t):o(i(t))}},"0b43":function(t,e,r){var n=r("04f8");t.exports=n&&!!Symbol["for"]&&!!Symbol.keyFor},"268e":function(t,e,r){"use strict";r.r(e);r("b0c0"),r("a4d3"),r("e01a");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"certifications"},[e("p",{staticClass:"introduction"},[t._v(" Feel free to check out my profiles on "),e("a",{attrs:{href:t.social.acclaim,target:"_blank"}},[t._v("Credly")]),t._v(" and "),e("a",{attrs:{href:t.social.accredible,target:"_blank"}},[t._v("Accredible (Credential.net)")]),t._v(" for a list of all exams and certifications. Most of my certifications and exams are within products and services from "),e("strong",[t._v("Microsoft")]),t._v(" and "),e("strong",[t._v("Zendesk")]),t._v(". ")]),e("sui-card-group",{attrs:{"items-per-row":2}},t._l(t.certifications,(function(r){return e("sui-card",{key:r.name,staticClass:"link",on:{click:function(e){return t.window.open(r.certification_url,"_blank")}}},[e("sui-card-content",[e("sui-card-header",[t._v(t._s(r.name))]),e("sui-card-meta",[e("span",{staticClass:"category"},[t._v(t._s(r.category)+" ")])]),e("sui-card-description",[t._v(" "+t._s(r.description)+" ")])],1),e("sui-card-content",{attrs:{extra:""}},[e("span",[t._v("Achieved: "+t._s(r.achieved))]),e("span",{attrs:{slot:"right"},slot:"right"},[t._v(" "+t._s(t.certifications.thumbnail)+" "),e("sui-image",{attrs:{src:t.getCertificationThumbnailSrc(r.thumbnail),shape:"circular",size:"mini"}})],1)])],1)})),1)],1)},i=[],o=r("2995"),a=r("5b44"),c={name:"Certifications",data:function(){return{certifications:o,social:a,window:window}},methods:{getCertificationThumbnailSrc:function(t){return r("8b71")("./"+t)}}},s=c,f=(r("6274"),r("2877")),u=Object(f["a"])(s,n,i,!1,null,null,null);e["default"]=u.exports},2995:function(t){t.exports=JSON.parse('[{"name":"Microsoft Certified: Azure Solutions Architect Expert","company":"Microsoft","certification_url":"https://www.youracclaim.com/badges/393e357c-a5bc-4edc-9fd7-e71ec696fe25","achieved":"December 13, 2019","category":"Cloud Infrastructure","thumbnail":"azure-solutions-architect-expert.png","description":"Certification taken after working closely with Azure cloud technology for several years."},{"name":"Microsoft Certified: Azure Administrator Associate","company":"Microsoft","certification_url":"https://www.youracclaim.com/badges/50a410f2-2666-4a7d-bd38-08aa42aed7cd","achieved":"February 28, 2019","category":"Cloud Infrastructure","thumbnail":"azure-administrator-associate.png","description":"Certification taken after working closely with Azure cloud technology for several years."},{"name":"MCSA: Office 365","company":"Microsoft","certification_url":"https://www.youracclaim.com/badges/c23ebad0-8f20-4ab2-90d0-ec9905b9eee6","achieved":"April 13, 2018","category":"Cloud Infrastructure","thumbnail":"MCSA-Office-365-2018.png","description":"Certification taken after working with Office 365 as well as other Microsoft products for over 4 years."},{"name":"Zendesk App Developer I","company":"Zendesk","certification_url":"https://www.credential.net/af633e46-85c8-4d86-990e-ca6a387bbb52","achieved":"September 3, 2019","category":"Development","thumbnail":"zendesk.jpg","description":"Certification taken after working closely with Zendesk products for over 3 years as a system admin and developer."},{"name":"Zendesk Support Administrator","company":"Microsoft","certification_url":"https://www.credential.net/e51e0a7c-602b-4a12-bf80-6486f42c5ed4","achieved":"September 9, 2020","category":"System Administration","thumbnail":"zendesk.jpg","description":"Certification taken after working closely with Zendesk products for over 4 years as a system admin and developer."}]')},"428f":function(t,e,r){var n=r("da84");t.exports=n},"489e":function(t,e,r){t.exports=r.p+"img/zendesk.2ffdbda5.jpg"},"51c6":function(t,e,r){t.exports=r.p+"img/MCSA-Office-365-2018.1da596bb.png"},"57b9":function(t,e,r){var n=r("c65b"),i=r("d066"),o=r("b622"),a=r("cb2d");t.exports=function(){var t=i("Symbol"),e=t&&t.prototype,r=e&&e.valueOf,c=o("toPrimitive");e&&!e[c]&&a(e,c,(function(t){return n(r,this)}),{arity:1})}},"5a47":function(t,e,r){var n=r("23e7"),i=r("04f8"),o=r("d039"),a=r("7418"),c=r("7b0b"),s=!i||o((function(){a.f(1)}));n({target:"Object",stat:!0,forced:s},{getOwnPropertySymbols:function(t){var e=a.f;return e?e(c(t)):[]}})},6274:function(t,e,r){"use strict";r("998f")},6781:function(t,e,r){t.exports=r.p+"img/azure-administrator-associate.30099df7.png"},"8b71":function(t,e,r){var n={"./MCSA-Office-365-2018.png":"51c6","./azure-administrator-associate.png":"6781","./azure-solutions-architect-expert.png":"fab8","./zendesk.jpg":"489e"};function i(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="8b71"},"998f":function(t,e,r){},a4d3:function(t,e,r){r("d9f5"),r("b4f8"),r("c513"),r("e9c4"),r("5a47")},b4f8:function(t,e,r){var n=r("23e7"),i=r("d066"),o=r("1a2d"),a=r("577e"),c=r("5692"),s=r("0b43"),f=c("string-to-symbol-registry"),u=c("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!s},{for:function(t){var e=a(t);if(o(f,e))return f[e];var r=i("Symbol")(e);return f[e]=r,u[r]=e,r}})},c513:function(t,e,r){var n=r("23e7"),i=r("1a2d"),o=r("d9b5"),a=r("0d51"),c=r("5692"),s=r("0b43"),f=c("symbol-to-string-registry");n({target:"Symbol",stat:!0,forced:!s},{keyFor:function(t){if(!o(t))throw TypeError(a(t)+" is not a symbol");if(i(f,t))return f[t]}})},d9f5:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("c65b"),a=r("e330"),c=r("c430"),s=r("83ab"),f=r("04f8"),u=r("d039"),d=r("1a2d"),l=r("3a9b"),b=r("825a"),p=r("fc6a"),m=r("a04b"),v=r("577e"),y=r("5c6c"),g=r("7c73"),h=r("df75"),w=r("241c"),S=r("057f"),k=r("7418"),_=r("06cf"),O=r("9bf2"),C=r("37e8"),x=r("d1e7"),A=r("cb2d"),j=r("5692"),z=r("f772"),F=r("d012"),M=r("90e3"),D=r("b622"),N=r("e538"),P=r("e065"),E=r("57b9"),Z=r("d44e"),I=r("69f3"),J=r("b727").forEach,T=z("hidden"),$="Symbol",U="prototype",B=I.set,L=I.getterFor($),Q=Object[U],W=i.Symbol,q=W&&W[U],G=i.TypeError,H=i.QObject,K=_.f,R=O.f,V=S.f,X=x.f,Y=a([].push),tt=j("symbols"),et=j("op-symbols"),rt=j("wks"),nt=!H||!H[U]||!H[U].findChild,it=s&&u((function(){return 7!=g(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(Q,e);n&&delete Q[e],R(t,e,r),n&&t!==Q&&R(Q,e,n)}:R,ot=function(t,e){var r=tt[t]=g(q);return B(r,{type:$,tag:t,description:e}),s||(r.description=e),r},at=function(t,e,r){t===Q&&at(et,e,r),b(t);var n=m(e);return b(r),d(tt,n)?(r.enumerable?(d(t,T)&&t[T][n]&&(t[T][n]=!1),r=g(r,{enumerable:y(0,!1)})):(d(t,T)||R(t,T,y(1,{})),t[T][n]=!0),it(t,n,r)):R(t,n,r)},ct=function(t,e){b(t);var r=p(e),n=h(r).concat(lt(r));return J(n,(function(e){s&&!o(ft,r,e)||at(t,e,r[e])})),t},st=function(t,e){return void 0===e?g(t):ct(g(t),e)},ft=function(t){var e=m(t),r=o(X,this,e);return!(this===Q&&d(tt,e)&&!d(et,e))&&(!(r||!d(this,e)||!d(tt,e)||d(this,T)&&this[T][e])||r)},ut=function(t,e){var r=p(t),n=m(e);if(r!==Q||!d(tt,n)||d(et,n)){var i=K(r,n);return!i||!d(tt,n)||d(r,T)&&r[T][n]||(i.enumerable=!0),i}},dt=function(t){var e=V(p(t)),r=[];return J(e,(function(t){d(tt,t)||d(F,t)||Y(r,t)})),r},lt=function(t){var e=t===Q,r=V(e?et:p(t)),n=[];return J(r,(function(t){!d(tt,t)||e&&!d(Q,t)||Y(n,tt[t])})),n};f||(W=function(){if(l(q,this))throw G("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?v(arguments[0]):void 0,e=M(t),r=function(t){this===Q&&o(r,et,t),d(this,T)&&d(this[T],e)&&(this[T][e]=!1),it(this,e,y(1,t))};return s&&nt&&it(Q,e,{configurable:!0,set:r}),ot(e,t)},q=W[U],A(q,"toString",(function(){return L(this).tag})),A(W,"withoutSetter",(function(t){return ot(M(t),t)})),x.f=ft,O.f=at,C.f=ct,_.f=ut,w.f=S.f=dt,k.f=lt,N.f=function(t){return ot(D(t),t)},s&&(R(q,"description",{configurable:!0,get:function(){return L(this).description}}),c||A(Q,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!f,sham:!f},{Symbol:W}),J(h(rt),(function(t){P(t)})),n({target:$,stat:!0,forced:!f},{useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),n({target:"Object",stat:!0,forced:!f,sham:!s},{create:st,defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:ut}),n({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:dt}),E(),Z(W,$),F[T]=!0},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("e330"),c=r("1a2d"),s=r("1626"),f=r("3a9b"),u=r("577e"),d=r("9bf2").f,l=r("e893"),b=o.Symbol,p=b&&b.prototype;if(i&&s(b)&&(!("description"in p)||void 0!==b().description)){var m={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),e=f(p,this)?new b(t):void 0===t?b():b(t);return""===t&&(m[e]=!0),e};l(v,b),v.prototype=p,p.constructor=v;var y="Symbol(test)"==String(b("test")),g=a(p.valueOf),h=a(p.toString),w=/^Symbol\((.*)\)[^)]+$/,S=a("".replace),k=a("".slice);d(p,"description",{configurable:!0,get:function(){var t=g(this);if(c(m,t))return"";var e=h(t),r=y?k(e,7,-1):S(e,w,"$1");return""===r?void 0:r}}),n({global:!0,constructor:!0,forced:!0},{Symbol:v})}},e065:function(t,e,r){var n=r("428f"),i=r("1a2d"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},e538:function(t,e,r){var n=r("b622");e.f=n},e9c4:function(t,e,r){var n=r("23e7"),i=r("d066"),o=r("2ba4"),a=r("c65b"),c=r("e330"),s=r("d039"),f=r("e8b5"),u=r("1626"),d=r("861d"),l=r("d9b5"),b=r("f36a"),p=r("04f8"),m=i("JSON","stringify"),v=c(/./.exec),y=c("".charAt),g=c("".charCodeAt),h=c("".replace),w=c(1..toString),S=/[\uD800-\uDFFF]/g,k=/^[\uD800-\uDBFF]$/,_=/^[\uDC00-\uDFFF]$/,O=!p||s((function(){var t=i("Symbol")();return"[null]"!=m([t])||"{}"!=m({a:t})||"{}"!=m(Object(t))})),C=s((function(){return'"\\udf06\\ud834"'!==m("\udf06\ud834")||'"\\udead"'!==m("\udead")})),x=function(t,e){var r=b(arguments),n=e;if((d(e)||void 0!==t)&&!l(t))return f(e)||(e=function(t,e){if(u(n)&&(e=a(n,this,t,e)),!l(e))return e}),r[1]=e,o(m,null,r)},A=function(t,e,r){var n=y(r,e-1),i=y(r,e+1);return v(k,t)&&!v(_,i)||v(_,t)&&!v(k,n)?"\\u"+w(g(t,0),16):t};m&&n({target:"JSON",stat:!0,arity:3,forced:O||C},{stringify:function(t,e,r){var n=b(arguments),i=o(O?x:m,null,n);return C&&"string"==typeof i?h(i,S,A):i}})},fab8:function(t,e,r){t.exports=r.p+"img/azure-solutions-architect-expert.32756adc.png"}}]);
//# sourceMappingURL=chunk-76165dce.6c8f4b15.js.map
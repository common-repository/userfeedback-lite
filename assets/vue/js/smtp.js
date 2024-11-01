(function(t){function e(e){for(var a,l,r=e[0],o=e[1],c=e[2],p=0,d=[];p<r.length;p++)l=r[p],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&d.push(i[l][0]),i[l]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(a=!1)}a&&(n.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},i={smtp:0},n=[];function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;n.push([6,"chunk-vendors","chunk-common"]),s()})({6:function(t,e,s){t.exports=s("a150")},8566:function(t,e,s){},a150:function(t,e,s){"use strict";s.r(e);var a=s("a026"),i=s("c0cc"),n=s("918d"),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-feedback userfeedback-smtp-container"},[e("div",{staticClass:"section-logo"},[e("img",{attrs:{src:t.$uf.assets+"/img/userfeedback-smtp.png",alt:""}})]),e("div",{staticClass:"section-title"},[e("h1",[t._v(t._s(t.texts.heading))]),e("p",[t._v(t._s(t.texts.subheading))])]),e("div",{staticClass:"userfeedback-smtp-rows"},[e("div",{staticClass:"modal"},[e("a",{staticClass:"thumb",on:{click:function(e){t.openModal=!0}}},[e("img",{attrs:{src:t.$uf.assets+"/img/userfeedback-smtp-thumb.png",alt:""}})]),e("a",{staticClass:"overlay",class:t.openModal?"is-open":"",on:{click:function(e){t.openModal=!1}}}),e("div",{staticClass:"full",class:t.openModal?"is-open":""},[e("img",{attrs:{src:t.$uf.assets+"/img/userfeedback-smtp-full.png",alt:""}})])]),e("div",{staticClass:"features-list"},[e("ul",t._l(t.texts.features_list,(function(s){return e("li",{key:s},[e("img",{attrs:{src:t.$uf.assets+"/img/userfeedback-smtp-arrow-right.svg",alt:""}}),e("span",[t._v(t._s(s))])])})),0)])]),e("div",[e("div",{staticClass:"userfeedback-smtp-card"},[e("div",{staticClass:"step"},[e("div",{staticClass:"step-icon"},[t.isSmtpInstalled||t.isInstalled?e("img",{attrs:{src:t.$uf.assets+"/img/userfeedback-smtp-step-complete.svg",alt:""}}):e("img",{attrs:{src:t.$uf.assets+"/img/userfeedback-smtp-step-1.svg",alt:""}})])]),e("div",{staticClass:"info"},[e("h2",[t._v(t._s(t.texts.step1.heading))]),e("p",[t._v(t._s(t.texts.step1.info))]),e("p",[e("button",{staticClass:"button user-feedback-button is-large",attrs:{disabled:t.isSmtpInstalled||t.isInstalled||t.isInstalling},on:{click:t.installSmtpPlugin}},[e("span",[t._v(t._s(t.installButtonText))])])])])]),e("div",{staticClass:"userfeedback-smtp-card"},[e("div",{staticClass:"step"},[e("div",{staticClass:"step-icon"},[e("img",{attrs:{src:t.$uf.assets+"/img/userfeedback-smtp-step-2.svg",alt:""}})])]),e("div",{staticClass:"info"},[e("h2",[t._v(t._s(t.texts.step2.heading))]),e("p",[t._v(t._s(t.texts.step2.info))]),e("p",[e("a",{staticClass:"button user-feedback-button is-large",attrs:{href:t.openWizardLink()}},[t._v(t._s(t.texts.step2.button_text))])])])])])])},r=[],o=s("561c"),c=s("ab89"),u={name:"UserFeedbackSmtp",data(){return{isInstalling:!1,isInstalled:!1,openModal:!1}},computed:{texts(){return{heading:Object(o["a"])("Making Email Deliverability Easy for WordPress",this.$textDomain),subheading:Object(o["a"])("WP Mail SMTP fixes deliverability problems with your WordPress emails and form notifications. It's built by the same folks behind WPForms.",this.$textDomain),features_list:[Object(o["a"])("Improves email deliverability in WordPress.",this.$textDomain),Object(o["a"])("Used by 2+ million websites.",this.$textDomain),Object(o["a"])("Free mailers: SendLayer, SMTP.com, Sendinblue, Google Workspace / Gmail, Mailgun, Postmark, SendGrid.",this.$textDomain),Object(o["a"])("Pro mailers: Amazon SES, Microsoft 365 / Outlook.com, Zoho Mail.",this.$textDomain)],step1:{heading:Object(o["a"])("Install and Activate WP Mail SMTP",this.$textDomain),info:Object(o["a"])("Install WP Mail SMTP from the WordPress.org plugin repository.",this.$textDomain),button_text_activate:Object(o["a"])("Activate WP Mail SMTP",this.$textDomain),button_text_install:Object(o["a"])("Install WP Mail SMTP",this.$textDomain),button_text_installing:Object(o["a"])("Installing...",this.$textDomain),button_text_installed:Object(o["a"])("WP Mail SMTP Installed",this.$textDomain)},step2:{heading:Object(o["a"])("Set Up WP Mail SMTP",this.$textDomain),info:Object(o["a"])("Select and configure your mailer.",this.$textDomain),button_text:Object(o["a"])("Open Setup Wizard",this.$textDomain)}}},installButtonText(){return this.isInstalling?this.texts.step1.button_text_installing:this.isInstalled||this.isSmtpInstalled?this.texts.step1.button_text_installed:this.texts.step1.button_text_install},isSmtpInstalled(){return this.$uf.integrations["wp-mail-smtp"]&&this.$uf.integrations["wp-mail-smtp"].is_installed}},methods:{installSmtpPlugin(){this.isInstalling=!0,Object(c["f"])({slug:"wp-mail-smtp"},!0).then(()=>{this.isInstalling=!1,this.isInstalled=!0})},openWizardLink(){return"/wp-admin/admin.php?page=wp-mail-smtp-setup-wizard"}}},p=u,d=s("2877"),m=Object(d["a"])(p,l,r,!1,null,null,null),f=m.exports,b=(s("8566"),s("7220"));(()=>{const t=document.getElementById("userfeedback-smtp");t&&(a["a"].use(i["a"],{componentPrefix:"UserFeedback",classPrefix:"user-feedback"}),a["a"].use(n["a"],{store:b["a"]}),new a["a"]({store:b["a"],render:t=>t(f)}).$mount(t))})()}});
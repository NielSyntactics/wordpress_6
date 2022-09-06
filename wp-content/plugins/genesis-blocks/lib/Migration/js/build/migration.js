!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.regeneratorRuntime},function(e,t){e.exports=window.React},function(e,t){function n(e,t,n,r,c,s,o){try{var a=e[s](o),i=a.value}catch(e){return void n(e)}a.done?t(i):Promise.resolve(i).then(r,c)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(c,s){var o=e.apply(t,r);function a(e){n(o,c,s,a,i,"next",e)}function i(e){n(o,c,s,a,i,"throw",e)}a(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(10),c=n(11),s=n(12),o=n(14);e.exports=function(e,t){return r(e)||c(e,t)||s(e,t)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wp.a11y},function(e,t){e.exports=window.wp.apiFetch},function(e,t){e.exports=window.wp.domReady},function(e,t,n){var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=c.apply(null,r);o&&e.push(o)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(r=function(){return c}.apply(t,[]))||(e.exports=r)}()},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);o=!0);}catch(e){a=!0,c=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw c}}return s}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){var r=n(13);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(8),s=n.n(c),o=n(5),a=n.n(o),i=(n(3),n(1)),l=function(e){var t=e.isStepActive,n=e.isStepComplete,c=e.goToNext,s=e.goToPrevious,o=e.stepIndex,a=1===o,l=Object(i.__)("Migrating from Atomic Blocks to Genesis Blocks is a one-way action. It can’t be undone. Please back up your site before you begin.","genesis-blocks");return genesisBlocksMigration.isPro&&(l=Object(i.__)("Migrating your Genesis Blocks content is a one-way action. It can’t be undone. Please back up your site before you begin.","genesis-blocks")),Object(r.createElement)(E,{isActive:t,isComplete:n},Object(r.createElement)(P,{index:o,isComplete:n}),Object(r.createElement)(w,{heading:Object(i.__)("Back Up Your Site","genesis-blocks"),isStepActive:t},Object(r.createElement)("p",null,l),Object(r.createElement)(S,null,!a&&Object(r.createElement)(_,{onClick:s}),Object(r.createElement)(k,{checkboxLabel:Object(i.__)("I have backed up my site.","genesis-blocks"),onClick:c,stepIndex:o}))))},u=n(4),b=n.n(u),p=n(2),m=n.n(p),g=n(6),f=n(7),d=n.n(f),O=function(e){var t=e.isStepActive,n=e.isStepComplete,c=e.stepIndex,s=e.goToNext,o=Object(r.useState)(0),l=a()(o,2),u=l[0],p=l[1],f=Object(r.useState)(!1),O=a()(f,2),j=O[0],h=O[1],k=Object(r.useState)(!1),_=a()(k,2),v=_[0],x=_[1],y=Object(r.useState)(""),N=a()(y,2),T=N[0],M=N[1],A=Object(r.useState)(!1),B=a()(A,2),I=B[0],F=B[1],U=Object(r.useState)(0),L=a()(U,2),R=L[0],H=L[1],G=[Object(i.__)("Migrate block settings.","genesis-blocks"),Object(i.__)("Migrate block content. Migrated: ","genesis-blocks")+" ".concat(R,"."),Object(i.__)("Migrate favorite blocks.","genesis-blocks"),genesisBlocksMigration.isPro?Object(i.__)("Clean up.","genesis-blocks"):Object(i.__)("Deactivate Atomic Blocks.","genesis-blocks")],Y=function(){var e=b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()({path:"/genesis-blocks/migrate-settings",method:"POST"}).then(b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(1),e.next=3,z();case 3:return e.next=5,D();case 5:case"end":return e.stop()}}),e)})))).catch((function(e){e.hasOwnProperty("message")&&M(e.message),Object(g.speak)(Object(i.__)("The migration failed during settings migration.","genesis-blocks")),x(!0),h(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()({path:"/genesis-blocks/migrate-pro-settings",method:"POST"}).catch((function(e){e.hasOwnProperty("message")&&M(e.message),Object(g.speak)(Object(i.__)("The pro settings migration failed.","genesis-blocks")),x(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"invalid_json",e.next=3,d()({path:"/genesis-blocks/migrate-content",method:"POST"}).then(function(){var e=b()(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.results&&t.results.postsFound>0)){e.next=5;break}return H((function(e){return e+t.results.postsFound})),e.next=4,D();case 4:return e.abrupt("return");case 5:return p(2),e.next=8,W();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch(function(){var e=b()(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.hasOwnProperty("code")||"invalid_json"!==t.code){e.next=6;break}return e.next=3,D();case 3:return e.abrupt("return");case 6:t.hasOwnProperty("message")&&M(t.message);case 7:Object(g.speak)(Object(i.__)("The migration failed during post content migration","genesis-blocks")),x(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"invalid_json",e.next=3,d()({path:"/genesis-blocks/migrate-user-meta",method:"POST"}).then(b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(3),e.next=3,q();case 3:case"end":return e.stop()}}),e)})))).catch(function(){var e=b()(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.hasOwnProperty("code")||"invalid_json"!==t.code){e.next=6;break}return e.next=3,W();case 3:return e.abrupt("return");case 6:t.hasOwnProperty("message")&&M(t.message);case 7:Object(g.speak)(Object(i.__)("The migration failed while migrating favorite blocks.","genesis-blocks")),x(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()({path:"/genesis-blocks/migrate-cleanup",method:"POST"}).then((function(){Object(g.speak)(Object(i.__)("The migration was successful!","genesis-blocks")),F(!0),s()}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=b()(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(g.speak)(Object(i.__)("The migration is now in progress","genesis-blocks")),M(""),h(!0),e.next=5,Y();case 5:h(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.createElement)(E,{isActive:t,isComplete:n},Object(r.createElement)(P,{index:c,isComplete:n}),Object(r.createElement)(w,{heading:Object(i.__)("Migrate Your Content","genesis-blocks"),isStepActive:t,isLastStep:!0},!I&&Object(r.createElement)("p",null,Object(i.__)("Okay! Everything is ready. Let’s do this. While the migration is underway, don’t leave this page.","genesis-blocks")),!!T&&Object(r.createElement)("div",{className:"gb-migration__error inline-notice gb-error"},Object(r.createElement)("p",null,Object(r.createElement)("span",null,Object(i.__)("The following error occurred:","genesis-blocks")),T)),(j||I)&&Object(r.createElement)(r.Fragment,null,Object(r.createElement)(C,{steps:G,currentStep:u,complete:!j})),!j&&!I&&Object(r.createElement)("button",{className:"gb-admin-button-primary",onClick:$},v?Object(i.__)("Try Again","genesis-blocks"):Object(i.__)("Migrate Now","genesis-blocks")),I&&Object(r.createElement)(r.Fragment,null,!genesisBlocksMigration.isPro&&Object(r.createElement)("p",null,Object(r.createElement)("span",{role:"img","aria-label":Object(i.__)("party emoji","genesis-blocks")},"🎉")," ",Object(i.__)("The migration completed successfully! Time to say goodbye to Atomic Blocks (it’s been fun!) and step into the FUTURE","genesis-blocks")," ",Object(r.createElement)("span",{className:"message-future"},Object(i.__)("FUTURE","genesis-blocks"))," ",Object(r.createElement)("sub",null,Object(i.__)("FUTURE","genesis-blocks")),"."),genesisBlocksMigration.isPro&&Object(r.createElement)("p",null,Object(r.createElement)("span",{role:"img","aria-label":Object(i.__)("party emoji","genesis-blocks")},"🎉")," ",Object(i.__)("The migration completed successfully!","genesis-blocks")),Object(r.createElement)(S,null,Object(r.createElement)("a",{href:genesisBlocksMigration.gbUrl,className:"btn"},Object(i.__)("Get started with Genesis Blocks","genesis-blocks"))))))},j=function(e){var t=e.isStepActive,n=e.isStepComplete,c=e.stepIndex,s=e.goToNext,o=e.goToPrevious;return Object(r.createElement)(E,{isActive:t,isComplete:n},Object(r.createElement)(P,{index:c,isComplete:n}),Object(r.createElement)(w,{heading:Object(i.__)("Update CSS and PHP code","genesis-blocks"),isStepActive:t},Object(r.createElement)("p",null,Object(r.createElement)("b",null,Object(i.__)("You will need to make manual changes if your theme, plugins or customizations include Atomic Blocks CSS or PHP:","genesis-blocks"))),Object(r.createElement)("ul",{className:"list-disc list-inside mt-2"},Object(r.createElement)("li",null,Object(r.createElement)("b",null,Object(i.__)("CSS","genesis-blocks"))," - ",Object(i.__)("CSS classes and HTML markup have changed.","genesis-blocks")," ",Object(r.createElement)("a",{href:"https://wpeng.in/ab-gb-css/",target:"_blank",rel:"noopener noreferrer"},Object(i.__)("Check if you need to make CSS changes.","genesis-blocks"))),Object(r.createElement)("li",null,Object(r.createElement)("b",null,Object(i.__)("PHP","genesis-blocks"))," - ",Object(i.__)("Filter, function and block names have changed.","genesis-blocks")," ",Object(r.createElement)("a",{href:"https://wpeng.in/ab-gb-php/",target:"_blank",rel:"noopener noreferrer"},Object(i.__)("Check if you need to make PHP changes.","genesis-blocks")))),Object(r.createElement)(S,null,Object(r.createElement)(_,{onClick:o}),Object(r.createElement)(k,{checkboxLabel:Object(i.__)("I have made necessary changes to PHP and CSS.","genesis-blocks"),onClick:s,stepIndex:c}))))},h=function(){var e=Object(r.useState)(1),t=a()(e,2),n=t[0],c=t[1],s=function(){c(n-1)},o=function(){c(n+1)},i=[l,j,O];return Object(r.createElement)("div",{className:"gb-migration__content-wrapper"},Object(r.createElement)("div",{className:"container gb-migration__content-container gb-admin-plugin-container"},Object(r.createElement)(v,null),i.map((function(e,t){var c=1+t,a=n===c,i=n>c;return Object(r.createElement)(e,{key:"gb-migration-step-".concat(c),currentStepIndex:n,goToNext:o,goToPrevious:s,isStepActive:a,isStepComplete:i,stepIndex:c})}))))},k=function(e){var t=e.onClick,n=e.checkboxLabel,c=e.stepIndex,s=Object(r.useState)(!1),o=a()(s,2),l=o[0],u=o[1];if(!n)return Object(r.createElement)("button",{className:"btn",onClick:t},Object(i.__)("Next Step","genesis-blocks"));var b="gb-migration-check-".concat(c);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("form",null,Object(r.createElement)("input",{id:b,type:"checkbox",onClick:function(){u(!l)}}),Object(r.createElement)("label",{htmlFor:b,className:"gb-checkbox-label"},n)),Object(r.createElement)("button",{className:"gb-admin-button-primary",onClick:t,disabled:!l},Object(i.__)("Next Step","genesis-blocks")))},_=function(e){var t=e.onClick;return Object(r.createElement)("button",{className:"gb-admin-button-secondary",onClick:t},Object(i.__)("Previous","genesis-blocks"))},v=function(){var e=Object(i.__)("Atomic Blocks has been renamed to Genesis Blocks","genesis-blocks");return genesisBlocksMigration.isPro&&(e=Object(i.__)("We need to update your blocks to give you the latest features!","genesis-blocks")),Object(r.createElement)(r.Fragment,null,Object(r.createElement)("div",{className:"gb-migration-intro"},Object(r.createElement)("h2",null,e),Object(r.createElement)("p",null,Object(i.__)("Same powerful blocks, same beautiful designs, same innovative team.","genesis-blocks")),Object(r.createElement)("p",null,Object(i.__)("To continue receiving the best of what our team is building, we encourage you to migrate. Our migration tool makes this nice and easy, and for the majority of use cases, completely automated.","genesis-blocks")),Object(r.createElement)("div",{className:"inline-notice gb-info"},Object(r.createElement)("p",null,Object(i.__)("Need to let the developer for this site know about this? Send them this link.","genesis-blocks")),Object(r.createElement)("a",{href:"https://wpeng.in/ab-gb-dev/",target:"_blank",rel:"noopener noreferrer",className:"gb-admin-button-link aligned"},Object(r.createElement)("span",null,Object(i.__)("Developer Notice","genesis-blocks"))))),Object(r.createElement)("h2",null,Object(i.__)("Let’s Migrate","genesis-blocks")))},x=n(9),y=n.n(x),E=function(e){var t=e.isActive,n=e.isComplete,c=e.children;return Object(r.createElement)("div",{className:y()("step",{"step--active":t,"step--complete":n})},c)},w=function(e){var t=e.children,n=e.heading,c=e.isStepActive,s=e.isLastStep;return Object(r.createElement)("div",{className:"step-content"},Object(r.createElement)("h3",null,n),(c||s)&&t)},S=function(e){var t=e.children;return Object(r.createElement)("div",{className:"step-footer"},t)},P=function(e){var t=e.index,n=e.isComplete,c="gb-migration-icon-".concat(t),s=Object(r.createElement)("svg",{fill:"currentColor",viewBox:"0 0 20 20","aria-labelledby":c},Object(r.createElement)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}),Object(r.createElement)("title",{id:c},Object(i.__)("Step completed","genesis-blocks")));return Object(r.createElement)("div",{className:"step-icon"},n?s:t)},C=function(e){var t=e.steps,n=e.currentStep,c=e.complete,s=t.map((function(e,s){var o="";return n===s&&(o="active"),(n>s||c&&n===t.length-1)&&(o="done"),Object(r.createElement)("li",{key:s,className:o},e,n===s&&!c&&Object(r.createElement)("div",{className:"gb-migration-progress",role:"progressbar"},Object(r.createElement)("div",{className:"gb-migration-progress-inside"}),Object(r.createElement)("div",{className:"gb-migration-progress-inside gb-migration-progress-animate2"})))}));return Object(r.createElement)("ul",{className:"substeps"},s)};s()((function(){Object(r.render)(Object(r.createElement)(h,null),document.querySelector(".gb-migration__content"))}))}]);
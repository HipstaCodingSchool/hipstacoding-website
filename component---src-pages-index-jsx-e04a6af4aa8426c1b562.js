(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _e}));var n=a("nKUr"),r=a("q1tI"),h=a("W8a9"),i=a("zVja"),o=a("ojUJ"),c=a("vOnD"),s=a("r6+o"),l=a.n(s),m=a("rePB"),v=a("zLVn");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=function(e,t,a){var n="translate(-50%,-50%)";return null!=e&&(n+=" rotateX("+e+"deg)"),null!=t&&(n+=" rotateY("+t+"deg)"),null!=a&&(n+=" rotateZ("+a+"deg)"),n},u=function(e,t,a){var n="translate(-50%,-50%)";return null!=a&&(n+=" rotateZ("+-a+"deg)"),null!=t&&(n+=" rotateY("+-t+"deg)"),null!=e&&(n+=" rotateX("+-e+"deg)"),n},g=function(e,t,a){return void 0===a&&(a=0),Object(c.keyframes)(["0%{transform:",";}100%{transform:",";}"],f(e,t,0+a),f(e,t,360+a))},z=function(e,t,a){return void 0===a&&(a=0),Object(c.keyframes)(["0%{transform:",";}25%{transform:",";}50%{transform:",";}75%{transform:",";}100%{transform:",";}"],u(e,t,0+a),u(e,t,90+a),u(e,t,180+a),u(e,t,270+a),u(e,t,360+a))},j=Object(c.keyframes)(["0%{transform:translateY(0%);}100%{transform:translateY(5%);}"]),w=c.default.div.withConfig({displayName:"AtomImage__Container",componentId:"sc-1fmc76c-0"})(["height:100%;transform-style:preserve-3d;display:flex;align-items:center;justify-content:center;position:relative;perspective:1200px;"]),b=c.default.img.withConfig({displayName:"AtomImage__Img",componentId:"sc-1fmc76c-1"})(["width:auto;height:100%;will-change:transform;animation:"," 2s infinite ease-in-out alternate;"],j),x=c.default.div.withConfig({displayName:"AtomImage__ElectronOrbit",componentId:"sc-1fmc76c-2"})(["position:absolute;left:50%;top:50%;border-radius:50%;height:calc(100% + 100px);width:calc(100% + 100px);will-change:transform;transform-style:preserve-3d;transform:",";animation:"," 4s infinite linear;transform-origin:50% 50%;z-index:0;"],(function(e){return e.transform}),(function(e){return e.animationName})),O=c.default.div.withConfig({displayName:"AtomImage__ElectronContainer",componentId:"sc-1fmc76c-3"})(["transform-origin:50% 50%;position:absolute;border-radius:50%;top:0;left:50%;will-change:transform;transform:",";animation:"," 4s infinite linear;"],(function(e){return e.transform}),(function(e){return e.animationName})),M=[[75,45,0],[-75,45,0],[60,0,90]],H=function(e,t,a){return{orbitTransform:f(e,t,a),orbitAnimationName:g(e,t,a),electronTransform:u(e,t,a),electronAnimationName:z(e,t,a)}},y=function(e){return e.electrons.map((function(e,t){var a=H.apply(null,M[t]),r=a.orbitTransform,h=a.orbitAnimationName,i=a.electronTransform,o=a.electronAnimationName;return Object(n.jsx)(x,{transform:r,animationName:h,children:Object(n.jsx)(O,{transform:i,animationName:o,children:Object(n.jsx)(e,{})})},t)}))};var V=a("Fcvz"),_=a("ufqH");function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var C=c.default.button.withConfig({displayName:"Button__StyledButton",componentId:"ojpa42-0"})(["",";background-color:",";color:",";border-radius:12px;height:70px;padding:0 100px;display:inline-flex;justify-content:center;align-items:center;text-transform:uppercase;transition:background-color 0.3s;&:hover{color:",";background-color:",";}@media ","{padding:0 50px;width:100%;}"],(function(e){return e.theme.fonts.mainFont(25)}),(function(e){return e.theme.colors.controlPrimaryColor}),(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.colors.textColor}),(function(e){var t=e.theme;return Object(_.b)(.1,t.colors.controlPrimaryColor)}),o.c.xs);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var k=r.createElement("path",{d:"M3 62h26a1 1 0 001-1V38a1 1 0 00-.641-.934l-13-5a1.02 1.02 0 00-.718 0l-13 5A1 1 0 002 38v23a1 1 0 001 1zm1-23.313l12-4.616 12 4.616v3.857l-11.641-4.478a1.009 1.009 0 00-.718 0L4 42.544zm0 6l12-4.616 12 4.616V60H4z"}),N=r.createElement("path",{d:"M26 48a4 4 0 10-4 4 4 4 0 004-4zm-4 2a2 2 0 112-2 2 2 0 01-2 2zM18 54v3a1 1 0 001 1h6a1 1 0 001-1v-3a2 2 0 00-2-2h-4a2 2 0 00-2 2zm6 0v2h-4v-2zM15 46H7a1 1 0 00-1 1v6a1 1 0 001 1h1.72l-.69 2.758A1 1 0 009 58h4a1 1 0 00.97-1.242L13.28 54H15a1 1 0 001-1v-6a1 1 0 00-1-1zm-4.719 10l.5-2h.438l.5 2zM14 52H8v-4h6zM55 46h-8a1 1 0 00-1 1v6a1 1 0 001 1h1.72l-.69 2.758A1 1 0 0049 58h4a1 1 0 00.97-1.242L53.28 54H55a1 1 0 001-1v-6a1 1 0 00-1-1zm-4.719 10l.5-2h.438l.5 2zM54 52h-6v-4h6zM21 13A11 11 0 1032 2a11.013 11.013 0 00-11 11zm8.394-8.614A17.34 17.34 0 0026.755 9H23.94a9.041 9.041 0 015.454-4.614zM23 13a8.971 8.971 0 01.233-2H26.2a10.251 10.251 0 000 4h-2.967A8.971 8.971 0 0123 13zm.94 4h2.815a17.34 17.34 0 002.639 4.614A9.041 9.041 0 0123.94 17zM31 20.408A16.176 16.176 0 0128.919 17H31zM31 15h-2.757a8.352 8.352 0 010-4H31zm0-6h-2.081A16.176 16.176 0 0131 5.592zm3.606 12.614A17.34 17.34 0 0037.245 17h2.815a9.041 9.041 0 01-5.454 4.614zM41 13a8.971 8.971 0 01-.233 2H37.8a10.251 10.251 0 000-4h2.964A8.971 8.971 0 0141 13zm-.94-4h-2.815a17.34 17.34 0 00-2.639-4.614A9.041 9.041 0 0140.06 9zM33 5.592A16.176 16.176 0 0135.081 9H33zM33 11h2.757a8.352 8.352 0 010 4H33zm0 6h2.081A16.176 16.176 0 0133 20.408z"}),I=r.createElement("path",{d:"M61 26H41a1 1 0 00-1 1v17h-7a1 1 0 00-1 1v16a1 1 0 001 1h28a1 1 0 001-1V27a1 1 0 00-1-1zM40 60h-6V46h6zm20 0H42V28h18z"}),P=r.createElement("path",{d:"M36 48h2v2h-2zM36 52h2v2h-2zM36 56h2v2h-2zM45 36h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2v2h-2zM53 36h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2v2h-2zM45 44h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2v2h-2zM53 44h4a1 1 0 001-1v-4a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1zm1-4h2v2h-2zM51 12h-6v2h5v6.587l-1.294-1.294-1.414 1.414 3 3a1 1 0 001.414 0l3-3-1.414-1.414L52 20.587V13a1 1 0 00-1-1zM15 13v17h2V14h2v-2h-3a1 1 0 00-1 1z"});function L(e){return r.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:512,height:512},e),k,N,I,P)}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var D=r.createElement("path",{d:"M61 6h-4.788l-8.806-3.914a1 1 0 00-1.065.162L38.624 9H6a1 1 0 00-1 1v18a1 1 0 001 1h39.184a2.983 2.983 0 005.7-.22A2.99 2.99 0 0055 26v-3.465L57.3 21H61a1 1 0 001-1V7a1 1 0 00-1-1zM45 27H7V11h27.184a2.809 2.809 0 000 2h-2.91a7.987 7.987 0 00-12.192 10H11v-8h7v-2h-8a1 1 0 00-1 1v10a1 1 0 001 1h10.726a7.987 7.987 0 0012.192-10H41v8h-7v2h8a1 1 0 001-1v-9h2zm-20-3v.91a5.993 5.993 0 010-11.82V14a3 3 0 000 6h2a1 1 0 010 2h-4v2zm2 0a3 3 0 000-6h-2a1 1 0 010-2h4v-2h-2v-.91a5.993 5.993 0 010 11.82zm22 4a1 1 0 01-2 0v-5h2zm4-2a1 1 0 01-2 0v-3h2zm7-7h-3a1.006 1.006 0 00-.555.168L53.7 21H47v-7a1 1 0 00-1-1h-9a1 1 0 010-2h13V9h-1.586l1.293-1.293-1.414-1.414L45.586 9h-3.925l5.517-4.827 8.416 3.741A1 1 0 0056 8h4z"}),S=r.createElement("path",{d:"M13 18h2v2h-2zM37 18h2v2h-2zM3 60h4v1a1 1 0 001 1h4a1 1 0 001-1v-.847l12.858 1.837A.978.978 0 0026 62a1 1 0 00.447-.1l17.824-8.912a3.46 3.46 0 001.655-4.354 3.27 3.27 0 00-1.869-1.934 4.245 4.245 0 00-3.451.378l-9.911 3.6A3 3 0 0028 49H13v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1H3a1 1 0 00-1 1v9a1 1 0 001 1zm10-9h15a1 1 0 010 2H18v2h10a3 3 0 002.9-2.262l10.445-3.8a.975.975 0 00.105-.045 2.517 2.517 0 011.9-.324 1.312 1.312 0 01.723.8 1.447 1.447 0 01-.693 1.822l-17.548 8.775L13 58.133zm-4-2h2v11H9zm-5 2h3v7H4z"}),T=r.createElement("path",{d:"M38 31H14a2 2 0 00-2 2v12a2 2 0 002 2h24a2 2 0 002-2V33a2 2 0 00-2-2zm-24 2h6v12h-6zm24 12H22V33h16z"}),F=r.createElement("path",{d:"M16 38h2v2h-2z"});function Y(e){return r.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:512,height:512},e),D,S,T,F)}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var W=r.createElement("path",{d:"M32 400H0v40c.027 22.082 17.918 39.973 40 40h304c22.082-.027 39.973-17.918 40-40V176h32V32h-32V8a8 8 0 00-8-8H120a7.964 7.964 0 00-5.664 2.352l-80 80A7.959 7.959 0 0032 88zm-16 40v-24h288v24a39.604 39.604 0 008.207 24H40c-13.254 0-24-10.746-24-24zm384-280H160V48h240zM368 32H144v144h224v264c0 13.254-10.746 24-24 24s-24-10.746-24-24v-32a8 8 0 00-8-8H48V96h72a8 8 0 008-8V16h240zM59.312 80L112 27.312V80zm0 0"}),q=r.createElement("path",{d:"M64 112h16v16H64zm0 0M96 136h16v16H96zm0 0M184 144h48a8 8 0 008-8v-32a8 8 0 00-8-8h-24v16h16v16h-32V80h48V64h-56a8 8 0 00-8 8v64a8 8 0 008 8zm0 0M256 64h16v80h-16zm0 0M312 144h16V80h24V64h-64v16h24zm0 0M64 384h288V192H64zm16-176h256v160H80zm0 0"}),K=r.createElement("path",{d:"M293.656 306.344l-28.082-28.078-37.148 18.535 7.148 14.32 18.328-9.168c-6.156 20.2-24.78 34.016-45.902 34.047a51.499 51.499 0 01-41.441-20.574l-13.118 9.148A67.899 67.899 0 00208 352c28.781-.055 53.996-19.293 61.648-47.04l12.696 12.696zm0 0M180.426 264.8l-18.328 9.169c6.187-20.172 24.804-33.95 45.902-33.969a45.474 45.474 0 0141.152 20.129l13.696-8.258A60.804 60.804 0 00208 224c-28.781.055-53.996 19.293-61.648 47.04l-12.696-12.696-11.312 11.312 28.082 28.078 37.148-18.535zm0 0M96 224h16v16H96zm0 0M288 336h32v16h-32zm0 0"});function R(e){return r.createElement("svg",J({height:640,viewBox:"-32 0 480 480",width:640,xmlns:"http://www.w3.org/2000/svg"},e),W,q,K)}function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var X=r.createElement("path",{d:"M10 40h2v2h-2zM33 40h2v2h-2zM29 40h2v2h-2zM52 40h2v2h-2z"}),Z=r.createElement("path",{d:"M61 32H49.414l-6.846-6.846a14 14 0 10-21.136 0L14.586 32H3a1 1 0 00-1 1v29h18v-6h-4V33.414l6.846-6.846A13.919 13.919 0 0031 29.949V32h-5a1 1 0 00-1 1v15a3 3 0 00-3 3v11h20V51a3 3 0 00-3-3V33a1 1 0 00-1-1h-5v-2.051a13.919 13.919 0 008.154-3.381L48 33.414V56h-4v6h18V33a1 1 0 00-1-1zM4 34h10v2H4zm0 4h10v6H8v-2H6v4h8v2H4zm2 15v7H4V50h10v6h-2v-3a3 3 0 00-6 0zm12 5v2H8v-7a1 1 0 012 0v5zm8 2h-2v-9a1 1 0 011-1h1zm12-10h1a1 1 0 011 1v9h-2zm-2 10h-8V50h8zm1-12H27V38h10zm0-14v2H27v-2zm-5-6a12 12 0 1112-12 12.013 12.013 0 01-12 12zm24 32H46v-2h8v-5a1 1 0 012 0zm4 0h-2v-7a3 3 0 00-6 0v3h-2v-6h10zm0-12H50v-2h8v-4h-2v2h-6v-6h10zm0-12H50v-2h10z"}),G=r.createElement("path",{d:"M29 44h6v2h-6zM32 6a6.993 6.993 0 00-5 11.889v5.525L29.586 26h4.828L37 23.414V17.89A6.994 6.994 0 0032 6zm3 16.586L33.586 24h-3.172L29 22.586V21h6zm.332-5.867l-.332.3V19h-2v-3h2v-2h-6v2h2v3h-2v-1.983l-.333-.3a5 5 0 116.665 0zM3 26h8.9l4.9.98a.932.932 0 00.2.02 1 1 0 00.929-1.372L16 20.808V17a1 1 0 00-1-1H3a1 1 0 00-1 1v8a1 1 0 001 1zm1-8h10v3a1.012 1.012 0 00.071.372l1.315 3.285-3.186-.637A.925.925 0 0012 24H4z"}),Q=r.createElement("path",{d:"M6 20h2v2H6zM10 20h2v2h-2zM61 12H49a1 1 0 00-1 1v4.808l-1.929 4.82a1 1 0 001.3 1.3L52.192 22H61a1 1 0 001-1v-8a1 1 0 00-1-1zm-1 8h-8a1.012 1.012 0 00-.372.071L48.8 21.205l1.134-2.833A1.012 1.012 0 0050 18v-4h10z"}),$=r.createElement("path",{d:"M56 16h2v2h-2zM52 16h2v2h-2z"});function ee(e){return r.createElement("svg",U({height:512,viewBox:"0 0 64 64",width:512,xmlns:"http://www.w3.org/2000/svg"},e),X,Z,G,Q,$)}function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ae=r.createElement("path",{d:"M59 2H5a3 3 0 00-3 3v44a3 3 0 003 3h20.132l-2.667 4H14a1 1 0 00-1 1v4a1 1 0 001 1h36a1 1 0 001-1v-4a1 1 0 00-1-1h-8.465l-2.667-4H59a3 3 0 003-3V5a3 3 0 00-3-3zM49 58v2H15v-2zm-9.868-2H24.868l2.667-4h8.93zM60 49a1 1 0 01-1 1H5a1 1 0 01-1-1v-5h56zm0-7H4V5a1 1 0 011-1h54a1 1 0 011 1z"}),ne=r.createElement("path",{d:"M35 47a3 3 0 10-3 3 3 3 0 003-3zm-3 1a1 1 0 111-1 1 1 0 01-1 1zM22 6H6v6h16zm-2 4H8V8h12zM6 36h20v-6H6zm2-4h16v2H8zM28 36h20v-6H28zm2-4h16v2H30zM6 38h20v2H6zM28 38h2v2h-2zM32 38h16v2H32zM50 30h8v2h-8zM50 34h8v2h-8zM50 38h8v2h-8zM12 18H6v10h6zm-2 8H8v-6h2zM20 28V16h-6v12zm-4-10h2v8h-2zM22 28h6V14h-6zm2-12h2v10h-2zM36 8h-6v20h6zm-2 18h-2V10h2zM48 8a10 10 0 1010 10A10.011 10.011 0 0048 8zm1 2.069a7.953 7.953 0 013.9 1.619l-3.9 3.9zM48 26a8 8 0 01-1-15.931V18a1 1 0 00.3.7l-.006.006 5.606 5.606A7.953 7.953 0 0148 26zm6.312-3.1l-4.9-4.9 4.9-4.9a7.949 7.949 0 010 9.8zM57 6h-3v2h2v2h2V7a1 1 0 00-1-1zM24 6h2v2h-2z"});function re(e){return r.createElement("svg",te({height:512,viewBox:"0 0 64 64",width:512,xmlns:"http://www.w3.org/2000/svg"},e),ae,ne)}function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var ie=r.createElement("path",{d:"M61 51h-1v-9a1 1 0 00-1.095-1c-18.517 1.764-24.818 5.133-26.215 6.039-.231-.01-.446-.039-.69-.039s-.459.029-.69.043c-1.4-.906-7.7-4.275-26.215-6.039A1 1 0 004 42v9H3a1 1 0 00-1 1v4a1 1 0 001 1h25a1 1 0 001-1 3 3 0 016 0 1 1 0 001 1h25a1 1 0 001-1v-4a1 1 0 00-1-1zm-51 4H4v-2h6zm-4-4v-2h12v-2H6v-3.9c12.678 1.286 19.193 3.332 22.188 4.6a7.781 7.781 0 00-3.782 3.3zm46 4H36.9a5 5 0 00-9.8 0H12v-2h13a1 1 0 00.895-.553C27.038 50.16 29.092 49 32 49s4.962 1.16 6.1 3.447A1 1 0 0039 53h13zm-12.406-4a7.772 7.772 0 00-3.808-3.307C38.74 46.432 45.205 44.4 58 43.1V47H46v2h12v2zM60 55h-6v-2h6z"}),oe=r.createElement("path",{d:"M42 47h2v2h-2zM11 15a1 1 0 00-1 1v20a1 1 0 001 1h10.685l9.742 6.819A1 1 0 0032 44a1 1 0 001-1v-6h10a1 1 0 001-1V16a1 1 0 00-1-1zm31 20H32a1 1 0 00-1 1v5.08l-8.427-5.9A1 1 0 0022 35H12V17h30z"}),ce=r.createElement("path",{d:"M14 19h10v2H14zM14 23h6v2h-6zM26 19h14v2H26zM14 27h17v2H14zM22 23h18v2H22zM33 27h7v2h-7zM14 31h26v2H14zM46 18h2c0-7.909-6.93-8-7-8v2c.2 0 5 .068 5 6z"}),se=r.createElement("path",{d:"M50 18h2C52 6.137 41.11 6 41 6v2c.368 0 9 .114 9 10zM6 18h2c0-5.782 4.493-5.995 5.005-6L13 10c-.07 0-7 .091-7 8z"}),le=r.createElement("path",{d:"M13 8V6c-.11 0-11 .137-11 12h2c0-9.84 8.635-10 9-10z"});function me(e){return r.createElement("svg",he({height:512,viewBox:"0 0 64 64",width:512,xmlns:"http://www.w3.org/2000/svg"},e),ie,oe,ce,se,le)}var ve=a("nuy0"),de=a("Wbzz"),pe=c.default.div.withConfig({displayName:"pages__Container",componentId:"sc-1wwwhae-0"})(["padding:20px;overflow:hidden;& > *{max-width:","px;width:100%;margin:0 auto;}"],o.a),fe=c.default.button.withConfig({displayName:"pages__HeaderLink",componentId:"sc-1wwwhae-1"})(["padding:30px;color:white;display:inline-block;"]),ue=c.default.h1.withConfig({displayName:"pages__CourseTitle",componentId:"sc-1wwwhae-2"})(['font-size:72px;font-family:"Montserrat",sans-serif;font-weight:800;color:white;@media ',"{font-size:36px;}@media ","{font-size:48px;padding-right:260px;}@media ","{font-size:72px;}@media ","{padding-right:300px;}"],o.c.xs,o.c.sm,o.c.md,o.c.lg),ge=c.default.h2.withConfig({displayName:"pages__CourseSubtitle",componentId:"sc-1wwwhae-3"})(['font-size:27px;font-family:"Montserrat",sans-serif;color:white;letter-spacing:0.05em;margin-top:60px;@media ',"{width:50%;}"],o.c.sm),ze=c.default.div.withConfig({displayName:"pages__Banner",componentId:"sc-1wwwhae-4"})(["position:relative;min-height:580px;height:100%;@media ","{padding:20px 0;}"],o.c.sm),je=Object(c.default)((function(e){var t=e.src,a=e.className,r=e.electrons,h=Object(v.a)(e,["src","className","electrons"]);return Object(n.jsxs)(w,{className:a,children:[Object(n.jsx)(b,p(p({},h),{},{src:t})),Object(n.jsx)(y,{electrons:r})]})})).withConfig({displayName:"pages__HeroImage",componentId:"sc-1wwwhae-5"})(["position:absolute;top:50px;right:0;height:calc(100vh - 120px - 100px);width:calc(100vh - 120px - 100px);max-width:400px;max-height:400px;@media ","{position:relative;top:0;margin:50px auto;display:flex;align-items:center;width:100%;justify-content:center;}"],o.c.xs),we=Object(c.default)((function(e){return Object(n.jsx)(C,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e))})).withConfig({displayName:"pages__SubscribeButton",componentId:"sc-1wwwhae-6"})(["margin-top:50px;"]),be=c.default.h3.withConfig({displayName:"pages__StagesTitle",componentId:"sc-1wwwhae-7"})(["",";@media ","{font-size:36px;}color:",";"],(function(e){return e.theme.fonts.mainFont(58,800)}),o.c.xs,(function(e){return e.theme.colors.textSecondaryColor})),xe=c.default.section.withConfig({displayName:"pages__ProfitContainer",componentId:"sc-1wwwhae-8"})(["margin-top:50px;"]),Oe=c.default.svg.withConfig({displayName:"pages__ProfitIcon",componentId:"sc-1wwwhae-9"})(["fill:white;width:100px;height:auto;margin-bottom:50px;"]),Me=c.default.ul.withConfig({displayName:"pages__ProfitList",componentId:"sc-1wwwhae-10"})(["display:grid;margin:60px 0;padding:0;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));grid-gap:50px;"]),He=c.default.li.withConfig({displayName:"pages__ProfitContent",componentId:"sc-1wwwhae-11"})(["margin:10px 0;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;text-align:center;"]),ye=c.default.div.withConfig({displayName:"pages__FooterLink",componentId:"sc-1wwwhae-12"})(["text-align:right;"]),Ve=c.default.div.withConfig({displayName:"pages__NoWarranties",componentId:"sc-1wwwhae-13"})(["",";margin-bottom:50px;"],(function(e){return e.theme.fonts.mainFont(18)}));function _e(){var e=function(){return Object(de.navigate)("/welcome")};return Object(n.jsxs)(h.a,{children:[Object(n.jsx)(i.a,{}),Object(n.jsx)(V.a,{children:Object(n.jsx)(fe,{onClick:e,title:"Запишись плиз",children:"Запись"})}),Object(n.jsxs)(pe,{as:"main",children:[Object(n.jsxs)(ze,{id:"subscribe",children:[Object(n.jsx)(ue,{children:"FRONT END КУРСЫ И ПЕРСОНАЛЬНЫЕ УРОКИ"}),Object(n.jsx)(je,{alt:"Человек с ноутбуком летает и вокруг внего вращаются html, js и react",src:l.a,electrons:[ve.b,ve.c,ve.a],width:"380",height:"400"}),Object(n.jsxs)(ge,{children:["Научим кодить и"," ",Object(n.jsx)("a",{target:"_blank ",href:"https://djinni.co/salaries/front-end/",children:"зарабатывать"})," ","много денег!",Object(n.jsx)("a",{href:"#no-warranties",children:"*"})]}),Object(n.jsx)(we,{onClick:e,"aria-label":"subscribe",children:"Записаться"})]}),Object(n.jsxs)(xe,{id:"profits",children:[Object(n.jsx)(be,{children:"Преймущества Hipsta Coding School"}),Object(n.jsxs)(Me,{children:[Object(n.jsxs)(He,{children:[Object(n.jsx)(Oe,{as:me}),Object(n.jsx)("h4",{children:"Нам нечего скрывать"}),Object(n.jsx)("p",{children:"Ведь у нас открытый исходный код и бесплатные видеоуроки"})]}),Object(n.jsxs)(He,{children:[Object(n.jsx)(Oe,{as:L}),Object(n.jsx)("h4",{children:"Минимум рутины"}),Object(n.jsx)("p",{children:"Запись на персональное и групповые онлайн занятия в 3 клика"})]}),Object(n.jsxs)(He,{children:[Object(n.jsx)(Oe,{as:Y}),Object(n.jsx)("h4",{children:"Оплата по факту"}),Object(n.jsx)("p",{children:"За занятие или месяц подписки"})]}),Object(n.jsxs)(He,{children:[Object(n.jsx)(Oe,{as:R}),Object(n.jsx)("h4",{children:"Реальные условия"}),Object(n.jsx)("p",{children:"С использованием GitHub и Code Review с первого занятия"})]}),Object(n.jsxs)(He,{children:[Object(n.jsx)(Oe,{as:ee}),Object(n.jsx)("h4",{children:"Персональные проекты"}),Object(n.jsx)("p",{children:"Выделят вас среди посредственных кандидатов"})]}),Object(n.jsxs)(He,{children:[Object(n.jsx)(Oe,{as:re}),Object(n.jsx)("h4",{children:"Научим учиться"}),Object(n.jsx)("p",{children:"И подготовим к самостоятельной жизни в суровом мире IT"})]})]}),Object(n.jsxs)(Ve,{id:"no-warranties",children:["* Мы не гарантируем вам много денег и классную работу, как и не могут гарантировать любые"," ",Object(n.jsx)("a",{href:"https://ebanoe.it/tag/%d0%b3%d0%be%d0%b2%d0%bd%d0%be%d0%ba%d1%83%d1%80%d1%81%d1%8b/",target:"_blank",children:"другие курсы"}),"."]})]})]}),Object(n.jsxs)(V.a,{children:[Object(n.jsxs)(ye,{children:["Icons made by"," ",Object(n.jsx)("a",{target:"_blank",href:"https://www.flaticon.com/authors/smalllikeart",title:"smalllikeart",children:"smalllikeart"})," ","from"," ",Object(n.jsx)("a",{target:"_blank",href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(n.jsxs)(ye,{children:["Logo and design made by"," ",Object(n.jsx)("a",{target:"_blank",href:"https://www.instagram.com/okeydsgn/",title:"Okey Instagram",children:"okeydsgn"})," ","from Odessa"]}),Object(n.jsxs)(ye,{children:["Courses and"," ",Object(n.jsxs)("a",{target:"_blank",href:"https://github.com/xlwknx",title:"Lewkan",children:["development"," "]})," ","by",Object(n.jsxs)("a",{target:"_blank",href:"https://www.instagram.com/tony_hawks_underground/",title:"Lewkan Instagram",children:[" ","lewkan"]})," ","from Kyiv"]})]})]})}},"r6+o":function(e,t,a){e.exports=a.p+"static/hero-image-4a1b188626074ef3b34b5e3eddcb16c1.png"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e04a6af4aa8426c1b562.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=c(e),a=f(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,v=S&&window.IntersectionObserver,E=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var V=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+o+s+l+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=o.default.createElement(L,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?o.default.createElement("picture",null,i(r),l):l})),L=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,m=e.draggable,f=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":f,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:m,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||S&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:S}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=V(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=f(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,u=e.placeholderStyle,m=void 0===u?{}:u,f=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,S=e.durationFadeIn,v=e.Tag,E=e.itemProp,x=e.loading,j=e.draggable,V=h||g;if(!V)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:T?1:0,transition:z?"opacity "+S+"ms":"none"},l),N="boolean"==typeof b?"lightgray":b,P={transitionDelay:S+"ms"},H=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&P,l,m),_={title:t,alt:this.state.isVisible?"":a,style:H,className:f,itemProp:E},k=this.state.isHydrated?p(V):V[0];if(h)return o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:k.maxWidth?k.maxWidth+"px":null,maxHeight:k.maxHeight?k.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},o.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),N&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&P)}),k.base64&&o.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:_,imageVariants:V,generateSources:w}),k.tracedSVG&&o.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:_,imageVariants:V,generateSources:O}),this.state.isVisible&&o.default.createElement("picture",null,y(V),o.default.createElement(L,{alt:a,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:x},k,{imageVariants:V}))}}));if(g){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete W.display,o.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},N&&o.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},z&&P)}),k.base64&&o.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:k.base64,spreadProps:_,imageVariants:V,generateSources:w}),k.tracedSVG&&o.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:k.tracedSVG,spreadProps:_,imageVariants:V,generateSources:O}),this.state.isVisible&&o.default.createElement("picture",null,y(V),o.default.createElement(L,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:j})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)({alt:a,title:t,loading:x},k,{imageVariants:V}))}}))}return null},t}(o.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function N(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}T.propTypes={resolutions:z,sizes:C,fixed:N(u.default.oneOfType([z,u.default.arrayOf(z)])),fluid:N(u.default.oneOfType([C,u.default.arrayOf(C)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var P=T;t.default=P},Eo37:function(e,t,a){e.exports={title:"ws-template-modules-module--title--3wo-V"}},i7hb:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var r=a("q1tI"),i=a.n(r),n=a("wx14"),s=a("zLVn"),l=a("TSYQ"),d=a.n(l),o=a("vUet"),u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,l=e.pill,u=e.className,c=e.as,m=void 0===c?"span":c,f=Object(s.a)(e,["bsPrefix","variant","pill","className","as"]),p=Object(o.a)(a,"badge");return i.a.createElement(m,Object(n.a)({ref:t},f,{className:d()(u,p,l&&p+"-pill",r&&p+"-"+r)}))}));u.displayName="Badge",u.defaultProps={pill:!1};var c=u,m=a("7vrA"),f=a("3Z9Z"),p=a("JI6e"),h=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.striped,u=e.bordered,c=e.borderless,m=e.hover,f=e.size,p=e.variant,h=e.responsive,g=Object(s.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),b=Object(o.a)(a,"table"),S=d()(r,b,p&&b+"-"+p,f&&b+"-"+f,l&&b+"-striped",u&&b+"-bordered",c&&b+"-borderless",m&&b+"-hover"),v=i.a.createElement("table",Object(n.a)({},g,{className:S,ref:t}));if(h){var E=b+"-responsive";return"string"==typeof h&&(E=E+"-"+h),i.a.createElement("div",{className:E},v)}return v})),g=a("9eSz"),b=a.n(g),S=a("RMg3"),v=a("Eo37"),E=a.n(v),y=function(e){return i.a.createElement("div",null,i.a.createElement("h3",{className:E.a.title},e.name," ",i.a.createElement(c,{variant:"secondary"},"New")))},x=function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,e.description),i.a.createElement("td",null,e.current,e.measure),i.a.createElement("td",null,e.minValue,e.measure," alle ",e.minTime),i.a.createElement("td",null,e.maxValue,e.measure," alle ",e.maxTime))},O=function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,e.description),i.a.createElement("td",null,e.current,e.measure),i.a.createElement("td",null,"-"),i.a.createElement("td",null,"-"))},w=function(){return i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"Sensore"),i.a.createElement("th",{scope:"col"},"Attuale"),i.a.createElement("th",{scope:"col"},"Minimo"),i.a.createElement("th",{scope:"col"},"Massimo")))};function j(e){var t=e.pageContext,a=e.data,n=t,s=Object(r.useState)(0),l=s[0],d=s[1],o=Object(r.useState)(0),u=o[0],c=o[1],g=Object(r.useState)(0),v=g[0],E=g[1],j=Object(r.useState)(0),V=j[0],R=j[1],I=Object(r.useState)(0),L=I[0],T=I[1],z=Object(r.useState)(0),C=z[0],N=z[1],P=Object(r.useState)(0),H=P[0],_=P[1],k=Object(r.useState)(0),W=k[0],M=k[1],q=Object(r.useState)(0),G=q[0],A=q[1],F=Object(r.useState)(0),U=F[0],J=F[1],B=Object(r.useState)(0),D=B[0],Y=B[1],Z=Object(r.useState)(0),Q=Z[0],K=Z[1],X=Object(r.useState)(0),$=X[0],ee=X[1],te=Object(r.useState)(0),ae=te[0],re=te[1],ie=Object(r.useState)(0),ne=ie[0],se=ie[1],le=Object(r.useState)(0),de=le[0],oe=le[1],ue=Object(r.useState)(0),ce=ue[0],me=ue[1],fe=Object(r.useState)(0),pe=fe[0],he=fe[1],ge=Object(r.useState)(0),be=ge[0],Se=ge[1],ve=Object(r.useState)(0),Ee=ve[0],ye=ve[1],xe=Object(r.useState)(0),Oe=xe[0],we=xe[1],je=Object(r.useState)(0),Ve=je[0],Re=je[1],Ie=Object(r.useState)(0),Le=Ie[0],Te=Ie[1],ze=Object(r.useState)(0),Ce=ze[0],Ne=ze[1],Pe=Object(r.useState)(0),He=Pe[0],_e=Pe[1],ke=Object(r.useState)(0),We=ke[0],Me=ke[1],qe=Object(r.useState)(0),Ge=qe[0],Ae=qe[1],Fe=Object(r.useState)(0),Ue=Fe[0],Je=Fe[1],Be=Object(r.useState)(0),De=Be[0],Ye=Be[1],Ze=Object(r.useState)(0),Qe=Ze[0],Ke=Ze[1];return Object(r.useEffect)((function(){fetch("http://localhost:8080/data").then((function(e){return e.json()})).then((function(e){d(e[0].temperature.current),c(e[0].temperature.min.value),E(e[0].temperature.min.time),R(e[0].temperature.max.value),T(e[0].temperature.max.time),N(e[0].humidity.current),_(e[0].humidity.min.value),M(e[0].humidity.min.time),A(e[0].humidity.max.value),J(e[0].humidity.max.time),oe(e[0].dew_point.current),me(e[0].dew_point.min.value),he(e[0].dew_point.min.time),Se(e[0].dew_point.max.value),ye(e[0].dew_point.max.time),we(e[0].heat_index.current),Re(e[0].heat_index.min.value),Te(e[0].heat_index.min.time),Ne(e[0].heat_index.max.value),_e(e[0].heat_index.max.time),Me(e[0].wind_chill.current),Ae(e[0].wind_chill.min.value),Je(e[0].wind_chill.min.time),Ye(e[0].wind_chill.max.value),Ke(e[0].wind_chill.max.time),Y(e[0].pressure.current),K(e[0].pressure.min.value),ee(e[0].pressure.min.time),re(e[0].pressure.max.value),se(e[0].pressure.max.time)}))}),[n]),i.a.createElement(m.a,null,i.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossOrigin:"anonymous"}),i.a.createElement(f.a,null,i.a.createElement(p.a,null,i.a.createElement(S.a,null))),i.a.createElement(f.a,null,i.a.createElement(p.a,null),i.a.createElement(p.a,null),i.a.createElement(p.a,null,i.a.createElement(b.a,{fluid:a.headerImage.childImageSharp.fluid,alt:"datimeteoasti"})),i.a.createElement(p.a,null),i.a.createElement(p.a,null)),i.a.createElement(f.a,null,i.a.createElement(p.a,null,i.a.createElement(y,{name:"Osservatorio meteorologico di ASTI nord, zona Ospedale C. Massaia - 155 m s. l. m."}),i.a.createElement(h,{striped:!0,bordered:!0,hover:!0},i.a.createElement(w,null),i.a.createElement("tbody",null,i.a.createElement(x,{description:"Temperatura",current:l,minValue:u,minTime:v,maxValue:V,maxTime:L,measure:"°C"}),i.a.createElement(x,{description:"Umidità",current:C,minValue:H,minTime:W,maxValue:G,maxTime:U,measure:"%"}),i.a.createElement(x,{description:"Dew point",current:de,minValue:ce,minTime:pe,maxValue:be,maxTime:Ee,measure:"°C"}),i.a.createElement(x,{description:"Heat index",current:Oe,minValue:Ve,minTime:Le,maxValue:Ce,maxTime:He,measure:"°C"}),i.a.createElement(x,{description:"Wind chill",current:We,minValue:Ge,minTime:Ue,maxValue:De,maxTime:Qe,measure:"°C"}),i.a.createElement(x,{description:"Pressione",current:D,minValue:Q,minTime:$,maxValue:ae,maxTime:ne,measure:" hPa"}),i.a.createElement(O,{description:"Direzione vento",current:"SW",min:"-",max:"-"}))))))}}}]);
//# sourceMappingURL=component---src-templates-ws-template-js-5139d61eca81f1aa5804.js.map
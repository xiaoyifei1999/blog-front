(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{iyQ6:function(a,t,e){"use strict";e.r(t);e("Kw5r");var n=e("DOVJ"),s=(e("Y6W1"),e("ma9I"),e("2B1R"),e("qePV"),e("rB9j"),e("UxlC"),e("VTBJ")),i=e("fVfk"),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(a,t){var e=t.props,l=t.data,o=t.parent,u=e.info,c=e.showLinks,g=e.showNavigation,d=e.ariaLabel,p=function(a,t){var e=a.currentPage,n=void 0===e?1:e,s=a.totalPages,i=void 0===s?1:s,l=Math.ceil(t/2),r=Math.floor(n-l),o=Math.floor(n+l);i<=t?(r=0,o=i):n<=l?(r=0,o=t):n+l>=i&&(r=i-t,o=i);for(var u=[],c=r+1;c<=o;c++)u.push(c);return{current:n,total:i,start:r,end:o,pages:u}}(u,e.range),v=p.current,f=p.total,b=p.pages,C=p.start,L=p.end,y=Object(i.d)(o.$route),h=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";t===v&&(l=e.ariaCurrentLabel);var u={to:r(y,t),exact:!0};return e.activeLinkClass&&(u.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(u.exactActiveClass=e.exactActiveLinkClass),a(n.a,{class:[e.linkClass,o],attrs:Object(s.a)(Object(s.a)({},u),{},{"aria-label":l.replace("%n",t),"aria-current":v===t})},[i])},k=c?b.map((function(a){return h(a,a,e.ariaLinkLabel)})):[];if(g){var S=e.firstLabel,_=e.prevLabel,x=e.nextLabel,m=e.lastLabel,w=e.ariaFirstLabel,P=e.ariaPrevLabel,O=e.ariaNextLabel,j=e.ariaLastLabel,N=e.firstClass,$=e.prevClass,G=e.nextClass,I=e.lastClass,A=e.navClass;v>1&&k.unshift(h(v-1,_,P,[$,A])),C>0&&k.unshift(h(1,S,w,[N,A])),v<f&&k.push(h(v+1,x,O,[G,A])),L<f&&k.push(h(f,m,j,[I,A]))}return k.length<2?null:a("nav",Object(s.a)(Object(s.a)({},l),{},{attrs:{role:"navigation","aria-label":d}}),k)}};function r(a,t){var e=/\/$/.test(a)?"/":"";return t>1?Object(i.g)(a)+"/".concat(t).concat(e):a}e("6NbQ");var o={name:"HomePage",metaInfo:{title:"Hello, world!"},computed:{general:function(){return console.log(this.$page.general),this.$page.general.edges[0].node}},components:{Pager:l}},u=e("KHd+"),c=null,g=Object(u.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("Layout",[e("header",{staticClass:"masthead",style:{backgroundImage:"url("+(a.GRIDSOME_API_URL+a.general.cover.url)}},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-md-10 mx-auto"},[e("div",{staticClass:"site-heading"},[e("h1",[a._v(a._s(a.general.title))]),e("span",{staticClass:"subheading"},[a._v(a._s(a.general.sub))])])])])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-md-10 mx-auto"},[a._l(a.$page.posts.edges,(function(t){return e("div",{key:t.node.id,staticClass:"post-preview"},[e("g-link",{attrs:{to:"/post/"+t.node.id}},[e("h2",{staticClass:"post-title"},[a._v("\n              "+a._s(t.node.title)+"\n            ")])]),e("p",{staticClass:"post-meta"},[a._v("Posted by\n            "),e("a",{attrs:{href:"#"}},[a._v("xiaoyifei")]),a._v("\n            on "+a._s(t.node.created_at)+"\n          ")]),e("p",a._l(t.node.tags,(function(t){return e("span",[e("g-link",{key:t.id,attrs:{to:"/tag/"+t.id}},[a._v(a._s(t.title))]),a._v("\n                \n            ")],1)})),0),e("hr")],1)})),e("Pager",{attrs:{info:a.$page.posts.pageInfo}})],2)])])])}),[],!1,null,null,null);"function"==typeof c&&c(g);t.default=g.exports}}]);
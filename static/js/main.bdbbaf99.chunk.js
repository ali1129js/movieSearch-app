(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=(a(23),a(25),a(1)),l=a(7);function s(){var e=Object(l.a)(["\n  background: linear-gradient(to bottom right, #3498db, papayawhip, #8e44ad);\n  margin: auto;\n  box-shadow: 10px 10px 10px #2d3436;\n  font-size: 1em;\n  text-align: center;\n  height: 80vh;\n"]);return s=function(){return e},e}var u=a(8).a.div(s()),m={position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"#3498db",padding:50},d=function(e){return e.show?r.a.createElement("div",{className:"backdrop",style:m},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"header"},r.a.createElement("button",{className:"btn btn-outline-dark",onClick:e.onClose},"Close")),r.a.createElement(u,null,e.title,r.a.createElement("p",null," ",e.overview," "),r.a.createElement("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.backdrop),alt:e.title,width:"50%"})))))):null},p=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],c=a[1],l=function(){c(!o)};return o?r.a.createElement(d,{show:o,onClose:l,title:e.title,votes:e.votes,overview:e.overview,backdrop:e.backdrop}):r.a.createElement("div",{className:"item",onClick:l},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster),alt:e.title}))},v=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),o=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"search"},r.a.createElement("input",{value:o,onChange:function(e){c(e.target.value)},type:"text"}),r.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(o),c("")},type:"submit",value:"Search"})),r.a.createElement("div",{className:"row mt-5"},function(){if(e.results)return e.results.map(function(e){return r.a.createElement(p,{key:e.id,title:e.title,overview:e.overview,poster:e.poster_path,votes:e.vote_average,backdrop:e.backdrop_path})})}()))},h=a(11),f=a(12),b=a(14),g=a(13),E=a(15),w=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).loadContent=function(){var e="https://api.themoviedb.org/3/".concat(a.props.url,"&api_key=").concat("47f4916d0ee28668a71be63f17e63dfd");fetch(e).then(function(e){return e.json()}).then(function(e){return a.setState({data:e})}).catch(function(e){return console.error("Something is wrong with fetch")})},a.state={data:[]},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadContent()}},{key:"render",value:function(){return this.state.data.results?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("strong",null," ",this.props.title," "),r.a.createElement("div",{className:"row"},this.state.data.results.map(function(e){return r.a.createElement(p,{key:e.id,title:e.title,overview:e.overview,poster:e.poster_path,votes:e.vote_average,backdrop:e.backdrop_path})})))):r.a.createElement("div",{className:"loading"},"loading...")}}]),t}(n.Component),y=(a(33),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1];return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(v,{search:function(e){var t="https://api.themoviedb.org/3/search/multi?query=".concat(e,"&api_key=").concat("47f4916d0ee28668a71be63f17e63dfd");fetch(t).then(function(e){return e.json()}).then(function(e){return o(e.results)})},results:a}),r.a.createElement("div",{className:"row"},r.a.createElement(w,{title:"Trending now",url:"discover/movie?certification_country=US&sort_by=popularity.desc&page=1"})),r.a.createElement("div",{className:"row"},r.a.createElement(w,{title:"Top Rated Movies",url:"movie/top_rated?"})),r.a.createElement("div",{className:"row"},r.a.createElement(w,{title:"Comedy magic",url:"genre/35/movies?certification_country=US&sort_by=popularity.desc&page=1"})),r.a.createElement("div",{className:"row"},r.a.createElement(w,{title:"Sci-Fi greats",url:"genre/878/movies?certification_country=US&sort_by=popularity.desc&page=1"})),r.a.createElement("div",{className:"row"},r.a.createElement(w,{title:"Top TV picks",url:"genre/27/movies?certification_country=US&sort_by=popularity.desc&page=1"})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.bdbbaf99.chunk.js.map
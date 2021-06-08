(this["webpackJsonpgoogle-books"]=this["webpackJsonpgoogle-books"]||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(31),r=n.n(c),o=(n(38),n(32)),i=n(2),l=(n(39),n(40),n(9)),u=n(10),d=n(12),b=n(11),h=n(0),j=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.title="Google Book Search"}},{key:"render",value:function(){return Object(h.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(h.jsx)("a",{class:"navbar-brand",href:"#",children:"Google Books Saver"}),Object(h.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{class:"navbar-toggler-icon"})}),Object(h.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(h.jsxs)("div",{class:"navbar-nav",children:[Object(h.jsx)("a",{class:"nav-item nav-link ",href:"/",children:"Search "}),Object(h.jsx)("a",{class:"nav-item nav-link",href:"/saved",children:"Saved Books"})]})})]})}}]),n}(a.Component),p=n(7),v=n.n(p),m=n(13),f=n(16),x=n.n(f);n(60).config();Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT;function O(e){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("http://localhost:3000/api/books",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(m.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3000/api/books");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return S.apply(this,arguments)}function S(){return(S=Object(m.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x.a.post("http://localhost:3000/api/books/"+t));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).Addtofav=function(){var e=Object(m.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:(n=(n=e.sent).data).error,alert(n.message);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.delete=function(){var t=Object(m.a)(v.a.mark((function t(n){var a,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n._id,t.next=3,y(a);case 3:(s=(s=t.sent).data).error||e.props.deleteBook(n.book_id),alert(s.message);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.title="Google Book Search"}},{key:"render",value:function(){var e=this,t=this.props.book,n="btn-success",a="Save Book";this.props.saved&&(n="btn-danger",a="Remove");var s,c=t.authors,r="",o=t.link?t.link:"#",i=t.description?t.description.substring(0,80):"";return c&&c.map((function(e,t){2==t&&(r+=", "),r+=e})),t.image,s=t.image,Object(h.jsxs)("div",{className:"col col-md-4 card m-1",children:[Object(h.jsx)("img",{className:"card-img-top img-thumbnail",src:s,alt:"Card image cap"}),Object(h.jsxs)("div",{class:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:t.title}),Object(h.jsxs)("p",{className:"card-text",children:["Auhtors : ",r]}),Object(h.jsxs)("p",{className:"card-text",children:["Publisher : ",t.publisher]}),Object(h.jsxs)("p",{className:"card-text",children:["Published Year : ",t.publishedDate]}),Object(h.jsxs)("p",{className:"card-text",title:t.description,children:["Description : ",i]}),Object(h.jsxs)("div",{className:"card-buton-row",children:[Object(h.jsx)("a",{href:o,className:"btn btn-primary",children:"View Book"}),Object(h.jsx)("a",{className:"btn  float-right "+n,onClick:this.props.saved?function(){return e.delete(t)}:function(){return e.Addtofav(t)},children:a})]})]})]})}}]),n}(a.Component),w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).updateSearchText=function(e){e.target.value?(a.setState({isLoaded:!1}),a.setState({searchText:e.target.value})):(a.setState({isLoaded:!0}),a.setState({isEmpty:!0}))},a.searchBooks=function(){(function(e){return x.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&maxResults=20&key=AIzaSyCf-hE4wospNNs_NCIQOlX2LceaXcWYgdE")})(a.state.searchText).then((function(e){e.data.items?(a.setState({books:e.data.items}),a.setState({isEmpty:!1}),a.setState({isLoaded:!0})):(a.setState({books:[]}),a.setState({isEmpty:!0}),a.setState({isLoaded:!0}))}))},a.state={books:[],isLoaded:!0,searchText:null,isEmpty:!0},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.isEmpty,a=t.books,s=t.isLoaded,c=t.searchText;return Object(h.jsxs)("div",{className:"container mt-4",children:[Object(h.jsx)("div",{className:"row  d-flex justify-content-center",children:Object(h.jsx)("div",{className:"col ",children:Object(h.jsx)("center",{children:Object(h.jsx)("h1",{children:"Google Book Search"})})})}),Object(h.jsxs)("div",{className:"row  d-flex justify-content-center",children:[Object(h.jsx)("div",{className:"col col-md-6",children:Object(h.jsx)("input",{type:"text",value:this.searchText,onChange:function(t){return e.updateSearchText(t)},className:"form-control"})}),Object(h.jsx)("div",{className:"col col-md-3",children:Object(h.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.searchBooks,children:"Search"})})]}),Object(h.jsx)("div",{className:"row  d-flex justify-content-center",children:c&&!s?Object(h.jsx)("div",{className:"row  d-flex justify-content-center mt-4",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("center",{children:"Searching..."})})}):n?Object(h.jsx)("div",{className:"row  d-flex justify-content-center mt-4",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("center",{children:"No Books Found..."})})}):Object(h.jsx)("div",{className:"row  d-flex justify-content-center mt-4",children:a.map((function(e,t){var n="",a=e.volumeInfo.authors,s=e.volumeInfo.canonicalVolumeLink?e.volumeInfo.canonicalVolumeLink:"#";e.volumeInfo.imageLinks&&(n=e.volumeInfo.imageLinks.smallThumbnail);var c={title:e.volumeInfo.title,image:n,book_id:e.id,link:s,description:e.volumeInfo.description,authors:a,publisher:e.volumeInfo.publisher,publishedDate:e.volumeInfo.publishedDate};return Object(h.jsx)(N,{book:c,saved:!1})}))})})]})}}]),n}(a.Component),E=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).deleteBook=function(e){var t=a.state.books.filter((function(t){return e!=t.book_id}));a.setState({books:t}),t.length>0?a.setState({isEmpty:!1}):a.setState({isEmpty:!0})},a.state={books:[],isEmpty:!0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(){return g.apply(this,arguments)})().then((function(t){e.setState({books:t.data}),t.data.length>0&&e.setState({isEmpty:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.isEmpty,a=t.books;return Object(h.jsxs)("div",{className:"container mt-4",children:[Object(h.jsx)("div",{className:"row  d-flex justify-content-center",children:Object(h.jsx)("div",{className:"col ",children:Object(h.jsx)("center",{children:Object(h.jsx)("h1",{children:"Google Book Search"})})})}),Object(h.jsx)("div",{className:"row  d-flex justify-content-center mt-4",children:n?Object(h.jsx)("center",{children:"No Books Found"}):a.map((function(t,n){return Object(h.jsx)(N,{book:t,saved:!0,deleteBook:e.deleteBook},n)}))})]})}}]),n}(a.Component);var B=function(){return Object(h.jsxs)(o.a,{children:[Object(h.jsx)(j,{}),Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/",exact:!0,component:w}),Object(h.jsx)(i.a,{path:"/saved",component:E})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),T()}},[[69,1,2]]]);
//# sourceMappingURL=main.4af7c25a.chunk.js.map
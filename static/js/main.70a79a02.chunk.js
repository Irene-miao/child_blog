(this.webpackJsonpchild_blog=this.webpackJsonpchild_blog||[]).push([[0],{12:function(e,t,n){e.exports={item:"BlogEntryItem_item__NQ1xu",image:"BlogEntryItem_image__3Umq9",content:"BlogEntryItem_content__2BA0R",actions:"BlogEntryItem_actions__LeK_H"}},13:function(e,t,n){e.exports={header:"MainNavigation_header__17Wy8",logo:"MainNavigation_logo__1q5uX",active:"MainNavigation_active__7mj5o",badge:"MainNavigation_badge__2v2x_"}},19:function(e,t,n){e.exports={list:"BlogEntryList_list__1C7sH"}},20:function(e,t,n){e.exports={card:"Card_card__1PaC-"}},22:function(e,t,n){e.exports={main:"Layout_main__3_33F"}},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n(18),r=n.n(c),a=(n(28),n(2)),s=n(23),o=n(11),l=n(19),j=n.n(l),d=n(12),b=n.n(d),u=n(20),h=n.n(u),O=n(0);var x=function(e){return Object(O.jsx)("div",{className:h.a.card,children:e.children})},v=Object(i.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function f(e){var t=Object(i.useState)([]),n=Object(o.a)(t,2),c=n[0],r=n[1];var a={favorites:c,totalFavorites:c.length,addFavorite:function(e){r((function(t){return t.concat(e)}))},removeFavorite:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return c.some((function(t){return t.id===e}))}};return Object(O.jsx)(v.Provider,{value:a,children:e.children})}var m=v;var g=function(e){var t=Object(i.useContext)(m),n=t.itemIsFavorite(e.id);return Object(O.jsx)("li",{className:b.a.item,children:Object(O.jsxs)(x,{children:[Object(O.jsx)("div",{className:b.a.image,children:Object(O.jsx)("img",{src:e.image,alt:e.title})}),Object(O.jsxs)("div",{className:b.a.content,children:[Object(O.jsx)("h3",{children:e.title}),Object(O.jsx)("p",{children:e.description})]}),Object(O.jsx)("div",{className:b.a.actions,children:Object(O.jsx)("button",{onClick:function(){n?t.removeFavorite(e.id):t.addFavorite({id:e.id,title:e.title,image:e.image,description:e.description})},children:n?"Not Favorite":"Favorite"})})]})})};var p=function(e){return Object(O.jsx)("ul",{className:j.a.list,children:e.blogentries.map((function(e){return Object(O.jsx)(g,{id:e.id,image:e.image,title:e.title,description:e.description},e.id)}))})};var _=function(){var e=Object(i.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)([]),a=Object(o.a)(r,2),l=a[0],j=a[1];return Object(i.useEffect)((function(){c(!0),fetch("https://childblogapp-default-rtdb.asia-southeast1.firebasedatabase.app/blogentries.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e){var i=Object(s.a)({id:n},e[n]);t.push(i)}c(!1),j(t)}))}),[]),n?Object(O.jsx)("section",{children:Object(O.jsx)("p",{children:"Loading..."})}):Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"All Blogs Page"}),Object(O.jsx)(p,{blogentries:l})]})};var N=function(){var e,t=Object(i.useContext)(m);return e=0===t.totalFavorites?Object(O.jsx)("p",{children:"No Favorites. Add some?"}):Object(O.jsx)(p,{blogentries:t.favorites}),Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"My Favorites"}),e]})},F=n(9),y=n.n(F);var B=function(e){var t=Object(i.useRef)(),n=Object(i.useRef)(),c=Object(i.useRef)();return Object(O.jsx)(x,{children:Object(O.jsxs)("form",{className:y.a.form,onSubmit:function(i){i.preventDefault();var r={title:t.current.value,image:n.current.value,description:c.current.value};e.onAddBlogentry(r)},children:[Object(O.jsxs)("div",{className:y.a.control,children:[Object(O.jsx)("label",{htmlFor:"title",children:"Blog Title"}),Object(O.jsx)("input",{type:"text",required:!0,id:"title",ref:t})]}),Object(O.jsxs)("div",{className:y.a.control,children:[Object(O.jsx)("label",{htmlFor:"image",children:"Blog Image"}),Object(O.jsx)("input",{type:"url",required:!0,id:"image",ref:n})]}),Object(O.jsxs)("div",{className:y.a.control,children:[Object(O.jsx)("label",{htmlFor:"description",children:"Blog Description"}),Object(O.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:c})]}),Object(O.jsx)("div",{className:y.a.actions,children:Object(O.jsx)("button",{children:"Add Blog Entry"})})]})})};var E=function(){var e=Object(a.f)();return Object(O.jsxs)("section",{children:[Object(O.jsx)("h1",{children:"Add Blog Entry"}),Object(O.jsx)(B,{onAddBlogentry:function(t){fetch("https://childblogapp-default-rtdb.asia-southeast1.firebasedatabase.app/blogentries.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){e.replace("/")}))}})]})},C=n(7),A=n(13),I=n.n(A);var w=function(){var e=Object(i.useContext)(m);return Object(O.jsxs)("header",{className:I.a.header,children:[Object(O.jsx)("div",{className:I.a.logo,children:"Child Blog"}),Object(O.jsx)("nav",{children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(C.b,{to:"/",children:"All Blog Entries"})}),Object(O.jsx)("li",{children:Object(O.jsx)(C.b,{to:"/add-blog",children:"Add Blog Entry"})}),Object(O.jsx)("li",{children:Object(O.jsxs)(C.b,{to:"/favorites",children:["Favorite Blog Entry",Object(O.jsx)("span",{className:I.a.badge,children:e.totalFavorites})]})})]})})]})},S=n(22),q=n.n(S);var M=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(w,{}),Object(O.jsx)("main",{className:q.a.main,children:e.children})]})};var J=function(){return Object(O.jsx)(M,{children:Object(O.jsxs)(a.c,{children:[Object(O.jsx)(a.a,{path:"/",exact:!0,children:Object(O.jsx)(_,{})}),Object(O.jsx)(a.a,{path:"/add-blog",children:Object(O.jsx)(E,{})}),Object(O.jsx)(a.a,{path:"/favorites",children:Object(O.jsx)(N,{})})]})})};r.a.render(Object(O.jsx)(f,{children:Object(O.jsx)(C.a,{children:Object(O.jsx)(J,{})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"NewBlogEntryForm_form__38wwY",control:"NewBlogEntryForm_control__uCnHJ",actions:"NewBlogEntryForm_actions__1e1co"}}},[[38,1,2]]]);
//# sourceMappingURL=main.70a79a02.chunk.js.map
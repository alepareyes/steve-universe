(this.webpackJsonpsteve=this.webpackJsonpsteve||[]).push([[0],{30:function(e,a,t){e.exports=t(62)},35:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},57:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(12),r=t.n(l),s=t(22),i=t(23),m=t(28),o=t(24),u=t(9),d=t(29),h=(t(35),t(5));var p=function(){return c.a.createElement(h.b,{to:"/"},c.a.createElement("header",{className:"header"},c.a.createElement("img",{className:"header__logo",src:"https://i.pinimg.com/originals/93/89/26/938926c5eb87d829d5d1a2cae5cd1991.gif"})))},f=t(17);t(40);var E=function(e){var a,t=e.characters,n=t.id,l=t.name,r=t.gem,s=t.preview,i=(a={backgroundImage:'url("'.concat(s,'")'),backgroundPosition:"center"},Object(f.a)(a,"backgroundPosition","top center"),Object(f.a)(a,"backgroundSize","cover"),a);return c.a.createElement("div",{className:"preview"},c.a.createElement(h.b,{to:"/character/".concat(n)},c.a.createElement("div",{className:"preview__photo",style:i}),c.a.createElement("div",{className:"preview__info"},c.a.createElement("h3",{className:"preview__info--name"},l),c.a.createElement("img",{className:"preview__info--gem",src:r.url}))))};t(41);var _=function(e){var a=0===e.characters.length?c.a.createElement("div",{className:"notfound"},"Character not found :( sorry!!",c.a.createElement("img",{className:"notfound__img",src:"https://66.media.tumblr.com/0246df9969d3ab2fc2d0c6f8604698b8/tumblr_noj59fgk8y1unqpleo1_1280.png"})," "):"";return c.a.createElement("main",{className:"main"},a,e.characters.map((function(e){return c.a.createElement(E,{key:e.id,characters:e})})))},v=t(18),g=t.n(v),N=(t(57),t(58),t(59),function(e){var a=e.character,t=a.image,n=a.origin,l=a.name,r=a.alias,s=a.fusions,i=a.weapons,m=a.gem;return c.a.createElement("div",{className:"details"},c.a.createElement(h.b,{to:"/"},"Go to index"),c.a.createElement("div",{className:"details__gem"},c.a.createElement(g.a,{speed:300,slidesToShow:1,slidesToScroll:1,infinite:!1,useCSS:!1,dots:!0,className:"details__gem--slider"},t.map((function(e){return c.a.createElement("div",null,c.a.createElement("img",{className:"details__img",src:e.url}),c.a.createElement("p",{className:"details__img--name"},e.name," style"))})))),c.a.createElement("div",{className:"details__info"},c.a.createElement("h2",{className:"details__info--name"},l),c.a.createElement("span",null,r),c.a.createElement("div",{className:"details__gem"},c.a.createElement("img",{className:"details__gem--img",src:m.url}),c.a.createElement("span",{className:"details__gem--name"},m.name)),c.a.createElement("div",{className:"details__fusion"},c.a.createElement("h3",null,"Fusions: "),c.a.createElement(g.a,{speed:300,slidesToShow:1,slidesToScroll:1,infinite:!1,useCSS:!1,className:"details__fusion--slider"},s.map((function(e){return c.a.createElement("div",null,c.a.createElement("p",{className:"details__fusion--name"},e.name),c.a.createElement("img",{className:"details__fusion--img",src:e.url}))})))),c.a.createElement("div",{className:"details__origin"},n.map((function(e){return c.a.createElement("div",null,c.a.createElement("img",{className:"details__origin--img",src:e.url}))}))),c.a.createElement("div",{className:"details__weapons"}," weaponss",i.map((function(e){return c.a.createElement("div",null,c.a.createElement("img",{className:"details__weapons--img",src:e.url}))})))))}),b=(t(60),t(27)),S=t.n(b),C=function(e){function a(a){var t=a.target.value;e.handleSpecies(t)}return console.log(e.specieSelected),c.a.createElement("div",{className:"filter"},c.a.createElement("label",{htmlFor:"Search Character",className:"filter__label"},"Who are you looking for?"),c.a.createElement("input",{type:"text",className:"filter__input",placeholder:"Search Character",onChange:function(a){e.handleSearch({value:a.target.value})},value:e.value}),c.a.createElement(S.a,{trigger:"Open for filters",className:"collapsible"},c.a.createElement("div",{className:"collapsible__container"},c.a.createElement("label",{className:"filter__radio--label",name:"search",htmlFor:"gem"},"Gems",c.a.createElement("input",{className:"",id:"gem",type:"radio",checked:"Gem"===e.specieSelected,name:"search",value:"Gem",onChange:a})),c.a.createElement("label",{className:"filter__radio--label",name:"search",htmlFor:"human"},"Humans",c.a.createElement("input",{className:"",id:"human",checked:"Human"===e.specieSelected,type:"radio",name:"search",value:"Human",onChange:a})),c.a.createElement("label",{className:"filter__radio--label",name:"search",htmlFor:"fusion"},"Fusions",c.a.createElement("input",{className:"",id:"fusion",type:"radio",checked:"Fusion"===e.specieSelected,name:"search",value:"Fusion",onChange:a})),c.a.createElement("label",{className:"mb-2",name:"species",htmlFor:"all"}," All",c.a.createElement("input",{className:"input-radio form-control ml-2 mt-3 text-left",id:"all",type:"radio",name:"search",checked:"All"===e.specieSelected,value:"All",onChange:a})))))},k=(t(61),t(6)),y=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).state={search:"",characters:[],specieSelected:"All"},e.handleSearch=e.handleSearch.bind(Object(u.a)(e)),e.handleSpecies=e.handleSpecies.bind(Object(u.a)(e)),e.renderCharacterDetails=e.renderCharacterDetails.bind(Object(u.a)(e)),e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/api/new-api.json").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(a){return e.setState({characters:a})}))}},{key:"handleSearch",value:function(e){this.setState({search:e.value})}},{key:"handleSpecies",value:function(e){this.setState({specieSelected:e})}},{key:"filteredCharacters",value:function(){var e=this;return this.state.characters.filter((function(a){return a.name.toLowerCase().includes(e.state.search.toLowerCase())})).filter((function(a){return a.species.includes(e.state.specieSelected)||"All"===e.state.specieSelected}))}},{key:"renderCharacterDetails",value:function(e){var a=e.match.params.id,t=this.state.characters.find((function(e){return e.id==a}));return void 0===t?c.a.createElement("p",{className:"notfound"},"Character not found!! Sorry :( "):c.a.createElement(N,{character:t})}},{key:"render",value:function(){return console.log(this.state.characters),c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(k.c,null,c.a.createElement(k.a,{exact:!0,path:"/"},c.a.createElement(C,{specieSelected:this.state.specieSelected,handleSearch:this.handleSearch,value:this.state.search,handleSpecies:this.handleSpecies}),c.a.createElement(_,{characters:this.filteredCharacters()})),c.a.createElement(k.a,{exact:!0,path:"/character/:id"},this.renderCharacterDetails)))}}]),a}(c.a.Component);r.a.render(c.a.createElement(h.a,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.d9f6ae8c.chunk.js.map
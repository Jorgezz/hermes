(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{179:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,h=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(179)),o={id:"coding-standards",title:"Coding Standards"},c={unversionedId:"coding-standards",id:"coding-standards",isDocsHomePage:!1,title:"Coding Standards",description:"Hermes Coding Standards",source:"@site/../doc/CodingStandards.md",slug:"/coding-standards",permalink:"/docs/coding-standards",editUrl:"https://github.com/facebook/hermes/blob/master/website/../doc/CodingStandards.md",version:"current",lastUpdatedAt:1607758573,sidebar:"docs",previous:{title:"React Native Integration",permalink:"/docs/react-native-integration"}},s=[{value:"Hermes Coding Standards",id:"hermes-coding-standards",children:[{value:"Language Features",id:"language-features",children:[]},{value:"Code Style",id:"code-style",children:[]},{value:"Small incremental changes",id:"small-incremental-changes",children:[]},{value:"Add tests",id:"add-tests",children:[]},{value:"Format your code",id:"format-your-code",children:[]},{value:"Commit messages",id:"commit-messages",children:[]},{value:"Code review",id:"code-review",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hermes-coding-standards"},"Hermes Coding Standards"),Object(i.b)("p",null,"This document provides guidance for the kind of code that should go in to\nthe Hermes project. The rules in this document will allow us to scale the\nproject and ensure that the code base remains readable and maintainable."),Object(i.b)("h3",{id:"language-features"},"Language Features"),Object(i.b)("p",null,"Hermes uses C++11."),Object(i.b)("p",null,"Exceptions or RTTI are prohibited, except where needed for\ninterfacing with other software that requires them."),Object(i.b)("p",null,"GCC language extensions are discouraged for compatibility with MSVC, or they\nshould be conditionally enabled."),Object(i.b)("h3",{id:"code-style"},"Code Style"),Object(i.b)("p",null,"TODO: This should be sorted and expanded."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Every declaration must have a doc-comment.")),Object(i.b)("p",null,"Naming"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Member variables use a "',"_",'" suffix unless they are public, where it is\nacceptable to omit the suffix.'),Object(i.b)("li",{parentName:"ul"},"Classes use pascal case (",Object(i.b)("inlineCode",{parentName:"li"},"MyClass"),")."),Object(i.b)("li",{parentName:"ul"},"Functions and methods use camel case (",Object(i.b)("inlineCode",{parentName:"li"},"myFunc"),")."),Object(i.b)("li",{parentName:"ul"},"Variables generally use camel case (",Object(i.b)("inlineCode",{parentName:"li"},"myVar"),'). We also allow "abbreviated\ncase": "basic block" can be abbreviated as ',Object(i.b)("inlineCode",{parentName:"li"},"BB"),', "instruction" can be\nabbreviated as ',Object(i.b)("inlineCode",{parentName:"li"},"I"),", etc."),Object(i.b)("li",{parentName:"ul"},"Constants use either capitalized snake case (",Object(i.b)("inlineCode",{parentName:"li"},"MY_CONST"),') or camel case with\n"k" prefix (',Object(i.b)("inlineCode",{parentName:"li"},"kMyConst"),").")),Object(i.b)("p",null,"Misc"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"struct")," should be used only when it is a true POD - there are no constructors\nor destructors of any kind. For everything else use ",Object(i.b)("inlineCode",{parentName:"li"},"class"),"."),Object(i.b)("li",{parentName:"ul"},"Inlining: Only completely trivial (one line) methods can be defined in the\nclass body. The rest should be declared as ",Object(i.b)("inlineCode",{parentName:"li"},"inline")," both at the declaration and\nthe definition.")),Object(i.b)("h3",{id:"small-incremental-changes"},"Small incremental changes"),Object(i.b)("p",null,"The project is developed using small incremental changes. These changes can be\nsmall bug fixes or minor tweaks. Other times, these changes are small steps\nalong the path to reaching larger stated goals. Long-term development branches\nsuffer from many problems, including the lack of visibility, difficulty of code\nreview, lack of testing of the branch and merge difficulty."),Object(i.b)("p",null,"Commits that go into the project need to be reviewable. This means that commits\nneed to be relatively small, well documented and self contained."),Object(i.b)("h3",{id:"add-tests"},"Add tests"),Object(i.b)("p",null,"Functional changes to the compiler need to include a testcase. Unit tests and\nregression tests are critical to the qualification of the compiler. Every bug\nfix needs to include a testcase."),Object(i.b)("p",null,"Reduce test cases as much as possible! It is unacceptable to commit big programs\nbecause they do not describe the essence of the failure, they are fragile, and\nthey slow testing down. Tests need to be short and focused."),Object(i.b)("h3",{id:"format-your-code"},"Format your code"),Object(i.b)("p",null,"clang-format is required to enforce code style and formatting.\nCommits that only change the formatting of code should go in independent of\nfunctional changes."),Object(i.b)("h3",{id:"commit-messages"},"Commit messages"),Object(i.b)("p",null,"Here are some guidelines about the format of the commit message:"),Object(i.b)("p",null,"Separate the commit message into a single-line title and a separate body that\ndescribes the change. Make the title short (80 chars) and readable.  In changes\nthat are restricted to a specific part of the code, include a ","[tag]"," at the start\nof the line in square brackets\u2014for example, \u201c","[docs]"," ... \u201d."),Object(i.b)("p",null,"If the commit fixes an issue in the bug tracking system, include a link or a\ntask number."),Object(i.b)("p",null,"When reverting a change make sure to add a short note that describes why the\npatch is being reverted."),Object(i.b)("h3",{id:"code-review"},"Code review"),Object(i.b)("p",null,"The project relies heavily on code review to maintain the software quality."),Object(i.b)("p",null,"Review other people\u2019s changes! Anybody is allowed to review code and comment\non patches."),Object(i.b)("p",null,"All changes, by all developers, must be reviewed before they are committed to\nthe repository. Smaller changes (if the developer is the de-facto owner of the\ncode base) can be reviewed after being committed."))}d.isMDXComponent=!0}}]);
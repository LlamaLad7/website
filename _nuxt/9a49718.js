(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{209:function(t,e,n){var content=n(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("e4cc52a6",content,!0,{sourceMap:!1})},210:function(t,e,n){"use strict";n.r(e);n(30),n(47);var o={name:"Project",props:["title","description"]},r=(n(212),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title has-text-white"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[t._v("\n            "+t._s(t.description)+"\n        ")])]),t._v(" "),e("footer",{staticClass:"card-footer"},[t._t("default")],2)])}),[],!1,null,"0d99dac3",null);e.default=component.exports},212:function(t,e,n){"use strict";n(209)},213:function(t,e,n){var o=n(37)((function(i){return i[1]}));o.push([t.i,".card-footer[data-v-0d99dac3]{margin-top:-.5rem;padding:calc(.75rem - 7px) calc(1rem - 7px)}.card[data-v-0d99dac3]{display:flex;flex-direction:column;width:100%}.card-footer[data-v-0d99dac3]{flex-grow:1}",""]),o.locals={},t.exports=o},215:function(t,e,n){"use strict";var o=n(2),r=n(65),c=n(21),l=n(5),d=n(109),m=[],f=m.sort,h=l((function(){m.sort(void 0)})),v=l((function(){m.sort(null)})),w=d("sort");o({target:"Array",proto:!0,forced:h||!v||!w},{sort:function(t){return void 0===t?f.call(c(this)):f.call(c(this),r(t))}})},218:function(t,e,n){var content=n(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("fe7dbcfc",content,!0,{sourceMap:!1})},226:function(t,e,n){"use strict";n(218)},227:function(t,e,n){var o=n(37)((function(i){return i[1]}));o.push([t.i,".content[data-v-559bb5dd]{margin-top:20vh}.column[data-v-559bb5dd]{display:flex}",""]),o.locals={},t.exports=o},232:function(t,e,n){"use strict";n.r(e);n(30),n(47),n(27),n(214),n(215);var o=n(210),r={name:"projects",components:{IconLink:n(211).default,Project:o.default},data:function(){return{languages:[{name:"C++",description:"C++ is a general-purpose programming language with object-oriented, generic, and functional features, in addition to facilities for low-level memory manipulation.",icon:"book-variant-multiple",link:"https://en.cppreference.com/w/"},{name:"CSS",description:"CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",icon:"book-variant-multiple",link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},{name:"HTML",description:"HTML is the standard markup language for documents designed to be displayed in a web browser.",icon:"book-variant-multiple",link:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{name:"Java",description:"Java is a cross-platform, class-based, object-oriented programming language, intended to let application developers write once, run anywhere.",icon:"earth",link:"https://java.com/"},{name:"JavaScript",description:"JavaScript is a high-level, often just-in-time compiled, and multi-paradigm programming language, primarily used in frontend and backend web development.",icon:"book-variant-multiple",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name:"Kotlin",description:"Kotlin is a cross-platform, statically typed, general-purpose programming language for the JVM, complete with type inference and full Java interoperability.",icon:"earth",link:"https://kotlinlang.org/"},{name:"Python",description:"Python is an interpreted, high-level and general-purpose programming language, often used for Data Science and Machine Learning.",icon:"earth",link:"https://www.python.org/"}].sort((function(a,b){return a.name>b.name?1:-1})),frameworks:[{name:"Exposed",description:"Exposed is a lightweight ORM framework for Kotlin. It includes a typesafe SQL wrapping DSL and lightweight data access objects.",icon:"github",link:"https://github.com/JetBrains/Exposed"},{name:"Fabric",description:"Fabric is a lightweight, experimental modding toolchain for Minecraft.",icon:"earth",link:"https://fabricmc.net/"},{name:"Forge",description:"Forge is a popular Minecraft modding API for both clients and servers.",icon:"github",link:"https://github.com/MinecraftForge/MinecraftForge"},{name:"Ktor",description:"Ktor is an asynchronous framework for creating microservices, web applications and more, in Kotlin.",icon:"earth",link:"https://ktor.io/"},{name:"ObjectWeb ASM",description:"ASM is an all purpose Java bytecode manipulation and analysis framework, used to modify existing classes or to dynamically generate new classes, directly in binary form.",icon:"earth",link:"https://asm.ow2.io/"},{name:"React",description:"React is a declarative, component-based JavaScript library for building user interfaces.",icon:"earth",link:"https://reactjs.org/"},{name:"Vue",description:"Vue is a progressive front end JavaScript framework for building user interfaces and single-page applications.",icon:"earth",link:"https://vuejs.org/"}].sort((function(a,b){return a.name>b.name?1:-1})),tools:[{name:"IntelliJ IDEA",description:"IntelliJ is a cross-platform and market-leading JetBrains IDE for Java and Kotlin development.",icon:"earth",link:"https://www.jetbrains.com/idea/"},{name:"PyCharm",description:"PyCharm is a cross-platform JetBrains IDE for Python development.",icon:"earth",link:"https://www.jetbrains.com/pycharm/"},{name:"CLion",description:"CLion is a cross-platform JetBrains IDE for C and C++ development.",icon:"earth",link:"https://www.jetbrains.com/clion/"},{name:"WebStorm",description:"WebStorm is a cross-platform JetBrains IDE for frontend and backend web development.",icon:"earth",link:"https://www.jetbrains.com/webstorm/"},{name:"Gradle",description:"Gradle is a build automation tool for multi-language software development, including Java (Kotlin, Groovy, Scala) , C/C++, JavaScript.",icon:"earth",link:"https://gradle.org/"},{name:"Git",description:"Git is the world's most popular distributed version control system.",icon:"earth",link:"https://git-scm.com/"},{name:"GitHub",description:"GitHub is the world's most popular Git hosting service.",icon:"earth",link:"https://github.com/"}].sort((function(a,b){return a.name>b.name?1:-1}))}}},c=(n(226),n(26)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("p",{staticClass:"title is-size-1 has-text-centered has-text-white"},[t._v("Languages")]),t._v(" "),e("div",{staticClass:"columns is-multiline is-centered"},t._l(t.languages,(function(t){return e("div",{staticClass:"column is-3"},[e("Project",{attrs:{title:t.name,description:t.description}},[e("IconLink",{attrs:{icon:t.icon,link:t.link}})],1)],1)})),0),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"title is-size-1 has-text-centered has-text-white"},[t._v("Frameworks")]),t._v(" "),e("div",{staticClass:"columns is-multiline is-centered"},t._l(t.frameworks,(function(t){return e("div",{staticClass:"column is-3"},[e("Project",{attrs:{title:t.name,description:t.description}},[e("IconLink",{attrs:{icon:t.icon,link:t.link}})],1)],1)})),0),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"title is-size-1 has-text-centered has-text-white"},[t._v("Tools")]),t._v(" "),e("div",{staticClass:"columns is-multiline is-centered"},t._l(t.tools,(function(t){return e("div",{staticClass:"column is-3"},[e("Project",{attrs:{title:t.name,description:t.description}},[e("IconLink",{attrs:{icon:t.icon,link:t.link}})],1)],1)})),0)])}),[],!1,null,"559bb5dd",null);e.default=component.exports;installComponents(component,{IconLink:n(211).default,Project:n(210).default})}}]);
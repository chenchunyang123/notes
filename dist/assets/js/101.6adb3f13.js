(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{453:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"call-和-apply"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#call-和-apply"}},[t._v("#")]),t._v(" call 和 apply")]),t._v(" "),s("ul",[s("li",[t._v("用来改变函数当中的 this 指向。")]),t._v(" "),s("li",[t._v("call：\n"),s("ul",[s("li",[t._v("每一个函数天生都能够调用")]),t._v(" "),s("li",[t._v("使用方式：fn.call（）")]),t._v(" "),s("li",[t._v("可以接收多个参数，第一个是要改变的 this 指向，从第二个参数开始就是原函数所需要的参数。")])])]),t._v(" "),s("li",[t._v("apply：\n"),s("ul",[s("li",[t._v("和 call 一样，唯一的不同点是只要两个参数，后面第二个参数变成了一个数组，用来书写要传递的实参。")])])])]),t._v(" "),s("h2",{attrs:{id:"事件流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件流程"}},[t._v("#")]),t._v(" 事件流程")]),t._v(" "),s("ul",[s("li",[t._v("整个事件流程分为捕获和冒泡：\n"),s("ul",[s("li",[t._v("捕获：事件从最顶层元素开始执行，一层一层往下，直到最精确的元素。")]),t._v(" "),s("li",[t._v("冒泡：事件从最精确的元素开始执行，一层一层往上，知道最顶层的元素。")]),t._v(" "),s("li",[t._v("注：当处于最精确的元素身上的时候是不区分捕获和冒泡的。")])])])]),t._v(" "),s("h2",{attrs:{id:"dom2-级绑定方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom2-级绑定方式"}},[t._v("#")]),t._v(" DOM2 级绑定方式")]),t._v(" "),s("ul",[s("li",[t._v("DOM0 级：事件后面直接跟一个匿名函数"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("DOM2 级：\n"),s("ul",[s("li",[t._v("事件名称：addEventListener")]),t._v(" "),s("li",[t._v("这是一个方法，每个元素都可以调用")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type：事件类型，不带“on”")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fn：要执行的函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// boolean：是一个布尔值，默认是 false，表示绑定的事件在冒泡阶段；如果是 true，则表示绑定的事件在捕获阶段。")]),t._v("\ndom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"ie-中的绑定方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ie-中的绑定方式"}},[t._v("#")]),t._v(" IE 中的绑定方式")]),t._v(" "),s("ul",[s("li",[t._v("IE8 及以下的不支持上述的方式，它有一套自己的东西。")]),t._v(" "),s("li",[t._v("attachEvent 事件："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type:字符串，表示时间类型，需要带“on”")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fn：表示要执行的函数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注：没有第三个 boolean 参数，因为它并不支持捕获。")]),t._v("\ndom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"dom2-级与-dom0-级绑定方式的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom2-级与-dom0-级绑定方式的区别"}},[t._v("#")]),t._v(" DOM2 级与 DOM0 级绑定方式的区别")]),t._v(" "),s("ol",[s("li",[t._v("绑定数量\n"),s("ul",[s("li",[t._v("DOM0 级：只能给一个元素的一个事件绑定一个函数")]),t._v(" "),s("li",[t._v("DOM2 级：可以给一个元素的一个事件绑定多个函数")])])]),t._v(" "),s("li",[t._v("执行顺序\n"),s("ul",[s("li",[t._v("按照绑定的顺序执行")])])]),t._v(" "),s("li",[t._v("是否能同时存在\n"),s("ul",[s("li",[t._v("可以")])])]),t._v(" "),s("li",[t._v("函数中的 this 指向\n"),s("ul",[s("li",[t._v("DOM2 级和 DOM0 级函数中的 this 都指向触发该事件的元素")])])])]),t._v(" "),s("h2",{attrs:{id:"attachevent-与-dom0-级绑定方式的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attachevent-与-dom0-级绑定方式的区别"}},[t._v("#")]),t._v(" attachEvent 与 DOM0 级绑定方式的区别")]),t._v(" "),s("ol",[s("li",[t._v("绑定数量\n"),s("ul",[s("li",[t._v("同上")])])]),t._v(" "),s("li",[t._v("执行顺序\n"),s("ul",[s("li",[t._v("优先执行 DOM0 级的事件，然后再逆序执行 attachEvent 事件")])])]),t._v(" "),s("li",[t._v("是否能同时存在\n"),s("ul",[s("li",[t._v("可以")])])]),t._v(" "),s("li",[t._v("函数中的 this 指向\n"),s("ul",[s("li",[t._v("attachEvent 和另外两个有所不同，它当中的 this 指向的是 window")])])])]),t._v(" "),s("h2",{attrs:{id:"移除事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移除事件"}},[t._v("#")]),t._v(" 移除事件")]),t._v(" "),s("ol",[s("li",[t._v("DOM0 级\n"),s("ul",[s("li",[t._v("box.onclick = null；\n直接手动赋值为 null")])])]),t._v(" "),s("li",[t._v("DOM2 级\n"),s("ul",[s("li",[t._v("dom.removeEventListener(type,fn,boolean)")])])]),t._v(" "),s("li",[t._v("attachEvent 的移除\n"),s("ul",[s("li",[t._v("dom.detachEvent(type,fn)")])])])]),t._v(" "),s("p",[t._v("注意：2 和 3 中移除的时候，要把第二个参数函数提取出来，作为一个有名函数，然后用它的变量名书写在第二个参数的位置上。")]),t._v(" "),s("h2",{attrs:{id:"事件移除函数的小轮子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件移除函数的小轮子"}},[t._v("#")]),t._v(" 事件移除函数的小轮子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bindEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attachEvent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"on"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"阻止冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻止冒泡"}},[t._v("#")]),t._v(" 阻止冒泡")]),t._v(" "),s("ul",[s("li",[t._v("高级浏览器："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("IE8 及其以下："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cancelBubble "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"阻止默认事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻止默认事件"}},[t._v("#")]),t._v(" 阻止默认事件")]),t._v(" "),s("ul",[s("li",[t._v("有些标签在我们点击的时候会有一些默认的事件：\n"),s("ul",[s("li",[t._v("如：submit 会默认提交表单")]),t._v(" "),s("li",[t._v("a 标签如果有 href 属性，会跳转页面")]),t._v(" "),s("li",[t._v("页面出现滚动条的时候，当我们滚动鼠标滚轮的时候，滚动条的位置将被改变")])])]),t._v(" "),s("li",[t._v("高级浏览器："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("IE8 及其以下："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("returnValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[t._v("DOM0 级："),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("； "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//直接 return false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
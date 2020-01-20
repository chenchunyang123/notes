(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{224:function(t,_,v){"use strict";v.r(_);var a=v(0),e=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"em-与-rem"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#em-与-rem"}},[t._v("#")]),t._v(" em 与 rem")]),t._v(" "),v("p",[t._v("都是相对单位，区别在于相对的对象不同："),v("br"),t._v("\n  em 相对的是最近一个父盒子的数值的比值 "),v("br"),t._v("\n  rem 相对的是根元素（HTML）的数值的比值 "),v("br")]),t._v(" "),v("h2",{attrs:{id:"hack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hack"}},[t._v("#")]),t._v(" hack")]),t._v(" "),v("p",[t._v("hack 主要是为了考虑浏览器的兼容问题，尽量让网页在所有浏览器显示效果相同的一种手段。"),v("br"),t._v("\n这里主要考虑 IE。"),v("br")]),t._v(" "),v("h4",{attrs:{id:"_1、html-hack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、html-hack"}},[t._v("#")]),t._v(" 1、html hack")]),t._v(" "),v("p",[t._v("IE 也知道自身设计的浏览器有很大的缺陷，因此也提供给我们了一些端口来书写 hack。")]),t._v(" "),v("div",{staticClass:"language-html extra-class"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--[if lte IE 9]>\n    内容部分\n<![endif]--\x3e")]),t._v("\n")])])]),v("p",[t._v("基本的格式如上，针对的是小于或等于 IE9，符合版本的浏览器会去解析，而高版本的不会解析，只认为是一段注释。"),v("br")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("缩写")]),t._v(" "),v("th",[t._v("全拼")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("lte")]),t._v(" "),v("td",[t._v("less than or equal")]),t._v(" "),v("td",[t._v("表示小于或等于")])]),t._v(" "),v("tr",[v("td",[t._v("lt")]),t._v(" "),v("td",[t._v("less than")]),t._v(" "),v("td",[t._v("表示小于")])]),t._v(" "),v("tr",[v("td",[t._v("gt")]),t._v(" "),v("td",[t._v("greater than")]),t._v(" "),v("td",[t._v("表示大于")])]),t._v(" "),v("tr",[v("td",[t._v("gte")]),t._v(" "),v("td",[t._v("greater than or equal")]),t._v(" "),v("td",[t._v("表示大于或者等于")])])])]),t._v(" "),v("h4",{attrs:{id:"_2、css-hack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、css-hack"}},[t._v("#")]),t._v(" 2、css hack")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("浏览器")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("说明举例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("IE6")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("在属性名的前面加短横线或者下划线，只有 IE6 可以认识")])]),t._v(" "),v("tr",[v("td",[t._v("IE6，7")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("! $ & * ( ) = % + @ , . / ` [ ] # ~ ? : < >")])]),t._v(" "),v("tr",[v("td",[t._v("IE8，9")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("\\0/ 这个需要写在属性的后面，如 color: blue\\0/")])]),t._v(" "),v("tr",[v("td",[t._v("IE6，7，8，9，10")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("\\9 如 color: blue\\9")])])])]),t._v(" "),v("h4",{attrs:{id:"_3、css-选择器-hack"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、css-选择器-hack"}},[t._v("#")]),t._v(" 3、css 选择器 hack")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("选择器")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("* html .selector {}")]),t._v(" "),v("td",[t._v("这种选择器只能在 IE6 里加载，其他的浏览器会认为是错误的，高级浏览器已经认为 html 是根标签，星号不是它的祖先元素")])]),t._v(" "),v("tr",[v("td",[t._v(".selector, {}")]),t._v(" "),v("td",[t._v("只能在 IE7 里加载")])]),t._v(" "),v("tr",[v("td",[t._v("html > body .selector {}")]),t._v(" "),v("td",[t._v("子级选择器，除了 IE6 不认识，其他都可以加载")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);
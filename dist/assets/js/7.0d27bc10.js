(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{358:function(t,a,s){"use strict";s.r(a);var p=s(25),r=Object(p.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"script标签属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script标签属性"}},[t._v("#")]),t._v(" script标签属性")]),t._v(" "),s("p",[t._v("向HTML页面中插入JavaScript的主要方法，就是使用"),s("code",[t._v("script")]),t._v("元素。"),s("br"),t._v("\nHTML4.01为该元素定义了下列6个属性：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("async：")]),t._v(" "),s("p",[t._v("可选。表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或等待加载其他脚本。只对外部脚本文件有效。")])]),t._v(" "),s("li",[s("p",[t._v("charset：")]),t._v(" "),s("p",[t._v("可选。表示通过 src 属性指定的代码的字符集。由于大多数浏览器会忽略它的值，因此这个属性很少有人用。")])]),t._v(" "),s("li",[s("p",[t._v("defer：")]),t._v(" "),s("p",[t._v("可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。IE7 及更早版本对嵌入脚本也支持这个属性。")])]),t._v(" "),s("li",[s("p",[t._v("language：")]),t._v(" "),s("p",[t._v("已废弃。原来用于表示编写代码使用的脚本语言（如 JavaScript、JavaScript1.2或 VBScript）。大多数浏览器会忽略这个属性，因此也没有必要再用了。")])]),t._v(" "),s("li",[s("p",[t._v("src：")]),t._v(" "),s("p",[t._v("可选。表示包含要执行代码的外部文件。")])]),t._v(" "),s("li",[s("p",[t._v("type：")]),t._v(" "),s("p",[t._v("可选。可以看成是 language 的替代属性；表示编写代码使用的脚本语言的内容类型（也称为 MIME 类型）。虽然 text/javascript 和 text/ecmascript 都已经不被推荐使用，但人们一直以来使用的都还是 text/javascript。实际上，服务器在传送 JavaScript 文件时使用的MIME 类型通常是 application/x–javascript，但在 type 中设置这个值却可能导致脚本被忽略。另外，在非IE浏览器中还可以使用以下值：application/javascript和application/ecmascript。考虑到约定俗成和最大限度的浏览器兼容性，目前 type 属性的值依旧还是text/javascript。不过，这个属性并不是必需的，如果没有指定这个属性，则其默认值仍为text/javascript。")])])]),t._v(" "),s("h2",{attrs:{id:"标签的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签的位置"}},[t._v("#")]),t._v(" 标签的位置")]),t._v(" "),s("p",[t._v("按照传统的做法，所有的script标签元素都应该放在页面的"),s("code",[t._v("head")]),t._v("元素中，页面会等待js代码都被下载、\n解析和执行完成以后，才开始呈现页面的内容，这样就会有一个问题，一旦需要引用的js过多，那么用户白屏的时间会增加，为了避免这个问题，js代码一般都放在"),s("code",[t._v("body")]),t._v("元素中页面内容的后面。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 页面内容 --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 书写脚本")]),t._v("\n  ")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"延迟脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#延迟脚本"}},[t._v("#")]),t._v(" 延迟脚本")]),t._v(" "),s("p",[t._v("如果你引用的是一段外部脚本，那么解决上面问题除了移动"),s("code",[t._v("script")]),t._v("标签到"),s("code",[t._v("body")]),t._v("标签内的内容后面外，还有一个办法，就是给script添加defer属性，相当于告诉浏览器立即下载，但延迟到浏览器遇到"),s("code",[t._v("</html>")]),t._v("标签后再执行，这样就不会阻塞浏览器渲染页面。")]),t._v(" "),s("p",[t._v("如果"),s("code",[t._v("head")]),t._v("标签中包含了两个使用延迟的脚本，那么在HTML5规范上，第一个延迟脚本会优于第二个执行，但在现实当中，延迟脚本并不一定会按照顺序执行，因此最好只包含一个延迟脚本。")]),t._v(" "),s("h2",{attrs:{id:"异步脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步脚本"}},[t._v("#")]),t._v(" 异步脚本")]),t._v(" "),s("p",[t._v("与延迟脚本类似，唯一的区别就是多个异步脚本在页面渲染完成后的执行顺序是不确定的，是随机的。")])])}),[],!1,null,null,null);a.default=r.exports}}]);
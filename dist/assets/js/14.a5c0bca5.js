(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{219:function(r,t,a){"use strict";a.r(t);var o=a(0),v=Object(o.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h2",{attrs:{id:"background-背景颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background-背景颜色"}},[r._v("#")]),r._v(" background 背景颜色")]),r._v(" "),a("p",[r._v("除了三种最基本的表示方法（十六进制、英文单词、rgb）还有一种是 "),a("strong",[r._v("rgba")]),r._v("，最后一个 a 设置的是透明度，例 rgba（255，0，0，.5）半透明效果。")]),r._v(" "),a("h2",{attrs:{id:"background-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background-image"}},[r._v("#")]),r._v(" background-image")]),r._v(" "),a("p",[r._v("背景背景，顾名思义，是盒子的背景，"),a("strong",[r._v("盒子的大小不会随着背景图的变大变小而改变")]),r._v("。"),a("br"),r._v("\n当背景图大于盒子时，超过盒子部分的不会显示；"),a("br"),r._v("\n当背景图小于盒子时，背景图会重复至铺满盒子（默认为 repeat，如果不想让背景图重复，可以设置 background-repeat：no-repeat；）"),a("br")]),r._v(" "),a("p",[a("strong",[r._v("渲染的范围：border 边框以内")]),a("br")]),r._v(" "),a("p",[r._v("渲染的层级：如果同时也设置了 background-color，那么"),a("strong",[r._v("背景图将会渲染在背景色之上")]),a("br")]),r._v(" "),a("p",[r._v("background-repeat 重复方向："),a("br"),r._v("\n除了不设置重复铺满，也可以只设置一个方向的重复平铺，如"),a("br"),r._v(" "),a("strong",[r._v("在水平方向：repeat-x")]),a("br"),r._v(" "),a("strong",[r._v("在垂直方向：repeat-y")])]),r._v(" "),a("h2",{attrs:{id:"background-position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background-position"}},[r._v("#")]),r._v(" background-position")]),r._v(" "),a("p",[r._v("有两个属性：x y "),a("br"),r._v("\n前一个设置了背景图距离左顶点水平方向的偏移量"),a("br"),r._v("\n后一个设置了背景图距离左顶点垂直方向的偏移量"),a("br")]),r._v(" "),a("p",[r._v("应用："),a("strong",[r._v("css sprite（精灵图技术）")]),a("br")]),r._v(" "),a("ul",[a("li",[a("p",[a("strong",[r._v("目的")]),r._v("：当网页上有很多小图片需要加载，如果一张一张的单独引用，即使每个图片的大小不大，也会由于发起多次 HTTP 请求，导致网页的加载速度变慢。通过 css sprite，我们把很多小图片切到一张图片上，就只需要发起一次 HTTP 请求，加快了网页的加载速度。"),a("br")])]),r._v(" "),a("li",[a("p",[a("strong",[r._v("使用方法：")])])])]),r._v(" "),a("ol",[a("li",[r._v("首先限制盒子的宽高，设置成想看到背景元素大小的宽高")]),r._v(" "),a("li",[r._v("通过 background-position 把显示范围偏移到想要的元素的身上（盒子可以随意移动，只要 position 不变，背景图的显示效果就不会变）")])]),r._v(" "),a("p",[r._v("background-position 有三种表示方法：")]),r._v(" "),a("ul",[a("li",[r._v("像素")]),r._v(" "),a("li",[r._v("单词表示法：第一个属性（left right center）、第二个属性（top bottom center）")]),r._v(" "),a("li",[r._v("百分比表示法：换算方法为——（大背景的 width 减 背景图 width）乘以百分数")])]),r._v(" "),a("h2",{attrs:{id:"background-attachment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background-attachment"}},[r._v("#")]),r._v(" background-attachment")]),r._v(" "),a("p",[r._v("设置背景图是否卷动：默认是 scroll 卷动"),a("br"),r._v("\n固定则是 fixed，无论怎么拖动滚动条，背景图都不会变化。")]),r._v(" "),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[r._v("#")]),r._v(" 应用")]),r._v(" "),a("p",[r._v("网站的头部一般会有一个 logo，一般我们用 h1 来渲染 logo（通过设置 h1 的背景图为 logo），然后里面嵌套 a 标签（"),a("strong",[r._v("有两个目的：一个是让 logo 可以点击，二是可以在 a 标签中书写文字，提高 SEO，同时不让用户看到，但是爬虫可以搜索到")]),r._v("）"),a("br"),r._v("\n不让用户看到文字可以先让 a 便签转换为块，然后利用 text-indent 缩进设置为-999em，让他移动到边框以外，为了保险，最好父盒子再加上 overflow：hidden。")])])}),[],!1,null,null,null);t.default=v.exports}}]);
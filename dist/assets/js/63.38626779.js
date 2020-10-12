(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{413:function(v,_,r){"use strict";r.r(_);var t=r(25),a=Object(t.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h2",{attrs:{id:"border"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#border"}},[v._v("#")]),v._v(" Border")]),v._v(" "),r("p",[v._v("复合写的较多："),r("strong",[v._v("宽度")]),v._v(" "),r("strong",[v._v("线型")]),v._v(" "),r("strong",[v._v("颜色")]),v._v(" "),r("br")]),v._v(" "),r("p",[v._v("也可以按属性拆分：")]),v._v(" "),r("ul",[r("li",[v._v("border-width：线的宽度")]),v._v(" "),r("li",[v._v("border-style: 线型")]),v._v(" "),r("li",[v._v("border-color: 线的颜色")])]),v._v(" "),r("p",[v._v("也可以按方向拆分：")]),v._v(" "),r("ul",[r("li",[v._v("border-left")]),v._v(" "),r("li",[v._v("border-right")]),v._v(" "),r("li",[v._v("border-top")]),v._v(" "),r("li",[v._v("border-bottom "),r("br")])]),v._v(" "),r("p",[v._v("注：也可以 border-top-color")]),v._v(" "),r("h2",{attrs:{id:"盒模型扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#盒模型扩展"}},[v._v("#")]),v._v(" 盒模型扩展")]),v._v(" "),r("ol",[r("li",[r("p",[v._v("清除默认样式 "),r("br"),v._v("\n一些标签的默认样式我们并不需要，可以在样式表的最开始清除不要的标签默认样式。")])]),v._v(" "),r("li",[r("p",[v._v("height "),r("br"),v._v("\n对于某些盒子来说，高度不固定，那我们可以不用设置高度，让内容去把它撑开。")])]),v._v(" "),r("li",[r("p",[v._v("margin 塌陷 "),r("br"),v._v("\n两个上下排列的盒子，当上盒子设置了 margin-bottom,下盒子设置了 margin-top，两个盒子之间的距离并不是两个 margin 值得总和，而是为较大的 margin 值（小的 margin 塌陷到大的 margin 里，当两个 margin 相同时，则就是该值）")])]),v._v(" "),r("li",[r("p",[v._v("margin 子盒子与父盒子 "),r("br"),v._v("\n如果想让子盒子与父盒子的最上边有一个距离，设置 margin-top 的话并不能达到目的，会让父盒子随着子盒子一起下移动。"),r("br"),v._v(" "),r("strong",[v._v("解决办法")]),v._v("："),r("br"),v._v("\n① 给父级加"),r("strong",[v._v("边框")]),v._v("限制其移动。"),r("br"),v._v("\n② 不使用 margin，用 "),r("strong",[v._v("padding-top")]),v._v(" 来设置。")])]),v._v(" "),r("li",[r("p",[v._v("盒子水平居中 "),r("br"),v._v("\nmargin：0 auto；")])])]),v._v(" "),r("h2",{attrs:{id:"其他居中"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他居中"}},[v._v("#")]),v._v(" 其他居中")]),v._v(" "),r("ol",[r("li",[r("strong",[v._v("文本居中")]),v._v("：text-align：center；")]),v._v(" "),r("li",[r("strong",[v._v("单行文本垂直居中")]),v._v("：设置 line-height = height")]),v._v(" "),r("li",[r("strong",[v._v("多行文本垂直居中")]),v._v("：盒子不设置高度，上下设置相等的 padding 值")])]),v._v(" "),r("h2",{attrs:{id:"父子嵌套盒模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#父子嵌套盒模型"}},[v._v("#")]),v._v(" 父子嵌套盒模型")]),v._v(" "),r("p",[r("strong",[v._v("子盒子最大的占有宽度不能超过父盒子的内容宽度")]),v._v("，如果子盒子有 padding 和 border 则需要内减。")]),v._v(" "),r("h2",{attrs:{id:"标准文档流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标准文档流"}},[v._v("#")]),v._v(" 标准文档流")]),v._v(" "),r("p",[v._v("从上往下，从左到右 "),r("br"),v._v("\n一些特点：")]),v._v(" "),r("ol",[r("li",[v._v("文本内容之间有空白折叠现象")]),v._v(" "),r("li",[v._v("文本内容高矮不同，以底边对齐为准")]),v._v(" "),r("li",[v._v("文本内容超过盒子宽度会自动换行（汉字和格式较为标准的英文语句、单词）")])]),v._v(" "),r("p",[r("strong",[v._v("注：连续的英文和数字不会自动换行，会超过盒子显示区域")])]),v._v(" "),r("h2",{attrs:{id:"标签分类及特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标签分类及特点"}},[v._v("#")]),v._v(" 标签分类及特点")]),v._v(" "),r("p",[v._v("块级云素：所有的容器级标签（P 标签也是）"),r("br"),v._v("\n行内元素：所有的文本级标签（P 标签除外）span、img、input"),r("br")]),v._v(" "),r("p",[v._v("块级元素特点：")]),v._v(" "),r("ol",[r("li",[v._v("独占一行")]),v._v(" "),r("li",[v._v("可以设置宽高")]),v._v(" "),r("li",[v._v("如果不设置宽度，宽度默认为父盒子的实际内容宽度")])]),v._v(" "),r("p",[v._v("行内元素的特点：")]),v._v(" "),r("ol",[r("li",[v._v("并排显示")]),v._v(" "),r("li",[v._v("不能设置宽高")]),v._v(" "),r("li",[v._v("大小靠内容撑开")])]),v._v(" "),r("p",[v._v("行内元素与块级元素可以相互转换：\ndisplay：block、inline、inline-block")]),v._v(" "),r("p",[r("strong",[v._v("针对 a 标签的运用例子：")]),v._v("\n为了增加用户的点击量，可以把 a 标签写大，可以用 "),r("strong",[v._v("display=block")]),v._v("，就算用户点到文字旁边的空白区域，只要是 block 占有到的一行的区域，那么就可以进行超链接。不过也不能太长，否则对于用户来说也不够友好，影响用户体验，要在这之间做权衡。")]),v._v(" "),r("h2",{attrs:{id:"浮动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浮动"}},[v._v("#")]),v._v(" 浮动")]),v._v(" "),r("p",[v._v("浮动分为左浮动和右浮动 "),r("br"),v._v("\n特点："),r("br"),v._v(" "),r("strong",[v._v("浮动元素会脱离标准文档流，一旦设置了浮动，不再区分块级元素和行内元素，既可以设置宽高，又可以并排显示。")])]),v._v(" "),r("ol",[r("li",[r("p",[v._v("元素会贴边显示，左边几个div都设置了左浮动。"),r("br"),v._v(" "),r("img",{attrs:{src:"https://mynotes-1257961174.cos.ap-beijing.myqcloud.com/youdaoNotes/css-3/1.jpeg",alt:"图片1"}}),r("br")])]),v._v(" "),r("li",[r("p",[v._v("元素会贴边显示，左边几个div都设置了左浮动。"),r("br"),v._v(" "),r("img",{attrs:{src:"https://mynotes-1257961174.cos.ap-beijing.myqcloud.com/youdaoNotes/css-3/2.jpeg",alt:"图片2"}}),r("br")])]),v._v(" "),r("li",[r("p",[v._v("元素会贴边显示，左边几个div都设置了左浮动。"),r("br"),v._v(" "),r("img",{attrs:{src:"https://mynotes-1257961174.cos.ap-beijing.myqcloud.com/youdaoNotes/css-3/3.jpeg",alt:"图片3"}}),r("br")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);
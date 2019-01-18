html-editer
===========
可视化拖拽编辑系统<br>
<br>做个自我项目总结吧。项目内容具体是：开发一个网页编辑器，提供给非开发人员使用，让他们可以自行操作编辑生成html。
当初接到需求的时候，就是这么剪短的几句话，剩下的基本都靠自己思考。<br>
虽然项目类型不大，但功能偏复杂。没人提供思路（没有产品经理），也没类似开发经验，所以最后开发完成到投入使用，还是能学到很多。<br>
<br>一、思考项目逻辑，推出方案，确定方案。首先就是整个项目的`逻辑梳理和思考`（整个项目下来，感觉这步骤很重要）。先前也出过几个版本，但最后都否决了，后来搜索了很多相关信息，也参考了bootstrap的可视化编辑系统，才定了项目的基本走向——拖拽为主。<br>
<br>二、基本功能思考与实现。确定拖拽的方案，就开始着手拖拽方面思考问题，先后引入1.拖拽排序的思想（即一种拖拽+碰撞检测互换位置的操作），基于相对定位；2.绝对定位的拖拽（可实现覆盖效果），并可以缩放调整图片块大小，开发中比较多的问题都是在于数值的计算和转换上（开发采用适配移动端的rem单位）。<br>
<br>三、轮播图功能实现。拖拽基本实现了整个网页的静态操作，由于业务需要，引入轮播图。这里采用swiper的框架，将需要用的轮播图分别封装，让用户可以自己选择插入那种样式的轮播图。具体实现主要是遍历，遍历用户传进多少张图，建立多少个item...<br>
<br>四、右键菜单放辅助功能的开发。以上三步已经能制作出一个基础静态页了，这一步开发主要是锦上添花。由于要出的功能比较多，也需要用户点击，决定开发一个右键菜单。主要功能有1.添加点击块能跳转功能；2.开启上述拖拽的功能（拖拽转换）；3.删除块功能；4.各种小css动画。如缩放，上下浮动，左右移动。<br>
<br>项目完成，提高了公司的办公效率，自己也收获很多。采取的技术都是比较基础的`js`，`css`，`html`，也算是回顾基础了吧。收获最大的还是一种创造力，思考思维的迈出。独立思考能力的提升，自我搜索方案，提出方案，实现方案的能力提升。

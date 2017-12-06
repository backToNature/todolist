# pick-web-article

```pick-web-article```是一个基于文本密度算法的轻量js组件，用于从网页中提取正文部分，对于资讯内容类网页提取效果最佳。提取效率高，所有的代码加起来不到10K。

## 快速开始

### 浏览器端

	<script src="/dist/pick-web-article.js"></script>
	<script>
		let wa = pickWA(document.body);
		console.log(wa.articleDom); // 正文所在dom容器
		console.log(wa.allText); // 正文文本
		console.log(wa.summary); // 正文摘要文本
	</script>
### node端(待上传包) ... 
	bash:
	$ npm install pick-web-article
	node:
	const pickWA = require('pick-web-article');
	let wa = pickWA(htmlStr); // htmlStr为网页html字符串
	console.log(wa.allText); // 正文文本
	console.log(wa.summary); // 正文摘要
	
## API

### getThumb

获取当前页面缩略图

### getFavicon

获取当前页面图标

### getSummary

获取当前页面摘要

### getCleanHtml

获取清洗后的html模板

* option
	* img@base64 图片转base64
	* keepElement 元素白名单
	* blackElement 元素黑名单
	* keepAttr 保留的属性容忍444·

### 

## 算法介绍


![]()

## todo bad case

# pick-web-article

```pick-web-article```是一个基于文本密度算法的轻量js组件，用于从网页中提取正文部分，对于资讯内容类网页提取效果最佳。提取效率高，所有的代码加起来不到10K。

## demo

* test提取结果

## 使用方法

### 浏览器端

	<script src="/dist/pick-web-article.min.js"></script>
	<script>
		let wa = pickWA(document.body);
		console.log(wa.articleDom); // 正文所在dom容器
		console.log(wa.allText); // 正文文本
		console.log(wa.summary); // 正文摘要文本
	</script>
### node端 ... todo
	bash:
	$ tnpm install pick-web-article
	node:
	const pickWA = require('pick-web-article');
	let wa = pickWA(htmlStr); // htmlStr为网页html字符串
	console.log(wa.allText); // 正文文本
	console.log(wa.summary); // 正文摘要

## 算法介绍

上图


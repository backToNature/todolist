# ubuntu下搭建翻墙服务器

首先需要有一个外网服务器

## 执行如下命令

### 安装```dante-server```

	sudo apt-get install dante-server

### 修改配置文件

	sudo vim /etc/danted.conf

	// 改为如下

	logoutput: /var/log/danted.log
	internal: 0.0.0.0 port = 8080
	# 这里external为服务器上的局域网ip.
	external: xx.xx.xx.xx
	method: username none
	user.privileged: proxy
	user.notprivileged: nobody
	user.libwrap: nobody
	client pass {
	from: 0.0.0.0/0 to: 0.0.0.0/0
	          log: connect disconnect
	}
	pass {
	from: 0.0.0.0/0 to: 0.0.0.0/0 port gt 1023
	          command: bind
	          log: connect disconnect
	}
	pass {
	from: 0.0.0.0/0 to: 0.0.0.0/0
	          command: connect udpassociate
	          log: connect disconnect
	}
	block {
	from: 0.0.0.0/0 to: 0.0.0.0/0
	          log: connect error
	}



### 启动danted

	sudo service danted start
	sudo service danted restart
	sudo service danted force-reload

##
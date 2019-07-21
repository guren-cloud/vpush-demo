# vPush Demo
> vPush小程序消息推送平台 Demo
> 您可以使用此小程序来体验和学习vPush的消息推送功能

## 配置
首先确认您已经安装配置好了vPush后端    

> （如果您没有自己的服务器或已备案的域名或已认证的ssl证书，可使用代理平台一键搭建部署：[https://bigse.cn](https://bigse.cn)）

然后：
1）编辑`app.js`，把`new vPush`初始化函数中的url地址改成你部署好的vPush后端地址。    
2）登录vPush推送控制台（您部署好的vPush地址），然后创建一个**推送目标为指定用户**的推送API，记下推送的API地址和认证密钥    
3）编辑`pages/demo/api.js`，把上方创建好的API信息填写到`data.api`属性中    
4）最后一步，确保您已经在微信公众后台配置了request域名（您部署好的vPush服务端），然后点击预览，进行真机测试，即可完美体验这个小程序！

## 演示
![vpush-demo](vpush-demo.jpg)

## 帮助信息
- vPush专业版：[https://vpush.pro](https://vpush.pro)    
- vPush代理平台：[https://bigse.cn](https://bigse.cn)    
- 获取vPush许可证书：[https://get-vpush2.mssnn.cn](https://get-vpush2.mssnn.cn)    
- 技术支持微信：`Hack_Fish`    
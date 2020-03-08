## 使用element 搭建项目

### 一、环境准备

#### 1.1 项目创建

```
# 全局按照 vue/cli3
npm install -g @vue/cli

# 创建项目
vue create hello_project

# 按照依赖
npm install

# 安装element
cd hello_project
vue add element
npm install --save js-cookie

# 运行项目
npm run serve

```



安装依赖：

````
npm install node-sass sass-loader less less-loader --save-dev
````

技术博客：

https://blog.csdn.net/harsima/article/details/77949623

如果国内无法安装，则使用cnpm 

````
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install node-sass
cnpm install axios mockjs --save
````

https://element.eleme.cn/#/zh-CN/component/menu

解决git 总是输入密码：
git config --global credential.helper store



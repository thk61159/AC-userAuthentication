# 登入介面
利用node.js打造登入功能

## 功能
1. 登入


## 如何使用
1. 開啟終端機(terminal)，輸入如下將專案複製到電腦中
```shell
 git clone https://github.com/thk61159/AC-userAuthentication.git
```
2. 至MongoDB建立帳號並安裝MongoDB Atlas及Robo 3T
MONGODB_URI=mongodb+srv://使用者帳號:使用者密碼@資料庫伺服器位置ip/你建立的資料庫名稱?retryWrites=true&w=majority
3. 利用Robo 3T建立欲使用資料庫
4. 進入此專案資料夾，安裝各種套件
```shell
 cd userAuthentication
 npm install

```
5. 建立.env檔並輸入
MONGODB_URI=mongodb+srv://使用者帳號:使用者密碼@資料庫伺服器位置ip/你建立的資料庫名稱?retryWrites=true&w=majority
6. 新增種子資料(可省略)
```shell
node models/seeds/userSeeder.js
```
3. 運行userAuthentication
```shell
 nodemon app.js
```
4. 拜訪userAuthentication
```shell
 http://localhost:3000/
```

##開發工具
* Visual Studio Code 
* Node.js v14.16.0
* Express.js v4.16.4
* Express-handlebars v6.0.6
* MongoDB
* mongoose v5.9.7
* bootstrap



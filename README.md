# Augular
参考 https://www.gitbook.com/book/sylver-chen/search-doc/details


├─app
│  ├─app.routes.ts                  //设置一级路由，顶部导航条已被注释
│  ├─daohang 						//暂时的导航页面，无样式，在此处设置前台链接
│  ├─pcenter 						//个人中心
│  ├─pcenter2 						//个人中心，调试用
│  └─searchtest                     //首页的左侧菜单 暂放于此，勿直接替换

├─assets 							//这个目录里面是一些CSS、字体图标、图片等
│  ├─css                            //样式文件，不用单独建立文件夹
│  │                                
│  │  ├─leftmenu.scss               //首页中的左侧菜单
│  │  ├─pcenter.scss                //个人中心
│  │  └─toolbar.scss                //右侧工具栏
│  ├─fonts                          
│  │  └─iconfont                    //矢量图标库，添加图标需更新
│  └─imgs                           //图片文件，以自己名字分别建立文件夹

'./src/index.html'                  //所有页面，均嵌入在该页面中
'./src/styles.scss'                 //部分全局样式

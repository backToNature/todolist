/**
 * @api {get} /component/list 获取组件列表
 * @apiVersion 0.3.0
 * @apiName getComponentList
 * @apiGroup Component
 * @apiPermission all
 *
 * @apiDescription 获取所有组件列表
 *
 * @apiSuccess {String}   id            组件id
 * @apiSuccess {String}   name          组件名
 * @apiSuccess {String}   cover         组件封面图片url
 * @apiSuccess {String}   ctime         组件创建时间
 * @apiSuccess {String}   utime         组件更新时间
 * @apiSuccess {String}   description   组件简介
 * @apiSuccess {Object}   user          作者信息
 * @apiSuccess {String}   user.id       作者id
 * @apiSuccess {String}   user.name     作者姓名
 * @apiSuccess {String}   user.avatar   作者头像
 * @apiSuccess {String}   user.contact  作者联系方式
 * @apiSuccess {String}   tag           组件标签，以'|'分隔
 *
 * @apiParam {String}   type       是否只需要当前用户的组件，填own则为当前用户
 *
 * @apiSuccessExample {json} 成功获取:
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "success",
 *     "data": [
 *          {
 *              "id": "123",
 *              "name": "神组件",
 *              "cover": "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1472535826&di=c4a9483a642c91abb3febd56bea6e31b&src=http://a0.att.hudong.com/58/71/01300001098064129501717363948.jpg",
 *              "ctime": "1472552618959",
 *              "utime": "1472552618959",
 *              "description": "这是一个很牛逼的组件",
 *              "tag": "html|css|js",
 *              "user": {
 *                   "id": 213,
 *                   "name": "豪哥",
 *                   "avatar": "http://a.b.com",
 *                   "contact": "haoguo@sohu-inc.com"
 *              }
 *          }
 *      ]
 *
 */

/**
 * @api {post} /component/add 新增组件
 * @apiVersion 0.3.0
 * @apiName addComponent
 * @apiGroup Component
 * @apiPermission author
 *
 * @apiDescription 新增一个组件,需要登录
 *
 * @apiParam {String}   name          组件名
 * @apiParam {String}   cover         组件封面图片url
 * @apiParam {String}   description   组件简介
 * @apiParam {String}   tag           组件标签
 * @apiParam {String}   md            markdown文档
 * @apiParam {String}   html          html文档
 * @apiParam {String}   js            js文档
 * @apiParam {String}   css           css文档
 *
 * @apiSuccessExample {json} 创建成功
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "add component successful"
 *
 */

/**
 * @api {post} /component/delete 删除组件
 * @apiVersion 0.3.0
 * @apiName deleteComponent
 * @apiGroup Component
 * @apiPermission author
 *
 * @apiDescription 删除个组件,需要登录
 *
 * @apiParam {String}   id          组件id
 *
 * @apiSuccessExample {json} 删除成功
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "delete component successful"
 *
 */

/**
 * @api {get} /component/detail 组件详情
 * @apiVersion 0.3.0
 * @apiName componentDetail
 * @apiGroup Component
 * @apiPermission author
 *
 * @apiDescription 获取组件详情
 *
 * @apiParam {String}   id       组件id
 *
 * @apiSuccess {String}   name          组件名
 * @apiSuccess {String}   cover         组件封面图片url
 * @apiSuccess {String}   ctime         组件创建时间
 * @apiSuccess {String}   utime         组件更新时间
 * @apiSuccess {String}   description   组件简介
 * @apiSuccess {Object}   user          作者信息
 * @apiSuccess {String}   user.id       作者id
 * @apiSuccess {String}   user.name     作者姓名
 * @apiSuccess {String}   user.avatar   作者头像
 * @apiSuccess {String}   user.contact  作者联系方式
 * @apiSuccess {String}   tag           组件标签，以'|'分隔
 * @apiSuccess {String}   md            markdown文档
 * @apiSuccess {String}   html          html文档
 * @apiSuccess {String}   js            js文档
 * @apiSuccess {String}   css           css文档
 * @apiSuccess {String}   url           html的url
 *
 * @apiSuccessExample {json} 成功获取:
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "success",
 *     "data": {
 *          "name": "神组件",
 *          "cover": "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1472535826&di=c4a9483a642c91abb3febd56bea6e31b&src=http://a0.att.hudong.com/58/71/01300001098064129501717363948.jpg",
 *          "ctime": "1472552618959",
 *          "utime": "1472552618959",
 *          "description": "这是一个很牛逼的组件",
 *          "tag": "html|css|js",
 *          "user": {
 *               "id": 213,
 *               "name": "豪哥",
 *               "avatar": "http://a.b.com",
 *               "contact": "haoguo@sohu-inc.com"
 *          },
 *          "md": "xxx",
 *          "html": "dfdg",
 *          "js": "gfdgfdg",
 *          "css": "gdfg",
 *          "url": "http://a.b.com"
 *     }
 *
 */

/**
 * @api {get} /component/validate 上传验证
 * @apiVersion 0.3.0
 * @apiName validateComponent
 * @apiGroup Component
 * @apiPermission author
 *
 * @apiDescription 上传验证，需要登录
 *
 * @apiParam {String}   name       组件名
 *
 * @apiSuccess {Number}   code          状态码
 * @apiSuccess {String}   msg           状态信息
 *
 * @apiSuccessExample {json} 没有重复
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "component isn't repetition"
 *
 * @apiSuccessExample {json} 有重复
 *     HTTP/1.1 200 OK
 *     "code": 201,
 *     "msg": "component is repetition"
 *
 * @apiSuccessExample {json} 没有登录
 *     HTTP/1.1 200 OK
 *     "code": 202,
 *     "msg": "doesn't login"
 *
 * @apiSuccessExample {json} 别人已上传过同名组件
 *     HTTP/1.1 200 OK
 *     "code": 203,
 *     "msg": "someone has already added this component"
 *
 */

/**
 * @api {post} /component/upload 上传组件
 * @apiVersion 0.3.0
 * @apiName uploadComponent
 * @apiGroup Component
 * @apiPermission author
 *
 * @apiDescription 上传组件，需要登录
 *
 * @apiParam {File}   file       组件压缩包
 *
 * @apiSuccessExample {json} 上传成功
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "upload component successful"
 *
* @apiSuccessExample {json} 上传失败
 *     HTTP/1.1 200 OK
 *     "code": 201,
 *     "msg": "upload component failed"
 *
 */
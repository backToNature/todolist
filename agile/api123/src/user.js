/**
 * @api {get} /user/Info 获取用户信息
 * @apiVersion 0.3.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission all
 *
 * @apiDescription 获取当前用户信息
 *
 * @apiParam {String} id 用户id
 *
 * @apiSuccess {String}   name          用户名
 * @apiSuccess {String}   avatar        用户头像图片url
 * @apiSuccess {String}   contact       联系方式
 *
 * @apiSuccessExample {json} 已登录:
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "success",
 *     "data": {
 *       "name": "豪哥哥",
 *       "avatar": "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1472535826&di=c4a9483a642c91abb3febd56bea6e31b&src=http://a0.att.hudong.com/58/71/01300001098064129501717363948.jpg",
 *       "contact": "haoguo@sohu-inc.com"
 *     }
 *
 * @apiSuccessExample {json} 未登录:
 *     HTTP/1.1 200 OK
 *     "code": 300,
 *     "msg": "user doesn't login"
 *
 * @apiErrorExample Eorror Response (example):
 *     "code": 500,
 *     "msg": "server error"
 */

/**
 * @api {post} /user/add 添加用户
 * @apiVersion 0.3.0
 * @apiName addUser
 * @apiGroup User
 * @apiPermission 管理员
 *
 * @apiDescription 添加一个用户，由于没有用户注册流程，用户只能通过管理员添加。
 *
 * @apiParam {String} name 用户昵称
 * @apiParam {String} avatar 用户头像图片url
 * @apiParam {String} contact 用户联系方式
 * @apiParam {String} account 用户账号
 * @apiParam {String} pwd 用户密码
 *
 * @apiSuccess {String}   code          接口状态码
 * @apiSuccess {String}   msg           状态描述
 *
 * @apiSuccessExample {json} 添加成功
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "add user successful"
 *
 * @apiSuccessExample {json} 用户已经存在
 *     HTTP/1.1 200 OK
 *     "code": 201,
 *     "msg": "user has already exist!"
 *
 * @apiSuccessExample {json} 添加失败
 *     HTTP/1.1 200 OK
 *     "code": 202,
 *     "msg": "add user failed"
 *
 *
 */

/**
 * @api {post} /user/update 更新用户信息
 * @apiVersion 0.3.0
 * @apiName updateUser
 * @apiGroup User
 * @apiPermission 管理员
 *
 * @apiDescription 更改用户信息
 *
 * @apiParam {String} name 用户昵称
 * @apiParam {String} avatar 用户头像图片url
 * @apiParam {String} contact 用户联系方式
 * @apiParam {String} pwd 用户密码
 *
 * @apiSuccess {String}   code          接口状态码
 * @apiSuccess {String}   msg           状态描述
 *
 * @apiSuccessExample {json} 修改成功
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "add user successful"
 *
 */

/**
 * @api {get} /user/list 获取用户列表
 * @apiVersion 0.3.0
 * @apiName GetUserList
 * @apiGroup User
 * @apiPermission 管理员
 *
 * @apiDescription 获取所有用户信息列表
 *
 * @apiSuccess {String}   id            用户id
 * @apiSuccess {String}   name          用户名
 * @apiSuccess {String}   avatar        用户头像图片url
 * @apiSuccess {String}   contact       联系方式
 *
 * @apiSuccessExample {json} 已登录:
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "success",
 *     "data": [
 *          {
 *          "id": "123",
 *          "name": "豪哥哥",
 *          "avatar": "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1472535826&di=c4a9483a642c91abb3febd56bea6e31b&src=http://a0.att.hudong.com/58/71/01300001098064129501717363948.jpg",
 *          "contact": "haoguo@sohu-inc.com"
 *          }
 *      ]
 *
 */

/**
 * @api {post} /user/login 登录
 * @apiVersion 0.3.0
 * @apiName userLogin
 * @apiGroup User
 * @apiPermission all
 *
 * @apiDescription 登录验证
 *
 * @apiParam {String} account 用户账号
 * @apiParam {String} pwd 用户密码
 *
 * @apiSuccess {Number}   code          状态码
 * @apiSuccess {String}   msg           状态信息
 *
 * @apiSuccessExample {json} 登录成功:
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "login success"
 *
 * @apiSuccessExample {json} 登录失败:
 *     HTTP/1.1 200 OK
 *     "code": 201,
 *     "msg": "login failed"
 *
 */

/**
 * @api {get} /user/logout 登出
 * @apiVersion 0.3.0
 * @apiName userLogout
 * @apiGroup User
 * @apiPermission all
 *
 * @apiDescription 登录验证
 *
 *
 * @apiSuccess {Number}   code          状态码
 * @apiSuccess {String}   msg           状态信息
 *
 * @apiSuccessExample {json} 登出成功:
 *     HTTP/1.1 200 OK
 *     "code": 200,
 *     "msg": "logout success"
 *
 * @apiSuccessExample {json} 登录失败:
 *     HTTP/1.1 200 OK
 *     "code": 201,
 *     "msg": "logout failed"
 *
 */
---
title: 身份认证
---

## 获取访问令牌

#### 请求方式： `POST`

#### 请求地址： `{base_url}/oauth/issue-token`

#### 请求参数

| 参数|类型|是否必填|最大长度|描述|示例值|
|:---|:---|:---|:---|:---|:---|
| username| string| 是| 32 | 账号/身份证号码 | webman |
| password| string| 是| 32 | 密码 | webman123.|

#### 请求数据结构

```json
{
    "username": "webman",
    "password": "webman123."
}
```

#### 响应参数

| 参数|类型|是否必填|最大长度|描述|示例值|
|:---|:---|:---|:---|:---|:---|
|**token**| array | 是| 16 | 令牌信息 |--|
|└  token_type| string | 是| 8 | Token 类型 | Bearer |
|└  expires_in| int | 是| 16 | 凭证有效时间，单位：秒 | 7200 |
|└  access_token| int | 是| 64 | 访问凭证 | XXXXXXXXXXXXXXXXXXXXXXXXXX |
|**user_info** | array | 是| 16 | 用户信息 |--|
|└  username | string | 是| 8 | 用户名称| 阿克苏 |
|└  mobile | string | 是| 8 | 手机号码 | 13669361192 |
|└  email | string | 是| 16 | 邮箱 | Tinywan@163.com |
|└  avatar | string | 是| 16 | 头像 | https://live-oss.busionline.com/assets/images/avatars/6avatar.jpg |
|└  is_enabled | int | 是| 1 | 是否被禁用 |1 |
|└  is_admin | bool | 是| 4 | `true` 是，`false` 否 | true |

#### 响应示例

```json{1-2}
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8

{
    "code": 0,
    "msg": "success",
    "data": {
        "token": {
            "token_type": "Bearer",
            "expires_in": 36000,
            "access_token": "xxxxxxxxxxxxxxxxxxx",
            "refresh_token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },
        "user_info": {
            "id": 200001,
            "username": "阿克苏",
            "mobile": "13669361192",
            "email": "Tinywan@163.com",
            "avatar": "https://www.webman-admin.com/assets/images/avatars/6avatar.jpg",
            "is_enabled": 1,
            "create_time": "2021-11-12 10:48:59",
            "is_admin": true
        },
        "menus": []
    },
    "request_id": "ea920f84-42bd-491b-bc1a-7105bb768148"
}
```

#### 异常示例

```json{1-2}
HTTP/1.1 401 Unauthorized
Content-Type: application/json;charset=UTF-8

{
    "code": 0,
    "msg": "用户名不存在",
    "data": {}
}
```
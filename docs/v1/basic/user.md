---
title: 2.0 用户管理
---

## 2.1 用户列表

#### 请求方式： `GET`

#### 请求地址： `{base_url}/api/users`

#### 请求参数

| 参数|类型|是否必填|最大长度|描述|示例值|
|:---|:---|:---|:---|:---|:---|
| page| int | 否| 8 | 页码，默认1 | 1|
| per_page| int | 否| 16 | 每页条数，默认10 | 10|
| username | int | 否| 16 | 组织名称 | Tinywan|

#### 响应参数

| 参数|类型|是否必填|最大长度|描述|示例值|
|:---|:---|:---|:---|:---|:---|
| total| int | 是| 16 | 总条数 | 10 |
| list| array | 是| 16 |列表描述 |10 |
|└ id |int | 是| 16 |ID |200002 |
|└ username |string | 是| 16 |账号 |Tinywan |
|└ email |string | 是| 16 | 邮箱 |`Tinywan@aliyun.com`|
|└ mobile |string | 是| 16 |手机号码 | `136693618999`|
|└ avatar |string | 否 | 16 | 头像 |![avatar](https://live-oss.www.com/assets/images/avatars/6avatar.jpg)|
|└ website_name |string | 是| 16 | 站点名称 |元宇宙在哪里？|
|└ website_url |string | 是| 16 | 站点地址 |https://www.tinywan.com|
#### 响应示例

```json{1-2}
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8

{
    "code": 0,
    "msg": "success",
    "data": {
        "total": 2,
        "list": [
            {
                "id": 20220001,
                "username": "webman",
                "email": "Tinywan@163.com",
                "mobile": "13669361192",
                "avatar": "https://live-oss.baidu.com/assets/images/avatars/6avatar.jpg",
                "is_enabled": 1,
                "website_name": "webman",
                "website_url": "https://github.tinywan.com/",
                "create_time": "2021-11-12 10:48:59"
            },
            ...
        ]
    }
}
```


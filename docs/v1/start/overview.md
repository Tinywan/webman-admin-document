---
title: 概述
---

## 请求结构

:telephone_receiver:  **通信协议**

为了获得更高的安全性，仅支持使用 HTTPS 通道发送API请求。

:pencil: **字符编码**

请求及返回结果都使用 `UTF-8` 字符集进行编码。

:newspaper:  **内容类型和编码**

所有请求和响应的内容类型和编码 `Content-Type:application/json`

## 调用方式

:lock: **身份认证**

接口的身份认证采用OAuth2的客户端授权模式，对客户端持完全信任原则，赋予所有接口权限。调用采用HTTPS协议，Restful API 请求方式。

:shield: **认证机制**

接口安全采用[Json web token (JWT)](https://jwt.io/introduction/)机制，基于token的认证机制

## 频率限制

出于系统保护的考虑，我们对接口的调用做了频率限制。默认情况下，每个服务端调用接口都有一定的频率限制，如超出限制请求频率限制时，调用对应接口会收到相应错误码。

:warning: **默认情况下每个响应将包含以下HTTP头发送**

:::warning 
- `X-Rate-Limit-Limit` 同一个时间段所允许的请求的最大数目
- `X-Rate-Limit-Remaining` 在当前时间段内剩余的请求的数量
- `X-Rate-Limit-Reset` 为了得到最大请求数所等待的秒数
:::
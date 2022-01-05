---
title: 更新记录
---

## v3.0.0 - 2021-08-16

致敬 2017-08-16 第一版 v0.5.0 版本，今天，v3.0.0 正式发布了！

v3.0.0 版本对核心架构进行了重新设计，更易扩展，使用起来更方便，推荐更新，欢迎大家体验！

### Kernel

- 多租户支持
- Swoole 支持
- 灵活的插件机制
- 内置自动获取微信公共证书方法，再也不用再费劲去考虑第一次获取证书的的问题了
- 符合 PSR2、PSR3、PSR4、PSR7、PSR11、PSR14 等各项标准，你可以各种方便的与你的框架集成
- 通过插件机制兼容支付宝所有API
- 通过插件机制兼容微信所有API

### Changes

#### 事件

- 删除了 `SignFailed` 事件
- PayStarting 更改为 PayStarted
- PayStarted 更改为 PayFinish
- RequestReceived 更改为 CallbackReceived
- Yansongda\Pay\Events.php 更改为 Yansongda\Pay\Event.php
- Yansongda\Pay\Events 文件夹 更改为 Yansongda\Pay\Event (即相应的事件类更改)

#### 日志类

- Yansongda\Pay\Log.php 更改为 Yansongda\Pay\Logger.php

#### 返回格式

为了方便大家使用，返回格式有所调整，请见 [返回格式](/docs/v3/quick-start/return-format.md)

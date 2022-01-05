---
title: 更多便捷插件
---

# 更多方便的API

得益于 yansongda/pay 的基础架构和良好的插件机制，
您可以自有的使用任何内置插件和自定义插件调用支付宝的任何 API。

诸如签名、API调用、解密、验签、解包等基础插件已经内置在 Pay 中，
您可以使用 `Pay::wechat()->mergeCommonPlugins(array $plugins)` 来获取调用 API 所必须的常用插件

首先，查找你想使用的插件，然后

```php
Pay::config($config);

$params = [
    'transaction_id' => '1217752501201407033233368018',
];

$allPlugins = Pay::wechat()->mergeCommonPlugins([QueryPlugin::class]);

$result = Pay::wechat()->pay($allPlugins, $params);
```

关于插件的详细介绍，如果您感兴趣，可以参考 [这篇说明文档](/docs/v3/kernel/plugin.md)

## 资金应用-分账

### 添加分账接收方

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\AddReceiverPlugin`

### 请求分账

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\CreatePlugin`

### 删除分账接收方

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\DeleteReceiverPlugin`

### 查询剩余待分金额

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\QueryAmountsPlugin`

### 查询分账结果

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\QueryPlugin`

### 查询分账回退结果

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\QueryReturnPlugin`

### 请求分账回退

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\ReturnPlugin`

### 解冻剩余资金

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\UnfreezePlugin`

## 资金应用 - 转账到零钱

### 发起批量转账

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\CreatePlugin`

### 微信批次单号查询批次单

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\QueryBatchIdPlugin`

### 微信明细单号查询明细单

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\QueryBatchDetailIdPlugin`

### 商家批次单号查询批次单

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\QueryOutBatchNoPlugin`

### 商家明细单号查询明细单

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\QueryOutBatchDetailNoPlugin`

### 转账电子回单申请受理

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\CreateBillReceiptPlugin`

### 查询转账电子回单

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\QueryBillReceiptPlugin`

### 转账明细电子回单受理

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\CreateDetailReceiptPlugin`

### 查询转账明细电子回单受理结果

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\QueryBillReceiptPlugin`

### 下载电子回单

- `\Yansongda\Pay\Plugin\Wechat\Fund\Transfer\DownloadReceiptPlugin`

### 查询账户实时余额

- `\Yansongda\Pay\Plugin\Wechat\Fund\Balance\QueryPlugin`

### 查询账户日终余额

- `\Yansongda\Pay\Plugin\Wechat\Fund\Balance\QueryDayEndPlugin`

## 营销工具-代金券

### 创建代金券批次

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\CreatePlugin`

### 暂停代金券批次

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\PausePlugin`

### 根据商户号查用户的券

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryCouponDetailPlugin`

### 查询批次详情

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockDetailPlugin`

### 查询代金券可用单品

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockItemsPlugin`

### 查询代金券可用商户

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockMerchantsPlugin`

### 下载批次退款明细

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockRefundFlowPlugin`

### 条件查询批次列表

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStocksPlugin`

### 下载批次核销明细

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockUseFlowPlugin`

### 根据商户号查用户的券

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryUserCouponsPlugin`

### 重启代金券批次

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\RestartPlugin`

### 发放代金券批次

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\SendPlugin`

### 设置消息通知地址API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\SetCallbackPlugin`

### 激活代金券批次

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\StartPlugin`

## 服务商-行业方案

### 电商收付通（退款）

- `Yansongda\Pay\Plugin\Wechat\Ecommerce\Refund\ApplyPlugin`
- `Yansongda\Pay\Plugin\Wechat\Ecommerce\Refund\FindPlugin`
- `Yansongda\Pay\Plugin\Wechat\Ecommerce\Refund\FindReturnAdvancePlugin`
- `Yansongda\Pay\Plugin\Wechat\Ecommerce\Refund\ReturnAdvancePlugin`

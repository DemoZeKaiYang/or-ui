# 文字链接

文本超链接

## 基础使用

<or-link >默认链接</or-link>&nbsp;
<or-link type="primary">默认链接</or-link>&nbsp;
<or-link type="success">成功链接</or-link>&nbsp;
<or-link type="warning">警告链接</or-link>&nbsp;
<or-link type="danger"> 危险链接</or-link>&nbsp;
<or-link type="info">信息链接</or-link>

::: details 显示代码

```html
<or-link>默认链接</or-link>&nbsp;
<or-link type="primary">默认链接</or-link>&nbsp;
<or-link type="success">成功链接</or-link>&nbsp;
<or-link type="warning">警告链接</or-link>&nbsp;
<or-link type="danger"> 危险链接</or-link>&nbsp;
<or-link type="info">信息链接</or-link>
```

:::

## 禁用状态

<or-link  disabled>默认链接</or-link>&nbsp;
<or-link type="primary" disabled>默认链接</or-link>&nbsp;
<or-link type="success" disabled>成功链接</or-link>&nbsp;
<or-link type="warning" disabled>警告链接</or-link>&nbsp;
<or-link type="danger" disabled> 危险链接</or-link>&nbsp;
<or-link type="info" disabled>信息链接</or-link>

::: details 显示代码

```html
<or-link>默认链接</or-link>&nbsp;
<or-link type="primary">默认链接</or-link>&nbsp;
<or-link type="success">成功链接</or-link>&nbsp;
<or-link type="warning">警告链接</or-link>&nbsp;
<or-link type="danger"> 危险链接</or-link>&nbsp;
<or-link type="info">信息链接</or-link>
```

:::

## 下划线

<or-link  :underline="false">无下划线</or-link>&nbsp;
<or-link  >有下划线</or-link>&nbsp;

::: details 显示代码

```html
<or-link :underline="false">无下划线</or-link>&nbsp;
<or-link>有下划线</or-link>&nbsp;
```

:::

## 图标

<or-link  icon="back">返回</or-link>&nbsp;
<or-link >菜单<i class="or-icon-menu"></i></or-link>&nbsp;

::: details 显示代码

```html
<or-link icon="back">返回</or-link>
<or-link>菜单<i class="or-icon-menu"></i></or-link>
```

:::





## 属性

| 参数      | 说明       | 类型    | 可选值                              | 默认值  |
| --------- | ---------- | ------- | ----------------------------------- | ------- |
| type      | 类型       | string  | primary/success/warning/danger/info | default |
| underline | 是否下划线 | boolean | -                                   | true    |
| disabled  | 是否禁用   | boolean | -                                   | false   |
| href      | 原生href   | string  | -                                   |         |
| icon      | 图标       | string  | -                                   |         |


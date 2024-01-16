### 目前的问题

```js
不知道为什么gulp没有打包less文件;
在使用gulp的适合记得 gulp-autoprefixer用的是8的版本,不然回报错
```

```js
release - it没有执行自动发布打包, 后面再修复
```

### 对 scss 知识点的补充

比较详细的看[官网](https://www.sass.hk/docs/)9.2

@mixin 混合指令

```css
@mixin large-text {
  font: {
    family: Arial;
    size: 20px;
    weight: bold;
  }
  color: #ff0000;
}
```

使用混入

```css
.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}

.page-title {
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  color: #ff0000;
  padding: 4px;
  margin-top: 10px;
}
```

less 的写法

```js

在 LESS 中，可以使用 color(@color1, @color2, @weight) 函数来实现颜色的混合。下面是通过 LESS 实现你提供的 SCSS 代码的方式：

less
Copy code
.button-plain(@color) {
  color: @color;
  background: color(white, @color, 90%);
  border-color: color(white, @color, 60%);
}

// 使用 mixin
.button {
  .button-plain(#3498db);
}
在上述 LESS 代码中，.button-plain 是一个 mixin，接受一个颜色参数 @color，然后使用 color 函数将白色和传入的颜色混合以创建背景色和边框颜色。使用时，你可以调用 .button-plain mixin 并传递颜色参数。
```

### 编写 button 的问题

朴素按钮是通过 mixin 混入去实现的,mixin 在我的理解就是一个函数,接受变量,然后混入到我们对于的样式中
这是实现的代码

```css
.or-button.is-plain {
  .button-plain(#000);
}
.or-button-primary.is-plain {
  .button-plain(@--color-primary);
}
.or-button-success.is-plain {
  .button-plain(@--color-success);
}
.or-button-warning.is-plain {
  .button-plain(@--color-warning);
}
.or-button-danger.is-plain {
  .button-plain(@--color-danger);
}
.or-button-info.is-plain {
  .button-plain(@--color-info);
}

.button-plain(@color) {
  color: @color;
  background: color(white, @color, 90%);
  border-color: color(white, @color, 60%);
  border: 1px solid @color;
  &:hover,
  &:focus {
    background-color: @color;
    border-color: @color;
    color: #fff;
  }
  &:active {
    background-color: darken(@color, 10%);
    border-color: darken(@color, 10%);
    color: #fff;
  }
  &.is-disabled {
    color: mix(#fff, @color, 40%);
    background-color: mix(#fff, @color, 90%);
    border-color: mix(#fff, @color, 80%);
    cursor: not-allowed;
  }
}
```

### button 图标如何实现

```js
通过阿里图标给i标签class添加类名
```

### 打包问题

项目中引入字体图标库,但是打包出来的 iconfont.css.mjs 是空的
将 vite 打包忽略 less,通过 gulp 打包字体图标

### 开发 radio 中遇到的问题

vue3 选项式无法获取 this 实例,我们可以通过 getCurrentInstance()获取,像 defineOptions 定义的内容包裹在 ctx.$options 中

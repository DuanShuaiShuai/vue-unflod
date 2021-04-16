# vue-unfold

> 文字展开收起功能

## 下载

``` bash
# install dependencies
npm i vue-unfold -D
```
##  引入
```vue
<template>
  <div id="app">
    <ui-unfold
      lineHeight="19"
      line="2"
      text="测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案测试文案"
    ></ui-unfold>
  </div>
</template>

<script>
import UiUnfold from "./components/ui-unfold";
export default {
  name: "app",
  components: {
    UiUnfold
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
#app {
  margin: 0 auto;
  width: 400px;
  border: 1px solid black;
  padding: 20px;
}
</style> 

```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

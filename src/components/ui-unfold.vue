<!--
 * @Author: Duan shuai
 * @Date: 2021-04-07 15:58:24
 * @LastEditors: Duan shuai
 * @LastEditTime: 2021-04-09 15:47:16
-->
<template>
  <div class="ui-unfold" ref="dom">
    <div class="text-box" :style="{ lineHeight: lineHeight + 'px' }">
      {{ text }}
      <span class="expand" v-if="foldable" @click="handleClick">
        <img
          :height="lineHeight"
          src="../assets/gradient.png"
          alt="渐变"
          class="gradient"
        /><span class="click-unfold"> {{ folded ? "展开" : "收起" }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "ui-unfold",
  data() {
    this.limitHeight = this.line * this.lineHeight;
    return {
      foldable: false, // 是否显示展开收起tip
      folded: false // 展开收起状态
    };
  },
  props: {
    text: {
      type: String,
      default: ""
    },
    lineHeight: {
      type: Number,
      default: 19
    },
    line: {
      type: Number,
      default: 4
    }
  },
  mounted() {
    this.dom = this.$refs.dom;
    this.autoHeight = $(this.dom).height();
    if (this.autoHeight > this.limitHeight) {
      this.foldable = true;
      this.folded = true;
      $(this.dom).height(this.limitHeight);
    }
  },
  methods: {
    handleClick(e) {
      e.stopPropagation();
      e.preventDefault();
      this.folded = !this.folded;
      if (this.folded && this.dom) {
        $(this.dom).animate({
          height: this.limitHeight + "px"
        });
      } else {
        $(this.dom).animate({
          height: this.autoHeight + "px"
        });
      }
    }
  }
};
</script>
<style lang="css">
.ui-unfold {
  display: inline-block;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.text-box {
  width: 100%;
}
.expand {
  /* background: white; */
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin-left: 0.6em;
  cursor: pointer;
}
.click-unfold {
  background: white;
  color: blue;
}
.gradient {
  vertical-align: bottom;
}
</style>

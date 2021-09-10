<template>
  <div class="wrap">
    <div v-for="(vv0, index0) in list" :key="index0">
      <div class="node" @click="setCurrent(vv0, index0)">{{ vv0.name }}</div>
      <Tree
        v-if="vv0.children && vv0.children.length"
        :config="config"
        :list="vv0.children"
      ></Tree>
    </div>
  </div>
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { onMounted } from 'vue'
import { appMitt } from './util'
import { GenNodeText } from './util'
export default {
  name: 'Tree',
  props: {
    list: null,
    config: null,
  },
  emits: [],
  setup(props, { attrs, slots, emit }) {
    return {
      setCurrent(vv0, index0) {
        console.log(vv0)
        GenNodeText(vv0, props.config.cols)
        appMitt.emit('setCurrent', vv0)
      },
    }
  },
}
</script>
<style scoped lang="scss">
.wrap {
  padding-left: 5px;
}
.node {
  height: 1em;
}
</style>

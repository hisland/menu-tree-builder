<template>
  <div class="rootWrap">
    <div class="head">
      <Config :config="config"></Config>
    </div>
    <div class="left">
      <Tree :config="config" :list="tree"></Tree>
    </div>
    <div class="main">
      <Table :config="config" :node="currentNode"></Table>
    </div>
  </div>
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { onMounted } from 'vue'
import { appMitt } from './util'
export default {
  props: {},
  emits: {},
  setup(props, { attrs, slots, emit }) {
    const data = reactive({
      currentNode: [],
      config: {
        childKey: 'children',
        pidKey: 'parent',
        showPid: false,
        labelKey: 'name',
        cols: ['name', 'age'],
      },
      tree: [
        { name: '11', children: [{ name: '11-0', children: [] }] },
        { name: '22', children: [] },
      ],
    })
    appMitt.on('setCurrent', (node) => {
      data.currentNode = node
    })
    window.kkk =data
    return data
  },
}
</script>
<style>
body {
  margin: 0;
}
.rootWrap {
  height: 100vh;
  display: grid;
  grid-template-areas: 'head head' 'left main' 'left main';
  grid-template-rows: 30% 70%;
  grid-template-columns: 30% 70%;
}
.head {
  grid-area: head;
}
.left {
  grid-area: left;
}
.main {
  grid-area: main;
}
</style>

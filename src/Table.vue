<template>
  <div :class="ss.wrap">
    <div
      :class="ss.col"
      v-for="(key, index0) in globalStore.config.cols"
      :key="index0"
    >
      <div :class="ss.row1">
        <input type="text" v-model="globalStore.config.cols[index0]" />
        <div>
          <button>x</button>
          <button>label</button>
        </div>
      </div>
      <div :class="ss.row2">
        <textarea :value="rs[key]" @change="ChangeRows($event, key)"></textarea>
      </div>
    </div>
    <div :class="ss.col" key="add-col">
      <div :class="ss.row1">
        <button>+</button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, watch, computed } from 'vue'
import { onMounted } from 'vue'
import { GenNodeText } from './util'
import { globalStore } from './store'
export default {
  props: {},
  emits: {},
  setup(props, { attrs, slots, emit }) {
    const rs = computed(() =>
      globalStore.currentNode
        ? GenNodeText(globalStore.currentNode, globalStore.config.cols)
        : {}
    )
    return {
      globalStore,
      rs,
      ChangeRows(evt, key) {
        const vv1 = evt.target.value.trim().replace(/\n+/g, '\n').split('\n')
        const values = vv1.map((str) => str.trim())
        const values_length = values.length
        const child_length = globalStore.currentNode.children.length
        const max = Math.max(values_length, child_length)
        for (let ii = 0; ii < max; ii++) {
          const value = values[ii] || ''
          if (!globalStore.currentNode.children[ii]) {
            globalStore.currentNode.children[ii] = {
              [key]: value,
              children: [],
            }
          } else {
            globalStore.currentNode.children[ii][key] = value
          }
        }
      },
    }
  },
}
</script>
<style module="ss" lang="scss">
.wrap {
  display: flex;
  overflow: auto;
}
.col {
  display: grid;
  grid-template-areas: 'up' 'down';
  grid-template-rows: 30% 70%;
}
.row1 {
}
.row2 {
  > textarea {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>

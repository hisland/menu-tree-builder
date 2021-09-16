<template>
  <div class="rootWrap">
    <div class="left">
      <textarea :value="treeJSON" @change="ChangeJSON"></textarea>
    </div>
    <div class="config">
      <Config></Config>
    </div>
    <div class="tab">
      <span
        @click="globalStore.currentTab = 'LayoutTree'"
        :class="{ current: globalStore.currentTab === 'LayoutTree' }"
        >LayoutTree</span
      >
      <span
        @click="globalStore.currentTab = 'LayoutTableFlat'"
        :class="{ current: globalStore.currentTab === 'LayoutTableFlat' }"
        >LayoutTableFlat</span
      >
      <span
        @click="globalStore.currentTab = 'LayoutTableMerge'"
        :class="{ current: globalStore.currentTab === 'LayoutTableMerge' }"
        >LayoutTableMerge</span
      >
    </div>
    <div class="main">
      <LayoutTree v-if="globalStore.currentTab === 'LayoutTree'"></LayoutTree>
    </div>
  </div>
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { computed } from 'vue'
import { onMounted } from 'vue'
import { globalStore } from './store'
export default {
  props: {},
  emits: {},
  setup(props, { attrs, slots, emit }) {
    return {
      globalStore,
      treeJSON: computed(() => JSON.stringify(globalStore.tree, null, ' ')),
      ChangeJSON(evt) {
        const { value } = evt.target
        try {
          const rs = JSON.parse(value)
          globalStore.tree = rs
        } catch (error) {
          console.error(error)
        }
      },
    }
  },
}
</script>
<style scoped lang="scss">
.rootWrap {
  height: 100vh;
  display: grid;
  grid-template-areas:
    'left config'
    'left tab'
    'left main';
  grid-template-rows: 100px 30px 1fr;
  grid-template-columns: 30% 70%;
}
.left {
  grid-area: left;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  > textarea {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
.config {
  grid-area: config;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.tab {
  grid-area: tab;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  > span {
    padding: 3px;
    margin: 3px;
    &.current {
      color: red;
    }
  }
}
.main {
  grid-area: main;
  box-sizing: border-box;
}
</style>

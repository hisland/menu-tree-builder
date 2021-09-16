<template>
  <div :class="ss.wrap">
    <div>
      <div :class="ss.node">
        <div
          :class="[ss.name, globalStore.currentNode === fakeRoot && ss.curr]"
          @click="SetCurrent(fakeRoot)"
        >
          根
        </div>
      </div>
      <Tree
        :list="globalStore.tree"
        style="border-right: 1px solid #ccc"
      ></Tree>
    </div>
    <Table></Table>
  </div>
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { onMounted } from 'vue'
import { SetCurrent } from './store'
import { globalStore } from './store'
export default {
  props: {},
  emits: [],
  setup(props, { attrs, slots, emit }) {
    return {
      globalStore,
      fakeRoot: reactive({ children: globalStore.tree }),
      SetCurrent,
    }
  },
}
</script>
<style module="ss" lang="scss">
.wrap {
  height: 100%;
  display: grid;
  grid-template-areas: 'left main';
  grid-template-columns: 30% 70%;
}
.node {
  height: 1em;
  line-height: 1em;
  display: flex;
  .close {
    width: 1em;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  .name {
    flex: 1 1 auto;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
    &.curr {
      color: red;
    }
  }
}
</style>

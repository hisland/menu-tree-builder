<template>
  <div :class="ss.wrap">
    <div v-for="(vv0, index0) in list" :key="index0">
      <div :class="ss.node">
        <div :class="ss.close" @click="DelThis(index0)">x</div>
        <div
          :class="[ss.name, globalStore.currentNode === vv0 && ss.curr]"
          @click="SetCurrent(vv0, index0)"
        >
          {{ vv0.name }}
        </div>
      </div>
      <Tree
        v-if="vv0.children && vv0.children.length"
        :list="vv0.children"
      ></Tree>
    </div>
  </div>
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { onMounted } from 'vue'
import { SetCurrent } from './store'
import { globalStore } from './store'
export default {
  name: 'Tree',
  props: {
    list: null,
  },
  emits: [],
  setup(props, { attrs, slots, emit }) {
    return {
      globalStore,
      DelThis(index0) {
        props.list.splice(index0, 1)
      },
      SetCurrent,
    }
  },
}
</script>
<style module="ss" lang="scss">
.wrap {
  padding-left: 5px;
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

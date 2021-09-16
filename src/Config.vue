<template>
  <div class="wrap">
    <label>
      <span>childKey</span>
      <input
        type="text"
        :value="globalStore.config.childKey"
        @change="ChangeConfig($event, 'childKey')"
      />
    </label>
    <label>
      <span>showPid</span>
      <input
        type="checkbox"
        :value="globalStore.config.showPid"
        @change="ChangeConfig($event, 'showPid')"
      />
    </label>
    <label>
      <span>pidKey</span>
      <input
        type="text"
        :value="globalStore.config.pidKey"
        @change="ChangeConfig($event, 'pidKey')"
      />
    </label>
    <label>
      <span>labelKey</span>
      <input
        type="text"
        :value="globalStore.config.labelKey"
        @change="ChangeConfig($event, 'labelKey')"
      />
    </label>
    <div>
      <label>
        <span>ID规则</span>
        <input
          type="text"
          :value="globalStore.config.idRule"
          @change="ChangeConfig($event, 'labelKey')"
        />
      </label>
      <button>生成ID</button>
      <button>生成排序</button>
    </div>
  </div>
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { onMounted } from 'vue'
import { globalStore } from './store'
export default {
  props: {},
  emits: [],
  setup(props, { attrs, slots, emit }) {
    return {
      globalStore,
      ChangeConfig(evt, configKey) {
        const { value } = evt.target
        if (configKey === 'childKey') {
        } else if (configKey === 'showPid') {
        } else if (configKey === 'pidKey') {
        } else if (configKey === 'labelKey') {
        } else {
        }
      },
    }
  },
}
</script>
<style scoped lang="scss">
</style>

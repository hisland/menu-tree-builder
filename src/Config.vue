<template>
  <div class="wrap">
    <label>
      <span>childKey</span>
      <input
        type="text"
        :value="config.childKey"
        @change="ChangeConfig($event, 'childKey')"
      />
    </label>
    <label>
      <span>pidKey</span>
      <input
        type="text"
        :value="config.pidKey"
        @change="ChangeConfig($event, 'pidKey')"
      />
    </label>
    <label>
      <span>showPid</span>
      <input
        type="checkbox"
        :value="config.showPid"
        @change="ChangeConfig($event, 'showPid')"
      />
    </label>
    <label>
      <span>labelKey</span>
      <input
        type="text"
        :value="config.labelKey"
        @change="ChangeConfig($event, 'labelKey')"
      />
    </label>
    <button>+列</button>
  </div>
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { onMounted } from 'vue'
export default {
  props: {
    config: null,
  },
  emits: {},
  setup(props, { attrs, slots, emit }) {
    return {
      ChangeConfig($evt, configKey) {},
    }
  },
}
</script>
<style scoped lang="scss">
</style>

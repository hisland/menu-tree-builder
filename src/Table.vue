<template>
  <table>
    <tr>
      <td v-for="(vv0, index0) in config.cols" :key="index0">
        <input type="text" v-model="config.cols[index0]" />
        <span>x</span>
      </td>
    </tr>
    <tr>
      <td v-for="(key, index0) in config.cols" :key="index0">
        <textarea
          :value="node.rs && node.rs[key]"
          @change="ChangeRows($event, key)"
        ></textarea>
      </td>
    </tr>
  </table>
</template>
<script>
import { ref, reactive, watch } from 'vue'
import { onMounted } from 'vue'
export default {
  props: {
    config: null,
    node: null,
  },
  emits: {},
  setup(props, { attrs, slots, emit }) {
    return {
      ChangeRows(evt, key) {
        const values = evt.target.value.split('\n')
        const values_length = values.length
        const child_length = props.node.children.length
        const max = Math.max(values_length, child_length)
        for (let ii = 0; ii < max; ii++) {
          const value = values[ii] || ''
          if (!props.node.children[ii]) {
            props.node.children[ii] = {
              [key]: value,
              children: [],
            }
          } else {
            props.node.children[ii][key] = value
          }
        }
      },
    }
  },
}
</script>
<style scoped lang="scss">
</style>

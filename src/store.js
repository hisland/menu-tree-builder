import { reactive } from 'vue'
import { treeWalkDeep } from 'tree-walk-util/dist/bundle.esm'

export const globalStore = reactive({
  currentTab: 'LayoutTree',
  currentNode: null,
  config: {
    childKey: 'children',
    pidKey: 'parent',
    showPid: false,
    labelKey: 'name',
    idRule: '${lv}', // pid level index
    cols: ['name', 'age', 'desc'],
  },
  tree: [],
  // tree: [
  //   { name: '11', children: [{ name: '11-0', children: [] }] },
  //   { name: '22', children: [] },
  // ],
})

export function SetCurrent(node) {
  globalStore.currentNode = node
}
export function DelCol(node) {
  globalStore.currentNode = node
}
export function SetLabel(label) {
  globalStore.config.labelKey = label
}
export function SetID() {
  const { idRule } = globalStore.config
}
export function SetSort() {
  const { idRule } = globalStore.config
  treeWalkDeep(globalStore.tree, () => {})
}

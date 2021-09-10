import mitt from 'mitt'

const appMitt = mitt()

export { appMitt }

export function GenNodeText(node, cols) {
  const rs = {}
  for (const key of cols) {
    rs[key] = node.children.map((vv) => vv[key]).join('\n')
  }
  node.rs = rs
}

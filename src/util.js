export function GenNodeText(node, cols) {
  const rs = {}
  for (const key of cols) {
    rs[key] = node.children.map((vv) => vv[key]).join('\n')
  }
  return rs
}

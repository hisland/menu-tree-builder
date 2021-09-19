import { treeWalkDeep } from 'tree-walk-util/dist/bundle.esm'

export function GenNodeText(node, cols) {
  const rs = {}
  for (const key of cols) {
    rs[key] = node.children.map((vv) => vv[key]).join('\n')
  }
  return rs
}

function addNode(
  level_list,
  blank_length,
  text,
  label_name,
  children_key,
  indent_size
) {
  // ceil, 尽可能认为是缩进
  let level = Math.ceil(blank_length / indent_size)
  const obj = { [label_name]: text, [children_key]: [] }

  // 动态生成不同层级的容纳数组, 0,1,2,3...级, 不能跳级, 否则会混乱
  if (!level_list[level]) {
    level_list.push([])
    level = level_list.length - 1
  }

  if (level === 0) {
    // 顶层节点
    level_list[level].push(obj)
  } else {
    // 子孙级节点
    const parent_list = level_list[level - 1]
    const parent = parent_list[parent_list.length - 1] // 最后一个节点认为是父节点
    parent[children_key].push(obj)
    level_list[level].push(obj)
  }
}

export function indentStrToTree(
  raw_str,
  label_name = 'text',
  children_key = 'children',
  indent_size = 2
) {
  // 空间换时间, 不使用递归
  // 采用下面的结构存储结果
  // [
  //   [], // 1级节点
  //   [], // 2级节点
  //   [], // 3级节点
  //   // ... 依次自动生成
  // ]
  // 并且每次生成节点都会对应 push 到上级节点的 children 中
  const level_list = []
  const trim_str = raw_str.trim()
  const reg = /^( *)(.*)$/gm

  trim_str.replace(reg, function (match, blank, text) {
    addNode(
      level_list,
      blank.length,
      text,
      label_name,
      children_key,
      indent_size
    )
  })

  return level_list[0]
}

export function treeToIndentStr(
  tree,
  label_name = 'text',
  children_key = 'children'
) {
  const rs = []
  treeWalkDeep(
    tree,
    (item, index, list, parent, level) => {
      rs.push('  '.repeat(level) + item[label_name])
    },
    children_key
  )
  return rs.join('\n')
}

export function tabStrToTree(
  raw_str,
  label_name = 'text',
  children_key = 'children'
) {
  // 空间换时间, 不使用递归
  // 采用下面的结构存储结果
  // [
  //   [], // 1级节点
  //   [], // 2级节点
  //   [], // 3级节点
  //   // ... 依次自动生成
  // ]
  // 并且每次生成节点都会对应 push 到上级节点的 children 中
  const level_list = [[]]
  const lines = raw_str.trim().split('\n')
  for (const line of lines) {
    // console.log('match, blank, text: ', line)
    const cols = line.split('\t')
    // console.log(cols)
    for (const [index, value] of Object.entries(cols)) {
      // '' 空字符串认为是缩进, 直接跳过
      // 注意源数据必须按照 1,2,3... 这样的层级来, 不然会出错
      if (value !== '') {
        const num_index = parseInt(index)
        // console.log(level_list[num_index])
        const obj = { [label_name]: value, [children_key]: [] }
        if (num_index === 0) {
          level_list[0].push(obj)
        } else {
          const parent_list = level_list[num_index - 1]
          const parent = parent_list[parent_list.length - 1] // 最后一个节点认为是父节点
          parent[children_key].push(obj)
          if (level_list[num_index]) {
            level_list[num_index].push(obj)
          } else {
            level_list[num_index] = [obj]
          }
        }
      }
    }
  }

  // return level_list
  return level_list[0]
}

export function treeToTabStr(
  tree,
  label_name = 'text',
  children_key = 'children'
) {
  const rs = []
  let line = []
  let last_level = -1
  treeWalkDeep(
    tree,
    (item, index, list, parent, level) => {
      if (level > last_level) {
        line.push(item[label_name])
      } else {
        rs.push(line.join('\t'))
        line = []
        for (let ii = 0; ii < level; ii++) line.push('')
        line.push(item[label_name])
      }
      last_level = level
    },
    children_key
  )
  rs.push(line.join('\t'))
  return rs.join('\n')
}

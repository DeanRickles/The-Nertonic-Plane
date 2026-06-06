import { QuartzFilterPlugin } from "../types"

export const RemoveHidden: QuartzFilterPlugin = () => ({
  name: "RemoveHidden",
  shouldPublish(_ctx, [_tree, vfile]) {
    const hideAll = vfile.data?.frontmatter?.hide_from_all === true
    return !hideAll
  },
})

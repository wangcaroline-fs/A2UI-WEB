/**
 * vNode：组件与 Surface 状态模型
 * 底层实现：@a2ui/web_core ComponentModel / SurfaceModel
 */
export {
  ComponentModel,
  SurfaceModel,
  SurfaceGroupModel,
  DataModel,
} from '@a2ui/web_core/v0_9';

export type {
  ActionPayload,
  ActionListener,
  A2uiErrorPayload,
  A2uiWarningPayload,
} from '@a2ui/web_core/v0_9';

export type { ComponentNode, NodeProps, NodeState } from '@a2ui/web_core/v0_9';

export { isComponentNode, PLACEHOLDER_TYPE } from '@a2ui/web_core/v0_9';

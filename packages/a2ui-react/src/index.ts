/** 官方 React 渲染器 */
export {
  A2uiSurface,
  basicCatalog,
  createComponentImplementation,
  createBinderlessComponentImplementation,
  MarkdownContext,
  useMarkdownRenderer,
  useSignalValue,
  Text,
  Button,
  Column,
  Row,
  Card,
  List,
  Tabs,
  Modal,
  Divider,
  Image,
  Icon,
  Video,
  AudioPlayer,
  TextField,
  CheckBox,
  ChoicePicker,
  Slider,
  DateTimeInput,
} from '@a2ui/react/v0_9';

export type {
  ReactComponentImplementation,
  ReactA2uiComponentProps,
  NodeBuildChild,
  NodeViewProps,
} from '@a2ui/react/v0_9';

/** Playground 扩展 */
export { basicCatalog as officialBasicCatalog } from './catalog/basic.js';
export { playgroundCatalog } from './catalog/playground.js';
export { PlaygroundProvider, usePlaygroundProcessor } from './PlaygroundProvider.js';
export type { PlaygroundProviderProps } from './PlaygroundProvider.js';

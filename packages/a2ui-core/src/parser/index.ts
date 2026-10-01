/**
 * parser：解析 A2UI 协议消息流
 * 底层实现：@a2ui/web_core MessageProcessor
 */
export {
  MessageProcessor,
  formatZodIssue,
  STRICT_VALIDATION,
  RELAXED_VALIDATION,
} from '@a2ui/web_core/v0_9';

export type {
  ProcessableMessage,
  ProcessableMessagePayload,
  MessageProcessorOptions,
  ExecutionContext,
} from '@a2ui/web_core/v0_9';

export { createPlaygroundProcessor } from '../processor.js';
export type { PlaygroundProcessor } from '../processor.js';

export { parseJsonl, parseJsonlLine } from '../utils/parseStream.js';

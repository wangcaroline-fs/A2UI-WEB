import type { A2uiMessage } from '../types.js';

/** 解析单行 JSONL，空行返回 null */
export const parseJsonlLine = (line: string): A2uiMessage | null => {
  const trimmed = line.trim();
  if (!trimmed) {
    return null;
  }

  return JSON.parse(trimmed) as A2uiMessage;
};

/** 将 JSONL 文本解析为 A2UI 消息数组 */
export const parseJsonl = (text: string): A2uiMessage[] =>
  text
    .split('\n')
    .map(parseJsonlLine)
    .filter((message): message is A2uiMessage => message !== null);

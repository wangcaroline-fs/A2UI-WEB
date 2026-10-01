import {
  MessageProcessor,
  type ActionListener,
  type Catalog,
  type ComponentApi,
  type MessageProcessorOptions,
} from '@a2ui/web_core/v0_9';

export type PlaygroundProcessor<T extends ComponentApi = ComponentApi> =
  MessageProcessor<T>;

export const createPlaygroundProcessor = <T extends ComponentApi = ComponentApi>(
  catalogs: Catalog<any>[],
  actionHandler?: ActionListener,
  options?: MessageProcessorOptions,
) => new MessageProcessor<T>(catalogs, actionHandler, options);

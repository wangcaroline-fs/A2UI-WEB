import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import {
  createPlaygroundProcessor,
  type ActionListener,
  type PlaygroundProcessor,
} from 'a2ui-core';
import type { ReactComponentImplementation } from '@a2ui/react/v0_9';
import { playgroundCatalog } from './catalog/playground.js';

const ProcessorContext =
  createContext<PlaygroundProcessor<ReactComponentImplementation> | null>(null);

export type PlaygroundProviderProps = {
  children: ReactNode;
  onAction?: ActionListener;
};

export const PlaygroundProvider = ({ children, onAction }: PlaygroundProviderProps) => {
  const processor = useMemo(
    () =>
      createPlaygroundProcessor<ReactComponentImplementation>(
        [playgroundCatalog],
        onAction,
      ),
    [onAction],
  );

  useEffect(
    () => () => {
      processor.dispose();
    },
    [processor],
  );

  return (
    <ProcessorContext.Provider value={processor}>{children}</ProcessorContext.Provider>
  );
};

export const usePlaygroundProcessor = (): PlaygroundProcessor<ReactComponentImplementation> => {
  const processor = useContext(ProcessorContext);

  if (!processor) {
    throw new Error('usePlaygroundProcessor must be used within PlaygroundProvider');
  }

  return processor;
};

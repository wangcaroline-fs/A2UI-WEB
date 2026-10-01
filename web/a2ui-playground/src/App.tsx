import { useEffect, useState } from 'react';
import { A2UI_PROTOCOL_VERSION, type A2uiMessage } from 'a2ui-core';
import {
  A2uiSurface,
  PlaygroundProvider,
  playgroundCatalog,
  usePlaygroundProcessor,
} from 'a2ui-react';
const sampleMessages: A2uiMessage[] = [
  {
    version: A2UI_PROTOCOL_VERSION,
    createSurface: { surfaceId: 'main', catalogId: playgroundCatalog.id },
  },
  {
    version: A2UI_PROTOCOL_VERSION,
    updateComponents: {
      surfaceId: 'main',
      components: [
        { id: 'root', component: 'Column', children: ['title', 'body'] },
        { id: 'title', component: 'Text', text: { path: '/title' } },
        { id: 'body', component: 'Text', text: { path: '/body' } },
      ],
    },
  },
  {
    version: A2UI_PROTOCOL_VERSION,
    updateDataModel: {
      surfaceId: 'main',
      path: '/',
      value: {
        title: 'A2UI Playground',
        body: 'adapter 层已接入 @a2ui/web_core 与 @a2ui/react',
      },
    },
  },
];

const Preview = () => {
  const processor = usePlaygroundProcessor();
  const [surfaces, setSurfaces] = useState(() =>
    Array.from(processor.model.surfacesMap.values()),
  );

  useEffect(() => {
    processor.processMessages(sampleMessages);

    const sync = () => {
      setSurfaces(Array.from(processor.model.surfacesMap.values()));
    };

    const createdSub = processor.onSurfaceCreated(sync);
    const deletedSub = processor.onSurfaceDeleted(sync);
    sync();

    return () => {
      createdSub.unsubscribe();
      deletedSub.unsubscribe();
    };
  }, [processor]);

  return (
    <main style={{ padding: 24 }}>
      {surfaces.map((surface) => (
        <A2uiSurface key={surface.id} surface={surface} />
      ))}
    </main>
  );
};

export const App = () => (
  <PlaygroundProvider>
    <Preview />
  </PlaygroundProvider>
);

import { mergeRouters, router } from '@/app/api/trpc/trpc-router';
import mainRouter from './main';
import panelRouter from './panel';
import paymentRouter from './payment';
import playgroundRouter from './playground';
import publicPlaygroundRouter from './public-playground';
import explorerRouter from './explorer';
import apiKeyRouter from './api-key';

export const appRouter = router({
  main: mainRouter,
  panel: panelRouter,
  apiKey: apiKeyRouter,
  payment: paymentRouter,
  playground: playgroundRouter,
  publicPlayground: publicPlaygroundRouter,
  explorer: explorerRouter
});
export type AppRouter = typeof appRouter;

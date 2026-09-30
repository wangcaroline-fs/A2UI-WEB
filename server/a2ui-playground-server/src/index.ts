import Koa from 'koa';

const app = new Koa();
const port = Number(process.env.PORT) || 3000;

app.use(async (ctx) => {
  ctx.body = { status: 'ok', message: 'A2UI Playground Server' };
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

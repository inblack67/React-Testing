import { rest, context } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, context) => {
    return res(
      context.status(200),
      context.json([
        { body: 'lorem', id: 1, title: 'ipsum' }
      ])
    )
  }),

  rest.get('*', (req, res, context) => {
    return res(
      context.status(500),
      context.json({ success: false, msg: `Please add a request handler for ${req.url.toString()}` })
    )
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
beforeAll(() => server.resetHandlers());

export { server, rest };
import type { RouteObject } from 'react-router';
import Layout from '@/components/layout/Layout';

// const middleware = ({ params, request }: { params: Params; request: Request }) => {
//   if (!request.headers.get('Authorization')) {
//     throw redirect("/login");
//   }
// };

const HydrateFallback = () => {
  return <div>Loading...</div>;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    // middleware: [middleware],
    HydrateFallback: HydrateFallback,
    children: [
      {
        index: true,
        lazy: {
          loader: async () => (await import('../views/home/Home')).loader,
          Component: async () => (await import('../views/home/Home')).default,
        },
      },
      {
        path: 'about/:id?',
        lazy: {
          Component: async () => (await import('../views/about/About')).default,
        },
      },
      {
        path: 'breakpoints',
        lazy: {
          Component: async () => (await import('../views/breakpoints/Breakpoints')).default,
        },
      },
    ],
  },
  {
    path: '*',
    lazy: {
      Component: async () => (await import('../views/not-found/NotFound')).default,
    },
  },
];

export default routes;

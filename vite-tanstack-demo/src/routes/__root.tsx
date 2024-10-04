import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Header } from '../components/layout/Header';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ReactQueryDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});

import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const activeProps = {
  style: {
    fontWeight: 'bold',
  },
};

const Root = () => {
  return (
    <>
      <h1>My App</h1>
      <ul>
        <li>
          <Link to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/pokemon" activeProps={activeProps}>
            Pokemon
          </Link>
        </li>
        <li>
          <Link to="/search" activeProps={activeProps}>
            Search
          </Link>
        </li>
      </ul>
      <Outlet />
      <ReactQueryDevtools />
    </>
  );
};

export const Route = createRootRoute({
  component: Root,
});

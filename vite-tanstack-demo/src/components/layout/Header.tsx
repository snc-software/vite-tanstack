import { Link } from '@tanstack/react-router';

const activeProps = {
  style: {
    color: 'hsl(142.1 70.6% 45.3%)',
  },
};

const className = 'font-bold text-muted-foreground mx-1';

export const Header = () => {
  return (
    <div className="p-4">
      <ul className="flex flex-wrap gap-1 justify-center">
        <li>
          <Link className={className} to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link className={className} to="/pokemon" activeProps={activeProps}>
            Pokemons
          </Link>
        </li>
        <li>
          <Link className={className} to="/search" activeProps={activeProps}>
            Search
          </Link>
        </li>
      </ul>
    </div>
  );
};

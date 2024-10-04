import { createFileRoute, Link } from '@tanstack/react-router';
import { getPokemons } from '../../api/pokemon';
import { useQuery } from '@tanstack/react-query';

const PokemonListView = () => {
  const {
    data: pokemons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['pokemon'],
    queryFn: getPokemons,
  });

  if (isLoading) return <div>Loading....</div>;

  if (isError) return <div>Error....</div>;

  return (
    <>
      <h2>Pokemons</h2>
      <ul>
        {pokemons?.map((pokemon) => (
          <li>
            <Link to="/pokemon/$id" params={{ id: pokemon.id }}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Route = createFileRoute('/pokemon/')({
  component: PokemonListView,
});

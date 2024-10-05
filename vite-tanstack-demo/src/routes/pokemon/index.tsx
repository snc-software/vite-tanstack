import { createFileRoute } from '@tanstack/react-router';
import { getPokemons } from '../../api/pokemon';
import { useQuery } from '@tanstack/react-query';
import PokemonTable from '@/components/features/pokemons/pokemonTable/PokemonTable';

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
      <PokemonTable pokemons={pokemons ?? []} />
    </>
  );
};

export const Route = createFileRoute('/pokemon/')({
  component: PokemonListView,
});

import { createFileRoute } from '@tanstack/react-router';
import { getPokemon } from '../../api/pokemon';
import { useQuery } from '@tanstack/react-query';

const PokemonDetailView = () => {
  const { id } = Route.useParams();

  const {
    data: pokemon,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemon(id),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error...</div>;

  return (
    <div>
      <h2>
        ({id}) {pokemon?.name}
      </h2>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      <dl>
        <dt>Height</dt>
        <dd>{pokemon?.height}</dd>
        <dt>Weight</dt>
        <dd>{pokemon?.weight}</dd>
      </dl>
    </div>
  );
};

export const Route = createFileRoute('/pokemon/$id')({
  component: PokemonDetailView,
});

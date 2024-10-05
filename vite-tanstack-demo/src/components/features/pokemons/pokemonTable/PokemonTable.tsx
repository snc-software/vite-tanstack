import { Pokemon } from '@/api/pokemon';
import { PokemonTableColumns } from './PokemonTableColumns';
import { DataTable } from '@/components/DataTable/DataTable';

interface PokemonTableProps {
  pokemons: Pokemon[];
}

const PokemonTable = ({ pokemons }: PokemonTableProps) => {
  return <DataTable columns={PokemonTableColumns} data={pokemons} />;
};

export default PokemonTable;

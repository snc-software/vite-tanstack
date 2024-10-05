import { Pokemon } from '@/api/pokemon';
import { Link } from '@tanstack/react-router';
import { ColumnDef } from '@tanstack/react-table';

export const PokemonTableColumns: ColumnDef<Pokemon>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      return (
        <Link to="/pokemon/$id" params={{ id: row.getValue('id') as string }}>
          {row.getValue('name')}
        </Link>
      );
    },
  },
];

import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { z } from 'zod';

const Category = z.union([
  z.literal('electronics'),
  z.literal('clothing'),
  z.literal('books'),
  z.literal('toys'),
]);

const ItemFilters = z.object({
  query: z.optional(z.string()),
  hasDiscount: z.optional(z.boolean()),
  categories: z.optional(z.array(Category)),
});

type ItemFilters = z.output<typeof ItemFilters>;

const SearchView = () => {
  const { query, categories, hasDiscount } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const updateFilters = (name: keyof ItemFilters, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        value={query}
        onChange={(e) => {
          updateFilters('query', e.target.value);
        }}
      />
      <input
        type="checkbox"
        value={query}
        onChange={(e) => {
          updateFilters('hasDiscount', e.target.checked);
        }}
      />
      <select
        multiple
        onChange={(e) => {
          updateFilters(
            'categories',
            Array.from(e.target.selectedOptions, (option) => option.value)
          );
        }}
      >
        {['electronics', 'clothing', 'books', 'toys'].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
    </div>
  );
};

export const Route = createFileRoute('/search')({
  validateSearch: (search) => ItemFilters.parse(search),
  component: SearchView,
});

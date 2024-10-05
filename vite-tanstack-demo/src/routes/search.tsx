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
      <h1 className="font-bold text-center mb-1">Search</h1>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={query}
            onChange={(e) => {
              updateFilters('query', e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <input
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            type="checkbox"
            value={query}
            onChange={(e) => {
              updateFilters('hasDiscount', e.target.checked);
            }}
          />
        </div>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      </form>

      <pre>{JSON.stringify({ query, hasDiscount, categories }, null, 2)}</pre>
    </div>
  );
};

export const Route = createFileRoute('/search')({
  validateSearch: (search) => ItemFilters.parse(search),
  component: SearchView,
});

import axios from "axios";

type PokemonDetail = {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: {
        front_default: string
    }
}



export async function getPokemon(id: string) : Promise<PokemonDetail> {
    return (await axios.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
};

type Pokemon = {
    id: string;
    name: string;
}

type PokemonResponse = {
    name: string;
    url: string;
}

type PokemonApiResponse = {
    results: PokemonResponse[]
}

export async function getPokemons(): Promise<Pokemon[]> {
    const pokemonListResponse = await axios.get<PokemonApiResponse>(`https://pokeapi.co/api/v2/pokemon`);
    const pokemons = pokemonListResponse.data.results;

    return pokemons.map((response) => {
        return {
            id: response.url.split("/").slice(-2, -1)[0],
            name: response.name
        } as Pokemon;
    });
}

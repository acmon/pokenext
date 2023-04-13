import styles from "@/styles/Home.module.css";
import { Pokemon } from "@/domain/Pokemon";
import Image from "next/image";
import Card from "@/components/Card";
import axios from 'axios';

interface HomeProps {
  pokemons: Pokemon[];
}

export async function getStaticProps() {
  const maxPokemons = 150;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const data = await axios.get(`${api}/?limit=${maxPokemons}`)
    .then(function (response) {
      return response.data
    })

  data.results.map((item: any, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }: HomeProps) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

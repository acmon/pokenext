import Image from "next/image";
import axios from "axios";

import styles from "@/styles/Pokemon.module.css"

export const getStaticProps = async(context: any) => {
  const id = context.params.pokemonId

  const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response) {
      return response.data
    })

  return {
    props: { pokemon: data }
  }
}

export const getStaticPaths = async() => {
  const maxPokemons = 150;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const data = await axios.get(`${api}/?limit=${maxPokemons}`)
    .then(function (response) {
      return response.data
    })

  const paths = data.results.map((pokemon: any, index: number) => {
    return {
      params: {pokemonId: (index+1).toString()}
    }
  })

  return {
    paths, fallback: false
  }
}

export default function PokemonId({pokemon}: any) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>{pokemon.types.map((item: any, index: number) => (
          <span key={index} className={`${styles.type} ${styles['type_'+item.type.name]}`}>{item.type.name}</span>
        ))}</div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  )
}
import React, { Component } from "react";
import { PokemonTeam } from "../PokemonTeam";
import pokemonData from "../../data/pokemon.json";


export class PokemonGame extends Component {
  pokemons = pokemonData;

  constructor() {
    super();

    this.state = {
      team1: [],
      team2: [],
      isShowPanel: false,
    };

    this.onHandlePlay = this.onHandlePlay.bind(this);
  }

  onHandlePlay() {
    let hand1 = [];
    let hand2 = [...this.pokemons];

    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);

      let randPokemon = hand2.splice(randIdx, 1)[0];

      hand1.push(randPokemon);
    }

    this.setState({ team1: hand1, team2: hand2, isShowPanel: true });
  }

  render() {
    const team1Point = this.state.team1.reduce(
      (sum, pokemon) => sum + pokemon.base_experience,
      0
    );
    const team2Point = this.state.team2.reduce(
      (sum, pokemon) => sum + pokemon.base_experience,
      0
    );

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
     
        <button 
        onClick={this.onHandlePlay} >
            <img style={{height:"100px"}}  src="data:image/png;base64,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"/>
        
        </button>

        {this.state.isShowPanel && (
          <div>
            <PokemonTeam
              teamName="Team 1"
              isWinner={team1Point > team2Point}
              teamData={this.state.team1}
              teamPoint={team1Point}
            />

            <PokemonTeam
              teamName="Team 2"
              isWinner={team2Point > team1Point}
              teamData={this.state.team2}
              teamPoint={team2Point}
            />
          </div>
        )}
      </div>
    );
  }
}
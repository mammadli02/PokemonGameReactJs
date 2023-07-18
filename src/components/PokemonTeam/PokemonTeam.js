import React, { Component } from "react";
import styles from "./PoekemonTeam.module.css";
import { PokemonCard } from "../PokemonCard";

export class PokemonTeam extends Component {
  static defaultProps = {
    teamName: "Team",
    teamData: [],
  };

  render() {
    const { teamName, isWinner, teamData, teamPoint } = this.props;

    return (
      <div style={{ margin: "20px 0 " }}>
        <h1 style={{ textAlign: "center" }}>{teamName}</h1>
        <h3 style={{ textAlign: "center" }}>{teamPoint}</h3>
        <h2 style={{ textAlign: "center", color: isWinner ? "green" : "red" }}>
          {isWinner ? "Winner" : "Lose"}
        </h2>

        <div className={styles.content}>
          {teamData.map((pokemon) => (
            <PokemonCard key={"pokemonid" + pokemon.id} {...pokemon} />
          ))}
        </div>
      </div>
    );
  }
}
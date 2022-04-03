import type { NextPage } from "next"
import { useState } from "react"
import PlayerInput from "../components/PlayerInput"
import homeStyles from "../styles/Home.module.css"
import styles from "../styles/Play.module.css"

const Play: NextPage = () => {
  const [players, setPlayer] = useState<{ name: string }[]>([]);

  return <main className={homeStyles.main}>
    <div className={homeStyles.title}>
      <h1>Jouer !</h1>
    </div>
    <div className={styles.form}>
      <div>{players.map(({ name }, i) => <PlayerInput name={name} key={i} />)}</div>
      <button onClick={() => setPlayer(players => [...players, { name: "Nouveau joueur" }])}>Nouveau joueur !</button>
    </div>
  </main>
}

export default Play;

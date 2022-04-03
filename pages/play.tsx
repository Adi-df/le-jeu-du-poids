import type { NextPage } from "next"
import { useState } from "react"
import PlayerInput from "../components/PlayerInput"
import homeStyles from "../styles/Home.module.css"
import styles from "../styles/Play.module.css"

const Play: NextPage = () => {
  const [players, setPlayer] = useState<{ id: number, name: string }[]>([]);

  return <main className={homeStyles.main}>
    <div className={homeStyles.title}>
      <h1>Jouer !</h1>
    </div>
    <div className={styles.form}>
      <div>
        {players.map(({ name, id }) =>
          <PlayerInput name={name} onDelete={
            () => setPlayer(players => players.filter(({ id: nid }) => id !== nid))
          } key={id} />
        )}
      </div>
      <div className={styles.buttons}>
        <button className={styles.new_player} onClick={() => setPlayer(players => [...players, { id: players.length, name: "Nouveau joueur" }])}>Nouveau joueur !</button>
        <button className={styles.start} onClick={() => { }}>Démarer !</button>
      </div>
    </div>
  </main>
}

export default Play;

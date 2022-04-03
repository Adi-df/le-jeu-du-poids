import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import PlayerInput from "../components/PlayerInput"
import RoundInput from "../components/RoundInput"
import { useStore, GamePlayer } from "../store/store"
import homeStyles from "../styles/Home.module.css"
import styles from "../styles/Play.module.css"

const Play: NextPage = () => {
  const { setPlayers: setStorePlayers } = useStore(({ setPlayers }) => ({ setPlayers }));
  const [players, setPlayers] = useState<GamePlayer[]>([]);
  const router = useRouter();

  return <main className={homeStyles.main}>
    <div className={homeStyles.title}>
      <h1>Jouer !</h1>
    </div>
    <div className={styles.form}>
      <div>
        {players.map(({ name, id }) =>
          <PlayerInput name={name} onDelete={
            () => setPlayers(players => players.filter(({ id: nid }) => id !== nid))
          } key={id} />
        )}
      </div>
      <div className={styles.buttons}>
        <button className={styles.new_player} onClick={() => setPlayers(players => [...players, { id: players.length, name: "Nouveau joueur", points: 0 }])}>Nouveau joueur !</button>
        <RoundInput />
        <button className={styles.start} onClick={() => {
          setStorePlayers(players);
          router.push("/play/start")
        }}>Démarer !</button>
      </div>
    </div>
  </main>
}

export default Play;

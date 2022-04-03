import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useStore } from "../../store/store"
import styles from "../../styles/End.module.css"
import roundStyles from "../../styles/Round.module.css"

const Round: NextPage = () => {
  const { players, setPlayers, setLeftRounds } = useStore(({ players, setPlayers, setLeftRounds }) => ({ players, setPlayers, setLeftRounds }))
  const router = useRouter();

  const sortedPlayers = players.sort((p1, p2) => p2.points - p1.points);

  return <div className={styles.end}>
    <h1 className={styles.title}>Classement</h1>
    <div className={styles.players}>
      {sortedPlayers.map((player, i) => <div className={styles.player}>
        <div className={styles.place}>{i + 1}</div>
        <div className={styles.name}>{player.name}</div>
        <div className={styles.points}>{player.points}</div>
      </div>)}
    </div>
    <button onClick={() => {
      setPlayers(players.map((player) => ({
        id: player.id,
        name: player.name,
        weight: 0,
        points: 0
      })).sort(({ id: id1 }, { id: id2 }) => id1 - id2))
      setLeftRounds(1)

      router.push("/play")
    }} className={roundStyles.finished}>{"Nouvelle partie"}</button>
  </div >
}

export default Round

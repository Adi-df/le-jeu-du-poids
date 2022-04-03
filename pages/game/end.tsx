import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useStore } from "../../store/store"
import styles from "../../styles/End.module.css"
import roundStyles from "../../styles/Round.module.css"

const Round: NextPage = () => {
  const { players } = useStore(({ players }) => ({ players }))
  const router = useRouter();

  const sortedPlayers = players.sort((p1, p2) => p1.points - p2.points);

  return <div className={styles.end}>
    <h1 className={styles.title}>Classement</h1>
    <div className={styles.players}>
      {sortedPlayers.map((player, i) => <div className={styles.player}>
        <div className={styles.place}>{i + 1}</div>
        <div className={styles.name}>{player.name}</div>
      </div>)}
    </div>
    <button onClick={() => {
      router.push("/play")
    }} className={roundStyles.finished}>{"Nouvelle partie"}</button>
  </div >
}

export default Round

import type { NextPage } from "next"
import Link from "next/link"
import PlayerWeightInput from "../../components/PlayerWeightInput"
import { useStore } from "../../store/store"
import styles from "../../styles/Weights.module.css"

const Round: NextPage = () => {
  const { players } = useStore(({ players }) => ({ players }))
  return <div className={styles.weights}>
    <div className={styles.list}>
      {players.map(({ id }) => <PlayerWeightInput id={id} />)}
    </div>
    <Link href="/play/order"><button className={styles.results}>Resultats</button></Link>
  </div>
}

export default Round

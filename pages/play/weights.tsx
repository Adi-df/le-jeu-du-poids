import type { NextPage } from "next"
import { useRouter } from "next/router"
import PlayerWeightInput from "../../components/PlayerWeightInput"
import { useStore } from "../../store/store"
import styles from "../../styles/Weights.module.css"

const Round: NextPage = () => {
  const { players, decrementRounds } = useStore(({ players, decrementRounds }) => ({ players, decrementRounds }))
  const router = useRouter();

  return <div className={styles.weights}>
    <div className={styles.list}>
      {players.map(({ id }) => <PlayerWeightInput id={id} />)}
    </div>
    <button className={styles.results} onClick={() => {
      decrementRounds();
      router.push("/play/order")
    }}>Resultats</button>
  </div>
}

export default Round

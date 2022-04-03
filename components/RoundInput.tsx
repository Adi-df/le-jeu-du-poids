import { useStore } from "../store/store";
import styles from "../styles/RoundInput.module.css"

const RoundInput = () => {
  const { leftRounds, setLeftRounds } = useStore(({ leftRounds, setLeftRounds }) => ({ leftRounds, setLeftRounds }));

  return <div className={styles.round}>
    <label className={styles.label}>Nombre de tour : </label>
    <input className={styles.input} type={"number"} min={1} value={leftRounds} onChange={(e) => setLeftRounds(parseInt(e.target.value))} />
  </div>
}

export default RoundInput

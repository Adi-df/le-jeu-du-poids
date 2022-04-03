import { FC } from "react"
import styles from "../styles/RoundInput.module.css"

const RoundInput: FC = () => {
  return <div className={styles.round}>
    <label className={styles.label}>Nombre de tour : </label>
    <input className={styles.input} type={"number"} min={1} defaultValue={1} />
  </div>
}

export default RoundInput

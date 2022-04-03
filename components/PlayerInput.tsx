import { FC, useState } from "react"
import styles from "../styles/PlayerInput.module.css"

const PlayerInput: FC<{ name: string, onDelete: () => void }> = ({ name, onDelete }) => {
  const [nameInput, setNameInput] = useState<string>(name);

  return <div className={styles.input}>
    <input className={styles.name} type={"text"} value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
    <button className={styles.delete} onClick={() => onDelete()}>Delete</button>
  </div>
}

export default PlayerInput;

import { FC } from "react";
import { useStore } from "../store/store";
import styles from "../styles/PlayerWeightInput.module.css";

const PlayerWeightInput: FC<{ id: number }> = ({ id }) => {
  const { getPlayer, setPlayerWeight } = useStore(
    ({ getPlayer, setPlayerWeight }) => ({ getPlayer, setPlayerWeight })
  );

  return (
    <div className={styles.weight}>
      <label className={styles.name}>{getPlayer(id)?.name}</label>
      <input
        className={styles.input}
        type={"number"}
        min={0}
        value={getPlayer(id)?.weight}
        onChange={(e) => setPlayerWeight(id, parseInt(e.target.value))}
      />
      <label className={styles.suffix}>g</label>
    </div>
  );
};

export default PlayerWeightInput;

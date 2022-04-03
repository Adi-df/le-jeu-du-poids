import { FC } from "react";
import { useStore } from "../store/store";
import styles from "../styles/PlayerInput.module.css";

const PlayerInput: FC<{ id: number }> = ({ id }) => {
  const { getPlayer, setPlayerName, removePlayer } = useStore(
    ({ setPlayerName, getPlayer, removePlayer }) => ({
      getPlayer,
      setPlayerName,
      removePlayer,
    })
  );

  return (
    <div className={styles.input}>
      <input
        className={styles.name}
        type={"text"}
        autoFocus
        value={getPlayer(id)?.name}
        onChange={(e) => setPlayerName(id, e.target.value)}
      />
      <button className={styles.delete} onClick={() => removePlayer(id)}>
        <span className={styles.cross} />
      </button>
    </div>
  );
};

export default PlayerInput;

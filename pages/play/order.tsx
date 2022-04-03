import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useStore } from "../../store/store";
import styles from "../../styles/Order.module.css";
import roundStyles from "../../styles/Round.module.css";

const Round: NextPage = () => {
  const { players, setPlayers, targetWeight, leftRounds } = useStore(
    ({ players, setPlayers, targetWeight, leftRounds, decrementRounds }) => ({
      players,
      setPlayers,
      targetWeight,
      leftRounds,
      decrementRounds,
    })
  );
  const router = useRouter();

  const sortedPlayers = players
    .map((player) => ({
      dist: Math.abs((targetWeight || 0) - player.weight),
      player,
    }))
    .sort((p1, p2) => p1.dist - p2.dist)
    .map(({ player }) => player);

  return (
    <div className={styles.order}>
      <div className={styles.players}>
        {sortedPlayers.map((player, i) => (
          <div className={styles.player}>
            <div className={styles.place}>{i + 1}</div>
            <div className={styles.name}>{player.name}</div>
            <div className={styles.points}>+{sortedPlayers.length - i}</div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setPlayers(
            sortedPlayers.map((player, i) => ({
              id: player.id,
              name: player.name,
              points: player.points + sortedPlayers.length - i,
              weight: 0,
            }))
          );

          if (leftRounds > 0) {
            router.push("/play/round");
          } else {
            router.push("/game/end");
          }
        }}
        className={roundStyles.finished}
      >
        {leftRounds > 0 ? "Tour suivant" : "Résultats"}
      </button>
    </div>
  );
};

export default Round;

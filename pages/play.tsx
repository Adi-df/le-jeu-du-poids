import type { NextPage } from "next";
import { useRouter } from "next/router";
import PlayerInput from "../components/PlayerInput";
import RoundInput from "../components/RoundInput";
import { useStore } from "../store/store";
import homeStyles from "../styles/Home.module.css";
import styles from "../styles/Play.module.css";

const Play: NextPage = () => {
  const { players, addPlayer } = useStore(({ players, addPlayer }) => ({
    players,
    addPlayer,
  }));
  const router = useRouter();

  return (
    <main className={homeStyles.main}>
      <div className={homeStyles.title}>
        <h1>Jouer !</h1>
      </div>
      <div className={styles.form}>
        <div>
          {players.map(({ id }) => (
            <PlayerInput id={id} key={id} />
          ))}
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.new_player}
            onClick={() => addPlayer(players.length, "Nouveau joueur")}
          >
            Nouveau joueur !
          </button>
          <RoundInput />
          <button
            className={styles.start}
            onClick={() => {
              if (players.length < 2) return;
              router.push("/play/round");
            }}
          >
            Démarrer !
          </button>
        </div>
      </div>
    </main>
  );
};

export default Play;

import type { NextPage } from "next"
import homeStyles from "../styles/Home.module.css"
import styles from "../styles/Play.module.css"

const Play: NextPage = () => {
  return <main className={homeStyles.main}>
    <div className={homeStyles.title}>
      <h1>Jouer !</h1>
    </div>
    <div className={styles.form}>
      <div className={styles.count_input}>
        <label>Nombre de joueurs : </label>
        <input type={"number"} min={2} />
      </div>
    </div>
  </main>
}

export default Play;

import {FC} from "react"
import Link from "next/link"
import styles from "../styles/PlayButton.module.css"

const PlayButton: FC = () => {
  return <div className={styles.button}>
    <Link href="/play">
      Play !
    </Link>
  </div>
}

export default PlayButton;

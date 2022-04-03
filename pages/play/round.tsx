import type { NextPage } from "next"
import { useEffect } from "react"
import { useStore } from "../../store/store"
import styles from "../../styles/Round.module.css"

const MIN_WEIGHT = 100;
const MAX_WEIGHT = 4000;

const Round: NextPage = () => {
  const { leftRounds, targetWeight, setTargetWeight } = useStore(({ leftRounds, targetWeight, setTargetWeight }) => ({ leftRounds, targetWeight, setTargetWeight }))

  useEffect(() => setTargetWeight(Math.floor(Math.random() * (MAX_WEIGHT - MIN_WEIGHT) + MIN_WEIGHT)), [])

  return <div className={styles.rounds}>
    <h2 className={styles.stay}>{leftRounds} tours restants</h2>
    <h1 className={styles.weight}>{targetWeight}g</h1>
  </div>
}

export default Round

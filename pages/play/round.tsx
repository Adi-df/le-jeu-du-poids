import type { NextPage } from "next"
import { useEffect } from "react"
import { useStore } from "../../store/store"

const MIN_WEIGHT = 100;
const MAX_WEIGHT = 4000;

const Round: NextPage = () => {
  const { leftRounds, targetWeight, setTargetWeight } = useStore(({ leftRounds, targetWeight, setTargetWeight }) => ({ leftRounds, targetWeight, setTargetWeight }))

  useEffect(() => setTargetWeight(Math.floor(Math.random() * (MAX_WEIGHT - MIN_WEIGHT) + MIN_WEIGHT)), [])

  return <div>
    <h2>{leftRounds} tours restants</h2>
    <h1>{targetWeight}g</h1>
  </div>
}

export default Round

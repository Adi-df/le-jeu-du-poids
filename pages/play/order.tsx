import type { NextPage } from "next"
import { useStore } from "../../store/store"
import styles from "../../styles/Order.module.css"

const Round: NextPage = () => {
  const { players, targetWeight } = useStore(({ players, targetWeight }) => ({ players, targetWeight }))

  const sortedPlayers = players.map(player => ({ dist: Math.abs((targetWeight || 0) - player.weight), player })).sort((p1, p2) => p1.dist - p2.dist).map(({ player }) => player);

  return <div>
    <div>
      {sortedPlayers.map((player, i) => <div>
        <div>{i + 1}</div>
        <div>{player.name}</div>
        <div>+{sortedPlayers.length - i}</div>
      </div>)}
    </div>
  </div>
}

export default Round

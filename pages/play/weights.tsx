import type { NextPage } from "next"
import PlayerWeightInput from "../../components/PlayerWeightInput"
import { useStore } from "../../store/store"

const Round: NextPage = () => {
  const { players } = useStore(({ players }) => ({ players }))
  return <div>
    <div>
      {players.map(({ id }) => <PlayerWeightInput id={id} />)}
    </div>
  </div>
}

export default Round

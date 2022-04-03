import { FC } from "react"
import { useStore } from "../store/store"

const PlayerWeightInput: FC<{ id: number }> = ({ id }) => {
  const { getPlayer, setPlayerWeight } = useStore(({ getPlayer, setPlayerWeight }) => ({ getPlayer, setPlayerWeight }))

  return <div>
    <label>{getPlayer(id)?.name}</label>
    <input type={"number"} min={0} value={getPlayer(id)?.weight} onChange={(e) => setPlayerWeight(id, parseInt(e.target.value))} />
    <label>g</label>
  </div>
}

export default PlayerWeightInput

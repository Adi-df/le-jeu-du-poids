import { FC } from "react"
import { useStore } from "../store/store"

const PlayerWeightInput: FC<{ id: number }> = ({ id }) => {
  const { getPlayer } = useStore(({ getPlayer }) => ({ getPlayer }))
  return <div>
    <label>{getPlayer(id)?.name}</label>
  </div>
}

export default PlayerWeightInput

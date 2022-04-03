import { FC } from "react"

const RoundInput: FC = () => {
  return <div>
    <label>Nombre de tour : </label>
    <input type={"number"} min={1} defaultValue={1} />
  </div>
}

export default RoundInput

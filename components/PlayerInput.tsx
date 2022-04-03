import { FC, useState } from "react"

const PlayerInput: FC<{ name: string }> = ({ name }) => {
  const [nameInput, setNameInput] = useState<string>(name);

  return <div>
    <input type={"text"} value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
  </div>
}

export default PlayerInput;

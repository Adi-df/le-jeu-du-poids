import { FC, useState } from "react"

const PlayerInput: FC<{ name: string, onDelete: () => void }> = ({ name, onDelete }) => {
  const [nameInput, setNameInput] = useState<string>(name);

  return <div>
    <input type={"text"} value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
    <button onClick={() => onDelete()}>Delete</button>
  </div>
}

export default PlayerInput;

import {FC} from "react"
import Link from "next/link"

const PlayButton: FC = () => {
  return <div>
    <Link href="/play">
      Play !
    </Link>
  </div>
}

export default PlayButton;

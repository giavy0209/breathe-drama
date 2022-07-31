import { FC } from "react";
import { useAppSelector } from "store/hooks";
import { selectUsers } from "store/selectors";

const Sidebar: FC = () => {
  const users = useAppSelector(selectUsers)
  
  return (
    <>
      <aside>
        {
          users.map(o => <div key={o._id} className="item">
            {o.username}
          </div> )
        }
      </aside>
    </>
  )
}

export default Sidebar
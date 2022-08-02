import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Form, Input, Select } from "Components";
import { useState } from "react";
import { FC, useCallback } from "react";
import { useAppSelector } from "store/hooks";
import { selectUsers } from "store/selectors";

const Sidebar: FC = () => {
  const users = useAppSelector(selectUsers)

  return (
    <>
      <aside>
        <div className="button">Create Group <FontAwesomeIcon icon={faPlus} /> </div>
        {
          users.map(o => <div key={o._id} className="item">
            {o.username}
          </div>)
        }
      </aside>
      
    </>
  )
}

export default Sidebar
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Form, Input, Select } from "Components";
import { useState } from "react";
import { FC, useCallback } from "react";
import { useAppSelector } from "store/hooks";
import { selectUsers } from "store/selectors";

const Sidebar: FC = () => {
  const [VisibleModal, setVisibleModal] = useState(false)
  const users = useAppSelector(selectUsers)
  const handleCreateGroup = useCallback(() => {
    setVisibleModal(true)
  }, [])
  const handleSubmitForm = useCallback((data: { [k: string]: any }) => {

  }, [])
  return (
    <>
      <aside>
        <div onClick={handleCreateGroup} className="button">Create Group <FontAwesomeIcon icon={faPlus} /> </div>
        {
          users.map(o => <div key={o._id} className="item">
            {o.username}
          </div>)
        }
      </aside>
      <Modal onCancel={setVisibleModal} visible={VisibleModal} title="Test">
        <Form onSubmit={handleSubmitForm}>
          <Input name="name" placeholder="Group name" />
          <Select name="type">
            <Select.Option value={"value1"}> value1  </Select.Option>

            <Select.Option value={"2"}> value2  </Select.Option>
          </Select>
        </Form>
      </Modal>
    </>
  )
}

export default Sidebar
import Button from "Components/Button";
import { SetStateAction } from "react";
import { useCallback } from "react";
import { ReactNode } from "react";
import { FC } from "react";

interface IModal {
  title : string
  content? : ReactNode
  children? : ReactNode
  visible? :boolean
  onOK?(state : SetStateAction<boolean>) : any
  onCancel?(state : SetStateAction<boolean>) : any
}

const Modal : FC<IModal> = ({
  title,
  content,
  children,
  visible,
  onOK,
  onCancel
}) => {
  const handleOK = useCallback(() => {
    onOK && onOK(false)
  },[onOK])
  const handleCancel = useCallback(() => {
    onCancel && onCancel(false)
  },[onCancel])
  return (
    <>
    <div className={`modal ${visible ? 'show' : ''}`}>
      <div onClick={handleCancel} className="mask"></div>
      <div className="body">
        <div className="title">{title}</div>
        <div className="content">{content || children || null}</div>
        <div className="footer">
          <Button onClick={handleOK}>OK</Button>
          <Button onClick={handleCancel} type="transparent">Cancel</Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Modal
import { useContext } from "react"
import { modalContext } from "../contexts/modalContext"

export const useModalContext = () => {
  const context = useContext(modalContext)

  if (!context) {
    throw new Error("useModalContext() called outside modal")
  }

  return context
}

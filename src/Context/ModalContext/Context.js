import React, { useState } from "react"
import { createContext } from "use-context-selector"

const initialState = {
  isModalVisible: false,
  setIsModalVisible: () => null
}

export const ModalContext = createContext(initialState)

export const ModalProvider = ({ children }) => {
  const data = useState(false)

  return (
    <ModalContext.Provider value={data}>
      {children}
    </ModalContext.Provider>
  )
}

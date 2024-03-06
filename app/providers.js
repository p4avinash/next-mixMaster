"use client"
import store from "@/utils/store"
import React from "react"
import { Provider } from "react-redux"
import { Toaster } from "react-hot-toast"

const Providers = ({ children }) => {
  return (
    <div>
      <Toaster />
      <Provider store={store}>{children}</Provider>
    </div>
  )
}

export default Providers

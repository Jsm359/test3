import { useState } from "react"

export const UseFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false)
  const [err,setErr] = useState('')

  const Fetching = async (...args) => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch(e) {
      setErr(e.message)
    } finally {
      setIsLoading(false)
    }
  }
  return [Fetching, isLoading, err]
}

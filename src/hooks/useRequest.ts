import { useEffect, useState } from 'preact/hooks'

interface HookRequestModel<T> {
  requesting: boolean
  result: T | undefined
  error: Error | undefined
}

export const useRequest = <T extends unknown>(url: string): HookRequestModel<T> => {
  const [requesting, setRequesting] = useState<boolean>(false)
  const [result, setResult] = useState<T>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    setRequesting(true)
    fetch(url)
      .then(async res => setResult(await res.json()))
      .catch(setError)
      .finally(() => setRequesting(false))
  }, [])

  return {
    requesting,
    result,
    error
  }
}

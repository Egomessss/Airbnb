import { useEffect, useRef, useState } from "react"

type AnyFunction = (...args: any[]) => any

// generic type T is used to ensure that the type of the input function and the output function are the same.

function useDebounce<T extends AnyFunction>(fn: T, delay: number): T {
  // the debounced function is stored in a state variable using useState, so that it can be returned from the hook and used in the component.
  const [debouncedFn, setDebounceFn] = useState<T>(fn)
  const timerRef = useRef<number | undefined>(undefined)
  // The timer ID is stored in a ref using useRef, so that it can be accessed and cleared in the cleanup function of useEffect.
  // The dependencies of useEffect include the input function fn and the delay delay, so that the effect is re-run whenever either of these changes.
  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      setDebounceFn(() => fn)
    }, delay)

    return () => {
      clearTimeout(timerRef.current)
    }
  }, [fn, delay])

  return debouncedFn
}

export default useDebounce

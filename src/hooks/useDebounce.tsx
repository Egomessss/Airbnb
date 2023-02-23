import { useEffect, useRef, useState } from "react"

function useDebounce(fn: any, delay: number) {
 let timer

  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,args)
    }, delay)
  }
 
}

export default useDebounce

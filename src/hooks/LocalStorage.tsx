import React from "react"


  const useLocalStorage = (storageKey:string, fallbackState:boolean) => {
    const [value, setValue] = React.useState(
      JSON.parse(localStorage.getItem(storageKey)!) ?? fallbackState
    )

    React.useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value))
    }, [value, storageKey])

    return [value, setValue]
  }


export default useLocalStorage

// const App = () => {
//     const [isOpen, setOpen] = useLocalStorage('is-open', false);
  
//     const handleToggle = () => {
//       setOpen(!isOpen);
//     };
  
//     return (
//       <div>
//         <button onClick={handleToggle}>Toggle</button>
//         {isOpen && <div>Content</div>}
//       </div>
//     );
//   };
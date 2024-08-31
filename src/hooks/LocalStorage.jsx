import { useEffect, useState } from 'react'

// const defaultTodos = [
//   { text: 'Realizar pruebas', completed: false },
//   { text: 'Mostrar tareas', completed: true },
//   { text: 'Enviar Email', completed: false },
//   { text: 'Postularme a trabajos', completed: false },
//   { text: 'hacerme wey', completed: false }
// ]

// window.localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = window.localStorage.getItem(itemName)
        let parsedItem
        if (!localStorageItem) {
          window.localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 2000)
  }, [])

  const saveItem = (newItem) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage }

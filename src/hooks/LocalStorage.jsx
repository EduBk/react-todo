import { useState } from 'react'

// const defaultTodos = [
//   { text: 'Realizar pruebas', completed: false },
//   { text: 'Mostrar tareas', completed: true },
//   { text: 'Enviar Email', completed: false },
//   { text: 'Postularme a trabajos', completed: false },
//   { text: 'hacerme wey', completed: false }
// ]

// window.localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

function useLocalStorage (itemName, initialValue) {
  const localStorageItem = window.localStorage.getItem(itemName)
  let parsedItem
  if (!localStorageItem) {
    window.localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newItem) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

export { useLocalStorage }

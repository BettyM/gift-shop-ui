import { shoppingListStorageKey } from '../constants/defaultValues'

export const setShoppingListItem = item => {
  try {
    let list
    if (localStorage.getItem(shoppingListStorageKey)) {
      list = JSON.parse(localStorage.getItem(shoppingListStorageKey))
    } else {
      list = []
    }
    //TODO: Add count items
    list.push({ productId: item.id })
    localStorage.setItem(shoppingListStorageKey, JSON.stringify(list));
    return list;
  } catch(error) {
    console.log(">>>>: src/Store.js : setShoppingListItem -> error", error)
  }
}

export const getShoppingListItems = () => {
  return JSON.parse(localStorage.getItem(shoppingListStorageKey)) || []
}

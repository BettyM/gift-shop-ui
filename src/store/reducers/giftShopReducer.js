import { handleActions } from 'redux-actions'

const defaultState = {
  products: [],
  shoppingList: []
}

const reducerMap = {
  'SET_PRODUCTS': (state, {payload}) => {
    return {
      ...state,
      products: payload,
    }
  },
  'SET_SHOPPING_LIST': (state, {payload}) => {
    return {
      ...state,
      shoppingList: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
// const giftShopReducer = (state, action) => {
//   switch (action.type) {
//     case SET_HOPPING_LIST:
//       const list = setShoppingListItem(action.payload)
//       return {
//         ...state,
//         currentShoppingList: list
//       }
//     default:
//       return { ...state }
//   }
// }
//
// export default giftShopReducer

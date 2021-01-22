import { createActions } from 'redux-actions'
import { setShoppingListItem, getShoppingListItems } from '../../utils/localStore'
import API from '../../services/API'

export const giftShopActions = createActions({
  SET_PRODUCTS: undefined,
  SET_SHOPPING_LIST: undefined,
})

giftShopActions.loadProducts = () => async dispatch => {
  const data = await API.getProducts()
  await dispatch(giftShopActions.setProducts(data))
}

giftShopActions.loadShoppingList = () => async dispatch => {
  const data = getShoppingListItems()
  await dispatch(giftShopActions.setShoppingList(data))
}

giftShopActions.updateShoppingList = item => async dispatch => {
  const data = getShoppingListItems()
  data.push(item)
  setShoppingListItem(item)
  await dispatch(giftShopActions.setShoppingList(data))
}

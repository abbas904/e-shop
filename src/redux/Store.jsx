import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
import CartSlice from './CartSlice'
import AuthSlice from './AuthSlice'

// Load auth state from localStorage
const persistedAuth = (() => {
  try {
    const raw = localStorage.getItem('authState')
    if (!raw) return undefined
    return JSON.parse(raw)
  } catch {
    return undefined
  }
})()

const store = configureStore({
    reducer: {
        cart: CartSlice,
        product: ProductSlice,
        auth: AuthSlice,
    },
    preloadedState: {
      auth: persistedAuth || undefined,
    }
})

// Persist auth state
store.subscribe(() => {
  const state = store.getState()
  const authState = state.auth
  try {
    localStorage.setItem('authState', JSON.stringify(authState))
  } catch (e) {
    // ignore quota errors
  }
})

export default store
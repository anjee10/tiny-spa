export const UPDATE_STORE = "UPDATE_STORE"
export const IS_LOADING = "IS_LOADING"

export const updateStore = (value) => ({
  type: UPDATE_STORE,
  payload: value,
})

export const isLoading = (value) => ({
  type: IS_LOADING,
  payload: value,
})

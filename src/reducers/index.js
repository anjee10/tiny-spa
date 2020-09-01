import { IS_LOADING, UPDATE_STORE } from "../actions"

const initState = {
  comicsData: [],
  loading: true,
}

export default (state = initState, { type, payload }) => {
  switch (type) {
    case IS_LOADING:
      return {
        ...state.comicsData,
        loading: payload,
      }
    case UPDATE_STORE:
      return {
        comicsData: payload,
        loading: false,
      }
      
    default:
      return state
  }
}

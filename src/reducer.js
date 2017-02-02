import Immutable from 'immutable'
import {LOCATION_CHANGE} from './actions'

const createRouterReducer = history => (state = Immutable.fromJS({
  location: history.location,
  action: history.action,
}), {type, payload} = {}) => {
  if (type === LOCATION_CHANGE) {
    return state.merge({
      ...payload,
    })
  }

  return state
}


export default createRouterReducer

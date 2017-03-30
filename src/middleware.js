import { CALL_HISTORY_METHOD, GO_BACK_OR_URL, go, goBack } from './actions'

/**
 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
 * provided history object. This will prevent these actions from reaching your
 * reducer or any middleware that comes after this one.
 */
const routerMiddleware = history => store => next => action => { // eslint-disable-line no-unused-vars
  if (action.type === GO_BACK_OR_URL) {
    if (history.length === 1) {
      history.go(action.payload)
    } else {
      history.goBack()
    }
    return
  }

  if (action.type !== CALL_HISTORY_METHOD) {
    return next(action)
  }

  const { payload: { method, args } } = action
  history[method](...args)
}


export default routerMiddleware

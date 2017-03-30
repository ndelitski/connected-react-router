export { LOCATION_CHANGE } from './actions'
export connectRouter from './reducer'

export {
  CALL_HISTORY_METHOD,
  GO_BACK_OR_URL,
  push, replace, go, goBack, goForward, goBackOrUrl,
  routerActions
} from './actions'

export routerMiddleware from './middleware'
export ConnectedRouter from './ConnectedRouter'

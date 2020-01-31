# use-async-ops-redux
An `use-async-ops` middleware to add redux actions that mimic the previous project `async-ops`


#### Example
```javascript
import { createStore } from 'redux'
import { prependMiddleware } from 'use-async-ops'
import { reduxMiddleware } from 'use-async-ops-redux'

const store = createStore(reducer)
prependMiddleware(reduxMiddleware(store.dispatch))
```

## Action Types

The `actionTypes` object contains the Redux action type strings for Async-Ops actions.  The action types are:
* `actionTypes.OPERATION = 'ASYNC_OPERATION'`
* `actionTypes.COMPLETE = 'ASYNC_COMPLETE'`
* `actionTypes.FAILURE = 'ASYNC_FAILURE'`

# Optional Reducer and Selectors

`use-async-ops-redux` ships with a reducer and two selectors that can be used to keep track of the loading and errors states.

## Reducer

A Redux reducer is included that can be optionally added to an app's reducer to keep the store updated with the status about the latest use-async-ops calls.  It must be put under the key 'asyncops' which can be imported from the async-ops package as `STORE_DOMAIN`.

```javascript
import { combineReducers } from 'redux'
import { reducer as asyncops } from 'async-ops'

const rootReducer = combineReducers({
  asyncops
})
```

## Loading Selector

This selector function can be used to determine the loading state of an asynchronous operation.

```javascript
import { selectors } from 'use-async-ops-redux'

const mapStateToProps = state => ({
  testOpIsLoading: selectors.loadingSelector('testOp')(state)
})
```

## Error Selector

This selector function can be used to retrieve error data from an asynchronous operation.

```javascript
import { selectors } from 'async-ops'

const mapStateToProps = state => ({
  testOpError: selectors.errorSelector('testOp')(state)
})
```
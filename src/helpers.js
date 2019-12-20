import { OPERATION, COMPLETE, FAILURE } from './actionTypes'

export const isAsyncOperation = name => action =>
  action.type === OPERATION && action.name === name

export const isAsyncComplete = name => action =>
  action.type === COMPLETE && action.name === name

export const isAsyncFailure = name => action =>
  action.type === FAILURE && action.name === name

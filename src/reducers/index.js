import { combineReducers } from '@reduxjs/toolkit'
import workspaces from './workspaces'
import editor from './editor'



export default combineReducers({
  workspaces,
  editor
})
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as contactsActions from './contactsActions';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contactsOperations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

const filter = createReducer('', {
  [contactsActions.updateFiter]: (_, action) => action.payload,
});

export default combineReducers({
  entities,
  isLoading,
  error,
  filter,
});

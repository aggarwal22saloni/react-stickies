import * as ActionType from './ActionType'

export const updateNote = notes => ({
  type: ActionType.UPDATE_NOTES,
  payload: notes,
})

export function updateNoteAction(notes) {
  return dispatch => {
    dispatch(updateNote(notes))
  }
}

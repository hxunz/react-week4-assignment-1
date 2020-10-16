const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (action.type) {
    return (converter) => converter({ state, action });
  }

  return state;
}

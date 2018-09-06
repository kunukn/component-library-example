export default function appReducer(state, action) {
  if (action.type === 'NAME') {
    return { ...state, name: action.payload };
  }
  if (action.type === 'COUNT') {
    return { ...state, count: action.payload };
  }
  return state;
}

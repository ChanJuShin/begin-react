import { useCallback, useReducer } from 'react';

let initialForm;

function reducer(state, { type, name, value }) {
  switch (type) {
    case 'CHANGE_FORM':
      return {
        ...state,
        [name]: value
      };
    case 'RESET_FORM':
      return Object.keys(state).reduce((acc, current) => {
        acc[current] = '';
        return acc;
      }, {});
    default:
      return state;
  }
}

function useInputs(initialData) {
  initialForm = initialData;
  const [form, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_FORM',
      name,
      value
    });
  }, []);
  const reset = useCallback((() => {
    dispatch({
      type: 'RESET_FORM'
    });
  }), []);
  return [form, onChange, reset];
}

export default useInputs;
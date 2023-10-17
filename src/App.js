import Input from './Input';
import Display from './Display';
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'setYear':
      return {...state, birthYear: action.payload};
    case 'setMonth':
      return {...state, birthMonth: action.payload};
    case 'setDay':
      return {...state, birthDay: action.payload};

    case 'setIsEmpty':
      return {...state, isEmpty: true};
    case 'setIsNotEmpty':
      return {...state, isEmpty: false};
    case 'setIsValid':
      return {...state, isValid: true};
    case 'setIsNotValid':
      return {...state, isValid: false};
    default: throw new Error();
  }
}

function App() {


  const [state, dispatch] = useReducer(reducer, {
    birthDay: '',
    birthMonth: '',
    birthYear: '', 
    errorStates: {
      isEmpty: false, 
      isNotValid: null
    }
  });

  return (
    <div className="App">
      <main>
        <Input state={state} dispatch={dispatch}/>
        <Display state={state} dispatch={dispatch}/>
      </main>
    </div>
  );
}

export default App;

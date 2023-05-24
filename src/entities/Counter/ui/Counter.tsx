import { useDispatch, useSelector } from 'react-redux';
import { CounterScheme } from '../modal/types/CounterSchema';
import { counterActions } from '../modal/slice/CounterSlice';


export const Counter = () => {

    const dispatch = useDispatch()
    const value = useSelector((state:CounterScheme) => state.counter.value   )
    console.log(value)
    const inc = () => {
        dispatch(counterActions.increment())
    }
    const dec = () => {
      dispatch(counterActions.decrement())
    }

  return (
    <div>
        <h1 data-testid="value-title">{value}</h1>
        <button data-testid="inc-btn" onClick={inc}>icrement</button>
        <button data-testid="dec-btn" onClick={dec}>decrement</button>
    </div>
  )
}

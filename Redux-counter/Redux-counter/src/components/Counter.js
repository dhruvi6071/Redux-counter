// import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'});
  };
  const incrementHandler = () => {
    dispatch( {type: 'increment'});
  };
  const increaseHandler = () => {
    // We can always set the amount value from input.
    dispatch({ type: 'increase', amount: 5 });
  }
  const decrementHandler = () => {
    dispatch({type : 'decrement'});
  };
 
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component{
//   incrementHandler() {
//     this.props.increment();
//   }


//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   } 
// }

// const mapStateToTop = state => {
//   return{ counter : state.counter
 
// };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type : 'increment'}),
//     decrement: () => dispatch({type: 'decrement'}),
//   };
// }

// export default connect(mapStateToTop, mapDispatchToProps) (Counter);

export default Counter;
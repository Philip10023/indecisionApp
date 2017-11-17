class Counter extends React.Component {
constructor(props) {
  super(props)
  this.addOne = this.addOne.bind(this)
  this.minusOne = this.minusOne.bind(this)
  this.restart = this.restart.bind(this)
  this.state = {
    count: 0
  }
}

  restart () {
    this.setState((prevState) => {
      return {
        count: prevState.count - prevState.count
      }
    })
  };
  minusOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  };
  addOne () {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  render () {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.restart}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
// let count = 0;
// const restart = () => {
//   count = 0
//   renderCounterApp()
// };
// const minusOne = () => {
//   count--
//   renderCounterApp()
// };
// const addOne = () => {
//   count++;
//   renderCounterApp()
// }
//
// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={restart}>0</button>
//   </div>
// )
//
// const appRoot = document.getElementById('app')
//
// ReactDOM.render(templateTwo, appRoot)
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={restart}>0</button>
//     </div>
//   )
//
//   ReactDOM.render(templateTwo, appRoot)
// }
//
// renderCounterApp;

let count = 0;
const restart = () => {
  count = 0
  renderCounterApp()
};
const minusOne = () => {
  count--
  renderCounterApp()
};
const addOne = () => {
  count++;
  renderCounterApp()
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={restart}>0</button>
  </div>
)

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={restart}>0</button>
    </div>
  )

  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp;

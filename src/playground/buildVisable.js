let visablity = false;

const toggleVisablity = () => {
  visablity = !visablity;
  render()
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visablity Toggle</h1>
      <button onClick={toggleVisablity}>
      {visablity ? 'Hide details' : 'Show details'}
      </button>
      {visablity && (
        <div>
          <p>Heyy</p>
        </div>
      )}
    </div>
  )

  ReactDOM.render(jsx, document.getElementById('app'))
}

render()

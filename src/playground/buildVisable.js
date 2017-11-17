class Visablity extends React.Component {
  constructor(props) {
    super(props)
    this.visablityToggle = this.visablityToggle.bind(this)

    this.state = {
      visable: false
    }
  }

  visablityToggle () {
    this.setState((prevState) => {

      return {
        visable: !prevState.visable
      }
    })
  }

  render () {
      return (
        <div>
          <h1>Visablity Toggle</h1>
          <button onClick={this.visablityToggle}>
          {this.state.visable ? 'Hide details' : 'Show details'}
          </button>
          {this.state.visable && (
            <div>
              <p>Heyy</p>
            </div>
          )}
        </div>
      )
  }
}

ReactDOM.render(<Visablity />, document.getElementById('app'))

// let visablity = false;
//
// const toggleVisablity = () => {
//   visablity = !visablity;
//   render()
// }
//
// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visablity Toggle</h1>
//       <button onClick={toggleVisablity}>
//       {visablity ? 'Hide details' : 'Show details'}
//       </button>
//       {visablity && (
//         <div>
//           <p>Heyy</p>
//         </div>
//       )}
//     </div>
//   )
//
//   ReactDOM.render(jsx, document.getElementById('app'))
// }
//
// render()

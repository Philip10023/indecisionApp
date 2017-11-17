const obj = {
  name: 'Phil',
  getName() {
    return this.name
  }
}

class IndecisionApp extends React.Component {
  render () {
    const title = 'Indecision'
    const subTitle = 'Put your life in the hands of a computer!'
    const options = ['Thing 1', 'thing 2', 'thing 3']
    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
    render () {

      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subTitle}</h2>
        </div>
      )
    }
}

class Action extends React.Component {
  handPick () {
    alert('HandlePick')
  }
  render () {
    return (
      <div>
        <button onClick={this.handPick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  constructor (props) {
    super(props)
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll () {
    alert()
  }
  render () {
    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      app.options.push(option)
      e.target.elements.option.value = ''

    }
  }
  render () {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Tablerow = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} style={{margin:5}}>
    {text}
  </button>
)

class Statistics extends React.Component {
  lukuja = () => {
    return this.values.hyva + this.values.neutraali + this.values.huono
  }

  keskiarvo = () => {
    return ((this.values.hyva - this.values.huono) / this.lukuja()).toFixed(1)
  }

  positiv = () => {
    return ((this.values.hyva / this.lukuja() ) * 100).toFixed(1).concat("%")
  }

  render() {
    this.values = this.props.values
    if (this.lukuja() === 0) {
      return (
        <div>Ei yhtään annettua palautetta</div>
      )
    } else {
      return (
        <div>
          <table>
            <tbody>
              <Tablerow text="Hyvä" value={this.values.hyva} />
              <Tablerow text="Neutraali" value={this.values.neutraali} />
              <Tablerow text="Huono" value={this.values.huono} />
              <Tablerow text="Keskiarvo" value={this.keskiarvo()} />
              <Tablerow text="Positiivisia" value={this.positiv()} />
            </tbody>
          </table>
        </div>
      )
    }
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  kasvata = (e) => () => {
    this.setState({ [e]: this.state[e] + 1 })
  }
  
  render() {
    return (
      <div>
        <Header text="Anna palautetta" />
        <div>
          <Button handleClick={this.kasvata('hyva')} text="Hyvä" />
          <Button handleClick={this.kasvata('neutraali')} text="Neutraali" />
          <Button handleClick={this.kasvata('huono')} text="Huono" />
        </div>
        <Header text="Statistiikka" />
        <Statistics values={this.state} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
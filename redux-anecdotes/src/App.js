import React from 'react';


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} style={{margin:5}}>
    {text}
  </button>
)

class App extends React.Component {

  vote = (id) => () => {
    console.log(id)
    this.props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  render() {
    const anecdotes = this.props.store.getState()

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <Button handleClick={this.vote(anecdote.id)} text="Vote" />
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form>
          <div><input /></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default App
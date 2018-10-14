import React from 'react';


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick} style={{margin:5}}>
    {text}
  </button>
)

class App extends React.Component {

  vote = (id) => () => {
    this.props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  addAnecdote = async (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD',
      data: { content: event.target.content.value }
    })
    event.target.content.value = ''
  }  

  render() {
    const anecdotes = this.props.store.getState()

    return (
      <div>
        <h2>Anecdotes</h2>
        {
          anecdotes
          .sort(function(a,b) {
            return b.votes - a.votes
          })
          .map(anecdote=>
            <div key={anecdote.id}>
              <div>
                {anecdote.content} 
              </div>
              <div>
                has {anecdote.votes}
                <Button handleClick={this.vote(anecdote.id)} text="Vote" />
              </div>
            </div>
          )
        }
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div>
            <input type="text" name="content" />
          </div>
          <button type="submit">Create</button> 
        </form>
      </div>
    )
  }
}

export default App
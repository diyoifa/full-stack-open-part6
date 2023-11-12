/* eslint-disable react/prop-types */

const Anecdote = ({ anecdote, vote }) => {
  // console.log("🚀 ~ file: Anecdote.jsx:4 ~ Anecdote ~ anecdote:", anecdote)
  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>vote</button>
      </div>
    </div>
  );
};

export default Anecdote;

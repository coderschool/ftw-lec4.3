import React from 'react'

const Candidate = ({match, getData}) => {
  const id = match.params.id;
  const data = getData(id);
  return (
    <div>
      <h1> I am Candidate Id {id} </h1>
      <h2> My skill level is {data.skill} </h2>
      <h2> My name is {data.name} </h2>
    </div>
  )
}

export default Candidate

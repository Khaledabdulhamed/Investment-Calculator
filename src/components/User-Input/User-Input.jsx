import React, { useState } from 'react'

const initialUserInput = {
  "current-savings" : null,
  'yearly-contribution' : null,
  "expected-return" : null,
  duration: null,
}
const UserInput = (props) => {


 const [userInput, setUserInput] = useState(initialUserInput)

  const onSubmitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput)
  }

  const onResetHandler = () =>{
    setUserInput(initialUserInput)
  }

  const inputChangeHandler = (input, value) =>{
    setUserInput((prevInput) =>{
      return {
        ...prevInput,
        [input] : +value,
      }
    })


  }

  return (
    <form onSubmit={onSubmitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input onChange={(event) => inputChangeHandler('current-savings', event.target.value )} 
            type="number" id="current-savings"
            name={userInput['current-savings']}
             />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value )} 
            type="number" id="yearly-contribution" 
            name={userInput['yearly-contribution']}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(event) => 
            inputChangeHandler('expected-return', event.target.value )}
            name={userInput['expected-return']}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(event) => 
            inputChangeHandler('duration', event.target.value )}
            name={userInput['duration']}
             />
          </p>
        </div>
        <p className="actions">
          <button onClick={onResetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  )
}

export default UserInput
import React from 'react'


const Form = () => {

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }
    
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form
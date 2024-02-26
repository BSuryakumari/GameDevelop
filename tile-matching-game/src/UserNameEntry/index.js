import {useState} from 'react'
import './styles.css'

const UserNameEntry = ({onNameSubmit}) => {
  const [userName, setUserName] = useState('')

  const handleInputChange = e => {
    setUserName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    onNameSubmit(userName)
  }

  return (
    <div className="container">
      <div className="welcome-container">
        <form onSubmit={handleSubmit}>
          <label>
            Enter Your Name:
            <input type="text" value={userName} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UserNameEntry

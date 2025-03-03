import React from 'react'
import { FaStar } from 'react-icons/fa'
import './App.css'

function App() {
  const [rating, setRating] = React.useState(0)

  function handleStarClick(index) {
    setRating(
      prevRating => (prevRating === index+1 ? 0 : index+1)
    )
  }

  const styles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center', 
    gap: '16px', 
    cursor: 'pointer'
  }

  return (
    <div className='star-rating-card'>
      <h2>How many stars would you give to our Online Code Editor?</h2>
      <div className='star-icons' style={styles}>
        {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              size={40}
              color={index<rating ? '#ffc107' : '#e4e5e9'}
              onClick={() => handleStarClick(index)}
            />
          ))}
      </div>
      <p>Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform. </p>
    </div>
  )
}

export default App

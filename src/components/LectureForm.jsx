import { useState } from 'react'
import Button from './Button'
import RatingSelect from './RatingSelect'

function LectureForm ({handleAddFeedback}) {
  const [text, setText] = useState('')
  const [btnDissabled, setBtnDissabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDissabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length  <= 10 ) {
      setMessage('Text must be at least 10 characters')
      setBtnDissabled(true)
    } else {
      setMessage(null)
      setBtnDissabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }

      console.log(newFeedback)
      handleAddFeedback(newFeedback)
    }
  }


  return (
      <div>
        <form onSubmit={handleSubmit}>
          <RatingSelect select={(rating) => setRating(rating)}/>
          <div className="input-group">
            <textarea type="  "
                      onChange={handleTextChange}
                      placeholder="Write a content"
                      value={text}
            />
            <Button type='submit'
                    isDissabled= {btnDissabled}>
              Save
            </Button>

          </div>
          {message && <div className='message'>{message}</div>}
        </form>
      </div>
    )
  }
  
  export default LectureForm
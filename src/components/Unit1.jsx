import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import LectureForm from './LectureForm'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';

function Unit1 () {
    const [feedbackList, setFeedbackList] = useState('')

    const [testCom, setTestCom] = useState('tam')

    const handleAddFeedback = (feedback) => {
        console.log("This is from Unit component")
        feedback.id = uuidv4()
        console.log(feedback)
        debugger
        console.log(feedbackList)
        setFeedbackList([feedback])
        debugger

    }
    return (    
        <div>
            <p>Unit 1</p>
            <br>
            </br>
            <ul>
                <li>
                    <Link to="/gramar/1">Grammar----Review of tenses</Link>
                </li>
                <li>    
                    <Link to="/vocabulary/1">Vocabulary-----Character adjectives</Link>
                </li>
                <li>
                    <Link to="/speaking/1">Speaking-----Discuss inspiring people</Link>
                </li>
                <li>
                    <Link to="/writing/1">Writing-----  Organising an article</Link>
                </li>
            </ul>
            <LectureForm handleAddFeedback={handleAddFeedback}/>
            <ul>
                {
                    feedbackList.length > 1 &&
                    feedbackList.map( feedback => (
                        <li>{feedback.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Unit1
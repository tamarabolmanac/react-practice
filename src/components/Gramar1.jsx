import { useState } from 'react'
import PropTypes from 'prop-types'

function Gramar1 ({done, handleChange}) {
  return (
    <div>
      <div> <input type="checkbox" checked={done} onChange={handleChange}/>Lecture state </div>
      <h3>Review of tenses</h3>
    
      <div>
        <ul>
          <li>
            <b>Present simple</b>
            <p>For habits, repeated actions, facts, and things which are generaly true</p>
            <u>Example:</u> <p>I usually do my my homework in the evening.</p>
          </li>
          <hr/>
          <li>
            <b>Present perfect simple</b>
            <p>For experiences in our life, without saying when they happened.</p>
            <u>Example:</u> <p>I've seen this film three times.</p>
            <p>To focus on present states which started in the past, and have continued up to the present</p>
            <u>Example:</u> <p>I've lived here since I was a child.</p>
            <p>To focus on past completed actions which are recent (often with just) or which have connection with the present</p>
            <u>Example:</u> <p>I've posted your letter.</p>
          </li>
          <hr/>
          <li>
            <b>Present continious</b>
            <p>For actions in progress now (at the moment of speaking) or around now</p>
            <u>Example:</u> <p>Sorry, I can't talk now - I'm doing my homework.</p>
            <p>For temporary situations</p>
            <u>Example:</u> <p>I am studying English in Cambrige this semester, but normally I work in Milan.</p>
          </li>
          <hr/>
          <li>
            <b>Past simple</b>
            <p>To talk about completed past actions and states. We often specify the time in the past with the past simple.</p>
            <u>Example:</u> <p>I lost my phone last week, but then I found it in my car.</p>
          </li>
          <hr/>
          <li>
            <b>Past perfect simple</b>
            <p>For actions and events that happened before a particular moment in time.</p>
            <p>For reasons - after because.</p>
            <u>Example:</u> <p>I decided to walk home, because I had forgotten my bus pass.</p>
          </li>
          <hr/>
          <li>
            <b>Past continious</b>
            <p>To describe actions that were in progress at a particular moment in the past.</p>
            <p>For actions or events in progress at the time of a shorter, past simple action.</p>
            <u>Example:</u> <p>He phoned while I was doing my homework.</p>
          </li>
        </ul>
      </div>
    </div>
    )
  }

  Gramar1.propTypes = {
    done: PropTypes.bool
  }
  
  export default Gramar1
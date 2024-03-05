import React from 'react'
import {FcLike} from "react-icons/fc"

function Card(props) {

  let course = props.course;

  return (
    <div>
      {/* <h1>CARD Section</h1> */}
      
      <div>
        <img src={course.image.url}></img>
      </div>

      <div>
        <button>
          <FcLike/>
        </button>
      </div>

      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>

    </div>
  )
}

export default Card

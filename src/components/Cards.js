import React from 'react'
import Card from './Card';

function Cards(props) {

  let courses = props.courses;

  console.log(courses);

  function getCourses(){
    let allCourses = [];

    Object.values(courses).forEach( (course) => {
      course.forEach((courseData) =>{
        allCourses.push(courseData);
      })
    })
    
    return allCourses;
  }

  return (
    <div>
      {/* <h1>Cards</h1> */}

      {
        getCourses().map((course)=>{
          return <Card key={course.id} course={course}></Card>
        })
      }
    </div>
  )
}

export default Cards

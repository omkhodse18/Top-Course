import React, { useState } from 'react'
import Card from './Card';

function Cards(props) {

  const [likedCourses, setLikedCourses] = useState([]);


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
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {/* <h1>Cards</h1> */}

      {
        getCourses().map((course)=>{
          return <Card key={course.id} course={course} likedCourses={likedCourses} 
                  setLikedCourses={setLikedCourses}></Card>
        })
      }
    </div>
  )
}

export default Cards

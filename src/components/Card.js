import React, { useState } from 'react'
// import {FcLike} from "react-icons/fc"
import { BiLike , BiSolidLike} from "react-icons/bi";
import { toast } from 'react-toastify';

function Card(props) {
  const [readMore, setReadMore] = useState(false);

  let Toast = toast;
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  // let description = course.description;
  const description = readMore ? course.description : `${course.description.substring(0,100)}...` ; 

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      // It is already liked
      setLikedCourses( (prev) => prev.filter( (cid) => (cid !== course.id) ) );

      Toast.warning("Liked Removed");

    }
    else{
      // It is not liked

      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses( (prev) => [...prev, course.id]);
      }

      Toast.success("Liked Successfully");
    }
  }


  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      {/* <h1>CARD Section</h1> */}

      <div className='relative'>
        <img src={course.image.url}></img>

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? <BiSolidLike fontSize="1.75rem"/> : <BiLike fontSize="1.75rem"/>
            }
          </button>
        </div>

      </div>

      

      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        
        <p className='mt-2 text-white'>
          {description} 
          <span className='font-semibold cursor-pointer text-sky-400' onClick={() => setReadMore(!readMore)}>
            {
              readMore ? `Show Less` : `Read More`
            }
          </span>
        </p>

      </div>

    </div>
  )
}

export default Card

import {MdClose} from 'react-icons/md'


function Resume(props) {
  return (
    <div className='resume'>
       <div className='header'>
            <h1> CV </h1>
            <button onClick={()=> props.setResume(false)}> <MdClose /> </button>
        </div> 
        <div className='body'>
          <embed src= "/images/cv.pdf"/>
        </div>
    </div>
  )
}

export default Resume
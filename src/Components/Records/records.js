import React from 'react'
import styled from 'styled-components'

const Records = () => {
  return (
    <Srecord id='records'>
    <h5>Unwatched Lecture</h5>
      <div className='content'>
        <img src='https://shub.edu.vn/images/overview-lesson.svg' alt='' style={{width:'200px', height:'200px'}}/>
        <span>You have watched all the lectures</span>
      </div>
    </Srecord>
  )
}

export default Records

const Srecord = styled.div`
  position: relative;
  height: 600px;
  display: flex;
  flex-direction: column;
  h5 {
    font-size: 30px;
  }
  .content{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 60%;
    height: 600px;
    background-color: white;
    border: 1px solid gainsboro;
    span{
      font-size: 20px;
    }
  }
`
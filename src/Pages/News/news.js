import styled from "styled-components"


const News = () => {
  const dataNews = [
    'Java Job Recruitment', 'FullStack Developer Recruitment', 'Blockchain Developer Recruitment'
  ]

  return (
    <SNews>
      <h2>Job Recruitment</h2>
    {dataNews.map((item, index)=> {
      return(
        <div
        className="newsItem"
          key={index}
          onClick={(e)=>{
            e.preventDefault()
            return (
              window.location.replace('http://localhost:3000/news/apply')
            )
          }}>
          <h3>{item}</h3>
        </div>
      )
    })}
    </SNews>
  )
}

export default News

const SNews = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  border-radius: 30px;
  width: 60%;
  height: 550px;
  border: 2px solid gainsboro;
  h2{
    margin: 10px 0 0 40px;
  }
  .newsItem{
    border-radius: 30px;
    width: 80%;
    height: 90px;
    margin-left: 10%;
    border: 2px solid gainsboro;
    h3{
      line-height: 90px;
      margin-left: 20%;
    }
  }
`
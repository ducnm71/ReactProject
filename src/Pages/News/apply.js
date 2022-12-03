import React from 'react'
import styled from 'styled-components'

const Apply = () => {
  return (
    <Sapply>
        <div className='welfare'>
            <h3>Welfare For You</h3>
            <ul>
                <li>
                    <box-icon name='dollar'></box-icon>
                    <p>Have a chance to be promoted as Talent Acquisition Business Partner of strategic business units.</p>
                </li>
                <li>
                    <box-icon name='user'></box-icon>
                    <p>Have social insurance, health insurance and time off due to Vietnam National Law.</p>
                </li>
                <li>
                    <box-icon name='gift' ></box-icon>
                    <p>Get favourable deal on internal purchasing/Get discounts on internal purchasing.</p>
                </li>
            </ul>
        </div>

        <div className='description'>
            <h3>Job Description</h3>
            <ul>
                <li><p>Work as a Talent Acquisition Business Partner to create, propose and deliver recruitment plans in order to support business operations, growth and transformation.</p></li>
                <li><p>Be responsible for the full circle of the recruitment process, including sourcing, screening, and shortlisting candidates, conducting interviews, making offers.</p></li>
                <li><p>Build and maintain a network of candidates through creative sourcing techniques and channels to fill the current hiring needs and new projects</p></li>
                <li><p>Build and manage the talent pool, leverage for future hiring needs.</p></li>
                <li><p>Support & follow up with the new hires for smooth onboarding.</p></li>
                <li><p>Ensure the best candidate experience through proper communication along their candidacy journey with Medici.</p></li>
                <li><p>Report and evaluate recruitment performance weekly/ monthly/ quarterly.</p></li>
                <li><p>Involve in employer branding initiatives & activities</p></li>
            </ul>
        </div>

        <div className='required'>
            <h3>Job Requirement</h3>
            <ul>
                <li><p> 2-3 years‘ experience recruiting for IT, healthcare or insurance field</p></li>
                <li><p>Ability to take initiative and innovate push recruiting success</p></li>
                <li><p>Ability to work proactively and independently</p></li>
                <li><p>Ability to build strong relationships and networks with candidates and internal stakeholders</p></li>
                <li><p>Team player with high energy, excellent interpersonal and communication skills</p></li>
                <li><p> Can-do attitude with growth mindset, passionate in talent acquisition and goal – oriented</p></li>
            </ul>
        </div>

        <div className='address'>
            <h3>Working Address</h3>
              <div className='addresshehe'>
                <box-icon name='map' ></box-icon>
                <p>22 Thanh Cong, Ba Dinh, Ha Noi</p>
              </div>
            
        </div>
    </Sapply>
  )
}

export default Apply


const Sapply = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 7%;
    width: 50%;
    ul{
      display: flex;
      flex-direction: column;
      margin-left: 40px;
      gap: 0.1rem;
    }
    p{
        font-size: 20px;
      }
    .welfare{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      ul{
        margin-left: 10px;
      }
      li{
        display: flex;
        gap: 1rem;
      }
    }

  .addresshehe{
    margin-left: 40px;
    display: flex;
    gap: 1rem;
  }
`
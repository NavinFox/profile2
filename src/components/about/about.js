import Progress from 'react-progressbar';
import './about.css'
import "../../App.css";
import data from '../../profile.json';


function About() {

  return (

    <div className='about'>
    <div className='profile'>
      <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='#'></img>
    <div className='name'>
      <h1>{data.profile.name}</h1>
      <h1>{data.profile.pos}</h1>
    </div>
    </div>

    <div className='about-me'>
      <h2>ABOUT ME</h2>
      <p className='text'>{data.profile.about}</p>
    </div>

    <div className='skill'>
    <div>
      <h2>{data.profile.skill}</h2>
      <Progress completed={100} />
    </div>
    <div>
      <h2>{data.profile.skill1}</h2>
      <Progress completed={75} />
    
    </div>
    <div>
      <h2>{data.profile.skill2}</h2>
      <Progress completed={90} />
    </div>
    <div>
      <h2>{data.profile.skill3}</h2>
      <Progress completed={75} />
    </div>
    </div>

      <div className='contact'>
          <h2>CONTACTS</h2>
          <p>{data.profile.email}</p>
          <p>{data.profile.phone}</p>
      </div>
  </div>
  )
}

export default About;
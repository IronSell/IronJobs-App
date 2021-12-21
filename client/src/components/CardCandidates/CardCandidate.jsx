import * as PATHS from '../../utils/paths';
import { Link } from 'react-router-dom';
import './CardCandidate.css';

function CardCandidate(props) {
  const { name, lastName, province, profession, profilePicture, _id, skills } =
    props.getCandidates;
  return (
    <div className='cardCandidate'>
      {/* <Link to={PATHS.CANDIDATEPROFILE + '?id=' + _id}> */}
      <div className='card-container'>
        <img className='round' src={profilePicture} alt='user' />
        <h3>{name} {lastName}</h3>
        <h6>{province}</h6>
        <p>{profession}</p>
        <div className='buttons'>
          <Link to={PATHS.CANDIDATEPROFILE + '?id=' + _id}>
            <button className='primary'>Profile</button>
          </Link>
        </div>
        <div className='skills'>
          <h6>Skills</h6>
          <ul>
            {/* {skills.map((skill) => (
                // <li>{skill}</li>
              ))} */}
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardCandidate;

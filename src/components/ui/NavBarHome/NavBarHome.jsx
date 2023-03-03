import { Link } from 'react-router-dom';

import './navBarHome.css';

export const NavBarHome = () => {
  return (

<nav>
      <ul className='header'>
        <Link to="/"><li>Home</li></Link>
        {/* <Link to="/AboutUS"><li>AboutUS</li></Link>
        <Link to="/ContactUS"><li>ContactUS</li></Link> */}
        <Link to="/ChangeColor"><li>ChangeColor</li></Link>
        <Link to="/UseState"><li>UseState</li></Link>
        <Link to="/GeneratorTweets"><li>GeneratorTweets</li></Link>
        {/* <Link to="*"><li>NotFound</li></Link> */}
      </ul>
      <ul>
        <img src="real_madrid.png" alt="Madrid" />
      </ul>
    </nav>


  )
}
import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import '../Footer/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='columsFooter'>
        <p>Rocio Garcia:</p>
        <a href="https://github.com/Roxonwheels" target="_blank"><GithubOutlined className='logoGit' /></a>
        <a href="https://www.linkedin.com/in/maria-del-rocio-garcia-16a508193/" target="_blank"><LinkedinOutlined style={{ color: '#1457b6' }} /></a>
      </div>
      <div className='columsFooter'>
        <p>Nacho Benito:</p>
        <a href="https://github.com/nachbr91" target="_blank"><GithubOutlined className='logoGit' /></a>
        <a href="https://www.linkedin.com/in/nachobenitoroig/" target="_blank"><LinkedinOutlined style={{ color: '#1457b6' }} /></a>
      </div>
      <div className='columsFooter'>
        <p>Federico Altava Redondo:</p>
        <a href="https://github.com/FedeAltava" target="_blank"><GithubOutlined className='logoGit' /></a>
        <a href="https://www.linkedin.com/in/federico-altava-redondo-a59390199/" target="_blank"><LinkedinOutlined style={{ color: '#1457b6' }} /></a>
      </div>
    </div>
  );
}

export default Footer;

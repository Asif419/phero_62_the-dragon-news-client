import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaFacebookF, FaGitSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className='mb-2' variant="outline-secondary"><FaGoogle />Login with Google</Button>
      <Button variant="outline-secondary"><FaGitSquare /> Login with GitHub</Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebookF />Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
        </ListGroup>
        <QZone></QZone>
        <div>
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightNav;
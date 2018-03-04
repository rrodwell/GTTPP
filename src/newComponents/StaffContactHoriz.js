import React from 'react';
import { Row, Col } from 'react-materialize';
/*
PROPS TO RECEIVE:
- name
- position
- email
- aboutText
- imgSrc
*/

const styles = {
  positionStyle: {
    fontSize: '18px',
    lineHeight: '30px',
    marginTop: '20px'
  },
  emailStyle: {
    fontSize: '16px',
    lineHeight: '30px',
    // marginTop: '20px'
    color: '#545454',
  },
  aboutStyle: {
    fontSize: '16px',
    lineHeight: '30px',
    marginTop: '20px',
  }
}

const StaffContactHoriz = props => (

  <div style={{
    margin: '30px auto'
  }}>
    <Row>
      <Col s={3} className='offset-s2'>
        <img src={props.imgSrc} style={{
          width: '100%',
          height: 'auto',
        }}/>
      </Col>
      <Col s={5} className='push-s1'>
        <div>
          <h4>{props.name}</h4>
          <p style={styles.positionStyle}>{props.position}</p>
          <p style={styles.emailStyle}><em>{props.email}</em></p>
          <p style={styles.aboutStyle}>{props.about}</p>
        </div>
      </Col>
    </Row>
  </div>

);

export default StaffContactHoriz;
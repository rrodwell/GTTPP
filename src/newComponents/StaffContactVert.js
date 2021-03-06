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

const StaffContactVert = props => (

  <div style={{
    margin: '30px auto'
  }}>
    <Row>
      <Col s={2} className='center'>
        <img src={props.imgSrc} style={{
          width: '100%',
          height: 'auto',
        }}/>
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

export default StaffContactVert;
import React from 'react';
import { TextLeftImgRight, RoundButton } from './../../common';

const LWC = props => (
  <TextLeftImgRight title='GT Letterwinners Club' img='./assets/images/community-service/community-service-5.JPG'>
      <p>The Georgia Tech Letterwinners Club is committed to serving GT student-athletes after graduation. The club hosts several events throughout the year as opportunities to connect with teammates and peers, support current student-athletes, and get involved with the GT Athletic Association.
        <br/><br />
        <span className='bold'>Go to Letterwinners page</span>
      <RoundButton backgroundColor='#b39454' url='http://www.atfund.gatech.edu/gt-letterwinners-club'/>
      </p>
  </TextLeftImgRight>
);

export default LWC;
import React from 'react';
import {ALIGN_ITEMS} from '../config/constants';

export const BasicForm = ({Grid, Col}) => {
  let inputStyle = {width: '100%', height: 50, boxSizing: 'border-box'};
  return (
    <Grid alignItems={ALIGN_ITEMS.end}>
      <Col s="2/4">
        <div>input 1</div>
      </Col>
      <Col s="4/7">
        <input type="text" style={inputStyle} />
      </Col>
      <Col s="8/10">
        <div>input 2</div>
      </Col>
      <Col s="10/13">
        <input type="text" style={inputStyle} />
      </Col>
      <Col s="2/4">
        <div>dropdown 1</div>
      </Col>
      <Col s="4/7">
        <select style={{width: '100%', height: 50}}>
          <option value={1}>First value</option>
          <option value={2}>second value</option>
        </select>
      </Col>
      <Col s="8/10" alignItems={ALIGN_ITEMS.normal}>
        <div>input 3</div>
      </Col>
      <Col s="10/13">
        <input type="text" style={inputStyle} />
      </Col>
    </Grid>
  );
};

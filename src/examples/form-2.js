import React from 'react';
import {ALIGN_ITEMS, JUSTIFY_ITEMS} from '../grid-modern';

export const Form2Example = ({Grid, Col}) => {
  return (
    <Grid alignItems={ALIGN_ITEMS.end}>
      <Col s="2/4">
        <label htmlFor={'input'}>my input</label>
      </Col>
      <Col s="4/6">
        <input type="text" value={12212} style={{width: '100%', boxSizing: 'border-box'}} id={'input'} />
      </Col>
      <Col s="2/4">
        <label htmlFor={'dropdown'}>my dropdown</label>
      </Col>
      <Col s="4/6">
        <select value={12212} style={{width: '100%'}} id={'dropdown'}>
          <option value={12212}>12212</option>
        </select>
      </Col>
    </Grid>
  );
};

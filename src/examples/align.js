import React from 'react';
import {ALIGN_ITEMS} from '../config/constants';

export const AlignExample = ({Grid, Col}) => {
  return (
    <Grid alignItems={ALIGN_ITEMS.end}>
      <Col s="2/4">
        <div style={{height: 70}}>2/4</div>
      </Col>
      <Col s="5/7">
        <div>5/7</div>
      </Col>
      <Col s="9/11">
        <div>9/11</div>
      </Col>
      <Col s="1/7" l="2/6">
        <div style={{height: 70}}>1/7 (mobile) 2/6 (desktop)</div>
      </Col>
      <Col s="7/13" l="6/10" alignItems={ALIGN_ITEMS.center}>
        <div> 7/13 (mobile) 6/10 (desktop)</div>
      </Col>

      <Col s="5/8">
        <div style={{height: 70}}>5/8</div>
      </Col>
      <Col s="8/12" alignItems={ALIGN_ITEMS.normal}>
        <div>8/12</div>
      </Col>
    </Grid>
  );
};

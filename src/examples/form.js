import React from 'react';
import {ALIGN_ITEMS, JUSTIFY_ITEMS} from '../grid-modern';

export const FormExample = ({Grid, Col}) => {
  return (
    <Grid alignItems={ALIGN_ITEMS.end}>
      <Col s="2/4">
        <div className="column-content" style={{height: 70}}>
          column: 2/4
        </div>
      </Col>
      <Col s="5/7">
        <div className="column-content">column: 5/7</div>
      </Col>
      <Col s="9/11">
        <div className="column-content">column: 9/11</div>
      </Col>
      <Col s="1/7" l="2/6">
        <div className="column-content" style={{height: 70}}>
          column: 1/7 (mobile) 2/6 (desktop)
        </div>
      </Col>
      <Col s="7/13" l="6/10" alignItems={ALIGN_ITEMS.center}>
        <div className="column-content">column: 7/13 (mobile) 6/10 (desktop)</div>
      </Col>

      <Col s="5/8">
        <div className="column-content">column: 5/8</div>
      </Col>
      <Col s="8/12">
        <div className="column-content">column: 8/12</div>
      </Col>
    </Grid>
  );
};

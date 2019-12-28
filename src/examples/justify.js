import React from 'react';
import {JUSTIFY_ITEMS} from '../config/constants';

export const JustifyExample = ({Grid, Col}) => {
  return (
    <>
      <Grid>
        <Col justifyItems={JUSTIFY_ITEMS.center}>
          <div className="pseudo-column">1/13 (mobile) 2/12 (desktop)</div>
        </Col>
      </Grid>
      <Grid justifyItems={JUSTIFY_ITEMS.center}>
        <Col s="2/3">
          <div className="pseudo-column">2/4</div>
        </Col>
        <Col s="5/7">
          <div className="pseudo-column">5/7</div>
        </Col>
      </Grid>
    </>
  );
};

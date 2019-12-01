import React from 'react';

export const BasicExample = ({Grid, Col}) => {
  return (
    <Grid>
      <Col l="2/12">
        <div className="column-content">column: 1/13 (mobile) 2/12 (desktop)</div>
      </Col>
      <Col s="2/4">
        <div className="column-content">column: 2/4</div>
      </Col>
      <Col s="5/7">
        <div className="column-content">column: 5/7</div>
      </Col>
      <Col s="9/11">
        <div className="column-content">column: 9/11</div>
      </Col>
      <Col s="1/7" l="2/6">
        <div className="column-content">column: 1/7 (mobile) 2/6 (desktop)</div>
      </Col>
      <Col s="7/13" l="6/10">
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

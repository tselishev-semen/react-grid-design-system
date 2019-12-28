import React from 'react';

export const BasicExample = ({Grid, Col}) => {
  return (
    <Grid>
      <Col l="2/12">
        <div>1/13 (mobile) 2/12 (desktop)</div>
      </Col>
      <Col s="2/4">
        <div>2/4</div>
      </Col>
      <Col s="5/7">
        <div>5/7</div>
      </Col>
      <Col s="9/11">
        <div>9/11</div>
      </Col>
      <Col s="1/7" l="2/6">
        <div>1/7 (mobile) 2/6 (desktop)</div>
      </Col>
      <Col s="7/13" l="6/10">
        <div>7/13 (mobile) 6/10 (desktop)</div>
      </Col>
      <Col s="5/8">
        <div>5/8</div>
      </Col>
      <Col s="8/12">
        <div>8/12</div>
      </Col>
    </Grid>
  );
};

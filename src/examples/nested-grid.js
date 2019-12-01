import React from 'react';

export const NestedExample = ({Grid, Col}) => {
  return (
    <Grid>
      <Col s="1/7">
        <div className="column-content">
          <Grid>
            <Col s="1/4">column: 1/4</Col>
            <Col s="4/7">column: 4/7</Col>
          </Grid>
        </div>
      </Col>

      <Col s="8/12">
        <div className="column-content">
          <Grid>
            <Col s="1/5">column: 1/5</Col>
            <Col s="2/5">column: 2/4</Col>
          </Grid>
        </div>
      </Col>
    </Grid>
  );
};

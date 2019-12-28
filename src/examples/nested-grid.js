import React from 'react';

export const NestedExample = ({Grid, Col}) => {
  return (
    <>
      <Grid>
        <Col s="1/7">
          <Grid>
            <Col s="1/4">1/4</Col>
            <Col s="4/7">4/7</Col>
          </Grid>
        </Col>

        <Col s="8/12">
          <Grid>
            <Col s="1/5">1/5</Col>
            <Col s="2/5">2/5</Col>
          </Grid>
        </Col>
      </Grid>
      ,
      <Grid>
        <Col s="2/12" l="1/13">
          <Grid>
            <Col s="1/11" l="1/7">
              1/11 (mobile) 1/7(desktop)
            </Col>
            <Col s="1/11" l="7/13">
              1/11 (mobile) 7/13(desktop)
            </Col>
          </Grid>
        </Col>
      </Grid>
    </>
  );
};

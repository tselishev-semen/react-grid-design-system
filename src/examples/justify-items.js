import React from 'react';
import {ALIGN_ITEMS, JUSTIFY_ITEMS} from '../grid-modern';

export const JustifyItemsExample = ({Grid, Col}) => {
  return (
    <>
      <Grid>
        {/*    <Col justifyItems={JUSTIFY_ITEMS.center}>*/}
        {/*        <div className='column-content'>*/}
        {/*            column: 1/13 (mobile) 2/12 (desktop)*/}
        {/*        </div>*/}
        {/*    </Col>*/}
        {/*/!*</Grid>*!/*/}
        {/*<Grid>*/}
        <Col s="2/3">
          <div className="column-content">column: 2/4</div>
        </Col>
        <Col s="5/7">
          <div className="column-content">column: 5/7</div>
        </Col>
      </Grid>
    </>
  );
};

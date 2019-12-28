import React from 'react';
import 'details-element-polyfill';
import {Grid as LegacyGrid, Col as LegacyCol} from './grid-legacy';
import {Grid, Col} from './grid-modern';
import './grid-modern/grid.scss';
import './grid-legacy/grid.scss';
import {BasicExample, JustifyExample, AlignExample, BasicForm, NestedExample} from './examples';

export const App = () => {
    return (
        <>
            <h1>Demo Page with examples of Grid Design System for React</h1>
            <details>
                <summary>Basic Grid Example</summary>
                <h4>CSS Grid</h4>
                <BasicExample Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <BasicExample Grid={LegacyGrid} Col={LegacyCol} />
            </details>

            <details>
                <summary>Basic Form Layout</summary>
                <h4>CSS Grid</h4>
                <BasicForm Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <BasicForm Grid={LegacyGrid} Col={LegacyCol} />
            </details>

            <details>
                <summary>Align example</summary>
                <h4>CSS Grid</h4>
                <AlignExample Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <AlignExample Grid={LegacyGrid} Col={LegacyCol} />
            </details>


            <details>
                <summary>Justify example</summary>
                <h4>CSS Grid</h4>
                <JustifyExample Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <JustifyExample Grid={LegacyGrid} Col={LegacyCol} />
            </details>
            <details>
                <summary>Grid inside Grid</summary>
                <h4>CSS Grid</h4>
                <NestedExample Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <NestedExample Grid={LegacyGrid} Col={LegacyCol} />
            </details>


        </>
    );
};


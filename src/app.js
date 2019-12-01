import React from 'react';
import 'details-element-polyfill';
import {Grid as LegacyGrid, Col as LegacyCol} from './grid-legacy';
import {Grid, Col} from './grid-modern';
import './grid-modern/grid.scss';
import './grid-legacy/grid.scss';
import {BasicExample, JustifyItemsExample, FormExample, Form2Example, NestedExample} from './examples';

export const App = () => {
    return (
        <>
            <h1>Demo Page with examples of Grid Design System for React</h1>

            <details>
                <summary>Grid inside Grid</summary>
                <h4>CSS Grid</h4>
                <NestedExample Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <NestedExample Grid={LegacyGrid} Col={LegacyCol} />
            </details>

            <details>
                <summary>Basic Form Layout</summary>
                <h4>CSS Grid</h4>
                <Form2Example Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <Form2Example Grid={LegacyGrid} Col={LegacyCol} />
            </details>

            <details>
                <summary>Basic Grid Example</summary>
                <h4>CSS Grid</h4>
                <BasicExample Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <BasicExample Grid={LegacyGrid} Col={LegacyCol} />
            </details>

            <details>
                <summary>Form example</summary>
                <h4>CSS Grid</h4>
                <FormExample Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <FormExample Grid={LegacyGrid} Col={LegacyCol} />
            </details>

            <details>
                <summary>Justify-items: center</summary>
                <h4>CSS Grid</h4>
                <JustifyItemsExample Grid={Grid} Col={Col} />
                <h4>Fallback to Flexbox</h4>
                <JustifyItemsExample Grid={LegacyGrid} Col={LegacyCol} />
            </details>
        </>
    );
}


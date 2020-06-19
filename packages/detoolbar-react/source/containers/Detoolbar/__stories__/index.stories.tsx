import React from 'react';

// import themes from '@plurid/plurid-themes';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import {
    withKnobs,
    // boolean,
    // number,
    // select,
    // text,
} from '@storybook/addon-knobs';

import Detoolbar from '../';

import {
    DetoolbarTool,
} from '../../../data/interfaces';



const tools: DetoolbarTool[] = [
    {
        id: 'one',
        name: 'One',
        Tool: () => (
            <div>One</div>
        ),
    },
    {
        id: 'two',
        name: 'Two',
        Tool: () => (
            <div>Two</div>
        ),
    },
];

// const actions = {
//     // atClick: action('atClick'),
// };

// const themeLabel = 'Theme';
// const computeThemeOptions = () => {
//     const options: any = {};
//     for (const key of Object.keys(themes)) {
//         options[key] = key;
//     }
//     return options;
// }
// const themeOptions = computeThemeOptions();
// const defaultThemeValue = 'plurid';

storiesOf(
    'Detoolbar',
    module,
)
.addDecorator(withKnobs)
.add('basic', () => {
    // const theme = select(themeLabel, themeOptions, defaultThemeValue);

    return (
        <div
            style={{
                padding: '4rem',
            }}
        >
            <Detoolbar
                tools={tools}

                // {...actions}
                // theme={themes[theme]}
            />
        </div>
    );
});

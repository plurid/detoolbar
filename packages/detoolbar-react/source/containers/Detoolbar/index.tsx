import React from 'react';

import {
    StyledDetoolbar,
} from './styled';

import Search from '../Search';
import Tools from '../Tools';

import {
    DetoolbarTool,
    IDetoolbarContext,
} from '../../data/interfaces';

import DetoolbarContext from '../../services/context';



export interface DetoolbarProperties {
    tools: DetoolbarTool[];
}

const Detoolbar: React.FC<DetoolbarProperties> = (
    properties,
) => {
    /** properties */
    const {
        tools,
    } = properties;


    /** context */
    const detoolbarContext: IDetoolbarContext = {
        tools,
        activeTools: [],
    };


    /** render */
    return (
        <DetoolbarContext.Provider
            value={detoolbarContext}
        >
            <StyledDetoolbar>
                <Search />

                <Tools />
            </StyledDetoolbar>
        </DetoolbarContext.Provider>
    );
}


export default Detoolbar;

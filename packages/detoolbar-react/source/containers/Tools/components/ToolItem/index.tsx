import React, {
    useContext,
    // useState,
    // useEffect,
} from 'react';

import {
    StyledToolItem,
} from './styled';

import {
    DetoolbarTool,
} from '../../../../data/interfaces';

import DetoolbarContext from '../../../../services/context';



export interface ToolItemProperties {
    tool: DetoolbarTool,
}

const ToolItem: React.FC<ToolItemProperties> = (
    properties,
) => {
    /** context */
    const context = useContext(DetoolbarContext);

    if (!context) {
        return (<></>);
    }

    // const {
    // } = context;


    /** properties */
    const {
        tool,
    } = properties;

    const {
        Tool,
    } = tool;


    /** state */


    /** effect */


    /** render */
    return (
        <StyledToolItem>
            <Tool />
        </StyledToolItem>
    );
}


export default ToolItem;

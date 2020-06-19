import React, {
    useContext,
} from 'react';

import {
    StyledTools,
} from './styled';

import DetoolbarContext from '../../services/context';



export interface ToolsProperties {
}

const Tools: React.FC<ToolsProperties> = (
    properties,
) => {
    /** context */
    const context = useContext(DetoolbarContext);

    if (!context) {
        return (<></>);
    }

    const {
        tools,
        activeTools,
    } = context;


    /** properties */
    // const {
    // } = properties;


    /** render */
    return (
        <StyledTools>

        </StyledTools>
    );
}


export default Tools;

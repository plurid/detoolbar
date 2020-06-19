import React, {
    useContext,
    // useState,
    // useEffect,
} from 'react';

import {
    StyledSearchItem,
} from './styled';

import {
    DetoolbarTool,
} from '../../../../data/interfaces';

import DetoolbarContext from '../../../../services/context';



export interface SearchItemProperties {
    tool: DetoolbarTool,
}

const SearchItem: React.FC<SearchItemProperties> = (
    properties,
) => {
    /** context */
    const context = useContext(DetoolbarContext);

    if (!context) {
        return (<></>);
    }

    const {
        activateTool,
        theme,
        activeTools,
    } = context;


    /** properties */
    const {
        tool,
    } = properties;

    const {
        id,
        name,
    } = tool;


    /** state */


    /** effect */


    /** render */
    return (
        <StyledSearchItem
            theme={theme}
            onClick={() => {
                if (activeTools.includes(id || '')) {
                    activateTool(id || '', false);
                } else {
                    activateTool(id || '', true);
                }
            }}
            active={activeTools.includes(id || '')}
        >
            {name}
        </StyledSearchItem>
    );
}


export default SearchItem;

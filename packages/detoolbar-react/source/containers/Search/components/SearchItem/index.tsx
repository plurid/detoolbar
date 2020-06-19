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
            onClick={() => {
                activateTool(id || '', true)
            }}
        >
            {name}
        </StyledSearchItem>
    );
}


export default SearchItem;

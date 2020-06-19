import React, {
    useContext,
} from 'react';

import {
    StyledSearch,
} from './styled';

import DetoolbarContext from '../../services/context';



export interface SearchProperties {
}

const Search: React.FC<SearchProperties> = (
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
        <StyledSearch>

        </StyledSearch>
    );
}


export default Search;

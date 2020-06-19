import React, {
    useContext,
} from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

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
        activateTool,
    } = context;


    /** properties */
    // const {
    // } = properties;


    /** render */
    return (
        <StyledSearch>
            {Array.from(tools).map(([id, tool]) => {
                const {
                    name,
                } = tool;

                return (
                    <div
                        key={uuid.generate()}
                        onClick={() => {
                            activateTool(id, true)
                        }}
                    >
                        {name}
                    </div>
                );
            })}
        </StyledSearch>
    );
}


export default Search;

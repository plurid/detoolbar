// #region imports
    // #region libraries
    import React, {
        useContext,
        // useState,
        // useEffect,
    } from 'react';
    // #endregion libraries


    // #region external
    import {
        DetoolbarTool,
    } from '../../../../data/interfaces';

    import DetoolbarContext from '../../../../services/context';
    // #endregion external


    // #region internal
    import {
        StyledSearchItem,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface SearchItemProperties {
    tool: DetoolbarTool;
}

const SearchItem: React.FC<SearchItemProperties> = (
    properties,
) => {
    // #region context
    const context = useContext(DetoolbarContext);

    if (!context) {
        return (<></>);
    }

    const {
        activateTool,
        theme,
        activeTools,
    } = context;
    // #endregion context


    // #region properties
    const {
        tool,
    } = properties;

    const {
        id,
        name,
    } = tool;
    // #endregion properties


    // #region render
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
    // #endregion render
}
// #endregion module



// #region exports
export default SearchItem;
// #endregion exports

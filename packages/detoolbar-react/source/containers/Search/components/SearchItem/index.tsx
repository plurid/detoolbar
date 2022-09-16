// #region imports
    // #region libraries
    import React, {
        useContext,
    } from 'react';

    import {
        PluridIconValid,
    } from '@plurid/plurid-icons-react';
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

    const toolID = id as string;
    const active = activeTools.includes(toolID);
    // #endregion properties


    // #region render
    return (
        <StyledSearchItem
            theme={theme}
            onClick={() => {
                if (active) {
                    activateTool(toolID, false);
                } else {
                    activateTool(toolID, true);
                }
            }}
        >
            <div>
                {name}
            </div>

            {active && (
                <PluridIconValid
                    theme={theme}
                    inactive={true}
                />
            )}
        </StyledSearchItem>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default SearchItem;
// #endregion exports

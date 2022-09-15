// #region imports
    // #region libraries
    import React, {
        useContext,
    } from 'react';

    import {
        uuid,
    } from '@plurid/plurid-functions';
    // #endregion libraries


    // #region external
    import DetoolbarContext from '../../services/context';
    // #endregion external


    // #region internal
    import {
        StyledTools,
    } from './styled';

    import ToolItem from './components/ToolItem';
    // #endregion internal
// #endregion imports



// #region module
export interface ToolsProperties {
}

const Tools: React.FC<ToolsProperties> = (
    properties,
) => {
    // #region context
    const context = useContext(DetoolbarContext);

    if (!context) {
        return (<></>);
    }

    const {
        indexedTools,
        activeTools,
    } = context;
    // #endregion context


    // #region properties
    // const {
    // } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledTools>
            {activeTools.map(activeTool => {
                const tool = indexedTools.get(activeTool);
                if (!tool) {
                    return;
                }

                return (
                    <ToolItem
                        key={uuid.generate()}
                        tool={tool}
                    />
                );
            })}
        </StyledTools>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Tools;
// #endregion exports

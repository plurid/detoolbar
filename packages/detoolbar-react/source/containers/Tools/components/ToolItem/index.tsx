// #region imports
    // #region libraries
    import React, {
        useContext,
        useState,
        useEffect,
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
        StyledToolItem,
        StyledToolItemButton,
        StyledToolDrawer,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ToolItemProperties {
    tool: DetoolbarTool;
}

const ToolItem: React.FC<ToolItemProperties> = (
    properties,
) => {
    // #region context
    const context = useContext(DetoolbarContext);

    if (!context) {
        return (<></>);
    }

    const {
        theme,
        activateSearch,
        activeDrawer,
        activateDrawer,
    } = context;
    // #endregion context


    // #region properties
    const {
        tool,
    } = properties;

    const {
        id,
        Tool,
        Drawer,
    } = tool;
    // #endregion properties


    // #region state
    const [
        isActiveDrawer,
        setIsActiveDrawer,
    ] = useState(false);
    // #endregion state


    // #region effects
    useEffect(() => {
        const isActiveDrawer = activeDrawer === id;
        setIsActiveDrawer(isActiveDrawer);
    }, [
        activeDrawer,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledToolItem
            theme={theme}
            isActiveDrawer={isActiveDrawer}
        >
            <StyledToolItemButton
                onClick={() => {
                    if (Drawer) {
                        if (!isActiveDrawer) {
                            activateSearch(false);
                            activateDrawer(id || '');
                        } else {
                            activateDrawer('');
                        }
                    }
                }}
            >
                <Tool />
            </StyledToolItemButton>

            {Drawer
            && isActiveDrawer
            && (
                <StyledToolDrawer
                    theme={theme}
                >
                    <Drawer />
                </StyledToolDrawer>
            )}
        </StyledToolItem>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default ToolItem;
// #endregion exports

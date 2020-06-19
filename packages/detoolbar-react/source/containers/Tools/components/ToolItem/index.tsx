import React, {
    useContext,
    // useState,
    // useEffect,
} from 'react';

import {
    StyledToolItem,
    StyledToolDrawer,
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

    const {
        theme,
        activeDrawer,
        activateDrawer,
    } = context;


    /** properties */
    const {
        tool,
    } = properties;

    const {
        id,
        Tool,
        Drawer,
    } = tool;


    /** state */


    /** effect */


    /** render */
    return (
        <StyledToolItem
            onClick={() => {
                if (Drawer) {
                    if (activeDrawer !== id) {
                        activateDrawer(id || '');
                    } else {
                        activateDrawer('');
                    }
                }
            }}
        >
            <Tool />

            {Drawer
            && activeDrawer === id
            && (
                <StyledToolDrawer
                    theme={theme}
                >
                    <Drawer />
                </StyledToolDrawer>
            )}
        </StyledToolItem>
    );
}


export default ToolItem;

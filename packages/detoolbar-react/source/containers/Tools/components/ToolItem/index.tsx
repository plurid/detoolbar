import React, {
    useContext,
    useState,
    useEffect,
} from 'react';

import {
    StyledToolItem,
    StyledToolItemButton,
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
        activateSearch,
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
    const [
        isActiveDrawer,
        setIsActiveDrawer,
    ] = useState(false);


    /** effect */
    useEffect(() => {
        const isActiveDrawer = activeDrawer === id;
        setIsActiveDrawer(isActiveDrawer);
    }, [
        activeDrawer,
    ]);


    /** render */
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
}


export default ToolItem;

import React, {
    useContext,
} from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledTools,
} from './styled';

import DetoolbarContext from '../../services/context';



export interface ToolsProperties {
}

const Tools: React.FC<ToolsProperties> = (
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
        <StyledTools>
            {activeTools.map(activeTool => {
                const tool = tools.get(activeTool);
                if (!tool) {
                    return;
                }

                const {
                    Tool,
                } = tool;

                return (
                    <div
                        key={uuid.generate()}
                    >
                        <Tool />
                    </div>
                );
            })}
        </StyledTools>
    );
}


export default Tools;

import React, {
    useContext,
} from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledTools,
} from './styled';

import ToolItem from './components/ToolItem';

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
        indexedTools,
        activeTools,
    } = context;


    /** properties */
    // const {
    // } = properties;


    /** render */
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
}


export default Tools;

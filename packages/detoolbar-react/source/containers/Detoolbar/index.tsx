import React, {
    useState,
} from 'react';

import {
    indexing,
} from '@plurid/plurid-functions';

import {
    StyledDetoolbar,
} from './styled';

import Search from '../Search';
import Tools from '../Tools';

import {
    DetoolbarTool,
    IDetoolbarContext,
} from '../../data/interfaces';

import DetoolbarContext from '../../services/context';



export interface DetoolbarProperties {
    tools: DetoolbarTool[];
}

const Detoolbar: React.FC<DetoolbarProperties> = (
    properties,
) => {
    /** properties */
    const {
        tools,
    } = properties;



    /** state */
    const [
        indexedTools,
        setIndexedTools,
    ] = useState<Map<string, DetoolbarTool>>(indexing.create(
        indexing.identify(tools, 'id') as DetoolbarTool[],
        'map',
        'id'
    ));

    const [
        activeTools,
        setActiveTools,
    ] = useState<string[]>([]);


    /** handlers */
    const activateTool = (
        id: string,
        status: boolean,
    ) => {
        // const newIndexedTools = new Map(indexedTools);
        // const tool = newIndexedTools.get(id);
        // const tool = indexedTools.get(id);
        if (status) {
            const newActiveTools = [
                ...activeTools,
            ];
            newActiveTools.push(id);
            setActiveTools(newActiveTools);
        } else {
            const newActiveTools = activeTools.filter(toolID => toolID !== id);
            setActiveTools(newActiveTools);
        }
    }


    /** context */
    const detoolbarContext: IDetoolbarContext = {
        tools: indexedTools,
        activeTools,
        activateTool,
    };


    /** render */
    return (
        <DetoolbarContext.Provider
            value={detoolbarContext}
        >
            <StyledDetoolbar>
                <Search />

                <Tools />
            </StyledDetoolbar>
        </DetoolbarContext.Provider>
    );
}


export default Detoolbar;

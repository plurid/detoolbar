// #region imports
    // #region libraries
    import React, {
        useState,
    } from 'react';

    import {
        indexing,
    } from '@plurid/plurid-functions';

    import themes, {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import Search from '../Search';
    import Tools from '../Tools';

    import {
        DetoolbarConfiguration,
        DetoolbarTool,
        IDetoolbarContext,
    } from '../../data/interfaces';

    import DetoolbarContext from '../../services/context';
    // #endregion external


    // #region internal
    import {
        StyledDetoolbarContainer,
        StyledDetoolbar,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface DetoolbarProperties {
    tools: DetoolbarTool[];
    theme?: string;
    configuration?: Partial<DetoolbarConfiguration>;
}

const Detoolbar: React.FC<DetoolbarProperties> = (
    properties,
) => {
    // #region properties
    const {
        tools,
        theme: themeProperty,
        configuration: configurationProperty,
    } = properties;

    const theme: Theme = typeof themeProperty === 'string' && (themes as any)[themeProperty]
        ? (themes as any)[themeProperty]
        : themes.plurid;

    const indexedTools = indexing.create(
        indexing.identify(tools, 'id') as DetoolbarTool[],
        'map',
        'id'
    );

    const configuration: DetoolbarConfiguration = {
        searchPlaceholder: configurationProperty?.searchPlaceholder || 'search',
    };
    // #endregion properties


    // #region state
    const [
        activeSearch,
        setActiveSearch,
    ] = useState(false);
    const [
        activeTools,
        setActiveTools,
    ] = useState<string[]>([]);
    const [
        activeDrawer,
        setActiveDrawer,
    ] = useState('');
    // #endregion state


    // #region handlers
    const activateSearch = (
        value: boolean,
    ) => {
        setActiveSearch(value);
    }

    const activateTool = (
        id: string,
        status: boolean,
    ) => {
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

    const activateDrawer = (
        id: string,
    ) => {
        setActiveDrawer(id);
    }
    // #endregion handlers


    // #region context
    const detoolbarContext: IDetoolbarContext = {
        tools,
        indexedTools,
        configuration,
        activeSearch,
        activateSearch,
        activeTools,
        activeDrawer,
        activateTool,
        activateDrawer,
        theme,
    };
    // #endregion context


    // #region render
    return (
        <DetoolbarContext.Provider
            value={detoolbarContext}
        >
            <StyledDetoolbarContainer>
                <StyledDetoolbar
                    theme={theme}
                >
                    <Search />

                    <Tools />
                </StyledDetoolbar>
            </StyledDetoolbarContainer>
        </DetoolbarContext.Provider>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Detoolbar;
// #endregion exports

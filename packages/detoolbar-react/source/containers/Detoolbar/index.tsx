// #region imports
    // #region libraries
    import React, {
        useState,
        useEffect,
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
        DetoolbarTool,
        IDetoolbarContext,
    } from '../../data/interfaces';

    import {
        SEARCH_PLACEHOLDER,
        LOCAL_STORAGE_LIST_ID,
    } from '../../data/constants';

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
    initialList?: string[];
    searchPlaceholder?: string;
    searchHeightItems?: number;
    /**
     * Store the active tools list in local storage.
     */
    storeList?: boolean;
    storeListID?: string;
    theme?: string;

    style?: React.CSSProperties;
    className?: string;

    atListUpdate?: (list: string[]) => void;
    atSearchActive?: (value: boolean) => void;
}

const Detoolbar: React.FC<DetoolbarProperties> = (
    properties,
) => {
    // #region properties
    const {
        tools,
        initialList,
        searchPlaceholder: searchPlaceholderProperty,
        searchHeightItems,
        storeList,
        storeListID,
        theme: themeProperty,

        style,
        className,

        atListUpdate,
        atSearchActive,
    } = properties;

    const theme: Theme = typeof themeProperty === 'string' && (themes as any)[themeProperty]
        ? (themes as any)[themeProperty]
        : themes.plurid;

    const identifiedTools = tools.map(tool => {
        if (tool.id) {
            return tool;
        }

        return {
            id: tool.name,
            ...tool,
        };
    });

    const indexedTools = indexing.create(
        indexing.identify(identifiedTools, 'id') as DetoolbarTool[],
        'map',
        'id',
    );

    const searchPlaceholder = searchPlaceholderProperty || SEARCH_PLACEHOLDER;
    // #endregion properties


    // #region state
    const [
        activeSearch,
        setActiveSearch,
    ] = useState(false);
    const [
        activeTools,
        setActiveTools,
    ] = useState<string[]>(initialList || []);
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


    // #region effects
    useEffect(() => {
        if (atSearchActive) {
            atSearchActive(activeSearch);
        }
    }, [
        activeSearch,
    ]);

    useEffect(() => {
        if (atListUpdate) {
            atListUpdate(activeTools);
        }
    }, [
        activeTools,
    ]);

    useEffect(() => {
        try {
            const data = JSON.parse(
                localStorage.getItem(storeListID || LOCAL_STORAGE_LIST_ID) || '[]',
            );
            setActiveTools(data);
        } catch (error) {
            return;
        }
    }, []);

    useEffect(() => {
        if (storeList) {
            localStorage.setItem(
                storeListID || LOCAL_STORAGE_LIST_ID, JSON.stringify(activeTools),
            );
        }
    }, [
        storeList,
        activeTools,
    ]);
    // #endregion effects


    // #region context
    const detoolbarContext: IDetoolbarContext = {
        tools: identifiedTools,
        indexedTools,
        activeSearch,
        activateSearch,
        searchPlaceholder,
        searchHeightItems,
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
                    style={{
                        ...style,
                    }}
                    className={className}
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

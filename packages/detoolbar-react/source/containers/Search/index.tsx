// #region imports
    // #region libraries
    import React, {
        useContext,
        useState,
        useEffect,
    } from 'react';

    import {
        uuid,
    } from '@plurid/plurid-functions';
    // #endregion libraries


    // #region external
    import {
        DetoolbarTool,
    } from '../../data/interfaces';

    import DetoolbarContext from '../../services/context';

    import {
        PluridTextline,
    } from '../../services/styled';
    // #endregion external


    // #region internal
    import {
        StyledSearch,
        StyledFiltered,
    } from './styled';

    import SearchItem from './components/SearchItem';
    // #endregion internal
// #endregion imports



// #region module
export interface SearchProperties {
}

const Search: React.FC<SearchProperties> = (
    properties,
) => {
    // #region context
    const context = useContext(DetoolbarContext);

    if (!context) {
        return (<></>);
    }

    const {
        tools,
        indexedTools,
        configuration,
        activeSearch,
        activateSearch,
        activeTools,
        activateTool,
        theme,
    } = context;

    const {
        searchPlaceholder,
    } = configuration;
    // #endregion context


    // #region properties
    // const {
    // } = properties;
    // #endregion properties


    // #region state
    const [
        searchValue,
        setSearchValue,
    ] = useState('');
    const [
        filteredTools,
        setFilteredTools,
    ] = useState<DetoolbarTool[]>([]);
    // #endregion state


    // #region handlers
    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === 'Escape') {
            activateSearch(false);
        }
    }
    // #endregion handlers


    // #region effects
    useEffect(() => {
        const filteredTools = tools.filter(
            (tool) => {
                const name = tool.name.toLowerCase();
                const value = searchValue.toLowerCase();

                if (!value) {
                    return false;
                }

                if (name === value) {
                    return true;
                }

                if (name.startsWith(value)) {
                    return true;
                }

                if (name.endsWith(value)) {
                    return true;
                }

                return;
            }
        );

        setFilteredTools(filteredTools);
    }, [
        searchValue,
    ]);

    useEffect(() => {
        if (filteredTools.length > 0) {
            activateSearch(true);
        }
    }, [
        filteredTools,
    ]);
    // #endregion effects


    // #region render
    return (
        <StyledSearch
            theme={theme}
        >
            <PluridTextline
                placeholder={searchPlaceholder}
                text={searchValue}
                atChange={(event) => setSearchValue(event.target.value)}
                atKeyDown={handleKeyDown}
                devisible={true}
                style={{
                    height: '100%',
                    padding: '0 1rem',
                }}
            />

            {activeSearch && (
                <StyledFiltered
                    theme={theme}
                >
                    <ul>
                        {filteredTools.map((tool) => {
                            return (
                                <SearchItem
                                    key={uuid.generate()}
                                    tool={tool}
                                />
                            );
                        })}
                    </ul>
                </StyledFiltered>
            )}
        </StyledSearch>
    );
    // #endregion render
}
// #endregion module



// #region exports
export default Search;
// #endregion exports

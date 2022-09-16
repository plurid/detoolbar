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
        activeSearch,
        activateSearch,
        searchPlaceholder,
        searchHeightItems,
        theme,
    } = context;
    // #endregion context


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
        if (event.altKey && event.code === 'Space' && searchValue === '') {
            event.preventDefault();
            setFilteredTools(tools);
            return;
        }

        if (event.code === 'Escape') {
            setFilteredTools([]);
            activateSearch(false);
        }
    }
    // #endregion handlers


    // #region effects
    useEffect(() => {
        const check = (
            name: string,
            value: string,
        ) => {
            if (!value) {
                return false;
            }

            if (name === value) {
                return true;
            }

            if (name.startsWith(value)) {
                return true;
            }

            if (value.length > 2) {
                if (name.endsWith(value)) {
                    return true;
                }
            }

            return;
        }

        const filteredTools = tools.filter(
            (tool) => {
                const name = tool.name.toLowerCase();
                const value = searchValue.toLowerCase();

                const result = check(name, value);
                if (result) {
                    return true;
                }

                const split = name.split(' ');
                for (const splitName of split) {
                    const result = check(splitName, value);
                    if (result) {
                        return true;
                    }
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
    const restrictedHeightItems = typeof searchHeightItems === 'number'
        ? filteredTools.length > searchHeightItems ? searchHeightItems : undefined
        : undefined;

    return (
        <StyledSearch
            theme={theme}
        >
            <PluridTextline
                placeholder={searchPlaceholder}
                text={searchValue}
                atChange={(event) => {
                    if (event.defaultPrevented) {
                        return;
                    }
                    if (event.target.value === ' ') {
                        return;
                    }

                    setSearchValue(event.target.value);
                }}
                atKeyDown={handleKeyDown}
                devisible={true}
                style={{
                    height: '40px',
                    padding: '0 1rem',
                }}
                escapeClear={true}
            />

            {activeSearch && (
                <StyledFiltered
                    theme={theme}
                    searchHeightItems={restrictedHeightItems}
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

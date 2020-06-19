import React, {
    useContext,
    useState,
    useEffect,
} from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    PluridTextline,
} from '@plurid/plurid-ui-react';

import {
    StyledSearch,
    StyledFiltered,
} from './styled';

import SearchItem from './components/SearchItem';

import {
    DetoolbarTool,
} from '../../data/interfaces';

import DetoolbarContext from '../../services/context';



export interface SearchProperties {
}

const Search: React.FC<SearchProperties> = (
    properties,
) => {
    /** context */
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


    /** properties */
    // const {
    // } = properties;


    /** state */
    const [
        searchValue,
        setSearchValue,
    ] = useState('');
    const [
        filteredTools,
        setFilteredTools,
    ] = useState<DetoolbarTool[]>([]);


    /** handlers */
    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
    ) => {
        if (event.key === 'Escape') {
            activateSearch(false);
        }
    }


    /** effect */
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


    /** render */
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
}


export default Search;

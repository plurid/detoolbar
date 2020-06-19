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
        activeTools,
        activateTool,
        theme,
    } = context;


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


    /** effect */
    useEffect(() => {
        const filteredTools = tools.filter(
            (tool) => {
                if (tool.name.toLowerCase() === searchValue.toLowerCase()) {
                    return true;
                }

                return;
            }
        );

        setFilteredTools(filteredTools);
    }, [
        searchValue,
    ]);


    /** render */
    return (
        <StyledSearch
            theme={theme}
        >
            <PluridTextline
                placeholder="search"
                text={searchValue}
                atChange={(event) => setSearchValue(event.target.value)}
                devisible={true}
                style={{
                    height: '100%',
                    padding: '0 1rem',
                }}
            />

            {filteredTools.length > 0 && (
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

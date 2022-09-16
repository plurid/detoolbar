// #region imports
    // #region libraries
    import styled from 'styled-components';

    import type {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries
// #endregion imports



// #region module
export interface IStyledSearch {
    theme: Theme;
}

export const StyledSearch = styled.div`
    background-color: ${
        ({
            theme,
        }: IStyledSearch) => {
            return theme.backgroundColorSecondary;
        }
    };

    position: relative;
    display: flex;
    align-items: center;
    width: 10rem;
    height: 100%;
`;


export interface IStyledFiltered {
    theme: Theme;
    searchHeightItems: number | undefined;
}

export const StyledFiltered = styled.div`
    background-color: ${
        ({
            theme,
        }: IStyledFiltered) => {
            return theme.backgroundColorPrimary;
        }
    };
    box-shadow: ${
        ({
            theme,
        }: IStyledFiltered) => {
            return theme.boxShadowUmbra;
        }
    };

    position: absolute;
    top: 2.8rem;
    left: 0;
    width: 10rem;

    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        height: ${
            ({
                searchHeightItems,
            }: IStyledFiltered) => {
                if (typeof searchHeightItems === 'number') {
                    return (searchHeightItems * 2 + 1) + 'rem';
                }

                return 'initial';
            }
        };
        overflow: ${
            ({
                searchHeightItems,
            }: IStyledFiltered) => {
                if (typeof searchHeightItems === 'number') {
                    return 'scroll';
                }

                return 'initial';
            }
        }
    }

    li:last-child {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
`;
// #endregion module

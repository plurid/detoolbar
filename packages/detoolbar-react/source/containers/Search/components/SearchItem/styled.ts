// #region imports
    // #region libraries
    import styled from 'styled-components';

    import type {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries
// #endregion imports



// #region module
export interface IStyledSearchItem {
    theme: Theme;
}

export const StyledSearchItem = styled.li<IStyledSearchItem>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;

    min-height: 2rem;
    word-break: break-all;
    padding: 0 1rem;

    font-size: 0.8rem;

    :hover {
        background-color: ${
            ({ theme }: IStyledSearchItem) => theme.backgroundColorSecondary
        };
    }
`;
// #endregion module

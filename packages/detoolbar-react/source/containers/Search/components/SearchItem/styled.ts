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
    active: boolean;
}

export const StyledSearchItem = styled.li<IStyledSearchItem>`
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;

    height: 2rem;
    padding: 0 1rem;

    font-size: 0.8rem;

    background-color: ${
        ({
            theme,
            active,
        }: IStyledSearchItem) => {
            if (active) {
                return theme.backgroundColorSecondary;
            }

            return 'initial';
        }
    };

    :hover {
        background-color: ${
            ({
                theme,
            }: IStyledSearchItem) => {
                return theme.backgroundColorSecondary;
            }
        };
    }
`;
// #endregion module

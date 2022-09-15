// #region imports
    // #region libraries
    import styled from 'styled-components';

    import type {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries
// #endregion imports



// #region module
export const StyledDetoolbarContainer = styled.div`
    display: inline-block;
`;


export interface IStyledDetoolbar {
    theme: Theme;
}

export const StyledDetoolbar = styled.div`
    background-color: ${
        ({
            theme,
        }: IStyledDetoolbar) => {
            return theme.backgroundColorPrimary;
        }
    };
    box-shadow: ${
        ({
            theme,
        }: IStyledDetoolbar) => {
            return theme.boxShadowUmbra;
        }
    };
    color: ${
        ({
            theme,
        }: IStyledDetoolbar) => {
            return theme.colorPrimary;
        }
    };

    display: flex;
    align-items: center;

    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 1.25rem;

    font-size: 0.9rem;
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
// #endregion module

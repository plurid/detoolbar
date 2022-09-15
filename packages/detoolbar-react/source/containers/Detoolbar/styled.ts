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
        ({theme}: IStyledDetoolbar) => theme.backgroundColorPrimary
    };
    box-shadow: ${
        ({theme}: IStyledDetoolbar) => theme.boxShadowUmbra
    };
    color: ${
        ({theme}: IStyledDetoolbar) => theme.colorPrimary
    };

    display: flex;
    align-items: center;

    height: 2.5rem;
    padding: 0 1rem;
    border-radius: 1.25rem;

    font-size: 0.9rem;
    font-family: ${
        ({theme}: IStyledDetoolbar) => theme.fontFamilySansSerif
    };
`;
// #endregion module

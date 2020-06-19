import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



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
    top: 2.5rem;
    left: 0;
    width: 10rem;
`;

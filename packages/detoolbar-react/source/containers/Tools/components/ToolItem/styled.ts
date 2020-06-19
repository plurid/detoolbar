import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



export interface IStyledToolItem {
    theme: Theme;
    isActiveDrawer: boolean;
}

export const StyledToolItem = styled.div<IStyledToolItem>`
    background-color: ${
        ({
            theme,
            isActiveDrawer,
        }: IStyledToolItem) => {
            if (isActiveDrawer) {
                return theme.backgroundColorPrimary;
            }

            return 'initial';
        }
    };

    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 0.8rem;
`;


export const StyledToolItemButton = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 0.4rem;
`;


export interface IStyledToolDrawer {
    theme: Theme;
}

export const StyledToolDrawer = styled.div<IStyledToolDrawer>`
    background-color: ${
        ({
            theme,
        }: IStyledToolDrawer) => {
            return theme.backgroundColorPrimary;
        }
    };
    box-shadow: ${
        ({
            theme,
        }: IStyledToolDrawer) => {
            return theme.boxShadowUmbra;
        }
    };

    position: absolute;
    top: 2.8rem;
    left: 0;
    width: 10rem;
    min-height: 3rem;

    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`;

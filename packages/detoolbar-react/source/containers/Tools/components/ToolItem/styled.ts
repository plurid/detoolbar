import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



export const StyledToolItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;

    height: 100%;
    padding: 0 1rem;

    font-size: 0.8rem;
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

    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
`;

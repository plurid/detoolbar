import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



export interface IStyledSearchItem {
    theme: Theme;
}

export const StyledSearchItem = styled.li`
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;

    height: 2rem;
    padding: 0 1rem;

    font-size: 0.8rem;

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

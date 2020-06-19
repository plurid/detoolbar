import styled from 'styled-components';

import {
    Theme,
} from '@plurid/plurid-themes';



export interface IStyledSearchItem {
    theme: Theme;
    active: boolean;
}

export const StyledSearchItem = styled.li`
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

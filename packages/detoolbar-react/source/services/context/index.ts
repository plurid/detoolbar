import React from 'react';

import {
    IDetoolbarContext,
} from '../../data/interfaces';



const Context = React.createContext<IDetoolbarContext | null>(null);


export default Context;

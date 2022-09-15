// #region imports
    // #region libraries
    import React from 'react';
    // #endregion libraries


    // #region external
    import {
        IDetoolbarContext,
    } from '../../data/interfaces';
    // #endregion external
// #endregion imports



// #region module
const Context = React.createContext<IDetoolbarContext | null>(null);
// #endregion module



// #region exports
export default Context;
// #endregion exports

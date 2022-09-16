// #region imports
    // #region libraries
    import type {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries
// #endregion imports



// #region module
export interface IDetoolbarContext {
    tools: DetoolbarTool[];
    indexedTools: Map<string, DetoolbarTool>;
    activeSearch: boolean;
    activateSearch: (
        value: boolean,
    ) => void;
    searchPlaceholder: string;
    searchHeightItems?: number;
    activeTools: string[];
    activeDrawer: string;
    activateTool: (
        id: string,
        status: boolean,
    ) => void;
    activateDrawer: (
        id: string,
    ) => void;
    theme: Theme;
}


export interface DetoolbarTool {
    id?: string;
    name: string;
    aliases?: string[];
    Tool: React.FC<any>;
    Drawer?: React.FC<any>;
}


export interface DetoolbarDrawer {
    Drawer: React.FC<any>;
}
// #endregion module

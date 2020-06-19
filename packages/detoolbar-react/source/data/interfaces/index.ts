import {
    Theme,
} from '@plurid/plurid-themes';



export interface IDetoolbarContext {
    tools: DetoolbarTool[];
    indexedTools: Map<string, DetoolbarTool>;
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

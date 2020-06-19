import {
    Theme,
} from '@plurid/plurid-themes';



export interface IDetoolbarContext {
    tools: DetoolbarTool[];
    indexedTools: Map<string, DetoolbarTool>;
    activeTools: string[];
    activateTool: (
        id: string,
        status: boolean,
    ) => void;
    theme: Theme;
}


export interface DetoolbarTool {
    id?: string;
    name: string;
    aliases?: string[];
    Tool: React.FC<any>;
}

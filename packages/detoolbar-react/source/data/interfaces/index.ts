export interface IDetoolbarContext {
    tools: Map<string, DetoolbarTool>;
    activeTools: string[];
    activateTool: (
        id: string,
        status: boolean,
    ) => void;
}


export interface DetoolbarTool {
    id?: string;
    name: string;
    aliases?: string[];
    Tool: React.FC<any>;
}

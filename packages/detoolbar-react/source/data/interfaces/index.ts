export interface IDetoolbarContext {
    tools: DetoolbarTool[];
    activeTools: string[];
}


export interface DetoolbarTool {
    id?: string;
    name: string;
    aliases?: string[];
    Tool: React.FC<any>;
}

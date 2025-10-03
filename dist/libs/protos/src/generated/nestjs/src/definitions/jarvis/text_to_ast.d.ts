import { Observable } from "rxjs";
export interface ChatMessage {
    role: string;
    content: string;
}
export interface TextToAstConversation {
    messages: ChatMessage[];
}
export interface TextToAstClient {
    processText(request: TextToAstConversation): Observable<TextToAstConversation>;
}
export interface TextToAstController {
    processText(request: TextToAstConversation): Promise<TextToAstConversation> | Observable<TextToAstConversation> | TextToAstConversation;
}
export declare function TextToAstControllerMethods(): (constructor: Function) => void;
export declare const TEXT_TO_AST_SERVICE_NAME = "TextToAst";

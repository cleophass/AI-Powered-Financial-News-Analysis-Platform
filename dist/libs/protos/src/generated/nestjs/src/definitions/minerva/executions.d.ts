import { Observable } from "rxjs";
export interface ExecutionResponse {
    id: string;
    executionResult: {
        [key: string]: any;
    } | undefined;
    createdAt: string;
}
export interface CreateExecutionRequest {
    flowId: string;
    userId: string;
    executionResult: {
        [key: string]: any;
    } | undefined;
}
export interface ExecutionsClient {
    createExecution(request: CreateExecutionRequest): Observable<ExecutionResponse>;
}
export interface ExecutionsController {
    createExecution(request: CreateExecutionRequest): Promise<ExecutionResponse> | Observable<ExecutionResponse> | ExecutionResponse;
}
export declare function ExecutionsControllerMethods(): (constructor: Function) => void;
export declare const EXECUTIONS_SERVICE_NAME = "Executions";

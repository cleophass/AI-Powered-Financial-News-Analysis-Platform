import { Observable } from "rxjs";
export interface FlowResponse {
    id: string;
    userId: string;
    strategyId: string;
    graph: {
        [key: string]: any;
    } | undefined;
    ast: {
        [key: string]: any;
    } | undefined;
    status: string;
    isArchived: boolean;
    backtestsCount: number;
    executionsCount: number;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
export interface FlowsListResponse {
    flows: FlowResponse[];
}
export interface CreateDraftFlowRequest {
    userId: string;
    strategyId: string;
    graph: {
        [key: string]: any;
    } | undefined;
}
export interface PromoteDraftFlowRequest {
    strategyId: string;
    userId: string;
}
export interface ArchivedFlowsByStrategyIdRequest {
    userId: string;
    strategyId: string;
    status: string;
}
export interface FlowByStrategyIdRequest {
    userId: string;
    strategyId: string;
    status: string;
}
export interface FlowsByStrategyIdRequest {
    userId: string;
    strategyId: string;
}
export interface FlowByIdRequest {
    id: string;
    userId: string;
}
export interface ListFlowsByStrategyIdsRequest {
    ids: string[];
}
export interface FlowsClient {
    createDraftFlow(request: CreateDraftFlowRequest): Observable<FlowResponse>;
    promoteDraftFlow(request: PromoteDraftFlowRequest): Observable<FlowResponse>;
    listArchivedFlowsByStrategyId(request: ArchivedFlowsByStrategyIdRequest): Observable<FlowsListResponse>;
    getFlowByStrategyId(request: FlowByStrategyIdRequest): Observable<FlowResponse>;
    listFlowsByStrategyId(request: FlowsByStrategyIdRequest): Observable<FlowsListResponse>;
    getFlowById(request: FlowByIdRequest): Observable<FlowResponse>;
    listFlowsByStrategyIds(request: ListFlowsByStrategyIdsRequest): Observable<FlowsListResponse>;
}
export interface FlowsController {
    createDraftFlow(request: CreateDraftFlowRequest): Promise<FlowResponse> | Observable<FlowResponse> | FlowResponse;
    promoteDraftFlow(request: PromoteDraftFlowRequest): Promise<FlowResponse> | Observable<FlowResponse> | FlowResponse;
    listArchivedFlowsByStrategyId(request: ArchivedFlowsByStrategyIdRequest): Promise<FlowsListResponse> | Observable<FlowsListResponse> | FlowsListResponse;
    getFlowByStrategyId(request: FlowByStrategyIdRequest): Promise<FlowResponse> | Observable<FlowResponse> | FlowResponse;
    listFlowsByStrategyId(request: FlowsByStrategyIdRequest): Promise<FlowsListResponse> | Observable<FlowsListResponse> | FlowsListResponse;
    getFlowById(request: FlowByIdRequest): Promise<FlowResponse> | Observable<FlowResponse> | FlowResponse;
    listFlowsByStrategyIds(request: ListFlowsByStrategyIdsRequest): Promise<FlowsListResponse> | Observable<FlowsListResponse> | FlowsListResponse;
}
export declare function FlowsControllerMethods(): (constructor: Function) => void;
export declare const FLOWS_SERVICE_NAME = "Flows";

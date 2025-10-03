import { Observable } from "rxjs";
import { Empty } from "../../../google/protobuf/empty";
export interface CreateApiKeyRequest {
    userId: string;
    apiKey: string;
    apiSecret: string;
    broker: string;
    name?: string | undefined;
}
export interface DeleteApiKeyRequest {
    userId: string;
    id: string;
}
export interface GetApiKeyRequest {
    userId: string;
    broker: string;
}
export interface ListApiKeysByUserIdRequest {
    userId: string;
}
export interface Ed25519KeyResponse {
    publicKey: string;
}
export interface ApiKeyResponse {
    id: string;
    userId: string;
    apiKey: string;
    broker: string;
    createdAt: string;
    name?: string | undefined;
}
export interface ApiKeysListResponse {
    apiKeys: ApiKeyResponse[];
}
export interface GetValidBrokersRequest {
    userId: string;
}
export interface ValidBrokersResponse {
    brokers: string[];
}
export interface ApiKeysClient {
    generateEd25519KeyPair(request: Empty): Observable<Ed25519KeyResponse>;
    createApiKey(request: CreateApiKeyRequest): Observable<ApiKeyResponse>;
    deleteApiKey(request: DeleteApiKeyRequest): Observable<Empty>;
    getApiKey(request: GetApiKeyRequest): Observable<ApiKeyResponse>;
    listApiKeysByUserId(request: ListApiKeysByUserIdRequest): Observable<ApiKeysListResponse>;
    getValidBrokers(request: GetValidBrokersRequest): Observable<ValidBrokersResponse>;
}
export interface ApiKeysController {
    generateEd25519KeyPair(request: Empty): Promise<Ed25519KeyResponse> | Observable<Ed25519KeyResponse> | Ed25519KeyResponse;
    createApiKey(request: CreateApiKeyRequest): Promise<ApiKeyResponse> | Observable<ApiKeyResponse> | ApiKeyResponse;
    deleteApiKey(request: DeleteApiKeyRequest): void;
    getApiKey(request: GetApiKeyRequest): Promise<ApiKeyResponse> | Observable<ApiKeyResponse> | ApiKeyResponse;
    listApiKeysByUserId(request: ListApiKeysByUserIdRequest): Promise<ApiKeysListResponse> | Observable<ApiKeysListResponse> | ApiKeysListResponse;
    getValidBrokers(request: GetValidBrokersRequest): Promise<ValidBrokersResponse> | Observable<ValidBrokersResponse> | ValidBrokersResponse;
}
export declare function ApiKeysControllerMethods(): (constructor: Function) => void;
export declare const API_KEYS_SERVICE_NAME = "ApiKeys";

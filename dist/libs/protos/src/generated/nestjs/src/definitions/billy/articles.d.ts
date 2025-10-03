import { Observable } from "rxjs";
export interface ArticleResponse {
    id: string;
    title: string;
    text: string;
    url: string;
    updatedAt: Date | undefined;
    publicationDate: Date | undefined;
    createdAt: Date | undefined;
}
export interface CreateArticleRequest {
    title: string;
    text: string;
    url: string;
    publicationDate: Date | undefined;
}
export interface CreateArticlesListRequest {
    articles: CreateArticleRequest[];
}
export interface ArticlesListResponse {
    articles: ArticleResponse[];
}
export interface ArticlesClient {
    createArticlesList(request: CreateArticlesListRequest): Observable<ArticlesListResponse>;
}
export interface ArticlesController {
    createArticlesList(request: CreateArticlesListRequest): Promise<ArticlesListResponse> | Observable<ArticlesListResponse> | ArticlesListResponse;
}
export declare function ArticlesControllerMethods(): (constructor: Function) => void;
export declare const ARTICLES_SERVICE_NAME = "Articles";

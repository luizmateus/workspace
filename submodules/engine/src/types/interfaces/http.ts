export type IHttpRequest = {
  url: string;
  method: EHttpMethod;
  body?: any;
  headers?: { [key: string]: any };
  params?: any;
};

export type IHttpResponse<T = any> = {
  statusCode: EHttpStatusCode;
  body: T;
};

export enum EHttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

export enum EHttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

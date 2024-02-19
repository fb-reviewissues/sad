import http from "../utils/http";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const postData = (body: any) => http.post('/v1/business', body)

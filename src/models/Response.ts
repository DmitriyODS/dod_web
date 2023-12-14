export interface Response<T> {
  ok: boolean;
  description?: string;
  data?: T;
}

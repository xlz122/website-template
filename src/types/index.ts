export type ResponseType<T = unknown> = {
  code?: number;
  data: T;
  message?: string;
};

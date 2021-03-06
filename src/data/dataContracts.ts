export interface ISaveDataRequest<T> {
  data: T;
}

export interface ISaveDataResponse<T> {
  successful: boolean;
  message: string;
  data: T;
}

export interface IGetDataRequest<T> {
  size: number;
  example?: T;
}

export interface IGetDataResponse<T> {
  successful: boolean;
  message: string;
  data: T[];
}

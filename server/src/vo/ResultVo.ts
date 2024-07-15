export class ResultVo<T> {
  code: number;
  messages: string;
  data?: T;
}

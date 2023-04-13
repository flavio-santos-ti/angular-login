import { TokenModel } from "./token.model";

export interface ResponseLoginModel {
  successed: boolean;
  name: string;
  message: string;
  data: TokenModel;
}

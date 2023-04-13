export interface TokenModel
{
  hash: string;
  createdAt: Date;
  expiresAt: Date;
  usuarioId: number;
  login: string;
}

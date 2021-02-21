import { Usuario } from '../shared/interfaces/usuario.interfaces';

export interface LoginResponse {
    usuario: Usuario,
    token: string,
}
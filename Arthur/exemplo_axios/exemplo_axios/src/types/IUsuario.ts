export interface IUsuario {
    nome: string;
    senha: string;
    email: string;
    id: number;
    telefone?: string; // ? -> possivel nulo
    endereco?: string | number | undefined;
    
} 
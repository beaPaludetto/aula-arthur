export interface IProduto {
    id: number; //mongodb -> string | mysql -> number
    nome: string;
    preco: number;
    quantidade: number;
    atributos: string[]; // ["veloz", "flexivel" ]
}
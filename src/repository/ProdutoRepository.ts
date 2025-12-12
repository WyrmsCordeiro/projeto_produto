import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    procurarporId(id: number): void;
    listarProdutos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}


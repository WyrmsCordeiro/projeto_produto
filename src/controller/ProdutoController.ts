import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array <Produto> = new Array <Produto>();
    numero: number = 0;
    
    procurarporId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);
         if (buscaProduto != null) {
            buscaProduto.visualizar();
         
        } else {
            console.log("O produto com o id" + id + " não foi encontrado!");
         }

    }
    
    listarProdutos(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar();
        }
    }
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log("\nO Produto: " + produto.nome + " foi cadastrado no sistema com sucesso!");
    }
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nO produto com o ID: " + produto.id + " foi atualizado com sucesso!");

        } else {
            console.log("\nO produto com o ID" + produto.id + " não foi encontrado!");

        }
        }
    
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {

            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nO Produto com o ID: " + id + " foi apagado com sucesso!");

        } else {
            console.log("/nO Produto com o ID: " + id + " não foi encontrado!");
        }
        
    }

    public gerarId(): number {
        return ++ this.numero;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }

                return null;
    }    
}
import readlinesync = require('readline-sync');
import { Produto }  from './src/model/Produto';
import { ProdutoFisico } from './src/model/ProdutoFisico';
import { ProdutoController } from './src/controller/ProdutoController';

export function main(){

    let produtos: ProdutoController = new ProdutoController();


    let opcao, id, numero, preco: number;
    let nome, categoria, material: string;
    const tiposProdutos = ['Produto Físico'];

    while (true){

        console.log("                                                     ");
        console.log("              LOJA POWER JOGOS                       ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("           1 - Criar cadastro                        ");
        console.log("           2 - Listar todas os produtos              ");
        console.log("           3 - Buscar produto                        ")
        console.log("           4 - Atualizar produto                     ");
        console.log("           5 - Deletar produto                       ");
        console.log("           6 - Sair                                  ");
        console.log("                                                     ");
        console.log("*****************************************************");

        console.log("Digite a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6){
            console.log("\nLOJA POWER JOGOS - Toda sua infância aqui!");
            sobre();
            process.exit(0);
    }

        switch(opcao){
            
            case 1:
                 console.log("\n\nCriar cadastro\n\n");

                 id = produtos.gerarId();

                 console.log("Digite o Nome do Produto: ");
                 nome = readlinesync.question("");

                 console.log("Digite o Preco do Produto (R$): ");
                 preco = readlinesync.questionFloat("");

                 console.log("Digite a Categoria do Produto: ");
                 categoria = readlinesync.question("");

                 console.log("Digite o Material do Produto: ");
                 material = readlinesync.question("");

                 produtos.cadastrar
                 (new ProdutoFisico(id, nome, preco, categoria, material));


                 keyPress()
                 break;
                 
            case 2:
                 console.log("\n\nListar todos os produtos\n\n");
                 produtos.listarProdutos();
                 keyPress()
                 break;

            case 3:
                 console.log("\n\nBuscar produto\n\n");
                 console.log("Digite o ID do Produto: ");
                 id = readlinesync.questionInt("");
                 produtos.procurarporId(id);
                 keyPress()
                 break;     

            case 4:
                 console.log("\n\nAtualizar produto\n\n");
                 console.log("Digite o ID do Produto: ");
                 id = readlinesync.questionInt("");

                 let produto = produtos.buscarNoArray(id);

                 if (produto != null) {

                    console.log("Digite o Nome do Produto: ");
                    nome = readlinesync.question("");

                    console.log("Digite o Preco do Produto (R$): ");
                    preco = readlinesync.questionFloat("");

                    console.log("Digite a Categoria do Produto: ");
                    categoria = readlinesync.question("");

                    console.log("Digite o Material do Produto: ");
                    material = readlinesync.question("");

                    produtos.atualizar(new ProdutoFisico(id, nome, preco, categoria, material));

                 } else {
                    console.log("\n/O Produto com o ID: " + id + " não foi encontrado!");
                 }
                 keyPress()
                 break;   
                
            case 5:
                 console.log("\n\nDeletar produto\n\n");
                 console.log("\nDigite o ID do Produto: ");
                 id = readlinesync.questionInt("");
                 produtos.deletar(id);
                 keyPress()
                 break;   

            default:
                 console.log("\nTente novamente! Digite uma opção válida!\n");
                 keyPress()
                 break;     

        }
    }
}

export function sobre(): void{
    console.log("\n*******************************************************");
    console.log("Projeto desenvolvido por: Wyrms Cordeiro");
    console.log("Generation Brasil - wyrmsc@genstudents.org");
    console.log("https://github.com/WyrmsCordeiro");
    console.log("*********************************************************");

}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();

}

main();
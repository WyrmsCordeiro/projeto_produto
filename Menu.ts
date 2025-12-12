import readlinesync = require('readline-sync');
import { Produto }  from './src/model/Produto';
import { ProdutoFisico } from './src/model/ProdutoFisico';

export function main(){


    let opcao: number;


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
                 break;
                 
            case 2:
                 console.log("\n\nListar todos os produtos\n\n");
                 break;

            case 3:
                 console.log("\n\nBuscar produto\n\n");
                 break;     

            case 4:
                 console.log("\n\nAtualizar produto\n\n");
                 break;   

            case 5:
                 console.log("\n\nDeletar produto\n\n");
                 break;   

            default:
                 console.log("\nTente novamente! Digite uma opção válida!\n");
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
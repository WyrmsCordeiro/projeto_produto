export abstract class Produto {
    
    private _id: number;
    private _nome: string;
    private _preco: number;
    private _categoria: string;

    constructor(id: number, nome: string, preco: number, categoria: string) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._categoria = categoria;
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
    this._id = id;
    }    

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
    this._nome = nome;
    }    

    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
    this._preco = preco;
    }    

    public get categoria() {
        return this._categoria;
    }

    public set categoria(categoria: string) {
    this._categoria = categoria;
    }    

    public visualizar(): void {

    console.log("\n\n**************************************************");
    console.log("Dados do Produto: ");
    console.log("******************************************************");
    console.log("Id do Produto " + this._id);
    console.log("Nome do Produto: " + this._nome);
    console.log("Preço do Produto: " + this._preco.toFixed(2));
    console.log("Categoria do Produto: " + this._categoria);

    }
    }


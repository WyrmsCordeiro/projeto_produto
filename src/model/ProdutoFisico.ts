import { Produto } from './Produto'

export class ProdutoFisico extends Produto {

    private _material: string;

    constructor(id: number, nome: string, preco: number, categoria: string, material: string) {
        super(id, nome, preco, categoria);
        this._material = material;
    }

      public get material() {
        return this._material;
    }

    public set material(material: string) {
    this._material = material;
    }    

    public visualizar(): void {
        super.visualizar();
        console.log("Material do Produto: " + this._material);
    }
    }
export abstract class Ferramenta {
  constructor(private nome: string) {}

  get nomeFerramenta(): string {
    return this.nome;
  }

  abstract escrever(escritor: Escritor): void;
}

export class Caneta extends Ferramenta {
  escrever(escritor: Escritor): void {
    console.log(
      this.nomeFerramenta,
      'de ' + escritor.nomeEscritor + ' está escrevendo...',
    );
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(escritor: Escritor): void {
    console.log(
      this.nomeFerramenta,
      'de ' + escritor.nomeEscritor + ' está escrevendo...',
    );
  }
}

class Escritor {
  constructor(
    private nome: string,
    private ferramenta: Ferramenta,
  ) {}

  get nomeEscritor(): string {
    return this.nome;
  }

  usaFerramenta(): void {
    this.ferramenta.escrever(this);
  }
}

const escritor1 = new Escritor('Wellington', new Caneta('Caneta'));
const escritor2 = new Escritor(
  'Luiz',
  new MaquinaEscrever('Maquina de Escrever'),
);

escritor1.usaFerramenta();
escritor2.usaFerramenta();

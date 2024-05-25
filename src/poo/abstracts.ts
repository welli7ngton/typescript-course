export abstract class Personagem {
  protected abstract arma: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.nome} Está atacando com ${this.arma}`);
    personagem.perdeVida(this.ataque);
  }

  perdeVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  abstract bordao(): void;
}

export class Gerreira extends Personagem {
  protected arma = 'Espada';
  bordao(): void {
    console.log('G: ');
  }
}
export class Monstro extends Personagem {
  protected arma = 'Clava';

  bordao(): void {
    console.log('M: ');
  }
}

const guerreira = new Gerreira('Gerreira', 10, 100);
const monstro = new Monstro('Monstro', 7, 100);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);

monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);

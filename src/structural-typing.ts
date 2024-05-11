// Structural typing é uma tipagem que compara a estrutura de um tipo e não seu nome de definição
/*
exemplo:
type Pessoa = {
    nome: string;
    idade: number;
};

type Animal = {
    nome: string;
    idade: number;
};

Os tipos Pessoa e Animal são estruturamente compatíveis pois tem os mesmos atributos.

Em suma, o TypeScript olha para a forma dos tipos (suas propriedades e métodos) em vez de seus nomes ao verificar a compatibilidade entre eles.
*/
type VerifyUserFn = (user: User, sentValues: User) => boolean;

type User = { username: string; passwd: string };

export const verifiUser: VerifyUserFn = (user, sentValues) => {
  return (
    user.username === sentValues.username && user.passwd === sentValues.passwd
  );
};

const bdUser = { username: 'wellington_', passwd: '1234567' };

const Islogged = verifiUser(bdUser, {
  username: 'wellington',
  passwd: '1234567',
});

console.log(Islogged);

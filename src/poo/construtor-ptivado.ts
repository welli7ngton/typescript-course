// Singleton | Factory Method
export class Database {
  private static instace: Database;
  private constructor(
    private host: string,
    private login: string,
    private password: string,
  ) {
    Database.instace = this;
  }

  static createConnection(
    host: string,
    login: string,
    password: string,
  ): Database {
    if (Database.instace) return Database.instace;
    return new Database(host, login, password);
  }
}

const conn1 = Database.createConnection('127.0.0.1', '*****', '*****');
const conn2 = Database.createConnection('127.0.0.1', '*****', '*****');
const conn3 = Database.createConnection('127.0.0.1', '*****', '*****');

console.log(conn1 === conn2);
console.log(conn1 === conn3);
console.log(conn3 === conn2);

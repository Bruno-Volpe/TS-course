// Singletone - so permite que eu tenha acesso a uma instancia da classe

export class Database {
    private static database: Database

    private constructor (
        private readonly host: string,
        private readonly user: string,
        private readonly password: string
    ) {}

    static getDatabase(host: string, user: string, password: string): Database {
        if (Database.database) return Database.database
        return Database.database = new Database(host, user, password)
    }

    connect(): void {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`)
    }
}

const db1 = Database.getDatabase('localhost', 'root', '123456')
const db2 = Database.getDatabase('localhost', 'root', '123456')
db1.connect()
db2.connect()

console.log(db1 === db2)  // Retorna True

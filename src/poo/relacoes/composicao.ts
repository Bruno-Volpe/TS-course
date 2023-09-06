export class Carrro {
    private readonly motor: Motor = new Motor()

    ligar(): void {this.motor.ligar()}
    parar(): void {this.motor.parar()}
    acelerar(): void {this.motor.acelerar()}
}

export class Motor {
    ligar(): void {console.log('Motor esta ligado')}
    parar(): void {console.log('Motor esta parado')}
    acelerar(): void {console.log('Motor esta acelerando')}
}

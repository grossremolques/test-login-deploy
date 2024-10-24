export class credencialsError extends Error {
    constructor(message) {
        super(message);
        this.name = "Email o contraseña incorrectos.";
    }
}

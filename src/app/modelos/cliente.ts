export class Cliente {
    constructor(
        public priNombre: string,
        public segNombre: string,
        public priApellido: string,
        public segApellido: string,
        public docIdentidad: string,
        public telefono: string,
        public email: string,
        public direccion: string
    ) { }
}
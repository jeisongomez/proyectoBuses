export class Empleado {
    constructor(
        public Login_idLogin: number,
        public Roles_idRoles: number,
        public ubicacion: string,
        public Nombre: string,
        public Apellido: string,
        public Telefono: string,
        public Direccion: string,
        public Cargo: string,
        public Email: string
    ) { }
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Empleado } from '../../modelos/empleado';
import { Roles } from '../../modelos/roles';
import { NewUser } from '../../modelos/newUser';
import { RolesService } from '../../servicios/roles.service';
import { EmpleadosService } from '../../servicios/empleados.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css'],
  providers: [RolesService, EmpleadosService]
})
export class CrearEmpleadoComponent implements OnInit {

  public empleado: Empleado;
  public roles: Roles;
  public newUser: NewUser;
  public respuesta;
  public respuesta2;
  public respuesta3;
  public respuesta4;
  public idRolMayor;
  public respuesta5;
  public respuesta6;
  public respuesta7;
  public respuesta8;
  public idLoginMayor;
  public respuesta9;
  public respuesta10;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _rolesService: RolesService,
    private _empleadosService: EmpleadosService
  ) {
    this.empleado = new Empleado(null, null, '', '', '', '', '', '', '', );
    this.roles = new Roles('', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
    this.newUser = new NewUser('', '');
  }

  ngOnInit() {
  }

  convertRoles() {
    if (this.roles.CrearFactura != '') {
      this.roles.CrearFactura = '1';
    }
    if (this.roles.ConsultarFactura != '') {
      this.roles.ConsultarFactura = '1';
    }
    if (this.roles.CrearEmpleado != '') {
      this.roles.CrearEmpleado = '1';
    }
    if (this.roles.EditarEmpleado != '') {
      this.roles.EditarEmpleado = '1';
    }
    if (this.roles.BorrarEmpleado != '') {
      this.roles.BorrarEmpleado = '1';
    }
    if (this.roles.ConsultarEmpleado != '') {
      this.roles.ConsultarEmpleado = '1';
    }
    if (this.roles.CrearRutas != '') {
      this.roles.CrearRutas = '1';
    }
    if (this.roles.EditarRutas != '') {
      this.roles.EditarRutas = '1';
    }
    if (this.roles.ConsultarRutas != '') {
      this.roles.ConsultarRutas = '1';
    }
    if (this.roles.CrearCliente != '') {
      this.roles.CrearCliente = '1';
    }
    if (this.roles.EditarCliente != '') {
      this.roles.EditarCliente = '1';
    }
    if (this.roles.ConsultarCliente != '') {
      this.roles.ConsultarCliente = '1';
    }
    if (this.roles.CrearBuses != '') {
      this.roles.CrearBuses = '1';
    }
    if (this.roles.EditarBuses != '') {
      this.roles.EditarBuses = '1';
    }
    if (this.roles.ConsultarBuses != '') {
      this.roles.ConsultarBuses = '1';
    }
  }

  onSubmit() {
    this.convertRoles();
    //console.log(this.empleado);
    //console.log(this.roles);
    //console.log(this.newUser);
    this._rolesService.addRoles(this.roles).subscribe(
      response => {
        this.respuesta = response;
        //console.log(this.respuesta);
        this.respuesta2 = JSON.parse(this.respuesta._body);
        if (this.respuesta2.code == 404) {
          alert('algo salio mal al crear roles');
        } else {
          this._rolesService.obtenerIdRoles().subscribe(
            response1 => {
              this.respuesta3 = response1;
              console.log(this.respuesta3);
              this.respuesta4 = JSON.parse(this.respuesta3._body);
              if (this.respuesta4.code == 200) {
                this.idRolMayor = parseInt(this.respuesta4.data[0].idRoles);
                //console.log(this.idRolMayor);
                this._empleadosService.addlogin(this.newUser).subscribe(
                  response2 => {
                    this.respuesta5 = response2;
                    //console.log(this.respuesta5);
                    this.respuesta6 = JSON.parse(this.respuesta5._body);
                    if (this.respuesta6.code == 400) {
                      alert('algo salio mal a introducir el login');
                    } else {
                      this._empleadosService.obtenerIdLogin().subscribe(
                        response3 => {
                          this.respuesta7 = response3;
                          //console.log(this.respuesta7);
                          this.respuesta8 = JSON.parse(this.respuesta7._body);
                          if (this.respuesta8.code == 200) {
                            this.idLoginMayor = parseInt(this.respuesta8.data[0].idLogin);
                            console.log(this.idLoginMayor);
                            this.empleado.Login_idLogin = this.idLoginMayor;
                            this.empleado.Roles_idRoles = this.idRolMayor;
                            this._empleadosService.addEmpleado(this.empleado).subscribe(
                              response4 => {
                                this.respuesta9 = response4;
                                //console.log(this.respuesta9);
                                this.respuesta10 = JSON.parse(this.respuesta9._body);
                                if(this.respuesta10.code == 400){
                                  alert('lo sentimos el cliente no pudo ser creado');
                                }else{
                                  alert('El Empleado se creo correctamente');
                                  this._router.navigate(['home']);
                                }
                              },
                              error4 => {
                                console.log(<any>error4);
                                alert(<any>error4);
                              }
                            )
                          } else {
                            alert('algo salio mal al obtener el id login');
                          }
                        },
                        error3 => {
                          console.log(<any>error3);
                          alert(<any>error3);
                        }
                      )
                    }
                  },
                  error2 => {
                    console.log(<any>error2);
                    alert(<any>error2);
                  }
                )
              } else {
                alert('algo salio mal al obtener el rol mayor');
              }
            },
            error1 => {
              console.log(<any>error1);
              alert(<any>error1);
            }
          )
        }
      },
      error => {
        console.log(<any>error);
        alert(<any>error);
      }
    )
  }
}

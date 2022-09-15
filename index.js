var Alumno = /** @class */ (function () {
    function Alumno(paramlegajo, paramNombre, paramNota) {
        this.legajo = paramlegajo;
        this.nombre = paramNombre;
        this.setNota(paramNota);
    }
    // Funciones     
    Alumno.prototype.getLegajo = function () {
        return this.legajo;
    };
    Alumno.prototype.setLegajo = function (paramLegajo) {
        this.legajo = paramLegajo;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNota = function (paramNota) {
        this.nota = paramNota;
        this.setEstado();
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.setEstado = function () {
        if (this.nota > 5) {
            this.estado = "Aprobado";
        }
        else {
            this.estado = "Desaprobado";
        }
    };
    Alumno.prototype.getEstado = function () {
        return this.estado;
    };
    return Alumno;
}());
var Profesor = /** @class */ (function () {
    function Profesor(paramlegajo, paramNombre) {
        this.legajo = paramlegajo;
        this.nombre = paramNombre;
    }
    // Funciones     
    Profesor.prototype.getLegajo = function () {
        return this.legajo;
    };
    Profesor.prototype.setLegajo = function (paramLegajo) {
        this.legajo = paramLegajo;
    };
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    Profesor.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Profesor.prototype.setAlumnos = function (paramAlumnos) {
        this.alumnos = paramAlumnos;
    };
    return Profesor;
}());
var Escuela = /** @class */ (function () {
    function Escuela(paramNombre, paramAlumnos, paramProfesores) {
        this.nombre = paramNombre;
        this.alumnos = paramAlumnos;
        this.profesores = paramProfesores;
    }
    // Funciones     
    Escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    Escuela.prototype.setNombre = function (paramNombre) {
        this.nombre = paramNombre;
    };
    Escuela.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Escuela.prototype.setAlumnos = function (paramAlumnos) {
        this.alumnos = paramAlumnos;
    };
    Escuela.prototype.getProfesores = function () {
        return this.profesores;
    };
    Escuela.prototype.setProfesores = function (paramProfesores) {
        this.profesores = paramProfesores;
    };
    return Escuela;
}());
var alumno1 = new Alumno("0001", "German", 7);
var alumno2 = new Alumno("0002", "Juan", 8);
var profesor1 = new Profesor("0001", "Prof. Juan");
var Escuela1 = new Escuela("Don Bosco", [alumno1, alumno2], [profesor1]);
profesor1.setAlumnos(Escuela1.getAlumnos());
console.log("Escuela: " + Escuela1);
console.log("Profesor: " + profesor1);

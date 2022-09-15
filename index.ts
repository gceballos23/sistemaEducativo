class Alumno{

    //Variables o atributos

    private legajo : string;
    private nombre : string;
    private nota : number;
    private estado: string;

    constructor(paramlegajo:string, paramNombre:string, paramNota: number ){
        this.legajo = paramlegajo ;
        this.nombre = paramNombre;
        this.setNota(paramNota);

    }


    // Funciones     
    public getLegajo():string{
        return this.legajo;
    }

    public setLegajo(paramLegajo:string):void{
        this.legajo = paramLegajo;
    }

    public getNombre():string{
        return this.nombre;
    }

    public setNota(paramNota : number):void{
        this.nota = paramNota;
        this.setEstado();
    }

    public getNota():number{
        return this.nota;
    }

    private setEstado():void{
        if (this.nota > 5) {
            this.estado = "Aprobado"
        } else {
            this.estado = "Desaprobado"
        }        
    }

    public getEstado():string{
        return this.estado;
    }

}

class Profesor{

    //Variables o atributos

    private legajo : string;
    private nombre : string;
    private estado: string;
    private alumnos : Alumno[];

    constructor(paramlegajo:string, paramNombre:string ){
        this.legajo = paramlegajo ;
        this.nombre = paramNombre;
    }


    // Funciones     
    public getLegajo():string{
        return this.legajo;
    }

    public setLegajo(paramLegajo:string):void{
        this.legajo = paramLegajo;
    }

    public getNombre():string{
        return this.nombre;
    }

    public getAlumnos():Alumno[]{
        return this.alumnos;
    }

    public setAlumnos(paramAlumnos : Alumno[]):void{
        this.alumnos = paramAlumnos;
    }

}

class Escuela{

    //Variables o atributos

    private nombre : string;
    private alumnos : Alumno[];
    private profesores : Profesor[];

    constructor(paramNombre:string, paramAlumnos:Alumno[],paramProfesores:Profesor[] ){

        this.nombre = paramNombre;
        this.alumnos = paramAlumnos;
        this.profesores= paramProfesores;
    }


    // Funciones     
    public getNombre():string{
        return this.nombre;
    }

    public setNombre(paramNombre:string):void{
        this.nombre = paramNombre;
    }

    public getAlumnos():Alumno[]{
        return this.alumnos;
    }

    public setAlumnos(paramAlumnos : Alumno[]):void{
        this.alumnos = paramAlumnos;
    }

    public getProfesores():Profesor[]{
        return this.profesores;
    }

    public setProfesores(paramProfesores : Profesor[]):void{
        this.profesores = paramProfesores;
    }

}

let alumno1 = new Alumno("0001","German",7);
let alumno2 = new Alumno("0002","Juan",8);
let profesor1 = new Profesor("0001","Prof. Juan");
let Escuela1 = new Escuela("Don Bosco",[alumno1,alumno2],[profesor1]);
profesor1.setAlumnos(Escuela1.getAlumnos());


console.log(Escuela1);
console.log(profesor1);





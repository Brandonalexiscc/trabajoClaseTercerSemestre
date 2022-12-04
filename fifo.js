class Proceso{
    constructor(ciclos){
        this.ciclos = ciclos;
        this.sig = null;
    }
}

class Procesador{
    constructor(){
        this.primero = null;
    }

    agregar(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
            this.primero.sig = this.primero;
        }else{
            let aux = this.primero;
            while(aux.sig != this.primero){
                aux = aux.sig;
            }
            aux.sig = nuevo;
            nuevo.sig = this.primero;
        }
    }

    actual(){
        return this.primero;
    }

    extraer(){
        if(this.primero == null){
            return null;
        }else if(this.primero.sig == this.primero){
            this.primero = null;
        }else{
            let aux = this.primero;
            this.primero = aux.sig;
            aux.sig = null;
        }
    }

    listar(){
        let aux = this.primero;
        while(aux.sig != this.primero){
            console.log(aux.ciclos);
            aux = aux.sig;
        }
        console.log(aux.ciclos);
    }
}

let procesador = new Procesador();
let ciclosVacios = 0;
let procesosTerminados = 0;
let procesosPendientes = 0;
let ciclosPendientes = 0;
for(let i = 0; i < 300; i++){
    let probabilidad = Math.floor(Math.random() * 100 + 1);
    if(probabilidad < 35){
        let ciclos = Math.floor(Math.random() * 11 + 4);
        let nuevo = new Proceso(ciclos);
        procesador.agregar(nuevo);
    }
    if(procesador.actual() == null){
        ciclosVacios++;
    }else{
        procesador.actual().ciclos--;
        if(procesador.actual().ciclos == 0){
            procesosTerminados++;
            procesador.extraer();
        }
    }
}
let aux = procesador.actual();
while(aux.sig != procesador.actual()){
    procesosPendientes++;
    ciclosPendientes += aux.ciclos;
    aux = aux.sig;
}
procesosPendientes++;
ciclosPendientes += aux.ciclos;
console.log("Ciclos vacios: " + ciclosVacios);
console.log("Procesos terminados: " + procesosTerminados);
console.log("Procesos pendientes: " + procesosPendientes);
console.log("Ciclos pendientes: " + ciclosPendientes);

procesador.agregar(7);
procesador.agregar(8);
procesador.agregar(9);
console.log(procesador.actual().ciclos);
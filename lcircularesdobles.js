class Nodo{
    constructor(dato){
        this.dato = dato;
        this.sig = null;
        this.ant = null;
    }
}

class ListaDobleCircular{
    constructor(){
      this.primero=null;
      this.ultimo=null;
    }

    //agregar nuevo en listas circulares dobles
    agregar(nuevo){
      if (this.primero === null){
        this.primero = nuevo;
        this.ultimo = nuevo;
        this.primero.sig = this.ultimo;
        this.primero.ant = this.ultimo;
        this.ultimo.sig = this.primero;
        this.ultimo.ant = this.primero;
      }else{
        this.ultimo.sig = nuevo;
        nuevo.ant = this.ultimo;
        nuevo.sig = this.primero;
        this.primero.ant = nuevo;
        this.ultimo = nuevo;
      }
    }
      
    
    //extraer primero con listas circulares dobles
    extraerInicio(){
      if (this.primero === null){
        return null;
      }else{
        let aux = this.primero;
        this.primero = this.primero.sig;
        this.primero.ant = aux.ant;
        aux.ant.sig = this.primero;
        return aux;
    }
  }
}
 
let lista=new ListaDobleCircular();
let n1=new Nodo(3);
lista.agregar(n1);
n1=new Nodo(4);
lista.agregar(n1);
n1=new Nodo(5);
lista.agregar(n1);
n1=new Nodo(6);
lista.agregar(n1);
n1=new Nodo(7);
lista.agregar(n1);
lista.extraerInicio(3);
console.table(lista);


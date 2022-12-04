class Nodo{
    constructor(numero){
      this.numero=numero;
      this.sig=null;
      this.ant=null;
    }
  }
  class ListaDoble{
    constructor(){
      this.primero=null;
      this.ultimo=null;
    }
    agregar(nuevo){
      if (!this.primero){
        this.primero=nuevo;
        this.ultimo=nuevo;
      }else{
        this.ultimo.sig=nuevo;
        nuevo.ant=this.ultimo;
        this.ultimo=nuevo;
      }

    }



    listar(){
      let res="";
      let temp=this.primero;
      while (temp){
        res+= temp.numero + "  ";
        temp=temp.sig;
      }
      return res;
    }

  invertir(){
    let temp=this.primero;
    while (temp){
      let aux=temp.sig;
      temp.sig=temp.ant;
      temp.ant=aux;
      temp=temp.ant;
    }
    let aux=this.primero;
    this.primero=this.ultimo;
    this.ultimo=aux;
        
  }    
}
 
  let lista=new ListaDoble();
  let n1=new Nodo(3);
  lista.agregar(n1);
  n1=new Nodo(4);
  lista.agregar(n1);
  n1=new Nodo(5);
  lista.agregar(n1);
  n1=new Nodo(6);
  lista.agregar(n1);
  lista.listar();
  lista.invertir();
  console.log(lista.listar());
  
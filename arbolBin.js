/*
Definir en la calase nodo que reciba solo un numero y este lista para 
usarse en un arbol binario.

Definir la clase arbolBinario con su constructor
iniciar el metodo agregar(nuevo) que revie la raiz y la asigne 
si hay raiz que mande llamar una funcion recursivo con el nuevo y la raiz
*/

class Nodo{
    constructor(numero){
        this.numero = numero;
        this.hijoIzq = null;
        this.hijoDer = null;
    }
}

class ArbolBinario{
    constructor(){
        this.raiz = null;
    }

    agregar(nuevo){
        if(this.raiz == null){
            this.raiz = nuevo;
        }else{
            this.agregar_Rec(nuevo, this.raiz);
        }
    }

    agregar_Rec(nuevo, nodox){
        if(nuevo.numero < nodox.numero)
            if(nodox.hijoIzq == null){
                nodox.hijoIzq == nuevo;
            }else{
                this.agregar_Rec(nuevo, nodox.hijoIzq)
            } else if (nodox.hijoDer == null){
                nodox.hijoDer = nuevo;
            }
    }

    preOrder(){
        if(this.raiz == null){
            console.log(".");
        }else{
            this._preOrder(this.raiz);
        }
    }

    _preOrder(nodox){
        console.log(nodox.numero);
        if (nodox.hijoIzq!= null) {
            this._preOrder(nodox.hijoIzq)
            
        }
        if (nodox.hijoDer!= null) {
            this._preOrder(nodox.hijoDer)
        }
    }

    postOrder(){
        if(this.raiz == null){
            console.log(".");
        }else{
            this._postOrder(this.raiz);
        }
    }

    _postOrder(nodox){
        if (nodox.hijoIzq!= null) {
            this._postOrder(nodox.hijoIzq)
            
        }
        if (nodox.hijoDer!= null) {
            this._postOrder(nodox.hijoDer)
        }
        console.log(nodox.numero);
    }
}

let arbolito = new ArbolBinario();
arbolito.agregar(new Nodo(8));
arbolito.agregar(new Nodo(9));
arbolito.agregar(new Nodo(7));
console.log(arbolito);
arbolito.preOrder();
console.log(arbolito);
arbolito.postOrder();
console.log(arbolito.preorder);
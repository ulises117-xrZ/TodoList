const arreglo = [1,2,3,4,5,6,7];

let arregloDeObjetos = [
    {producto: "mango", precio: 40, estado:"chuco"},
    {producto: "manzana", precio: 21, estado:"mas o menos"},
    {producto: "papaya", precio:46, estado:"como su cara"},
    {producto: "sandia", precio: 50, estado:"rikolino"},
    {producto: "pera", precio: 5, estado:"como su tio"}
]

console.table(arregloDeObjetos);
//forEach
arreglo.forEach(mero=> {if(mero == 1){
    console.log(mero)}
})

//includes para objetos planos
let resultado = arreglo.includes(1);
if(resultado){
    console.log(resultado)
} else{
    console.log("el numero no existe")
}

//Some ideal para arreglos con objetos

resultado = arregloDeObjetos.some(producto=> producto.producto == "mango");
console.log(resultado)



//Reduce toma todos los numeros y te entrega el resultaddo

resultado = arregloDeObjetos.reduce((total,product)=> total + product.precio, 0);
console.log(resultado);

let cosas = arregloDeObjetos.some(nombreProducto=> nombreProducto.producto )

arregloDeObjetos.forEach(productos=> console.log(`Producto: ${productos.producto}
    Precio: ${productos.precio} 
    estado ${productos.estado}`));
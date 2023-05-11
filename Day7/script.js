//parametresiz fonksiyon

function greating(){
    let message='hello world';
    console.log(message)
}
greating();


//parametrli  fonksiyon

function multiply(param1 ,param2 ){
    return  param1*param2 
}
let total= multiply(8,2)

console.log("Toplam ", total)

function sumArray(array){
    sum=0;
    for(let i=0; i< array.lenght ;i++){
        sum += array[i]
    }
    return sum;

}
dizi=[2,4,6,8,10]

sumArray(dizi);

const sayHello =function(name){

    return`HELLOOO ${name}`;
}
console.log(sayHello("Mine"))
;// kendi kendini çağıran fonksiyonlar için 

(function(){
    console.log("helllöööğğğğ")
})();

   /* normal fonksiyon örneği

function name (){

}

/* arrow function örneği

const name=()=>{

}
eğer tek satırlık bir return işlemi yapmamız bize yetiyorsa süslü parantezleri koymadan da ilerleyebiliriz 






*/
 
/*REst Operatörü*/

const toplama =(num1,...numbers)=>{
    console.log(num1)
    console.log(numbers)
}

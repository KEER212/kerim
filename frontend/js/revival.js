//function kod(a, b){
//b = 10
 //   if(a > b){
 //       console.log('Констата больше 10')
//    }else{
 //       console.log('Констата менше 10');
 //   }

//}
//kod(9)
//function alert(){
//    console.log('Привет,мир');
//}
//alert()
//function js(){
//    console.log('JavaSkript');
//}
//js()

//function text(){
 //   let text = 'lorem'
 //   if(text =='lorem'){
//console.log('увас ощибка в тексте');
 //   }else{
//        console.log('содержимое переменной:'+ text);
//}
//}
//text()
let neme ='Kerim'  //string
const age = 17 //number
let bj = 15
if(bj > age){
console.log('Доступ запрещен');
}else{
    console.log(`Привет ${neme}`);
}
function viewMoney() {
    console.log('вот вам 10$');
}
viewMoney()
function getMoney(a){
    console.log(`вот вам ${a}$`);
    return(`вот вам ${a} $`)
}getMoney(212)
function kub(a){
    console.log(a*a);
}kub(121)
function numer(a, b, c,){
    if(a > b && a > c){
        console.log(a);
    }else if(b > a && b > c){
        console.log(b);
    }else if(c > a && c > b){
        console.log(c);
    }
}numer(11, 454, 999,)
function form(a, b, c){
    console.log(b ** 2) - 4 * (a * c);
}form(4, 2, 2)
  let sum = (num, num2) =>{
    if(num % 2 == 0 && num2 % 2 == 0 ){
        return num2 + num
    } else if(num % 2 !== 0 && num2 % 2 !== 0 ){
        return num2 + num
    }else{ 
        return num % 2 !== 0 ? num : num2
    }
  }

 // console.log(sum(3, 3));
let man = {
    neme : 'kerim Ars',
    boz : '17' ,
    rost : '175cm',
    emil : 'rerim095@gmail.com' ,
    pasword : '313233',
    money : '100000RUB' ,
    ed : function () {
        if(man.pasword == ker ){
            console.log(`Добро пожаловать ${man.neme}`);
        }else{
            console.log(`Указанный пороль ${ker} неверен.Попробуйте ещё раз .`);
        }
    },
    /////////////////////
    address: {
    republik : 'Чеченская республика',
    city : 'Город Грозный',
    street:'Горная ул.33',
    },
}
let ker = '313233';
 function ed () {
    if(man.pasword == ker ){
        console.log(`Добро пожаловать ${man.neme}`);
    }else{
        console.log(`Указанный пороль ${ker} неверен.Попробуйте ещё раз .`);
    }
}
ed()
console.log(man);

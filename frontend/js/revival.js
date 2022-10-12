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
//const age = 17 //number
//let bj = 15
//if(bj > age){
//    //let neme ='Kerim'  //string
//console.log('Доступ запрещен');
//}else{
//    console.log(`Привет ${neme}`);
//}
//function viewMoney() {
//    console.log('вот вам 10$');
//}
//viewMoney()
//function getMoney(a){
//    console.log(`вот вам ${a}$`);
//    return(`вот вам ${a} $`)
//}getMoney(212)
//function kub(a){
//    console.log(a*a);
//}kub(121)
//function numer(a, b, c,){
//    if(a > b && a > c){
//        console.log(a);
//    }else if(b > a && b > c){
//        console.log(b);
//    }else if(c > a && c > b){
//        console.log(c);
//    }
//}numer(11, 454, 999,)
//function form(a, b, c){
//    console.log(b ** 2) - 4 * (a * c);
//}form(4, 2, 2)
//  let sum = (num, num2) =>{
//    if(num % 2 == 0 && num2 % 2 == 0 ){
//        return num2 + num
//    } else if(num % 2 !== 0 && num2 % 2 !== 0 ){
//        return num2 + num
//    }else{ 
//        return num % 2 !== 0 ? num : num2
//    }
//  }
//
// // console.log(sum(3, 3));
////let man = {
// //   neme : 'kerim Ars',
// //   boz : '17' ,
 //   rost : '175cm',
 //   emil : 'rerim095@gmail.com' ,
 //   pasword : '313233',
 //   money : '100000RUB' ,
 //   ed : function () {
 //       if(man.pasword == ker ){
   //         console.log(`Добро пожаловать ${man.neme}`);
 //       }else{
 //           console.log(`Указанный пороль ${ker} неверен.Попробуйте ещё раз .`);
 //       }
  //  },
  //  /////////////////////
 //   address: {
  //  republik : 'Чеченская республика',
  //  city : 'Город Грозный',
  //  street:'Горная ул.33',
  //  },
//}
//let ker = '313233';
// function ed () {
 //   if(man.pasword == ker ){
 //       console.log(`Добро пожаловать ${man.neme}`);
 //   }else{
 //       console.log(`Указанный пороль ${ker} неверен.Попробуйте ещё раз .`);
  //  }
//}
//ed()
//console.log(man);

//let a = ['lorem', 123, true, 'ipsum'];
//console.log(a.length);
//console.log(a[a.length - 1]);
//console.log(a[0]);
//a.unshift('212121')
//a.unshift(122)
//a.unshift(4)
//a.shift()
//a.pop()
//a.pop()
//console.log(a);
/////////////////////////////////////////////::::
//let em = [];
//em.unshift('kerim')
//em.unshift(212)
//em.unshift(true)
//em.unshift('lorem')
//em.unshift(2005)
//console.log(em);
///////////////////////////////////////::::::::::
//let number =[1, 3, 5, 7, 9];
//em.splice(0, 5, '2','6','10','14','18')
//em.splice(1, 3, '4','4','4')
//console.log(em);
//
//
let  a =[10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66];
a.forEach(function  (item, key, arr) {
  if(item % 2 != 0){
    console.log(0.42, 3, 1125);
  }
})
 

let b =["lorem ipsum", "javaskript", "php", "css", "react", "git", "html", "mysg"]
b.forEach(function(item, key){
  if(item.length < 4){
console.log( "php", "css", "git")
  }
})
let c =[1, -3, , 5, 6, -7, 8, 9, -11]
let c2 = c.filter(function(item, key){
    return(item < 0)
})
let  d =[10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66];
let d2 = d.filter(function(item, key){
  return(item % 3  )
})
let e =["lorem ipsum", "javaskript", "php", "css", "react", "git", "html", "mysg"]
let e2=e.filter(function(item, key){
    return(item.length > 3)
})


let arrr =[5, 6, 7, 8, 9];
let arr2=arrr.map(function(item, key) {
return item ** 2 
})
/////////////////////////:::::::::::::::::::/:::::::
let arr =[{a:10, b:5},{a:20, b:22},{a:131, b:55}];
let ar2=arr.map(function(item, key) {
})
ar2.forEach(function(item, key) {
  console.log(a + b);
})
//не сделад
//////////////////////////////////:::::::::::::::::::::::::

let kerim =[-13, 0, 12, 1662, -0.32, -102, -2]
let kerim2 =kerim.filter(function(item, key){
  return item < 0
})
let kerim3=kerim2.reduce(function(sum, item, key){
  return sum + item
})


console.log(c2)
console.log(d2)
console.log(e2)
console.log(arr2)
console.log(ar2)
console.log(kerim3)

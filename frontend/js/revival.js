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

//em.splice(1, 3, '4','4','4')
//console.log(number[1] + 1);
//
//
//a.forEach(function  (item, key, arr) {
//  let  a =[10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66];
//  if(item % 2 != 0){
//    console.log(0.42, 3, 1125);
//  }
//})
// 
//
//let b =["lorem ipsum", "javaskript", "php", "css", "react", "git", "html", "mysg"]
//b.forEach(function(item, key){
//  if(item.length < 4){
//console.log( "php", "css", "git")
//  }
//})
//let c =[1, -3, , 5, 6, -7, 8, 9, -11]
//let c2 = c.filter(function(item, key){
//    return(item < 0)
//})
//let  d =[10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66];
//let d2 = d.filter(function(item, key){
//  return(item % 3  )
//})
//let e =["lorem ipsum", "javaskript", "php", "css", "react", "git", "html", "mysg"]
//let e2=e.filter(function(item, key){
//    return(item.length > 3)
//})
//
//
//let arr =[5, 6, 7, 8, 9];
//let arr2=arr.map(function(item, key) {
//return item ** 2 
//})
//let ars =[{a:10, b:5},{a:20, b:22},{a:131, b:55}];
//let ars2=ars.map(function(item, key) {
//  return item.a + item.b;
//})
//
//
//let kerim =[-13, 0, 12, 1662, -0.32, -102, -2]
//let kerim2 =kerim.filter(function(item, key){
//  return item < 0
//})
//let kerim3=kerim2.reduce(function(sum, item, key){
//  return sum + item
//})
//let expo =[{x:10, y:"lorem"},{x:-17, y:"lorem"},{x:156, y:"lorem"}];
//let expo2 = expo.reduce(function(sum, item){
//  return sum + item.x
//},0)
//
//console.log(c2)
//console.log(d2)
//console.log(e2)
//console.log(arr2)
//console.log(ars2)
//console.log(kerim3)
//console.log(expo2)
//let arr_1 = [101, 202, 303, 404, 505]
//
// let arr_2= [...arr_1,606, 707, 808, 909]
// let superArr = [...arr_2]
//let min = Math.min.apply(null,superArr)
////////////////////////////////////////////////
// //let obj = {width:300, hedth:500}
// //let obj = {width:300, hedth:500}
//// let obj__2 = {...obj}
//// obj__2.forEach(function(item, key) {
////  return item + item
////})
//  function a(...a) {
//    a.forEach(item =>{
//      console.log(item + item);
//    })
//  }
//  let num = '@';
//  do{
//     console.log(`4ucno:${num}`);
// num++;
//  }
//while( num < 3 )
//let i = 0
//while( i < 11 ){
//  console.log(i);
//  i++;
//}
//  
//
//a(1122,122333,1231231)
//console.log(superArr)
//console.log(min);
<ol id="ol"></ol>

    let ol = document.getElementById('ol')
    let li = document.createElement('li')
    let la = document.createElement('li')
    let lu = document.createElement('li')
    let ll = document.createElement('li')
    console.log(li);
    li.append('iii')
    la.prepend('lorem')
    lu.append('lorem')
    ll.append('lorem')
    ol.append(li)
    ol.append(la)
    ol.append(lu)
    ol.append(ll)
// var obj = {
//     fname: "hammad",
//     lname: "Wear",
//     email: 'rzaid3616@gmail.com',
//     contact: 1234567890,
//     age: 22,
//     fun1: function getData(){
//         return 25000
//     },
//     somedata: [
//         {id: 1, name: "hammad", email: "abc@gmail.com",age: 12},
//         {id: 2, name: "farhan", email: "xyz@gmail.com",age: 20},
//         {id: 3, name: "Some Data", email: "ali@gmail.com",age: 22},
//     ],
//     fun2: function someData(){
//         return this.fname + " " + this.lname
//     }
// }

// console.log(obj)

// function foo(){
//     var b = 'hammad';
//     if(b == 'hammad'){
//         document.write("Yes Come Hammad");
//     } else{
//         document.write("Sorry Only 1 Employe is Allowed");
//     }
// }

// var c = document.getElementById('demo').querySelector('lol')
// console.log(c)
// `tsks///

// const word = "Learn";
// let newWord = [];
// for(i=1; i<word.length; i++){
// letter = word[i];
// newWord.push(letter);
// }
// console.log(newWord.join(""));


// Dom Learning

// document.getElementById('header').click = abc;
// document.getElementById('header').addEventListener('click',function(){
//     document.getElementById('header').style.border = '2px solid red';
//     document.getElementById('header').style.borderRadius = '15px' 
// })

// document.getElementById('header').addEventListener('click',xyz)

// function xyz(){
// document.getElementById('header').removeEventListener('click',abc)
// }
// function abc(){
//     document.getElementById('header').style.background = 'yellow';
//     document.getElementById('header').style.color = 'green';
//     document.getElementById('header').style.padding = '20px';
// }


//  document.getElementById('one').childNodes[5].style.color = '#fff'
// var data = document.createElement('h1');
// var b  = document.createTextNode('lol');
// var c = document.createComment("Iam a mango")

// console.log(data);
// console.log(b);
// console.log(c);

// Introduction BOM 

// var myWindow;

// function redirect(){
//     myWindow = window.open("https://www.google.com", "", "width=500px, height=500px")
// }

// redirect()

// function resize(){
//     myWindow.resizeBy(400,400)
// }
// resize()

// function scroll(){
//     window.scrollBy(0,20)
// }

// scroll()

// var data = [
//     {name: "hammad", age: 21, email: 'abc@gmail.com'},
//     {name: "zaid", age: null},
//     {name: "farhan", age: 23, email: 'xyz@gmail.com'},
//     {name: 'Ali', age: undefined},
//     {name: null, age: undefined}    
// ]

// var result = data.filter((elem)=>{
//  return elem.age != undefined
// })

// console.log(result);


const Search_input = () =>{
    let filter = document.getElementById('data_input').value.toUpperCase()
    let myTable = document.getElementById('myTable');
    var tr = myTable.getElementsByTagName('tr');    
    
    for(var i=0; i<tr.length; i++){
    var td = tr[i].getElementsByTagName('td')[0]
     if(td){
         let textValue = td.textContent || td.innerHTML;
         if(textValue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = ''
         }else{
             tr[i].style.display = "none";                  
         }
     }
    }
}
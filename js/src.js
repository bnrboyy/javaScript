/* - Const , Let , Var  */
window.onload = () => {
    let a = 0
    var b = 0
    const c = 0

    if(true) {
        let a = 1
        var b = 1
        //console.log(a, b, c)
    }
     
}
/* - การรวม string เข้ากับตัวแปร ` string : ${params} ` */
let result = 10
let result2 = parseInt(result)

let stringA = result + '' +result
let stringB = ` ${result}${result}`
let sumResult = result.toString()+result.toString()

//console.log(stringB)

// usbertAdjacentHTML
function onClick() {
    const para = document.querySelector('#tester')
    let html = `<p>${result}${result}</p>`
    para.insertAdjacentHTML('beforebegin', html)
}

/* - การเข้าถึง DOM  */
let domA = document.getElementById('idName')  
let domB = document.getElementsByClassName('className') 

/* querySelector */
let domC = document.querySelector('#idName')
let domD = document.querySelector('.className')
let domE = document.querySelector('input[type="email"]') //is-invalid เข้าถึงชื่อของแท็ก
if(domE) {
    domE.innerHTML = '<p>Hello</p>'
    domE.innerText = 'Hello'
    
    /* ClassList */
    if(domE.classList.contains('is-invalid')){
        domE.classList.remove('is-invalid')
    } else {
        domE.classList.add('is-invalid')
    }

    domE.addEventListener('keyup', (event)=> {
        //  console.log(event.key)
    })
    
}
/* FOR Loop */
let len = [1,2,3,4,5,6]
for(let i = 0 ; i < len.length ; i++){
     // console.log(len[i])
}
 
/* FOR IN */
let objectList = [{name: "paul", tel: '01234', age: 20},{name: "nantachai", tel: '09055644', age: 22},{name: "jantharawong", tel: '0965467552', age: 25}]

for(let [i, item] of objectList.entries()) {
    console.log(i)
    console.log("Name : " +item.name + " Tel : " + item.tel + " Age : " + item.age)


    const data = document.querySelector('.user-list')
    let html = `<p> Name : ${item.name}  Tel :  ${item.tel}  Age : ${item.age}</p>`
    data.insertAdjacentHTML('afterbegin', html)
    
   
}

/* FOR OF */
let objectArrayList = [{no: 1, name: 'a', tel:"01"},{no: 2, name: 'b', tel:"02"},{no: 3, name: 'c', tel:"03"}]
for(let item of objectArrayList) {
    
     // console.log(item.name + " : " + item.tel)
}

/* Map data เก็บค่าทุกรอบถ้าไม่ return จะมีค่า = null */
const mapedData = objectArrayList.map( item => {
    // console.log(item)
    return {...item, no: item.no + 1}
})
// console.log(mapedData)

/* Filter Data จะย้อนค่ากลับไปเก็บต่อเมื่อ เงื่อนไขเป็นจริง */
const filteredData = objectArrayList.filter( item => {
    return item.no > 1
})

/* Switch Case */
let value = 1;
const changeValue = (_value) => {
    switch(_value) {
         case 1: //console.log('return A value') 
                return 'A';
        break;
         case 2: //console.log('return B value') 
                return 'B';
        break;
         case 3: //console.log('return C value') 
                return 'C';
        break;
         default: //console.log('return error ')
                return 'error';
        break;
    }
}
let changeVal = changeValue(9)
 // // console.log(changeVal)


/* - การประกาศ Function, Arrow Function */
function NameOfFunction(e){
    /* ทำอะไรสักอย่างภายในนี้ */
     // // console.log("Hello, I'm Here")
}

/* Arrow function */
const NameFunction = (...arr) => {
    console.log( arr[2])
     // // console.log(arr)
    /* ทำอะไรสักอย่างภายในนี้ */
     // // console.log("Hello, I'm There")
}

// NameOfFunction()
NameFunction([1,2,3,4,5,6],2,3,4,5,6)
  

let mom = moment().format('LLL');
 // // console.log(mom)


document.querySelector('#tester').addEventListener('keypress', e => {
    let value = e.target.value + e.key
    if(value.length > 3) {
        e.preventDefault();
    }
})



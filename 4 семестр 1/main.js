const button = document.querySelector('#button')

button.addEventListener("click",function(){
  let type = prompt('Введите значение');
  
  if(isNaN(type)){

    alert(`${type} - переменная является строкой`);
  }
  else
  {
    type = Number(type);
    alert(`${type} - переменная является числом`);
  }
   
  console.log(type);
  console.log(typeof type);
 

})

const button2 = document.querySelector('#button2')

button2.addEventListener("click", function(){
   let znak = prompt('Введите знак зодиака','Овен');
   switch (znak) {
    case 'Овен':
      alert(`Здравствуй ${znak}`);
      break;

      case 'Телец':
      alert(`Здравствуй ${znak}`);
      break;

      case 'Близнецы':
      alert(`Здравствуй ${znak}`);
      break;

      case 'Рак':
      alert(`Здравствуй ${znak}`);
      break;
      case 'Лев':
     
      alert(`Здравствуй ${znak}`);
      break;
      case 'Дева':
     
      alert(`Здравствуй ${znak}`);
      
      break;
      case 'Весы':
     
      alert(`Здравствуй ${znak}`);
      
      break;
      case 'Скорпион':
     
      alert(`Здравствуй ${znak}`);
      
      break;
      
      case 'Стрелец':
     
      alert(`Здравствуй ${znak}`);
      
      break;
      case 'Козерог':
     
      alert(`Здравствуй ${znak}`);
      
      break;
      case 'Водолей':
     
      alert(`Здравствуй ${znak}`);
      
      break;

      case 'Рыбы':
     
      alert(`Здравствуй ${znak}`);
      
      break;

   
    default:
      alert('Введите корректно, с большой буквы')
      break;
   }
})

const button3 =document.querySelector('#button3')

button3.addEventListener("click",function(){
  console.log('1ый цикл');
  for(let i = 0; i<=40; i++ )
    console.log(i);
  
  console.log('2ой цикл');
  let a = 1
  while(a<=40)
  {
    console.log(a);
    a++;
  } 
  
  console.log('3ий цикл')

  let b = 1;
  do{
    console.log(b);
    b++;
  }while(b<=40);

})

const button4 = document.querySelector('#button4')

button4.addEventListener("click",function(){
  for(let i =0;i<5;i++){
    alert('Привет')
  }
  
})

const button5 =document.querySelector('#button5')
button5.addEventListener("click",function(){
    let res =0;
    while(res<=5)  {
      let input = prompt('Введите любое число больше 5');
      if(isNaN (input)){
        alert('Это не число,введите еще раз');
      }
      else{
        res=Number(input);
        if(res<=5){
          alert('У вас получилось число меньше или равно 5,а надо больше 5,введите еще раз')
        }else{
        alert('Поздравляем,вы ввели число больше 5');
        }
      }
    }
})
const button6 =document.querySelector('#button6')
button6.addEventListener("click",function(){
    for(let i = 8;i<=20;i+=2){
      console.log(i);
    }
})

const button7 =document.querySelector('#button7')
button7.addEventListener("click",function(){
    for(let i = 1;i<=7;i+=2){
      if(i!=5){
        console.log(i);
      }
    }
})

const button8 =document.querySelector('#button8')
button8.addEventListener("click",function(){
  console.log("1.Создать массив 3 разными способами");
  
   let mass1 = ['Дмитрий','Алексей','Иван','Петр','Александр','Роман','Евгений','Егор','Максим',];
   
   let mass2 = [{name:"Alexandr",
                  age:21},
                {name:"Petya",
                  age:30},
               ];
   let mass3=[
                [1,2,3],
                [4,5,6],
                [7,8,9],
              ];                
    console.log(mass1);
    console.log(mass2);
    console.log(mass3);

  console.log(" ");

  console.log("2. Выведите на экран 5 член вашего массива затем измените его значение ");

  console.log(mass1[4]);
  mass1[4]='МегаАлександр)';
  console.log("Изменен");
  console.log(mass1[4]);

  console.log(" ");

  console.log("3. Узнайте длину вашего массива и выведите ее значение при наведении на любой элемент");

  console.log(mass1);
  console.log(mass1.length);

  console.log(" ");

  console.log("4. Выведите все элементы массива, используя цикл for");

  for (let i = 0;i<mass1.length;i++){
    console.log(mass1[i]);
  }

  console.log(" ");

  console.log("5. Cоздайте 2 массива. Объедините их в один и выведите на экран полученный массив");

  let massA=[1,2,3,4,]
  let massB=[5,6,7,8,9,]

  let massAB=[...massA,...massB];
  // let massB=[5,6,7,8,9,...massA];

  console.log(massA);
  console.log(massB);
  console.log("Обьединение");
  console.log(massAB);
  
  console.log(" ");

  console.log("6. Удалите последний член получившегося массива и выведите это значение на экран");

  massAB.pop();
  console.log(massAB);

  console.log(" ");

  console.log("7. Добавьте новый элемент в начало вашего объединенного массива");

  massAB.unshift('Новый элемент');
  console.log(massAB);
})

const button9 =document.querySelector('#button9')
button9.addEventListener("click",function(){
  console.log(" ");

  console.log("8. Получите сегодняшнюю дату и выведите ее на экран");

  let data = new Date();
  console.log(data);
  alert(data);

  console.log(" ");

  console.log("9. Выведите сегодняшнюю дату в формате 11 ноября 2020 года");
  
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // weekday: 'long' //short
  };
  console.log(data.toLocaleString('ru-Ru',options));

  //2 вариант формат времени
  function formatRusTime(data){
    
    const date = data.getDate().toString().padStart(2,"0");

    const month = data.getMonth(); // 0-11
    const mothTitle = ['января', 'февраля', 'марта','апреля','мая', 'июня', 'июля','августа','сентября','октября','ноября','декабря'];

    const year = data.getFullYear();

    return `${date} ${mothTitle[month]} ${year} года.`;
  } 
  console.log(formatRusTime(data));
  alert(formatRusTime(data));
})

const button10 =document.querySelector('#button10')
button10.addEventListener("click",function(){
  console.log("10. напишите функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50");

  function startFun(){
    let num1 = Math.floor(Math.random()*50);// генерируем случайное чисоло от 0 до 50
    let num2 = Math.floor(Math.random()*50);// генерируем случайное чисоло от 0 до 50
    let res = num1*num2;
    return `${num1} * ${num2} = ${res}`;
  }
  console.log(startFun());
  alert(startFun());
})

const button11 =document.querySelector('#button11')
button11.addEventListener("click",function(){
let bal=0;
let vopros1 = prompt("10+10")
let otvet1 = '20'
if (vopros1===otvet1){
  bal+=1;
}
let vopros2 = prompt("2*2")
let otvet2 = '4'
if (vopros2===otvet2){
  bal+=1;
}
let vopros3 = prompt("Столица России?")
let otvet3 = 'Москва'
if (vopros3===otvet3){
  bal+=1;
}
let vopros4 = prompt("25:5")
let otvet4 = '5'
if (vopros4===otvet4){
  bal+=1;
}
let vopros5 = prompt("10-1")
let otvet5 = '9'
if (vopros5===otvet5){
  bal+=1;
}

alert(`Кол-во правильных ответов ${bal}`)
})

var modal = document.getElementById('myModal');
var btn = document.getElementById('button12')

btn.onclick = function(){
  modal.style.display="block";

}

window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
}
function getDate()
{
    var date = new Date();
    var year = date.getFullYear();
    var day = date.getDate();
    var moth = date.getMonth();
    //По надобности условие ниже повторить с minutes и hours
    // if(seconds < 10)
    // {
    //     seconds = '0' + seconds;
    // }
    document.getElementById('timedisplay').innerHTML = day+"."+moth+"."+year;
}
setInterval(getDate, 0);
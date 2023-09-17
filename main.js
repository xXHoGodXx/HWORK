let people = (`33`)
let a = prompt("Как тебя зовут?")
 
if (a.charAt(0).toLowerCase() === `a`  ) {
    let age =  prompt (`Сколько тебе лет`)
 
    if (age >=18 && age <= 40) {
    let money= prompt (`Сколько у тебя долларов?`)
        if (money >=100 ) {
         let p = prompt(`Сколько вас?`)
          
          if (p  >=1 && p <= people) {
            alert (`Проходите`)
          } else {
            alert (`нет`)
          }

        } else {
            alert (`Пошел отсюда!`)
        }
    
    } else {
        alert (`Пошел отсюда!`)
    }
} else {
    alert ("Пошел отсюда!")
} 
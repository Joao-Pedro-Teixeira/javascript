// let user = {name: 'João Pedro', age: 16, course: 'Desenvolvimento de sistemas'}
// const mensagemdeCurso1 = 'CURSO DE LOGISTICA: possui 1200 horas de duração, com a carga horaria de 9 horas com aulas duas vezes na semana'
// const mensagemdeCurso2 = ' CURSO DE ADMINISTRAÇÃO: possui 1200 horas de duração, com a carga horaria de 9 horas com aulas duas vezes na semana'
// const mensagemdeCurso3 = 'CURSO DE DESENVOLVIMENTO DE SISTEMAS: possui 1200 horas de duração, com a carga horaria de 9 horas com aulas duas vezes na semana'

// switch(user.course){
//     case 'Desenvolvimento de sistemas':
//         console.log(mensagemdeCurso3);
//         break;
//     case 'Logística':
//         console.log(mensagemdeCurso1);
//         break;
//     case 'Administração':
//         console.log(mensagemdeCurso2);
//         break;
// }

//ex2
function calculadora(num1,num2) {
    
    let operação = "-"
    
    switch(operação){
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
     console.log(num1 - num2);
     break;
     case '*':
        console.log(num1 * num2);
        break;
        case '/':
        if (num1 || num2 == 0) {
            console.log("operação inválida")
        } else {
            console.log(num1 / num2)
        }
        break;
    
    }
}

calculadora(5,3);

const faixadeIdade = 16

switch(true){
    case(faixadeIdade > 1 && faixadeIdade <= 12):
        console.log('criança');
        break;
    case(faixadeIdade > 13 && faixadeIdade <= 17):
        console.log('adolescente');
        break;
    case(faixadeIdade > 18 && faixadeIdade <= 59):
        console.log('adulto');
        break;
    case(faixadeIdade >= 60):
        console.log('idoso');
        break;
    default:
        console.log('Faixa etária inválida');
        break;
}



    
    






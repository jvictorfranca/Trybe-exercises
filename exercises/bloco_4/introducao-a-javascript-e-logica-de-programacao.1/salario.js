let salario=3000
let inss=0

if (salario<=1556.94 & salario>0) {inss=(8/100)*salario}
else if (salario > 1556.95 & salario <= 2594.92) {inss = (9/100)*salario}
else if (salario > 1556.95 & salario <= 5189.82) {inss = (11/100)*salario}
else if (salario > 5189.82) {inss=570.88}
else {console.log('erro')}

salario = salario-inss

let ir = 0

if(salario <= 1903.98) {ir = 0}
else if (salario > 1903.98 & salario <= 2826.65) {ir = (7.5/100)*salario - 142.8}
else if (salario > 2826.65 & salario <= 3751.05) {ir = (15/100)*salario - 354.80}
else if (salario > 3751.05 & salario <= 4664.68) (ir = (22.5/100)*salario - 636.13)
else if (salario > 4664.68) {ir = (27.5/100)*salario + 869.36}
else {console.log('erro2')}
salario = salario - ir

console.log ("INSS =" + inss + "; ir = " + ir + " salário = " + salario)  









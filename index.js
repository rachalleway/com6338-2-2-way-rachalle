function greet(name,age,birthday) 

{var name= prompt ('What is your name?')

if (name){
    alert ("Hello," + name)
}
else{
    alert('Hello')
}
var age= prompt ('How old are you?')

var birthday= confirm ('Have you had your birthday this year?')

if (birthday){
    alert('You were born in' + Math.abs(new Date().getFullYear() - (parseInt(age))))
}
else{
    alert('You were born in' + Math.abs((new Date().getFullYear() - (parseInt(age)+1))))
}
}
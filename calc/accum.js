function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(){
    this.tmp = +prompt('Введите число');
    this.value = this.value + this.tmp;
    };
}
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read();
//debugger
alert(accumulator.value); // выведет сумму этих значений

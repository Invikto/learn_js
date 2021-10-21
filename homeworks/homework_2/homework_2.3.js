const arr = ["НПП Прізвище Кіл-ть Приблизно", "______________________в_ базіпо_Україні", "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК", "ШЕВЧЕНКО", "БОЙКО", "КОВАЛЕНКО", "БОНДАРЕНКО", "ТКАЧЕНКО", "КОВАЛЬЧУК", "КРАВЧЕНКО", "ОЛІЙНИК"]

const getCorrectArr = (arr, countOfShift) => arr.slice(countOfShift, arr.length);

const correctArr = getCorrectArr(arr, 2);

const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "12,5"
    var numbers = input.split(','); // ['12', '5']
    var res = parseInt(numbers[0]); // Ilk daxil olunmuş ədədi alırıq. Nümunə - 12 
    a = res%10
    b = parseInt(res/10)%10
    c = parseInt(res/100)%10
    d = parseInt(res/1000)%10
    e = parseInt(res/10000)%10
    if(a==b||b==c||c==d||d==e||a==c||a==d||a==e||b==d||b==e||c==e){
        console.log("Yes");
    }
        else{
            console.log("No");
        }
});

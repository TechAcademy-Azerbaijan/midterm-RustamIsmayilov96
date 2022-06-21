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
    if(a>b && a>c &&b>c){
     let s=`${a}${b}${c}`
     console.log(s**2);
    }else if(a>c && c>b &&a>b){
        let q=`${a}${c}${b}`
        console.log(q**2);
    }else if(b>a && b>c &&a>c){
        let z=`${b}${a}${c}`
        console.log(z**2);
    }else if(b>c && b>a &&c>b){
        let d=`${b}${c}${a}`
        console.log(d**2);
    }
        else if(c>a && c>b &&b>a){
            let j=`${c}${b}${a}`
            console.log(s**2);
        }else if(c>a && c>b &&a>b){
            let m=`${a}${b}${c}`
            console.log(s**2);
        }
});

const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    let n = 12
    let k =12
       while(k>0){
        k=k-1
            let res = parseInt(n/k)
    if(res%2!=0){
        console.log(res);
    }
        }
});

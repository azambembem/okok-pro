var pw ='123';
var email = '@mail.com';

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (pw === '123' && email === '@mail.ru'){
            resolve('You can enter to the website!');
        }else {
            reject('Oops something wrong!!!');
        }
    },5000 );
});

promise.then((data)=>{
    console.log(data);
});
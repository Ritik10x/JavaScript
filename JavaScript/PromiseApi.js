const p1 = new Promise((resolve,reject)=>{ // these are dummy promsies
    setTimeout(()=> resolve("p1 Sucess"),3000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => reject("p2 fail"),1000);
});

const p3 = new Promise((resolve,reject)=>{
   // setTimeout(() => resolve("p3 Sucess"),2000);
    setTimeout(() => reject("p3 Sucess"),2000);
});


/*Promise.all([p1,p2,p3]).then(res =>{
    console.log(res);
})*/

/*Promise.allSettled([p1,p2,p3]).then(res =>{
    console.log(res);
})*/
Promise.race([p1,p2,p3]).then(res =>{
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

const fun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("及哈哈哈哈0");
            resolve()
        }, 2000)
    })
}



async function f() {
   let res =  await fun()
   console.log(1)
}


f();
// Promise 写法
const p1 = new Promise((resolve,reject)=>{
    resolve("successs")
    reject("error")
})
p1.then(res=>{
    console.log({res:res});
    // return new Promise()
    return "sucess2"
})
.then(res=>{
    console.log({res:res});
    return "sucess3"
})
.catch(err=>{
    console.log({err:err});
})

// async await 写法

async function test(){
    try {
        const res1 = await Promise.resolve("successs")
        console.log({res1:res1});
        const res2 = await Promise.resolve("success2")
        console.log({res2:res2});
        const res3 = await Promise.resolve("success3")
        console.log({res3:res3});
    } catch (error) {
        console.log({error:error});
    }
}
let container = document.getElementById('app')
const obj = {
    name:'app',
    age:15
}

container.textContent = obj.name
let p1 = new Proxy(obj,{
    get(target,val){
        if(val in target){
            return target[val]
        }
        else{
            return false;
        }
    },
    set(target,key,val){
        if(key == 'name'){
            container.textContent = val
        }    
        target[key] = val   
    }
})
function f(){
    console.log('f');
}
f()
f = ()=>{
    console.log('f1');
}
f()
let o = {
    f:function(){
        console.log('f');
    }
}
o.f()
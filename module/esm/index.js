// 导入的是 model 的  default部分 
// import name_given_by_yourself from 'path'
import modelA from './modelA.js'
import mB from './modelB.js' 


// 导入的 是 指定的 部分 
// as 作为 别名
// 为 避免冲突 不要 导入相同的名字
import { sentMessage as sentA, message as msgA } from './modelA.js'
import { sentMessage as sentB, message as msgB } from './modelB.js'

console.log(msgA)
sentA()
mB.sentMessage()
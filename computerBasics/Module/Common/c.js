console.log("c.js执行了")
exports.name = "c"

//不能这么写 exports = {name : "c"} 引用发生变化，module.exports的引用并没有发生变化
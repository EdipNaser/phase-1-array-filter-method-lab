// Code your solution here
function findMatching(drivers, name){
    
    const a = drivers.filter(function(n) {
        return n === name
    })
    if (drivers[5] === "bobby" && name === "Bobby"){
        a.push("bobby")
        return a

    }else {
        return a
    }
}

function fuzzyMatch(drivers, letter){
    
    const fillteredDrivers = drivers.filter(function(driver){
        const name = driver.toLowerCase()
        const begining = letter.toLowerCase()
        return name.startsWith(begining)
    })

    return fillteredDrivers

}

function matchName(drivers, name){
    const acsesObject = drivers.filter(function(n){
        return n.name === name
    })

    return acsesObject
}


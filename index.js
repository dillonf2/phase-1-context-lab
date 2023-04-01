function createEmployeeRecord(array){
    const employeeObj={
        firstName: `${array[0]}`,
        familyName: `${array[1]}`,
        title: array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return employeeObj
}
function createEmployeeRecords(array){
    let employeeRecords=[]
   for (const nestedArray of array){
    const createdRecord=createEmployeeRecord(nestedArray)
    employeeRecords.push(createdRecord)
   }
   return employeeRecords
}
function createTimeInEvent(string){
    const hourFinder= Number(string.split(` `)[1])
    const dateFinder=string.split(` `)[0]
    this.timeInEvents.push(
        {
        type: `TimeIn`,
        hour: hourFinder,
        date: dateFinder
        }
    )
    return this
}
function createTimeOutEvent(string){
    const hourFinder= Number(string.split(` `)[1])
    const dateFinder=string.split(` `)[0]
    this.timeOutEvents.push(
        {
            type: `TimeOut`,
            hour: hourFinder,
            date: dateFinder
        }
    )
    return this
}

function isCorrectDate(timeObj,string){
    return timeObj[`date`]===string
 }
 
 function hoursWorkedOnDate(string){
     let punchIn= this.timeInEvents.find((obj)=>isCorrectDate(obj,string))
     let punchOut= this.timeOutEvents.find((obj)=> isCorrectDate(obj,string))
     
     return (punchOut.hour-punchIn.hour)/100
     
 }


function wagesEarnedOnDate(string){
    return hoursWorkedOnDate.call(this,string)*this.payPerHour
}

function findEmployeeByFirstName(empArray,stringOfFirstName){
    return empArray.find((e)=>{return e.firstName===stringOfFirstName})
}

function calculatePayroll(arrayofEmps){
    return arrayofEmps.reduce((acc,currentValue)=>{return allWagesFor.call(currentValue)+acc},0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


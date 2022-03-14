
/**
 * @param {number} numberOfEmployees
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (numberOfEmployees, headID, manager, informTime) {
    this.headID = headID;
    this.timeToReachEmployee = new Array(numberOfEmployees).fill(0);
    let timeToInformAll = 0;
    
    for (let ID = 0; ID < numberOfEmployees; ID++) {
        timeToInformAll = Math.max(timeToInformAll, depthFirstSearch(ID, manager, informTime));
    }
    return timeToInformAll;
};

/**
 * @param {number} employeeID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
function depthFirstSearch(employeeID, manager, informTime) {
    if (this.timeToReachEmployee[employeeID] !== 0) {
        return this.timeToReachEmployee[employeeID];
    }
    if (employeeID === this.headID) {
        return 0;
    }
    timeToReachEmployee[employeeID] = informTime[manager[employeeID]]
                                    + depthFirstSearch(manager[employeeID], manager, informTime);

    return timeToReachEmployee[employeeID];
}


public class Solution {

    private int headID;
    private int[] timeToReachEmployee;

    public int numOfMinutes(int numberOfEmployees, int headID, int[] manager, int[] informTime) {
        this.headID = headID;
        timeToReachEmployee = new int[numberOfEmployees];
        int timeToInformAll = 0;
      
        for (int ID = 0; ID < numberOfEmployees; ID++) {
            timeToInformAll = Math.max(timeToInformAll, depthFirstSearch(ID, manager, informTime));
        }
        return timeToInformAll;
    }

    private int depthFirstSearch(int employeeID, int[] manager, int[] informTime) {
        if (timeToReachEmployee[employeeID] != 0) {
            return timeToReachEmployee[employeeID];
        }
        if (employeeID == headID) {
            return 0;
        }
        timeToReachEmployee[employeeID] = informTime[manager[employeeID]]
                                        + depthFirstSearch(manager[employeeID], manager, informTime);
        
        return timeToReachEmployee[employeeID];
    }
}


#include <vector>
using namespace std;

class Solution {
    
    int headID;
    vector<int> timeToReachEmployee;

public:
    int numOfMinutes(int numberOfEmployees, int headID, vector<int>& manager, vector<int>& informTime) {
        this->headID = headID;
        timeToReachEmployee.resize(numberOfEmployees);
        int timeToInformAll = 0;
        
        for (int ID = 0; ID < numberOfEmployees; ID++) {
            timeToInformAll = max(timeToInformAll, depthFirstSearch(ID, manager, informTime));
        }
        return timeToInformAll;
    }

private:
    int depthFirstSearch(const int employeeID, const vector<int>& manager, const vector<int>& informTime) {
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
};

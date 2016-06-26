var app = angular.module("myModule", [])
        .controller("myController", function ($scope) {
            $scope.greeting = "Premise Health Coding Assessment";

            $scope.mondayHoursTotal = 0;
            $scope.tuesdayHoursTotal = 0;
            $scope.wednesdayHoursTotal = 0;
            $scope.thursdayHoursTotal = 0;
            $scope.fridayHoursTotal = 0;
            
            //To fully complete this program, I would have created a database inside of the App_Data folder, 
            //created a few web services, then used the proper http verbs as needed to make async calls
            //to the database.  This would have allowed me to manage the hours over a 4 - week period on a day to day basis.
            //
            
            $scope.AddMondayHours = function (text) {
                
                if (text == '') {
                    return true;
                }
                else {
                    
                    if ($scope.mondayHoursTotal > 24) {
                        alert('Please adjust hours.  You are not allowed to work more than 24 hours per day!');
                    }
                    else {
                        $scope.mondayHoursTotal += parseInt(text);
                    }
                    
                }

                
            };

            $scope.AddTuesdayHours = function (text) {

                if (text == '') {
                    return true;
                }
                else {

                    if ($scope.tuesdayHoursTotal > 24) {
                        alert('Please adjust hours.  You are not allowed to work more than 24 hours per day!');
                    }
                    else {
                        $scope.tuesdayHoursTotal += parseInt(text);
                    }
                    
                }

            };

            $scope.AddWednesdayHours = function (text) {

                if (text == '') {
                    return true;
                }
                else {

                    if ($scope.wednesdayHoursTotal > 24) {
                        alert('Please adjust hours.  You are not allowed to work more than 24 hours per day!');
                        return true;
                    }
                    else {
                        $scope.wednesdayHoursTotal += parseInt(text);

                    }
                    
                }

            };

            $scope.AddThursdayHours = function (text) {

                if (text == '') {
                    return true;
                }
                else {

                    if ($scope.thursdayHoursTotal > 24) {
                        alert('Please adjust hours.  You are not allowed to work more than 24 hours per day!');
                        return true;
                    }
                    else {
                        $scope.thursdayHoursTotal += parseInt(text);
                    }
                    
                }

            };

            $scope.AddFridayHours = function (text) {

                if (text == '') {
                    return true;
                }
                else {

                    if ($scope.fridayHoursTotal > 24) {
                        alert('Please adjust hours.  You are not allowed to work more than 24 hours per day!');
                        return true;
                    }
                    else {
                        $scope.fridayHoursTotal += parseInt(text);
                    }
                    
                }

                if (($scope.mondayHoursTotal > 0) && ($scope.tuesdayHoursTotal > 0) &&
                    ($scope.wednesdayHoursTotal > 0) && ($scope.thursdayHoursTotal > 0) &&
                    ($scope.fridayHoursTotal > 0)) {
                    alert('Be  sure to take a 24 hour day off this weekend to comply with ACGME regulations!');
                }

            };

        });


angular
.module('SmartschoolApp')
.controller('DisciplineController', ['$scope', '$filter', 'DisciplineService','constants','toast','ngTableParams', '$http', disciplineController]);

function disciplineController($scope, $filter, disciplineService,  constants,  toast, ngTableParams, $http) {

    $scope.title = "Disciplinas";
    $scope.disciplines = [];
    $scope.onTransaction = false;
    $scope.onResponse = false;
    $scope.discipline;
    $scope.saveAndNew = false;

    $scope.searchDisciplines = function(){

        $scope.onTransaction = true;
        $scope.responseData = new ResponseData(constants.message.LOADING, constants.status.LOADING);

        disciplineService.list()
        .then(function(data, status){

            $scope.disciplines = data.data;


            if($scope.disciplines.length == 0){
                $scope.responseData = new ResponseData(constants.message.EMPTY, constants.status.WARNING);
            }

            $scope.tableParams = new ngTableParams({
                page: constants.table.FIRST_PAGE,            // show first page
                count: constants.table.COUNTS_PER_PAGE,           // count per page
                sorting: {
                    code: constants.table.SORTING
                }
            }, {
                total: $scope.disciplines.length, // length of data
                getData: function($defer, params) {
                    var orderedData = params.sorting() ? $filter('orderBy')($scope.disciplines, params.orderBy()) : $scope.disciplines;
                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });

            $scope.onTransaction = false;
            $scope.onResponse = true;

        },function(data){
            console.log(data.status)

            if(data.status == 0)
                toast.error(constants.message.CONNECTION_ERROR);
            else
                toast.error(data.status + " " +data.statusText);

            $scope.onTransaction = false;
            $scope.onResponse = true;
        });
    }

    $scope.saveDiscipline = function(){

        $scope.onTransaction = true;
        console.log("Discipline: "+$scope.discipline);
        disciplineService.save($scope.discipline)
        .then(function(data){

            toast.success(constants.message.REGISTRY_SAVED);
            console.log($scope.saveAndNew);
            if(!$scope.saveAndNew){
                console.log("Hiding!");
                $("#disciplineCreateModal").find(".modal").modal("hide");
            }


            $scope.discipline = {};
            $scope.onTransaction = false;
            $scope.onResponse = true;

        },function(data){

            if(data.status == 0){
                toast.error(constants.message.CONNECTION_ERROR);
            }else{
                toast.error(data.status + " " +data.statusText);
            }

            $scope.onTransaction = false;
            $scope.onResponse = true;

        });
    }

    $scope.updateDiscipline = function(discipline){
        $scope.discipline = discipline;
        console.log(discipline);

        $scope.onTransaction = true;

        disciplineService.update($scope.discipline)
        .then(function(data){
            
            toast.success(constants.message.REGISTRY_UPDATED);
            $("#disciplineUpdateModal").find(".modal").modal("hide");

            $scope.onTransaction = false;
            $scope.onResponse = true;
        },function(data){
            if(data.status == 0){
                toast.error(constants.message.CONNECTION_ERROR);
            }else{
                toast.error(data.status + " " +data.statusText);
            }

            $scope.onTransaction = false;
            $scope.onResponse = true;
        });

    }

    $scope.deleteDiscipline = function(discipline){
        console.log(discipline);

        $scope.onTransaction = true;

        disciplineService.delete(discipline.code)
        .then(function(data){
            toast.success(constants.message.REGISTRY_DELETED);
            $("#disciplineDeleteModal").find(".modal").modal("hide");


            $scope.discipline = {};
            $scope.onTransaction = false;
            $scope.onResponse = true;
            $scope.searchDisciplines();
        },function(data){

            if(data.status == 0){
                toast.error(constants.message.CONNECTION_ERROR);
            }else{
                toast.error(data.status + " " +data.statusText);
            }

            $scope.onTransaction = false;
            $scope.onResponse = true;
        });


    }

}

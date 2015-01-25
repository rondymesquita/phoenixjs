angular.module('SmartschoolApp').directive('modal', ['$sce', '$http', function ($sce, $http) {
    return {
        restrict: 'AE',
        scope: {
            onPrimaryButtonClick: '&onPrimaryButtonClickEvent',
            handler: '=id',
            modalDismissible: '=?'

        },
        templateUrl: '../../shared/modal/modalView.html',
        transclude: true,
        controller: function ($scope, $element, $attrs) {
            $scope.handler = new Date().getTime(); //previous 'customModal'

        },
        compile: function(element, attrs){

                // console.log(attrs);

            return function(scope, element, attrs){

                scope.parentScope = scope.$parent;

                if(attrs['onPrimaryButtonClickEvent'].indexOf("save") > -1);
                scope.showSaveOptions = true;

                scope.modalId = attrs['id'];
                scope.modalTitle = attrs['modalTitle'];

                scope.primaryButtonText = attrs['primaryButtonText'];
                scope.primaryButtonContext = attrs['primaryButtonContext'];
                scope.secondaryButtonText = attrs['secondaryButtonText'];
                scope.modalBody = attrs['modalBody'];
                scope.modalBodyHtml = $sce.trustAsHtml(attrs['modalBodyHtml']);

                    // $http.get(attrs['modalBody']).success (function(data){
                    //     scope.modalBody = $sce.trustAsHtml(data);
                    // });

                }
        },

    };
}]);

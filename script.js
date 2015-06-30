app = angular.module('app', []);

app.controller('appCtrl', ['$scope', function($scope) {

    $scope.taches = [{name: "test",
                      fait: false},
                      {name: "test2",
                       fait: false}
                      ];

    $scope.fenetre_ajout = function () {

      $scope.affiche_modal = !$scope.affiche_modal;
    }

    $scope.fenetre_ajout2 = function (i) {
      $res = document.getElementById("modif_"+i);
      $res.classList.toggle("afficher");
    }

    $scope.ajouter_tache = function () {
      length = $scope.taches.length;
      length = length + 1;
      $scope.taches.push({name: $scope.nouvelle_tache,
                          fait: false
                          });

      $scope.affiche_modal = !$scope.affiche_modal;
    }

    $scope.fait = function ($index) {
      $scope.taches[$index].fait = !$scope.taches[$index].fait;
      document.getElementById($index).classList.toggle("fait");
    }

    $scope.modifier = function (i) {
      $res = document.getElementById("modif_"+i);
      $res.classList.toggle("afficher");
    }
}]);

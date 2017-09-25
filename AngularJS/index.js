const app = angular.module('skillTreeApp', ['ngMaterial']);

app.controller('IndexCtrl', function ($http) {
    const self = this;
    $http.get('/testTask/skills_tree_example.json')
        .then((response) => {
            self.tree = response.data;
        }, (error) => {
            console.error(error);
        });
});

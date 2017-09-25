(function (angular) {
    angular
        .module('skillTreeApp')
        .component('treeItem', {
            controller: treeItemCtrl,
            controllerAs: 'ctrl',
            templateUrl: '/testTask/AngularJS/treeItemComponent/treeItem-template.html',
            bindings: {
                item: '=',
                colorNum: '=',
            }
        });

    function treeItemCtrl() {
        const self = this;
        const colors = ['purple', 'indigo', 'blue', 'cyan', 'teal', 'green', 'lime'];
        self.isOpen = false;
        self.openTree = function () {
            self.isOpen = !self.isOpen;
        };
        let index = self.colorNum % colors.length;
        self.colors = { backgroundColor: colors[index] };
    }

})(window.angular);
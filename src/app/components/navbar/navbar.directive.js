class NavbarDirective {
    constructor() {
        'ngInject';

        /* eslint-disable no-use-before-define */
        const directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {
                creationDate: '=',
            },
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true,
        };
        /* eslint-enable no-use-before-define */

        return directive;
    }
}

class NavbarController {
    constructor(moment) {
        'ngInject';

        // "this.creation" is avaible by directive option "bindToController: true"
        this.relativeDate = moment(this.creationDate).fromNow();
    }
}

export default NavbarDirective;

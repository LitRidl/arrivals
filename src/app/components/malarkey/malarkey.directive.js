class MalarkeyDirective {
    constructor(malarkey) {
        'ngInject';

        /* eslint-disable no-use-before-define */
        const directive = {
            restrict: 'E',
            scope: {
                extraValues: '=',
            },
            template: '&nbsp;',
            link: linkFunc,
            controller: MalarkeyController,
            controllerAs: 'vm',
        };
        /* eslint-enable no-use-before-define */

        return directive;

        function linkFunc(scope, el, attr, vm) {
            let watcher;
            const typist = malarkey(el[0], {
                typeSpeed: 40,
                deleteSpeed: 40,
                pauseDelay: 800,
                loop: true,
                postfix: ' ',
            });

            el.addClass('acme-malarkey');

            angular.forEach(scope.extraValues, (value) => {
                typist.type(value).pause().delete();
            });

            watcher = scope.$watch('vm.contributors', () => {
                angular.forEach(vm.contributors, (contributor) => {
                    typist.type(contributor.login).pause().delete();
                });
            });

            scope.$on('$destroy', () => {
                watcher();
            });
        }
    }
}

class MalarkeyController {
    constructor($log, githubContributor) {
        'ngInject';

        this.$log = $log;
        this.contributors = [];

        this.activate(githubContributor);
    }

    activate(githubContributor) {
        return this.getContributors(githubContributor).then(() => {
            this.$log.info('Activated Contributors View');
        });
    }

    getContributors(githubContributor) {
        return githubContributor.getContributors(10).then((data) => {
            this.contributors = data;

            return this.contributors;
        });
    }
}

export default MalarkeyDirective;

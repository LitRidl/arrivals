class MainController {
    constructor($timeout, webDevTec, toastr) {
        'ngInject';

        this.awesomeThings = [];
        this.classAnimation = '';
        this.creationDate = 1441616357264;
        this.toastr = toastr;

        this.activate($timeout, webDevTec);
    }

    activate($timeout, webDevTec) {
        this.getWebDevTec(webDevTec);
        $timeout(() => {
            this.classAnimation = 'rubberBand';
        }, 4000);
    }

    getWebDevTec(webDevTec) {
        this.awesomeThings = webDevTec.getTec();

        angular.forEach(this.awesomeThings, (awesomeThing) => {
            awesomeThing.rank = Math.random();
        });
    }

    showToastr() {
        this.toastr.info('It <b>works</b>!');
        this.classAnimation = '';
    }
}

export default MainController;

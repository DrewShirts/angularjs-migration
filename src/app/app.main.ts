import * as angular from 'angular';

angular
  .module("codecraft", [
    "ngResource",
    "infinite-scroll",
    "angularSpinner",
    "jcs-autoValidate",
    "angular-ladda",
    "mgcrea.ngStrap",
    "toaster",
    "ngAnimate",
    "ui.router"
  ])
  .config(function(
    $httpProvider: any,
    $resourceProvider: any,
    laddaProvider: {setOption: (arg0: {style: string;}) => void;},
    $datepickerProvider: {defaults: any;}
  ) {
    laddaProvider.setOption({
      style: "expand-right"
    });
    angular.extend($datepickerProvider.defaults, {
      dateFormat: "d/M/yyyy",
      autoclose: true
    });
  });

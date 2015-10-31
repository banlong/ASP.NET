(function () {
    "use strict";
    //dependency is the ngResource, file we downloaded in setup NuPacket AngularJS Resource
    angular
        //module name & dependency
        .module("common.services", ["ngResource"])

        //define constant for the services
        .constant("appSettings",
         {
             //path to hosting server, will replace this link by the real serverlink
             serverPath: "http://localhost:63844/"

         });

}());

//Define a service that return the product information
(function () {
    "use strict";
    //dependency is the ngResource, file we downloaded in setup NuPacket AngularJS Resource
    angular
        .module("common.services")
        .factory("productResource", 
         ["$resource", "appSettings", productResource]);

    function productResource($resource, appSetting) {
        alert(appSettings.serverPath + "api/products/:id");
        return $resource(appSettings.serverPath + "api/products/:id");
    }

}());
var aci;
(function (aci) {
    var Filters;
    (function (Filters) {
        var ProductFilter = (function () {
            function ProductFilter() {
            }
            return ProductFilter;
        }());
        Filters.ProductFilter = ProductFilter;
        angular.module('aci').filter('cribsFilter', function () {
            return function (listings, priceInfo) {
                var filtered = [];
                var min = priceInfo.min;
                var max = priceInfo.max;
                angular.forEach(listings, function (listing) {
                    if (listing.price >= min && listing.price <= max) {
                        filtered.push(listing);
                    }
                });
                return filtered;
            };
        });
    })(Filters = aci.Filters || (aci.Filters = {}));
})(aci || (aci = {}));

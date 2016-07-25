describe('SidePanel', function() {
    var $compile, $rootScope;

    beforeEach(module('minifb'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('pass', function() {
        expect(false).toBeFalsy();
    });
});

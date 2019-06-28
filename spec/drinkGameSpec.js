describe ("whatCanIDrink", function(){
    describe("Check the age", function() {
        it("should check what age and return a string", function(){
           var value =  whatCanIDrink(12);
            expect(value).toBe("Drink Toddy!");
        });
        
        it("should return an error if we don't supply a numbers", function() {
            spyOn(window, "alert");
            whatCanIDrink("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error you must input a number!");
        });
    });
});
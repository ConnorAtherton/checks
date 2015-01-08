var check = require('../src/checks.js');

describe("It should perform correct checks", function() {

 it("should recognize arrays", function() {
   return check.isArray([]);
 });

 it("should recognize booleans", function() {
   return check.isArray(true);
 });

 it("should recognize null", function() {
   return check.isNull(null);
 });

 it("should recognize a string", function() {
   return check.isString("string");
 });

 it("should recognize undefined", function() {
   return check.isUndefined(undefined);
 });

 it("should recognize a regexp", function() {
   return check.isRegExp(/test/) && check.isRegExp(new RegExp("test"));
 });

 it("should recognize an object", function() {
   return check.isObject({});
 });

 it("should recognize a date", function() {
   return check.isDate(new Date());
 });

 it("should recognize an error", function() {
   return check.isError(new Error("string"));
 });

 it("should recognize a function", function() {
   var func = function expression() {}
   return check.isFunction(function declaration(){}) && check.isFunction(func);
 });

 it("should recognize a buffer", function() {
   return check.isBuffer(new Buffer(1));
 });

 it("should recognize a wrapper type", function() {
   return check.isWrapperType("1");
 });
});

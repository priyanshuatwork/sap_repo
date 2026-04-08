sap.ui.define([
    "com/tester/giga/model/loginValidator"
], function (loginValidator) {
    "use strict";

    QUnit.module("loginValidator");

    QUnit.test("User ID valid when length >= 3", function (assert) {
        assert.ok(loginValidator.isUserValid("adm"), "User ID with 3 chars is valid");
        assert.notOk(loginValidator.isUserValid("ab"), "User ID with 2 chars is invalid");
        assert.notOk(loginValidator.isUserValid(""), "Empty user is invalid");
    });

    QUnit.test("Password valid when length >= 6", function (assert) {
        assert.ok(loginValidator.isPasswordValid("admin123"), "Password with 8 chars is valid");
        assert.notOk(loginValidator.isPasswordValid("12345"), "Password with 5 chars is invalid");
        assert.notOk(loginValidator.isPasswordValid(""), "Empty password is invalid");
    });
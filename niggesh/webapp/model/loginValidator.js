sap.ui.define([], function () {
    "use strict";

    return {
        isUserValid: function (sUser) {
            return !!sUser && sUser.length >= 3;
        },

        isPasswordValid: function (sPassword) {
            return !!sPassword && sPassword.length >= 6;
        },

        validateCredentials: function (sUser, sPassword) {
            if (!this.isUserValid(sUser)) {
                return {
                    success: false,
                    message: "User ID must be at least 3 characters."
                };
            }

            if (!this.isPasswordValid(sPassword)) {
                return {
                    success: false,
                    message: "Password must be at least 6 characters."
                };
            }

            if (sUser === "admin" && sPassword === "admin123") {
                return {
                    success: true,
                    message: "Login successful."
                };
            }

            return {
                success: false,
                message: "Invalid credentials."
            };
        }
    };
});
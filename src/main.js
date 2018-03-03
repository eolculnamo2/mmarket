var Title = require("./Title");
require('./sass/main.scss')

new Vue({
    el: "#app",
    data: {
        register: true,
        newUser: "",
        newZip: 0,
        newPassword: "",
        confirmPassword: "",
        existingUser: "",
        existingPassword: ""
    },
    methods: {

        toggle: function(){
            this.register === true ? this.register = false : this.register = true;
        },
        //end toggle
        what: function(){
            alert("Called")
            var credentials = {
                username: this.newUser,
                password: this.newPassword,
                confirmPassword: this.confirmPassword,
                zipCode: this.newZip
            }
            alert(JSON.stringify(credentials))
            fetch("/newUser",{
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
            })
        }
        //end register
    }
})


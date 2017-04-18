/**
 * Created by kaya on 4/17/2017.
 */
var express = require('express');
var app = express();
var port = 8000;

app.get('/', function (req,res) {
   res.sendFile(__dirname + '/views/index.html');
});

app.get('/register', function (req,res) {
    var firstname = req.query.firstname;
    var lastname = req.query.lastname;
    var email = req.query.email;
    var password = req.query.password;


    //format a new user info with json form.
    var user = {
        firstname: firstname,
        lastname: lastname,
        email : emial,
        password: password
    }
    res.send(user);

});
app.get('/login', function (req,res) {
    var defaultemail = "japan.product@gmail.com";
    var defaultPass = "JP";

    var given_email = req.query.email;
    var given_pass = req.query.password;


    /**
     * Todo:
     * For real, query mongo bd and see if there is an user that have the same password and email
     * should not compare with default values
     */
    if(defaultemail === given_email)
    {
        if(defaultPass === given_pass)
        {

            res.sendFile(__dirname + "/views/dashboard.html");
        }

    }
    else
    {
        res.send("Login Fail");
    }


});
app.listen(port);
console.log("running @ http://localhost:8000");
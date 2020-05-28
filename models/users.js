var db= require('../connection');
var request = new db.Request();


var users = {
    adduser : function(userObj){
        const userId = userObj.userId;
        const userName = userObj.userName;
        const userEmail = userObj.userEmail;
        const userPassword = userObj.userPassword;
        const mobileNo = userObj.mobileNo;
        return request.query("insert into userSchema ([userId],[userName],[userEmail],[userPassword],[mobileNo]) values('"+userId+"','" + userName + "','" + userEmail + "','" + userPassword + "','" + mobileNo + "')")
    },
}

module.exports = users;
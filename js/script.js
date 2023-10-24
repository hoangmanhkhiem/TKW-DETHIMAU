// coding implementation
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
var ck_rating = /^[0-9]{0,5}$/;

function validate(form){
    var email = form.email.value;
    var rating = form.rating.value;
    var errors = [];

    if(!ck_email.test(email)) {
        errors[errors.length] = "You must enter a valid email address.";
    }

    if(!ck_rating.test(rating)) {
        errors[errors.length] = "You must enter a valid rating";
    }

    if(errors.length > 0){
        reportErrors(errors);
        return false;
    }
    return true;
}

function reportErrors(errors){
    var msg = "Please Enter Valide Data...\n";
    for(var i=0; i<errors.length; i++){
        var numError = i+1;
        msg += "\n" + numError + ". " + errors[i];
    }
    alert(msg);
}
// end coding implementation

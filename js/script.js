// coding implementation
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

function commentForm(f)
{
    if(f.email.value.length == 0) {
        alert("Email must be not null");
        f.email.focus();
        return ;
    }
    if(check_email.test(f.email.value) == false) {
        alert("Email is not valid");
        f.email.focus();
        return;
    }
    if(f.com.value.length == 0 ) {
        alert("Comment must be not null");
        f.com.focus();
        return;
    }
    if(f.rate.value.length == 0) {
        alert("Rating must be not null");
        f.rate.focus();
        return;
    }
    if(isNaN(f.rate.value)) {
        alert("Rating must be a number");
        f.rate.focus();
        return;
    }
    alert("Success"); 
}
// end coding implementation
 function validateForm() {
    let dj1 = document.forms['PreferenceEditForm']['dj1checkbox'].checked;
    let dj2 = document.forms['PreferenceEditForm']['dj2checkbox'].checked;
    let dj3 = document.forms['PreferenceEditForm']['dj3checkbox'].checked;
    let dj4 = document.forms['PreferenceEditForm']['dj4checkbox'].checked;

    let playlist1 = document.forms['PreferenceEditForm']['playlist1checkbox'].checked;
    let playlist2 = document.forms['PreferenceEditForm']['playlist2checkbox'].checked;
    let playlist3 = document.forms['PreferenceEditForm']['playlist3checkbox'].checked;
    let playlist4 = document.forms['PreferenceEditForm']['playlist4checkbox'].checked;

    let genre1 = document.forms['PreferenceEditForm']['genre1checkbox'].checked;
    let genre2 = document.forms['PreferenceEditForm']['genre2checkbox'].checked;
    let genre3 = document.forms['PreferenceEditForm']['genre3checkbox'].checked;
    let genre4 = document.forms['PreferenceEditForm']['genre4checkbox'].checked;
    
    let language1 = document.forms['PreferenceEditForm']['language1checkbox'].checked;
    let language2 = document.forms['PreferenceEditForm']['language2checkbox'].checked;
    let language3 = document.forms['PreferenceEditForm']['language3checkbox'].checked;
    let language4 = document.forms['PreferenceEditForm']['language4checkbox'].checked;

    if ((dj1 || dj2 || dj3 || dj4 )== false) {
        alert('You must choose 1 DJ!');
        return false
    }

    if ((playlist1 || playlist2 || playlist3 || playlist4) == false) {
        alert('You must choose 1 playlist!');
        return false
    }

    if ((genre1 || genre2 || genre3 || genre4) == false) {
        alert('You must choose 1 Genre!');
        return false
    }

    if ((language1 || language2 || language3 || language4) == false) {
        alert('You must choose 1 Language!');
        return false
    }
    return true;
} 

function submitForm() {
    if (validateForm()) {
        window.open ('/listener_preferences','_self',false)
    }
}


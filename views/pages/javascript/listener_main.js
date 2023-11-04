
console.log("DOM fully loaded and prased;");
    
document.getElementById('Like').addEventListener('click', function() {
    like();
});

function dislike() {
    document.getElementById('Like').setAttribute('style','background-color:grey');
    document.getElementById('Dislike').setAttribute('style','background-color:blue')
}

function like() {
    document.getElementById('Like').setAttribute('style','background-color:blue');
    document.getElementById('Dislike').setAttribute('style','background-color:grey')
}

document.getElementById('Dislike').addEventListener('click', function() {
    dislike();
});

document.getElementById('SearchButton').addEventListener('click',  function() {
    search();
});

function search() {
    console.log("searching");
    let x = document.getElementById('searchFeature').value;
    if (x == '') {
        alert('Cannot have empty text!');
        return false;
    }
    alert("you searched " + x);
    return true;
}
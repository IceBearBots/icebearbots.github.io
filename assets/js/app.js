window.oncontextmenu = function() {
    return false;
}
window.onload = function() {
    console.log(new Date + ': Page fully loaded.')
    var navshare = document.getElementById('navshare');
    navshare.addEventListener('click', () => {
        try {
            navigator.share();
        } catch (err) {
            alert("Unable to share Site. Just try copying the link manually instead.")
            console.log(new Date + ': Error encountered.\n' + err);
            }
    })
}
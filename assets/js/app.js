window.onload = function() {
    console.log(new Date + ': Page fully loaded.')
    var navshare = document.getElementById('navshare');
    var copyurl = location.href;
    navshare.addEventListener('click', () => {
        try {
            navigator.share({
                title: "Icey's Site",
                url: copyurl
            })
        } catch (err) {
            alert("Unable to share Site. Just try copying the link manually instead.")
            console.log(new Date + ': Error encountered while sharing Site.\n' + err);
        }
    })
    var privacyalert = document.getElementById('privacyopen');
    privacyalert.addEventListener('click', () => {
        try {
            alert(`We don't collect any data. We don't even have a database to store stuff.\nIf NSA comes around asking, we have nothing to give them, period.`)
        } catch(err) {
            document.write(`We don't collect any data. We don't even have a database to store stuff.<br>If NSA comes around asking, we have nothing to give them, period.`)
            console.log(new Date + ': Error encountered while displaying Privacy Policy.\n' + err) 
        }
    })
    window.oncontextmenu = function() {
        return false;
    }
}
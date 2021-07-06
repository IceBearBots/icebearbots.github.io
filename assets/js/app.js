window.addEventListener('load', () => {
    console.log(new Date + ': Page fully loaded.')
    var navshare = document.getElementById('navshare');
    var copyurl = location.href;
    navshare.addEventListener('click', () => {
        try {
            navigator.share({
                title: "Icey's Site",
                url: copyurl
            })
            console.log(new Date + ': Share menu has loaded.')
        } catch (err) {
            alert("Unable to share Site. Just try copying the link manually instead.")
            console.log(new Date + ': Error encountered while sharing Site.\n' + err);
        }
    })
    var privacyalert = document.getElementById('privacyopen');
    privacyalert.addEventListener('click', () => {
        try {
            alert(`We don't collect any data. We don't have a database to store anything actually ¯\\_(ツ)_/¯.\nIf FBI comes around enquiring about you, we have nothing to give them.`)
        } catch(err) {
            document.write(`We don't collect any data. We don't have a database to store anything actually ¯\\_(ツ)_/¯.<br>If FBI comes around enquiring about you, we have nothing to give them.`)
        }
    })
    window.addEventListener('contextmenu', (e) => {
        return false;
    })
})
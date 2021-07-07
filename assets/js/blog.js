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
            alert("Unable to Share Page. Just try copying the link manually instead.")
            console.log(new Date + ': Error encountered while sharing Site.\n' + err);
        }
    })
    var privacyopen = document.getElementById('privacyopen');
    privacyopen.addEventListener('click', () => {
        location.replace(`../privacy.html`)
    })
    window.addEventListener('contextmenu', (e) => {
        return false;
    })
})
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
            console.error(new Date + ': Error encountered while sharing Site.\n' + err);
        }
    })
    var privacyopen = document.getElementById('privacyopen');
    privacyopen.addEventListener('click', () => {
        location.replace('https://icebearbots.github.io/privacy.html')
    })
    const menu = document.querySelector(".custommenu");
    const menuOption = document.querySelector(".custommenuoption");
    var menuvisible = false;
    var openlink = document.getElementById('openlink');
    var sourcecode = document.getElementById('sourcecode');
    var copylinkoption = document.getElementById('copylink');
    var rawimgvid = document.getElementById('rawimgvid');
    var copytext = document.getElementById('copytext')
    window.addEventListener("contextmenu", e => {
        e.preventDefault();
        try {
            menu.style.left = `${e.pageX}px`;
            menu.style.top = `${e.pageY}px`;
            sourcecode.innerHTML = `<a href="javascript:var code = document.documentElement.innerHTML;document.write('<html></html>');document.body.appendChild(document.createTextNode(code));">View Source</a>`
            if(e.target.tagName === "A") {
                openlink.innerHTML = `<a href="${e.target.href}" target="blank">Open Link</a>`;
                copylinkoption.innerHTML = `<a href="javascript:navigator.clipboard.writeText('${e.target.href}').then(() => {console.log(new Date + 'Successfully copied link to clipboard.')}).catch(err => {console.error(new Date + ': Error encountered while copying link.\n' + err)})">Copy Link</a>`
                openlink.style.display = 'block';
                copylinkoption.style.display = 'block';
            } else {
                openlink.style.display = 'none';
                copylink.style.display = 'none';
            }
            if(e.target.tagName === "IMG" || e.target.tagName === "VIDEO") {
                rawimgvid.innerHTML = `<a href="${e.target.src}" target="blank">View raw ${e.target.tagName.toLowerCase()}</a>`
                rawimgvid.style.display = 'block';
            } else {rawimgvid.style.display = 'none';}
            if(window.getSelection().toString().length > 0) {
                copytext.innerHTML = `<a href="javascript:navigator.clipboard.writeText('${window.getSelection().toString()}').then(() => {console.log(new Date + 'Successfully copied text to clipboard.')}).catch(err => {console.error(new Date + ': Error encountered while copying text.\n' + err)})">Copy Selected Text</a>`
                copytext.style.display = 'block';
            } else {copytext.style.display = 'none';}
            menu.style.display = 'block';
            menuvisible = true;
        } catch(err) {
        }
    })
    window.addEventListener("click", e => {
        if(menuvisible === true & e.target !== menu) {
            try {
                menu.style.display = 'none';
                menuvisible = false;    
            } catch(err) {
            }
        }
    })
})
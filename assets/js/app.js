window.addEventListener('load', () => {
    console.log(new Date + ': Page fully loaded.');
    var navshare = document.getElementById('navshare');
    var copyurl = location.href;
    navshare.addEventListener('click', () => {
        try {
            navigator.share({
                url: copyurl,
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
    var devtool = document.getElementById('devtool');
    var devopen = document.getElementById('devopen');
    devopen.addEventListener('click', () => {
        try {
            devtool.style.display = 'block';
            var devsubmit = document.getElementById('devsubmit');
            var devinput = document.getElementById('devinput');
            devsubmit.addEventListener('click', () => {
                try {
                    eval(devinput.value);
                    devsubmit.scrollTo({behavior: 'auto'})
                } catch (err) {
                    var deverr = document.getElementById('deverr');
                    deverr.innerHTML = deverr.innerHTML + `<p>${err}</p>`;
                }
            })
        } catch(err) {
            console.error(new Date + ': Failed to open dev tools.')
        }
    })
    var devclose = document.getElementById('devclose');
    devclose.addEventListener('click', () => {
        devtool.style.display = 'none';
    })
    const menu = document.querySelector(".custommenu");
    const menuOption = document.querySelector(".custommenuoption");
    var menuvisible = false;
    var openlink = document.getElementById('openlink');
    var sourcecode = document.getElementById('sourcecode');
    var sharelinkoption = document.getElementById('sharelink');
    var rawimgvid = document.getElementById('rawimgvid');
    var copytext = document.getElementById('copytext')
    window.addEventListener("dblclick", e => {
        if(e.target.tagName === "IMG" || e.target.tagName === "VIDEO") {
            location.href = e.target.src;
        }
    })
    window.addEventListener("contextmenu", e => {
        e.preventDefault();
        try {
            menu.style.left = `${e.pageX}px`;
            menu.style.top = `${e.pageY}px`;
            sourcecode.innerHTML = `<a href="javascript:var code = document.documentElement.innerHTML;document.write('<html></html>');document.body.appendChild(document.createTextNode(code));">View Source</a>`
            sourcecode.style.display = 'block';
            if(e.target.tagName === "A") {
                openlink.innerHTML = `<a href="${e.target.href}" target="blank">Open Link</a>`;
                sharelinkoption.innerHTML = `<a href="javascript:navigator.share({url:'${e.target.href}'});">Share Link</a>`
                openlink.style.display = 'block';
                sharelinkoption.style.display = 'block';
            } else {
                openlink.style.display = 'none';
                sharelinkoption.style.display = 'none';
            }
            if(e.target.tagName === "IMG" || e.target.tagName === "VIDEO") {
                rawimgvid.innerHTML = `<a href="${e.target.src}" target="blank">View raw ${e.target.tagName.toLowerCase()}</a>`
                rawimgvid.style.display = 'block';
            } else {rawimgvid.style.display = 'none';}
            if(window.getSelection().toString().length > 0) {
                copytext.innerHTML = `<a href="javascript:navigator.clipboard.writeText('${window.getSelection().toString()}')">Copy Selected Text</a>`
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
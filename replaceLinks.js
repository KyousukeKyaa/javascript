function replaceLinks() {
    var lnk = document.getElementsByTagName('a');
    for (var h = 0; h < lnk.length; h++) {
        if (lnk[h].href.indexOf('http://original-link') == 0) lnk[h].href = lnk[h].href.replace('http://original-link', 'http://new-link');
    }
}

// ==UserScript==
// @name         Related Work Button
// @version      0.1.1
// @description  Adds a Related Works button to the ao3 user page
// @author       godoflaundrybaskets
// @include      http*://archiveofourown.org/*users*
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://github.com/godoflaundry/fandom-scripts/raw/master/tapermonkey/relatedwork.pub.user.js
// @downloadURL  https://github.com/godoflaundry/fandom-scripts/raw/master/tapermonkey/relatedwork.pub.user.js
/* globals jQuery, $, waitForKeyElements */
// ==/UserScript==

const user_regex = /https:\/\/archiveofourown\.org\/users\/([^/]+)/;

$( document ).ready(function() {
    let m = window.location.href.match(user_regex);
    if (m === null) {
        return;
    }
    console.log("On a profile, adding realted work button info...")

    $("#dashboard ul").last().append(
        `<li><a href="${m[0]}/related_works?target=blank">Related Works</a></li>`
    )

});

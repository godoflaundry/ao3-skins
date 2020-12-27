// ==UserScript==
// @name         See Podfic First
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  moves the inspired to the top of the page
// @author       GodOfLaundryBaskets
// @include      http*://archiveofourown.org/*works*
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js
// @grant        none
// ==/UserScript==

function addPodficsOnSamePage() {
    const children = Array.from(document.querySelectorAll('div.children'));
    if (!children.length) {
        return false;
    }
    $("div.notes").first().append("<br />").append(children);
    $("p.jump").first().remove();
    return true;
}

function addPodficsAtEndOfWork() {
    const jumpBlock = Array.from(document.querySelectorAll('p.jump'));

    if (!jumpBlock.length) {
        return false;
    }

    $(jumpBlock).css("font-weight", "bold")
    $(jumpBlock).css("background-color", "#BDA0CB");;
}

(function() {
    'use strict';
    var added = addPodficsOnSamePage();

    if(!added) {
        addPodficsAtEndOfWork()
    }
})();
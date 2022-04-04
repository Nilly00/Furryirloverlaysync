// ==UserScript==
// @name         Furry_Irl Designs Overlay
// @namespace    http://tampermonkey.net/
// @version      3.0.0
// @description  try to take over the canvas!
// @author       oralekin, LittleEndu, seminal_sound
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @license      GPLv3
// @grant        none
// ==/UserScript==

function createImage(){
    document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = "https://raw.githubusercontent.com/Furryirlburner1/Furryirloverlaysync/main/reference.png";
                i.onload = () => {
                    if (i.width === i.height) {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
                    } else {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
                    }
                };
                return i;
            })())
}

function destroyImage(){
    document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].removeChild(document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].lastElementChild);
}
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = "https://raw.githubusercontent.com/Furryirlburner1/Furryirloverlaysync/main/reference.png";
                i.onload = () => {
                    if (i.width === i.height) {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
                    } else {
                        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
                    }
                };
                return i;
            })())
    }, false);
}

function myFunction () {
    //console.dir(document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0]);
    destroyImage();
    createImage();
    console.log("updated image");
}

var interval = setInterval(function () { myFunction(); }, 60000);

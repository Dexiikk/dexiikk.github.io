const currentDate = new Date();
const formattedDate = currentDate.toDateString().split(' ').slice(0, 3).join(' ') + ' ' + currentDate.toTimeString().split(' ')[0].split(':').slice(0, 3).join(':');
document.getElementById("dateTime").innerHTML = formattedDate;
const typingElement = document.querySelector('.typing');
let index = 0;
let currentText = '';
let isDeleting = false;
let currentMenu = 'main';

const menus = {
    main: `Select a menu:<br><span onclick="handleMenuClick('1')">[1] Who is Dex?</span><br><span onclick="handleMenuClick('2')">[2] Contact me</span><br><span onclick="handleMenuClick('3')">[3] My works</span>`,
    '1': `Who is DXVVAY?<br><br>I am developer that needs only CTRL, C and V. I like minors.<br><br><span onclick="handleMenuClick('B')">[B] Back</span>`,
    '2': `Contact:<br>- Email: <a href="mailto:dexvhateslgbt@gmail.com">dexvhateslgbt@gmail.com</a><br>- Discord: <a href="https://discord.com/users/1205234172252393532">@.dxvvay</a><br><br><span onclick="handleMenuClick('B')">[B] Back</span>`,
    '3': `Some of my Projects:<br><br>
- <strong>Simple Discord Bot</strong>: Discord Bot made in Python that has ticket&giveaway system and snipe command <a href="https://github.com/Dexiikk/discord-python-bot" target="_blank">[GitHub]</a><br>
<span onclick="handleMenuClick('B')">[B] Back</span>`,

};

function handleMenuClick(menuKey) {
    if (menuKey in menus && currentMenu !== menuKey) {
        isDeleting = true;
        typeDeleteAnimation(() => {
            currentMenu = menuKey;
            currentText = menus[menuKey];
            index = 0;
            typeDeleteAnimation();
        });
    } else if ((menuKey === 'B' || menuKey === 'b') && currentMenu !== 'main') {
        isDeleting = true;
        typeDeleteAnimation(() => {
            currentMenu = 'main';
            currentText = menus.main;
            index = 0;
            typeDeleteAnimation();
        });
    }
}

function typeDeleteAnimation(callback) {
    let speed = 7; // default typing speed
    let deleteSpeed = 3; // default deletion speed

    if (currentMenu === '1' || currentMenu === '3') {
        speed = 1; // Makes the typing faster for "Who is glizzy".
        deleteSpeed = 1; // Makes the deletion faster for "Who is glizzy". Adjust as needed.
    }

    if (isDeleting && typingElement.innerHTML !== '') {
        if (currentText.charAt(index - 1) === ">") {
            const openTagIndex = currentText.lastIndexOf("<", index);
            const tagName = currentText.substring(openTagIndex + 1, currentText.indexOf(" ", openTagIndex));
            const startTagIndex = currentText.lastIndexOf(`</${tagName}>`, index);
            index = startTagIndex;
        } else {
            index--;
        }
        currentText = currentText.slice(0, index);
        typingElement.innerHTML = currentText;

        setTimeout(() => typeDeleteAnimation(callback), deleteSpeed);
    } else if (isDeleting) {
        isDeleting = false;
        if (callback) callback();
    } else if (!isDeleting && index < currentText.length) {
        if (currentText.charAt(index) === "<") {
            if (currentText.substr(index, 4) === "<br>") {
                const br = document.createElement('br');
                typingElement.appendChild(br);
                index += 4;
            } else {
                const closingTagIndex = currentText.indexOf(">", index);
                const tagName = currentText.substring(index + 1, closingTagIndex).split(" ")[0];
                const endTagIndex = currentText.indexOf(`</${tagName}>`, index) + `</${tagName}>`.length;
                const outerHTML = currentText.substring(index, endTagIndex);
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = outerHTML;
                const childElement = tempDiv.firstChild;

                if (tagName === "a") {
                    childElement.target = "_blank";
                    speed = 1; // Faster typing for <a> tag
                } else if (tagName === "span") {
                    childElement.onclick = function() {
                        const menuKey = childElement.getAttribute('onclick').replace("handleMenuClick('", '').replace("')", '');
                        handleMenuClick(menuKey);
                    };
                    speed = 1; // Faster typing for <span> tag
                }

                typingElement.appendChild(childElement);
                index = endTagIndex;
            }
        } else {
            typingElement.innerHTML += currentText.charAt(index);
            index++;
        }

        setTimeout(typeDeleteAnimation, speed);
    }
}


function handleUserInput(event) {
    const key = event.key;
    if (key in menus && currentMenu !== key) {
        isDeleting = true;
        typeDeleteAnimation(() => {
            currentMenu = key;
            currentText = menus[key];
            index = 0;
            typeDeleteAnimation();
        });
    } else if ((key === 'B' || key === 'b') && currentMenu !== 'main') {
        isDeleting = true;
        typeDeleteAnimation(() => {
            currentMenu = 'main';
            currentText = menus.main;
            index = 0;
            typeDeleteAnimation();
        });
    }
}

document.addEventListener('keydown', handleUserInput);

// Initialize the typing animation with the main menu on page load
currentText = menus.main;
typeDeleteAnimation();
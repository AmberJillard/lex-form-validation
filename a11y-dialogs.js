/* eslint-disable no-console */


const dialogElements = document.querySelectorAll('[data-name="popup-wrapper"]');
const mainEl = document.querySelector('main');

dialogElements.forEach((dialogElement) => {
	// eslint-disable-next-line no-undef
	const dialog = new A11yDialog(dialogElement, mainEl);

	dialog.on('show', (dialogEl, triggerEl) => {
		console.log(dialogEl);
		console.log(triggerEl);
	});
});


/*
In one of the edits about dialog boxes, you indicated that you need to add "aria-modal='true'" to the dialog box. You also asked to use the library "a11y-dialog".   But when testing the operation of dialog boxes, you and I did not notice that they do not work correctly.
The fact is that this attribute was to blame for everything when it was used in conjunction with the above library. 
 Perhaps the request to add the attribute " aria-modal='true'" was after the dialog boxes were fully configured. 
So I just removed the extra attributes https://prnt.sc/nv_EjLM29GIV
 */

$(document).ready(function() {
    // Check if #speaking-presentations element exists
    const presentationsContainer = document.querySelector('#speaking-presentations');
    if (presentationsContainer) {
        presentationsContainer.removeAttribute('role');
        presentationsContainer.removeAttribute('aria-modal');
    }

    // Check if #speaking-presentations > div.dialog__content element exists
    const presentationsDialog = document.querySelector("#speaking-presentations > div.dialog__content");
    if (presentationsDialog) {
        presentationsDialog.setAttribute('aria-modal', 'true');
    }
});


$(window).on('load', () => {
    const element = document.querySelector('#speaking-presentations')
    function trapFocus (element) {
        if (element !== null) {
            const focusableEls = element.querySelectorAll('#speaking-presentations > div.dialog__content > div.w-embed > button')
            const firstFocusableEl = focusableEls[0]
            const lastFocusableEl = focusableEls[focusableEls.length - 1]
            const KEYCODE_TAB = 9

            element.addEventListener('keydown', function (e) {
                const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB)

                if (!isTabPressed) {
                    return
                }

                if (e.shiftKey) /* shift + tab */ {
                    if (document.activeElement === firstFocusableEl) {
                        lastFocusableEl.focus()
                        e.preventDefault()
                    }
                } else /* tab */ {
                    if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus()
                        e.preventDefault()
                    }
                }
            })
        }
    }
    trapFocus(element)
})

$(document).ready(function() {
    // Check if #experiential-learning element exists
    const experientialContainer = document.querySelector('#experiential-learning');
    if (experientialContainer) {
        experientialContainer.removeAttribute('role');
        experientialContainer.removeAttribute('aria-modal');
    }

    // Check if #experiential-learning > div.dialog__content element exists
    const experientialDialog = document.querySelector("#experiential-learning > div.dialog__content");
    if (experientialDialog) {
        experientialDialog.setAttribute('aria-modal', 'true');
    }
});

$(window).on('load', () => {
    const element = document.querySelector('#experiential-learning')
    function trapFocusTwo (element) {
        if (element !== null) {
            const focusableEls = element.querySelectorAll('#experiential-learning > div.dialog__content > div.w-embed > button')
            const firstFocusableEl = focusableEls[0]
            const lastFocusableEl = focusableEls[focusableEls.length - 1]
            const KEYCODE_TAB = 9

            element.addEventListener('keydown', function (e) {
                const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB)

                if (!isTabPressed) {
                    return
                }

                if (e.shiftKey) /* shift + tab */ {
                    if (document.activeElement === firstFocusableEl) {
                        lastFocusableEl.focus()
                        e.preventDefault()
                    }
                } else /* tab */ {
                    if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus()
                        e.preventDefault()
                    }
                }
            })
        }
    }
    trapFocusTwo(element)
})


$(document).ready(function() {
    // Check if #brand-ambassador element exists
    const brandContainer = document.querySelector('#brand-ambassador');
    if (brandContainer) {
        brandContainer.removeAttribute('role');
        brandContainer.removeAttribute('aria-modal');
    }

    // Check if #brand-ambassador > div.dialog__content element exists
    const brandDialog = document.querySelector("#brand-ambassador > div.dialog__content");
    if (brandDialog) {
        brandDialog.setAttribute('aria-modal', 'true');
    }
});


$(window).on('load', () => {
    const element = document.querySelector('#brand-ambassador')
    function trapFocusThree (element) {
        if (element !== null) {
            const focusableEls = element.querySelectorAll('#brand-ambassador > div.dialog__content > div.w-embed > button')
            const firstFocusableEl = focusableEls[0]
            const lastFocusableEl = focusableEls[focusableEls.length - 1]
            const KEYCODE_TAB = 9

            element.addEventListener('keydown', function (e) {
                const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB)

                if (!isTabPressed) {
                    return
                }

                if (e.shiftKey) /* shift + tab */ {
                    if (document.activeElement === firstFocusableEl) {
                        lastFocusableEl.focus()
                        e.preventDefault()
                    }
                } else /* tab */ {
                    if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus()
                        e.preventDefault()
                    }
                }
            })
        }
    }
    trapFocusThree(element)
})

$(window).on('load', () => {
    $('#speaking-presentations > div.dialog__content > div.popup-content.designer-scroll.w-richtext > h2').remove()
    $('#experiential-learning > div.dialog__content > div.popup-content.designer-scroll.w-richtext > p:nth-child(4)').remove()
    $('#brand-ambassador > div.dialog__content > div.popup-content.designer-scroll.w-richtext > p:nth-child(5)').remove()
})

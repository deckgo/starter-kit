class MenuList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {

        const menuListActions = await buildMenuListActions();

        this.innerHTML = '<ion-content><ion-list no-margin>' + menuListActions + '</ion-list></ion-content>';
    }
}

buildMenuListActions = () => {
    return new Promise(async (resolve) => {
        let result = '';

        result += '<ion-item ion-item button detail="false" onclick="displaySlideNotes()" color="primary" style="--border-style: none;"><ion-icon name="clipboard" aria-label="Display slide notes" slot="end"></ion-icon><ion-label>Display slide notes</ion-label></ion-item>';
        result += '<ion-item ion-item button detail="false" onclick="displayRemoteControl()" color="primary" style="--border-style: none;"><ion-icon name="phone-portrait" aria-label="Remote control" slot="end"></ion-icon><ion-label>Remote control</ion-label></ion-item>';
        result += '<ion-item ion-item button detail="false" onclick="openShare()" color="primary" style="--border-style: none;"><ion-icon name="share" aria-label="Share this presentation" slot="end"></ion-icon><ion-label>Share</ion-label></ion-item>';
        result += '<ion-item ion-item button detail="false" onclick="openLink(\'https://deckdeckgo.com\')" style="--border-style: none; --ion-item-background: white;"><ion-icon src="/assets/icons/deckdeckgo.svg" aria-label="DeckDeckGo" slot="end"></ion-icon><ion-label>Created with DeckDeckGo</ion-label></ion-item>';

        resolve(result);
    });
};

customElements.define('menu-list', MenuList);

openMenu = async (ev) => {
    ev.preventDefault();

    const popoverController = document.querySelector('ion-popover-controller');

    if (!popoverController) {
        return;
    }

    await popoverController.componentOnReady();

    const popover = await popoverController.create({
        component: 'menu-list',
        translucent: true,
        event: ev
    });

    await popover.present();
};

openLink = async (link) => {
    window.open(link, '_blank');
    await document.querySelector('ion-popover-controller').dismiss();
};


openShare = async () => {
    if (navigator && navigator.share) {
        await shareMobile();
    } else {
        await shareDesktop();
    }

    await document.querySelector('ion-popover-controller').dismiss();
};

function shareMobile() {
    return new Promise(async (resolve) => {
        const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

        await navigator.share({
            title: document.title,
            url: shareUrl,
        });

        resolve();
    });
}

function shareDesktop() {
    return new Promise(async (resolve) => {
        const webSocialShare = document.querySelector('web-social-share');

        if (!webSocialShare || !window) {
            return;
        }

        const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

        const share = {
            displayNames: true,
            config: [{
                twitter: {
                    socialShareUrl: shareUrl,
                    socialSharePopupWidth: 300,
                    socialSharePopupHeight: 400
                }
            },{
                reddit: {
                    socialShareUrl: shareUrl,
                    socialSharePopupWidth: 300,
                    socialSharePopupHeight: 500
                }
            },{
                linkedin: {
                    socialShareUrl: shareUrl
                }
            },{
                email: {
                    socialShareBody: shareUrl
                }
            }, {
                whatsapp: {
                    socialShareUrl: shareUrl
                }
            }]
        };

        webSocialShare.share = share;

        webSocialShare.show = true;

        resolve();
    });
}

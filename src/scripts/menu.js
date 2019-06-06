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

        result += '<ion-item ion-item button onclick="howItWorks()" style="--border-style: none;"><ion-icon name="help" ariaLabel="How it works" slot="end"></ion-icon><ion-label>How it works</ion-label></ion-item>';
        result += '<ion-item ion-item button onclick="openShare()" style="--border-style: none;"><ion-icon name="share" ariaLabel="Share this presentation" slot="end"></ion-icon><ion-label>Share</ion-label></ion-item>';
        result += '<ion-item ion-item button onclick="openLink(\'https://deckdeckgo.com\')" style="--border-style: none;"><ion-icon src="/assets/icons/deckdeckgo.svg" ariaLabel="DeckDeckGo" slot="end"></ion-icon><ion-label>Created with DeckDeckGo</ion-label></ion-item>';

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

howItWorks = async () => {
    await presentHowItWorks();
    await document.querySelector('ion-popover-controller').dismiss();
};

presentHowItWorks = async () => {
    const alertController = document.querySelector('ion-alert-controller');

    if (!alertController) {
        return;
    }

    await alertController.componentOnReady();

    const alert = await alertController.create({
        header: 'How does it work?',
        message: 'To navigate, just swipe the slides, use the left and right arrows keys of your keyboard or use the actions available at the bottom right',
        buttons: ['OK']
    });

    await alert.present();
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

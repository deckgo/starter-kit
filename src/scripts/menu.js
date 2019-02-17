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

        result += '<ion-item ion-item button onclick="howItWorks()" style="--border-style: none;"><ion-icon name="help" slot="end"></ion-icon><ion-label>How it works</ion-label></ion-item>';
        result += '<ion-item ion-item button onclick="openShare()" style="--border-style: none;"><ion-icon name="share" slot="end"></ion-icon><ion-label>Share</ion-label></ion-item>';

        resolve(result);
    });
};

customElements.define('menu-list', MenuList);

openMenu = async (ev) => {
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

openShare = async () => {
    const webSocialShare = document.querySelector('web-social-share');

    if (!webSocialShare || !window) {
        return;
    }

    const share = {
        displayNames: true,
        config: [{
            twitter: {
                socialShareUrl: window.location.href,
                socialSharePopupWidth: 300,
                socialSharePopupHeight: 400
            }
        },{
            reddit: {
                socialShareUrl: window.location.href,
                socialSharePopupWidth: 300,
                socialSharePopupHeight: 500
            }
        },{
            linkedin: {
                socialShareUrl: window.location.href
            }
        },,{
            email: {
                socialShareBody: window.location.href
            }
        }, {
            whatsapp: {
                socialShareUrl: window.location.href
            }
        }]
    };

    webSocialShare.share = share;

    webSocialShare.show = true;

    await document.querySelector('ion-popover-controller').dismiss();
};

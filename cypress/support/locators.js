const locators = {
    BUTTONS: {
        BUTTON_CLEAR: 'button[type=button][aria-label="Limpar"]',
        BUTTON_CALCULATE: 'button[type="button"][id="calculator-discounted-shipping-button"]'
    },

    CEPS: {
        CEP_ORIGIN: '[id=originPostcode]',
        CEP_DESTIATION: '[id=destinationPostcode]'
    },
    PACKAGE: {
        PACKAGE_WEIGHT_LIST: 'div[tabindex="0"][role="combobox"][id="weight"]',
        PACKAGE_WEIGHT: 'li[tabindex="-1"][data-value="0.3"]'
    },

    DIMENSIONS: {
        HEIGHT: 'input[id=packageHeight]',
        WIDTH: 'input[id=packageWidth]',
        LENGTH:'input[id=packageDepth]'
    },

    VALIDATIONS: {
        INVALID_HEIGHT: 'p[id="packageHeight-helper-text"]',
        INVALID_WIDTH: 'p[id="packageWidth-helper-text"]',
        INVALID_LENGTH: 'p[id="packageDepth-helper-text"]',
        EXCESS_PACKAGE: 'section[class="sc-ckdEwu aWjdg"]',
        EXTRA_DISCOUNT: 'img[id="home-banner-campanha-image"]'
    }
}
export default locators;
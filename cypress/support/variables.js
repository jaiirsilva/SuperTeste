const variables = {
    lOCATION: {
        CEP_ORIGIN: '08090284',
        CEP_DESTIATION: '05407002',
    },
    VALID_PACKAGE_DIMENSIONS: {
        HEIGHT: '2',
        WIDTH: '11',
        LENGTH: '16'
    },
    INVALID_PACKAGE_DIMENSIONS: {
        HEIGHT: '151',
        WIDTH: '7',
        LENGTH: '12'
    },

    PACKAGE_EXCESS_DIMENSIONS: {
        HEIGHT: '150',
        WIDTH: '140',
        LENGTH: '20',
        TEXT_EXCESS: 'a soma resultante da altura + largura + comprimento não deve superar 300 cm.'
    }
}
export default variables;
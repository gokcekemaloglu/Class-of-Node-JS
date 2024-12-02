class CustomError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode  || 500 // soldaki keyword'ü biz veriyoruz this.hata'da diyebiliriz
    }
}

module.exports = CustomError;

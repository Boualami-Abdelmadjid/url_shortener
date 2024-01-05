const { createLogger, format, transports } = require("winston");

const logger = createLogger({
    transports: [
        new transports.File({
            level:'info',
            filename:'./logs/info.log'
    }),
    new transports.File({
        level:'error',
        filename:'./logs/error.log'
})
    ],
    format:  format.combine(
        format.timestamp(),
        format.json()
    )
})

module.exports = logger
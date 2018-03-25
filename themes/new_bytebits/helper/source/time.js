const { DateTime } = require("luxon");



const date = datetime =>
    DateTime
        .fromMillis(datetime)
        .setLocale("en")
.toLocaleString(DateTime.DATE_FULL)



module.exports = {
    date
}
//stub

function isValidLogin(username, password) {
    if (username === "admin" && password === "admin123") { // fake login credentials, eventually will be db query
        return true
    }
    else 
        return false
}

module.exports = isValidLogin
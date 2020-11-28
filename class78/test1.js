var test1 = function () {
    console.log("this is test from test1.js")

    this.abc = function () {
        console.log("I am abc")
    }
}

module.exports = new test1()
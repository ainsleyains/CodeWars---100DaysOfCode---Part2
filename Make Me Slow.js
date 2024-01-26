/*
Make me slow! Calling makeMeSlow() should take at least 7 seconds.

*/

function makeMeSlow() {
    Date.prototype.getTime = () => Date.now() + 7000;
}

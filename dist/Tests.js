/**
 * Unit tests for anything I developed as a part of this.
 * @module Tests
 */

/**
 * Stub a forwarded message with date and plaintext body.
 */
function GetTestMessage(forwarded = false) {
    if (forwarded) {
    return {
        getSubject: () => { return fwdSubject; },
        getPlainBody: () => { return fwdBody; },
        getDate: () => { return new Date(2018, 1, 1); },
        };
    }
    return {
        getSubject: () => { return "Test Subject"; },
        getPlainBody: () => { return "Test Body"; },
        getDate: () => { return new Date(2018, 1, 1); },
        };
}

/**
 * Test the getForwardedMessageDate function.
 */
function TestGetForwardedMessageDate() {
    var testDate = getForwardedMessageDate(GetTestMessage(false));
    var expectedDate = new Date(2018, 1, 1);
    if (testDate.getTime() != expectedDate.getTime()) {
        throw "TestGetForwardedMessageDate failed with non-forwarded message.\nExpected date: " + expectedDate + "\nReturned date: " + testFwdDate;
    }
    var testFwdDate = getForwardedMessageDate(GetTestMessage(true));
    var expectedDate = new Date(2023, 4, 17, 22, 36, 20);
    if (testFwdDate.getTime() != expectedDate.getTime()) {
        throw "TestGetForwardedMessageDate failed with forwarded message.\nExpected date: " + expectedDate + "\nReturned date: " + testFwdDate;
    }
}
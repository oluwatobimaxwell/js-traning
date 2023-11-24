/*
    To test that any web page loads and render correctly
    we need:
    1. URL of the web page e.g. https://web.bet9ja.com/Sport/Default.aspx
    2. Confirm that an element that we're sure 
    to be on the screen exist e.g. button element 
    with id = "h_w_cLogin_ctrlLogin_lnkBtnLogin"
*/

class TestPage {
    url = "";

    constructor(url){
        this.url = url;
    }

    locateById(elementId){
        console.log("Page loaded successfully")
    }
}

// I want to test some pages now
const bet9jaHopePage = new TestPage("https://web.bet9ja.com/Sport/Default.aspx");
bet9jaHopePage.locateById("login-button-id");

const bet9jaContactPage = new TestPage("https://account.bet9ja.com/messaging-fe/ContactUs");
bet9jaContactPage.locateById("send-us-message-button");
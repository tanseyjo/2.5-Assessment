//ASSESSMENT 2

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    after: browser => {
        browser.end()
    },

    //Even and Odds 
    'Test even and odd entry': browser => {
        browser
            .setValue('input[name="evenOddInput"]', 4)
            .click('button[name="evenOddButton"]')
            .verify.containsText('span[name="evenResults"]', '4')
            .setValue('input[name="evenOddInput"]', 7)
            .click('button[name="evenOddButton"]')
            .verify.containsText('span[name="oddResults"]', '7')
    },

    //Filter Object
    'Filter Object Test': browser => {
        browser
            .setValue('input[name="objectFilterInput"]', 'title')
            .click('button[name="objectFilterButton"]')
            .expect.element('span[name="objectFilterResults"]').text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')
    },

    //Filter String
    'Filter String Test': browser => {
        browser
            .setValue('input[id="nameFilterInput"]', 'Tyler')
            .click('button[id="nameFilterButton"]')
            .expect.element('span[name="nameFilterResults"]').text.to.equal('Filtered Names: [ "Tyler" ]')
    },

    //Palindrome
    'Palindrome True Test': browser => {
        browser
            .setValue('input[name="palindromeInput"]', 'bob')
            .click('button[name="palindromeButton"]')
            .expect.element('span[name="palindromeResults"]').text.to.contain('true')
    },

    'Palindrome False Test': browser => {
        browser
            .setValue('input[name="palindromeInput"]', 'cat')
            .click('button[name="palindromeButton"]')
            .expect.element('span[name="palindromeResults"]').text.to.contain('false')
    },

    //Sum 
    'Sum Test': browser => {
        browser
            .setValue('input[name="sumInput1"]', 2)
            .setValue('input[name="sumInput2"]', 3)
            .click('button[name="sumButton"]')
            .expect.element('span[name="sumResults"]').text.to.contain(5)
    }





    // 'search by key': function(browser){
    //     //browser replace with projectPage in step2
    //         .setValue('object filter here', 'hairColor')
    //         .click
    //         .expect.element
}
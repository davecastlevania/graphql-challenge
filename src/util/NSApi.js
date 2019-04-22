const url = 'https://api-dev.newstory.io/graphql';
const apiKey = '0123456789abcdef0123456789abcdef';
// Initial Access Token as Empty to Change Up Later
let accessToken;
/*
==================================
==== CURL REQUEST FOR SIGN IN ====
================================== 
{
  "query": "mutation {signInUser(email: \"{{email}}\", password:\"{{password}}\") { token viewer { uuid email firstName lastName } } }",
  "variables": null
}"

===== SETUP QUERY for SIGN IN=====
*/
const signInQuery = (email, password) => {
    return {
        "query": `mutation {
            signInUser(email: \"${email}\", password:\"${password}\") { 
                token viewer { 
                    uuid 
                    email
                    firstName
                    lastName 
                } 
            } 
        }`,
         "variables": null
  };
}
// Default Login Headers
const headers = {
    method: "POST",
    headers: { "ACCEPT": "application/json", "X-Api-Key": apiKey, "Content-Type": "application/json"  }
}
const nsApi = {

    signIn(email, pw) {
        const creds = {body: JSON.stringify(signInQuery(email, pw))}
        const headerBody = {...headers, ...creds }
         fetch(url, headerBody)
            .then(res => {
                // Returns promise
                return res.json()
            })
            // Then passes returned promise values
            // to accessToken variable
            .then(obj => {
                accessToken = obj.data.signInUser.token
                console.log('Token storage', accessToken)

            })
            // Needs Error Handling
    },

    viewAllReceipients() {

    },

    viewAllReceipientSurveys() {

    },

    viewSubmission() {

    },

    viewAllStats() {

    }

}

export default nsApi;
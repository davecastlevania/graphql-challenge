import { parse } from "url";

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
*/
const signInQuery = (email, password) => {
    return {
        "query": `mutation {
            signInUser(email: "${email}", password:"${password}") { 
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

/*
==================================
==== CURL REQUEST FOR viewAllReceipients ====
================================== 
{
  "query": "{ recipients { uuid name internalId } }",
  "variables": null
}
*/
const viewAllReceipientsQuery = () => {
    return {
        "query": "{ recipients { uuid name internalId } }",
        "variables": null
    }
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
            .then(jsonResponse => {
                accessToken = jsonResponse.data.signInUser.token
                console.log('Token storage', accessToken)
                headers.headers.Authorization = accessToken
                return accessToken;
            })
            // Needs Error Handling
    },

    viewAllReceipients() {
        const payLoad = { body: JSON.stringify(viewAllReceipientsQuery())};
        const headerBody = {...headers, ...payLoad}
        console.log(headerBody)
        fetch(url, headerBody)
            .then(res => {
            // Returns promise
                return res.json()
            })
            // Then passes returned promise values
            // to accessToken variable
            .then(jsonResponse => {
                console.log('Response?', jsonResponse.data.recipients)
                return jsonResponse.data.recipients;
            })
            // Needs Error Handling
    },

    viewAllReceipientSurveys() {

    },

    viewSubmission() {

    },

    viewAllStats() {

    }

}

export default nsApi;
const url = 'https://api-dev.newstory.io/graphql';
const apiKey = '0123456789abcdef0123456789abcdef';

let accessToken;


/*
==================================
==== CURL REQUEST FOR SIGN IN ====
================================== 
curl --location --request POST "https://api-dev.newstory.io/graphql" \
  --header "ACCEPT: application/json" \
  --header "X-Api-Key: {{api_key}}" \
  --header "Content-Type: application/json" \
  --data "{
  \"query\": \"mutation {signInUser(email: \\\"{{email}}\\\", password:\\\"{{password}}\\\") { token viewer { uuid email firstName lastName } } }\",
  \"variables\": null
}"
*/

const signInQuery = (email, password) => {
    return `
    query {
        mutation {
            signInUser(email: "${email}", password: "${password}") {
                token viewer {
                    uuid
                    email
                    firstName
                    lastName
                }
            }
        }
        variables: null
    }`
}

// Default Login Headers
const headers = {
    method: "POST",
    headers: { "ACCEPT": "application/json", "X-Api-Key": apiKey, "Content-Type": "application/json"  }
}


const nsApi = {

    signIn(email, pw) {
        console.log("You signed in right?", 'email: ', email)
        const creds = {body: JSON.stringify(signInQuery(email, pw))}
        const headerBody = {...headers, ...creds }
        console.log(headerBody)
        fetch(url, headerBody)
            .then(res => {
                console.log(res)
                return res
            })
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
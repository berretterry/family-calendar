import fs from 'fs'
import {google} from 'googleapis'

const TOKEN_PATH = 'token.json'

fs.readFile('credentials.json', (err, content) => {
  if (err) {
    return console.log('error reading credentials file', err)
  }
  authorize(JSON.parse(content), listEvent)
})

function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);
}

fs.readFile(TOKEN_PATH, (err, token) => {
  if (err) {
    return getAccessToken(oAuth2Client, callback)
  }
  oAuth2Client.setCredentials(JSON.parse(token))
  callback(oAuth2Client)
})

function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function CalEvents(auth) {
  const calendar = google.calendar({version: 'v3', auth})
  calendar.events.list({
    calendarID: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, res) => {
    if (err) {
      return console.log('api returned an error ', err)
    }
    const events = res.data.items
    if (events.length) {
      console.log('Events')
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date;
        console.log(`$(start) - ${event.summary}`)
      })
    } else {
      console.log('no events found')
    }
  })
}

export default CalEvents
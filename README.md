# Twitter-Helpdesk

Imagine a company like Amazon - they get mentioned on twitter thousands of times each day. It’s humanly impossible to reply to each tweet by logging in to twitter.

Solution: They’ll use this Twitter helpdesk to connect their Twitter handle and fetch all tweets. Then they will invite their internal team members on the Helpdesk app so they can share the workload. And team members can reply to the tweets from the helpdesk.
Your app will make their lives easier. It will give them a unified view of all their tweets and give them a user friendly way to reply to the tweets.

Link to website - http://tweetmanager.herokuapp.com/

Screenshots:
![Image1](/photos/1.png)
![Image2](/photos/2.png)
![Image3](/photos/3.png)

How to use?

- Clone the repo to your machine.
- Change the config.js file with the respective keys in backend folder.
- Go to the backend folder and install node_modules in backend using command 'npm install'
- Go to the frontend folder and install node_modules in frontend using command 'yarn install'
- Start backend on port 4000 by using command 'node app'.
- Start frontend on port 3000 by using command 'yarn start' or 'npm start'.
- Also change all the urls from where the data is being fetched to localhost:4000 and callbackUrl as localhost:3000
- Then go to http://localhost:3000/


<a href="https://heroku.com/deploy">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

# Strapi Heroku App

A Strapi app ready to be deployed on Heroku.

Be aware that one of the content type builder won't work due to the writing files restriction on the Heroku servers. If you do want to change content types, you need to follow these steps:

1. Click the button above and deploy your app
2. Clone that repo by using `heroku git:clone -a ` followed by your repo's name
3. Go into the cloned projects' folder using `cd` followed by your repo's name
4. Add the Heroku boilerplate as a remote by running `git remote add boilerplate https://github.com/strapi/strapi-heroku-app`
5. Pull from this new origin by running `git pull boilerplate master`

Then you will have to configure your database environments variable: https://github.com/strapi/strapi/wiki/Deploy-on-Heroku

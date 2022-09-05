# Leafihome Front end programming test

## Expected functionality:

- A page to show a list of companies `/companies`
- A page to show the details/full record of an existing company `/companies/id`
- a page to create a new company `/companies/create`
- a page to show a list of people who work at a given company `/companies/id/people`
- A page to show the details for a specific person `/people/id`
- A page to create a new person, associating them to an existing company `/people/create`

## Bonus functionality

- Edit an existing company's record `/companies/id`
- Edit a person's record `/people/id`
- Delete a person record `/people/id`
- Make the site responsive
- Using State Management Libraries like Redux

## API test server

### Available Scripts

We have two utility methods to create some test data for you, accessible via HTTP GET:

- [Create test companies](http://localhost:3001/swagger/index.html#!/Companies/get_importCompanies)
- [Import people for a given company](http://localhost:3001/swagger/#!/People/get_importPeopleForCompany_companyId)

## Setup

1. Install NodeJS Version: 18.8.0 via [nvm](https://github.com/nvm-sh/nvm) or https://nodejs.org/en/download/
1. Install PNPM: https://pnpm.io/installation
1. Install all server requirements

### Pre server reqs

1. Install brew, node, npm & mongo. On OSX the commands below should work.

   ```
   ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   brew doctor #fix all issues
   brew update
   brew install node
   brew tap mongodb/brew
   brew install mongodb-community@6.0
   ```

2. Setup MongoDb data directory if folder doesn't exist
   ```
   mkdir -p database/data/db
   ```

### To install all dependencies

In the root directory run: `pnpm install -r`

## Run Development

This will start the database, server, and client.

`pnpm dev`

- The **client** runs on: `http://localhost:5173`;
- The **server** runs on: `http://localhost:3001`;
- The **database** runs on: `http://localhost:27071`. Default Database: `test`;

### Optional: All Sample Companies To Database

1. Go into the `database` directory.
1. Execute the following
   ```
   pnpm run ts-node ./scripts/addSampleCompanies.ts
   ```

NOTE: Make sure the database is running.

## Build Project (In Progress)

This wil build the client and server

`pnpm build`

## Start Production Server (In Progress)

`pnpm start`

## API Doc

http://localhost:3001/swagger

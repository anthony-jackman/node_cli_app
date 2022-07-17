# node_cli_app
A command-line interface (CLI) that talks to the JSON Placeholder API. An exploration into how to create a CLI.

## To run the API without globally installing it:
```
mkdir jsonp
cd jsonp
git clone https://github.com/anthony-jackman/node_cli_app.git
npm install
```

### Then use the endpoints as such:
To view the posts
```
node index.js posts --pretty

OR

node index.js posts 1
```

To view the comments to posts
```
node index.js comments --pretty

or

node index.js comments 1
```

To view user details
```
node index.js users --pretty

or

node index.js users 1
```

## To install this CLI to your machine and use it like any other CLI command:
Must be inside the folder where the source files are.
```
npm i -g .
```

Then you can use the CLI as it was intended:
```
jsonp posts -p
```

#!/usr/bin/env node

import { Command } from 'commander';
const cli = new Command();

import posts from './commands/posts.js';
import comments from './commands/comments.js';

cli
  .description('Access the JSON Placeholder API')
  .name('jsonp')
  .usage('<command>')
  .addHelpCommand(false)
  .helpOption(false);

cli
  .command("posts")
  .argument("[postId]", "ID of post you\'d like to retrieve.")
  .option("-p, --pretty", "Printy print output from the API")
  .description("Retrieve a list of all posts or one post by passing the post ID (e.g., posts 1).")
  .action(posts);

cli
  .command("comments")
  .option("-p, --pretty", "Pretty-print output from the API.")
  .description("Retrieve a list of all comments.")
  .action(comments);

cli.parse(process.argv);

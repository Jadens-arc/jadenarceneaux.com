#!/usr/bin/env node

import { createInterface } from 'readline';
import { writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogDir = join(__dirname, '..', 'blog-posts');

const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question('Post title: ', (title) => {
  rl.close();

  const slug = title.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const filePath = join(blogDir, `${slug}.md`);

  if (existsSync(filePath)) {
    console.error(`File already exists: ${filePath}`);
    process.exit(1);
  }

  const now = new Date();
  const offset = now.getTimezoneOffset();
  const sign = offset <= 0 ? '+' : '-';
  const absOffset = Math.abs(offset);
  const hh = String(Math.floor(absOffset / 60)).padStart(2, '0');
  const mm = String(absOffset % 60).padStart(2, '0');
  const pad = (n) => String(n).padStart(2, '0');
  const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}${sign}${hh}:${mm}`;

  const content = `+++\ntitle = '${title.trim()}'\ndate = ${date}\ndraft = false\n+++\n`;

  writeFileSync(filePath, content);
  console.log(`Created: blog-posts/${slug}.md`);
});

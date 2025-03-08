---
id: 2-gastonotero
title: GastonOtero.com
description: React Next landing page, with a blog, resume and projects section.
author: Gaston Otero
iso8601date: "2021-12-27"
---

## Statically Generated Blog & More

The page you are seeing right now was created with the Next framework using markdown parsing to create new entries.
It has a blog, a projects section, and an about me page.

The source code of this project is fully open,
you can check it out at [this repo](https://github.com/gastonoterom/gastonotero-next).

This site uses markdown (.md) files for the content of each page, so adding, editing and deleting them is much simper
than using JSX or HTML. It uses [grey matter](https://github.com/jonschlinkert/gray-matter) to parse the markdown, but it also has
optimizations to turn regular images into [next-js](https://nextjs.org/docs/api-reference/next/image) ones for faster image serving.

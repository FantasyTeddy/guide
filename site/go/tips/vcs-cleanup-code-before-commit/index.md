---
date: 2021-07-06
title: Cleanup code before commit
topics:
  - platform
  - vcs
author: dlsniper
subtitle: Remove all the redundant parenthesis and other unneeded code before commit
thumbnail: ./thumbnail.png
video: >-
  https://www.youtube.com/watch?v=emXVGjkIoz4&list=PLQ176FUIyIUZrbrlz4AY1V8VzBJKZyVlW&index=17
---

Sometimes an extra pair of parenthesis make their way into our code. Since it's not needed to improve the clarity or help the code function in any way, its better to remove it. That's why, it's useful to run a _Cleanup_ step before the code reaches upstream.

**How to use:**
Invoke the _Commit_ using <kbd>⌘K</kbd> (macOS) / <kbd>Ctrl+K</kbd> (Windows/Linux), then select the _Commit options_, and select the **Cleanup** feature.

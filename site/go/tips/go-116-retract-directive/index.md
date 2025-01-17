---
date: 2020-12-03
title: "Go 1.16: retract directive"
topics:
  - editing
  - go
author: dlsniper
subtitle: Retract specific versions of your modules
thumbnail: ./thumbnail.png
screenshot: ./screenshot.png
---

From the Go documentation for [the retract directive](https://golang.org/ref/mod#go-mod-file-retract):

> A retract directive indicates that a version or range of versions of the module defined by go.mod should not be depended upon. A retract directive is useful when a version was published prematurely or a severe problem was discovered after the version was published.

**How to use:**

This feature does not require anything special to be used. The IDE recognizes it automatically.

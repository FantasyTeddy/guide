---
type: TutorialStep
date: 2023-02-03
title: Finding code
topics: []
author: hs
subtitle: >-
  We often need to find something in our project and there are several ways to
  achieve that depending on the use case.
thumbnail: ./thumbnail.png
---

Searching and finding files and code can be achieved in IntelliJ IDEA through various mechanisms. They all have their own strengths and knowing when to use which one will save you time when you need to find a _needle in a haystack_! We will look at:

- Searching Everywhere and Finding Actions
- Finding in Files
- Searching Structurally

## Searching Everywhere & Finding Actions

<iframe width="560" height="315" src="https://youtu.be/nzDgYoDgWGE" >
</iframe>

Search Everywhere <kbd>⇧⇧</kbd> (macOS) / <kbd>Shift+Shift</kbd> (Windows/Linux) should be your go-to-shortcut if you know you want to find something, even if that _something_ is an action. You can filter the criteria in this dialog as required.

<iframe width="560" height="315" src="https://youtu.be/eZUe_44B3nk" >

</iframe>
Find Action <kbd>⌘⇧F</kbd> (macOS) / <kbd>Ctrl+Shift+F</kbd> (Windows/Linux) also opens the Search Everywhere dialog but filters it to the _Actions_ tab so if you know you're looking for an action, this way is likely to be faster for you.

## Searching Structurally

<iframe width="560" height="315" src="https://www.youtube.com/embed/vX05utYQXXQ" >
</iframe>

Lastly, you can access Structural Search from the Search Everywhere Dialog and then typing in "structural" and select **Search Structurally**. This method of searching your project gis a very powerful way of going straight to your goal. You can use variables to narrow down your search criteria and search across your codebase for a very specific set of characters.

You can try out structural search by cloning [the IntelliJ IDEA samples repository from GitHub](https://github.com/JetBrains/intellij-samples) and then creating a structural search with this code:

```
logger.log($level$, $message$, $args$);
```

This will find this one snippet of code in the whole project:

```
logger.log(Level.WARNING, "Another log message", new RuntimeException("Something went wrong"));
```

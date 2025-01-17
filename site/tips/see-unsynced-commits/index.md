---
date: 2022-12-15
title: See Unsynced Commits
topics:
  - git
  - vcs
author: pwe
subtitle: See what's happening on that other branch.
seealso:
  - title: Sync with a remote Git repository
    href: "https://www.jetbrains.com/help/idea/sync-with-a-remote-repository.html"
  - title: Explicitly check for incoming commits on remotes
    href: "https://www.jetbrains.com/help/idea/settings-version-control-git.html"
thumbnail: ./thumbnail.png
video: "https://youtu.be/K6v4tAmXfLs"
obsoletes:
  - /dotnet/tips/see-unsynced-commits/
  - /idea/tips/see-unsynced-commits/
  - /go/tips/see-unsynced-commits/
  - /pycharm/tips/see-unsynced-commits/
  - /webstorm/tips/see-unsynced-commits/
---

## The Problem

When you work on a feature, you create a feature branch.
Here, you can work away, in isolation.

You’re finished, you: commit, with a good commit message.
Then: go back to your main branch and wrap up with a local merge, then a push, to share with your team.
All good.

But: that was suspiciously easy.

This time, you’re on your branch.
You again wrap up your work with a commit, switch to main, and merge.

All good.
But while you were away, a colleague also merged something to main.
Now, when _you_ push -- Git is unhappy.

Does not spark joy.

This example though is easy.
The changes don’t overlap, so you let the IDE do the cleanup.
But what if the person edited the same line as you?
If you do the same steps, now you have a merge conflict.

Reeeeeally...does not spark joy.

This leads to the work of resolving the conflict.
You could have avoided this if you just knew about their commit before you did your change!

## The Solution

If you thought “Maybe the IDE can help me on that”, well, right you are.

Every 20 minutes the IDE checks if there are remote commits to a locally-tracked branch.
If so, the branch popup will show a blue-down-arrow on the unsynced branch.
A mouseover explains.

Indeed, if you make a local commit in a local branch, merge to a tracked branch such as main, but haven’t yet pushed the commits.
Now when you open the branch popup, you see a green up arrow on that branch.
A mouseover explains that branch has incoming AND outgoing commits.

You might ask: "I wonder if this has a setting?"
Well of course our IDEs [have a knob](https://www.jetbrains.com/help/idea/settings-version-control-git.html#840e5ec0) for that, in the Git settings.
Here you can adjust the policy.

You can learn a LOT from our help pages. Let’s see [this topic in the IntelliJ IDEA help](https://www.jetbrains.com/help/idea/sync-with-a-remote-repository.html).
There you go, an explanation of the green/blue up/down arrows on the branch.

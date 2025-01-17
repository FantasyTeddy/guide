---
type: TutorialStep
date: 2023-04-04
title: Generate code
topics:
  - .net
  - editing
  - gamedev
  - ide
  - rider
  - unity
author: citizenmatt
subtitle: "Rider helps with boiler-plate code, code completion, and more."
thumbnail: ./thumbnail.png
video:
  url: "https://www.youtube.com/watch?v=gNTOFr_TQCg"
  start: 693
  end: 848
---

Rider makes it easy to _generate Unity event functions_, either using the **Generate** menu or simply by typing, with autocompletion.

Auto-completion will suggest event function names when declaring methods in Unity-based classes, and expand to include method signature. Start typing an event function within a class deriving from a known Unity class, such as `MonoBehaviour`.

Unity-specific live templates:

- `sprop`: a Unity property with a serialized backing field
- `sfield`: a Unity serialized field
- `log`: shorthand for `Debugger.Log()`

### See Also

- [More about Rider for Unity...](https://www.jetbrains.com/lp/dotnet-unity/)
- [Learn Unity with JetBrains Academy](https://hyperskill.org/tracks/36?utm=rider_guide)

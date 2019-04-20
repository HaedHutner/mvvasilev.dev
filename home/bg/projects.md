# *Personal Projects*

Over the years, I've worked on a variety of personal projects.
And to me, they're the bread and butter of my portfolio. I am
most proud of what I've accomplished with these, and they've served
as invaluable learning tools, which have allowed me to 
experiment and experience new technologies and ideas.

A lot of my hobby work is focused on gaming and game design.
I love video games, and I like to look at them as type of art.
I think each game has the ability to provide not only entertainment 
to the person playing it, but also allow them to experience something
they otherwise never could.

I've delved multiple times into the areas of game design and
game programming. My main hobby interests are in game engine design and
graphics programming.

## A'therys Horizons

A'therys is a project that's very near and dear to my heart. 
It's something I've been working on, along with a team of another
20 or so people. The idea of it is to create a unique RPG gaming
experience in the form of a Minecraft modded server. You can find
more information on it here: [https://atherys.com](https://atherys.com)

We've split ourselves up in teams, where each team works on different
parts of the project. The Development team, which I am the lead of,
consists of 2 people.

### Plugins

I've been volunteering my free time to this project by creating the
various Minecraft plugins we would need in order to achieve our goals.
These are written in Java, using the [Sponge API](https://spongepowered.org).

The source-code for all the project I've created can be found on the
public github organization: [https://github.com/Atherys-Horizons](https://github.com/Atherys-Horizons).

These plugins started off as small, independent pieces. With time, however,
I've abstracted more and more of the commonalities between them into their
own plugin, called AtherysCore. I now refer to the environment in which
I develop A'therys plugins as the "A'therys Framework", as it builds upon
the Sponge API with enough technologies and functionality, that it can be
considered a framework in and of itself.

Some of the technologies we've utilized in development include:
* Hibernate
* PostgreSQL
* Docker
* Jenkins
* MongoDB ( previously )

## Explorer

I've made several projects called "Explorer". The first, [TerrainGen](https://github.com/HaedHutner/TerrainGen),
was my first ever exploration into rendering procedurally generated terrain.
I wrote it using C++, with OpenGL as the graphical API of choice, 
helped by the libraries GLFW ( for managing windows and the opengl context ) 
and GLM ( for the complex maths ).

Later iterations, such as [Explorer](https://github.com/HaedHutner/Explorer) and [Voxplorer](https://github.com/HaedHutner/Voxplorer)
aimed to improve upon my technique, increase performance and generally
clean up the code to use better abstractions.
The first, Explorer, introduced a chunk-based algorithm to rendering the terrain,
and the second, Voxplorer, brought that technique into 3D with voxel-based rendering.

The general technological stack I used for these was C++, helped by the
CMake build tool, using git submodules as a way to manage dependencies easier.

## 
# LIB

- [ ] test game, pre filed
- [ ] serialization interface and mixins

## Done
- [x] add more rules / metadata
- [x] categorize games
- [x] add rules
- [x] "original" metadata
- [x] timeout wrapper
- [x] use non wrapping dashes in titles
- [x] grid type

# UI

- [ ] chess pieces
- [ ] draughts pieces
- [ ] show ai stats
- [ ] flip reversi animation
- [ ] gomoku winning line inverted contract color style
- [ ] open image
- [ ] fix robot workers, invalidate disposed workers
- [ ] disable human click during robot turn
- [ ] link to type
- [ ] better coord text color
- [ ] signal pass?
- [ ] pass dialog?
- [ ] reset timer on pass?
- [ ] fix undo
- [ ] negative score minus filter
- [ ] move constants to Config
- [ ] use theme enums
- [ ] check setTimeouts, intervals vs destroy etc... use clearTimeout
- [ ] remove transitions on resize
- [ ] fix g-poly-line resize
- [ ] smarter store getters generator? global mixin?

## Done
- [x] Remove unused icon sizes
- [x] CANCELED Try green UI
- [x] CANCELED Try blue UI
- [x] Try blue icon
- [x] Symbol icon colors
- [x] icon manifest generator and versioning
- [x] delay resize
- [x] add theme bg to root element
- [x] only maximized, remove player cards
- [x] maximize UI option
- [x] remove 5 seconds
- [x] 15 sec to 10
- [x] simple cards? remove some meta?
- [x] check Alquerque preview svg
- [x] fix rect to bound
- [x] tiles count in info
- [x] coord vertical rotation
- [x] better wiki link text
- [x] more vuetify code split
- [x] WIP games excluded in production
- [x] IGNORED: fix winning line start stone
- [x] MD shadows? No too slows previews, dark switch...
- [x] fullscreen
- [x] store only non player settings, or spilt setting to session and global?
- [x] correct count route go back in game
- [x] all games as singleton
- [x] unused filters
- [x] externals as plugins
- [x] fix zero similar
- [x] variants/similar to info drawer
- [x] game hyperlinks in info?
- [x] game rules in info?
- [x] show "based on" and rules
- [x] remove chord delay
- [x] page title
- [x] try table loader progress only 1st time
- [x] disable animations previews
- [x] disable pointer-events in previews
- [x] reduce g elements in svg
- [x] fix othello => othello
- [x] sync toolbar, bg, and app bg colors
- [x] back should go browser back if possible
- [x] disable content and toolbar background transition
- [x] acknowledgement
- [x] fix wip
- [x] init possible
- [x] NxN as x
- [x] A2 as 2
- [x] full codesplit
- [x] autocomplete
- [x] toolbar scroll
- [x] remove list from menu
- [x] winning chord
- [x] reduce hover listeners
- [x] extract board, conditional v-on="clickable ? {click: move(t)} : null"
- [x] vibrate on setting
- [x] board wrapper
- [x] settings persistence
- [x] test keep alive mounted RAF
- [x] reduce tone.js
- [x] reduce d3-scale
- [x] sync storage

# GAMES

- http://gamingthesystemuw.blogspot.cz/2013/07/radial-tic-tac-toe.html
- http://janinwise.blogspot.cz/search/label/medieval%20games?updated-max=2011-11-17T19:55:00-06:00&max-results=20&start=4&by-date=false
- https://en.wikipedia.org/wiki/Circular_chess
- mini draughts 5x5
- circular reversi?
- triangular reversi?
- gomoku is 19x19 and Renju 15x15?
- https://en.wikipedia.org/wiki/TacTix
- negative reversi
- reversi no pass

# DEV

- [ ] readme goals
- [ ] extract css?

## Done
- [x] add triangle to icon
- [x] app icon

# IDEAS

```
Border color of symbol
Restart dialog longer
Bigger icon radius
Storage versioning
Better verdict message
Try verdict dialog
Remove search suggestions, add auto wild card
Check lunr query parser
Just add wildcard to lunr search :)
Check timer digit color
Add check for update button
Game view has no theme colors
Clickable shadow on swap symbol
Thin radial lines are stupid
Icon hex should be combined with circle? For shadows...
Black on yellow is too Black.
Most of the toasts should be dialogs
Winning dialog should be bold
On the other hand winning lines should be visible?
App toolbar could be blue
Use nextickk instead of settimeout
Search box needs drop shadow? Or blue toolbar?
Rules info could have finished game preview :)
Time travel controls (from FAB to bottom sheet)
Current toasts: update, verdict, rules.
Only update should be toast? And with contrast bg?
Check for update button.
Remove app icon from menu.
Remove touch directive
Disable touch gesture for disabled drawers
Mark mobile friendly, tablet friends
- [x] Yellow symbol is good enough for white icon
Underline only external links
```

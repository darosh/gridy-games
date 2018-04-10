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

## Todo

- [ ] chess pieces
- [ ] draughts pieces
- [ ] show ai stats
- [ ] flip reversi animation
- [ ] open image
- [ ] link to type
- [ ] negative score minus filter
- [ ] move constants to Config
- [ ] smarter store getters generator? global mixin?
- [ ] Time travel controls (from FAB to bottom sheet)
- [ ] Mark mobile friendly, tablet friends

## Bugs

- [ ] deleting moves should not start timer?

## Done
- [x] fix undo
- [x] fix robot workers, invalidate disposed workers
- [x] disable human click during robot turn
- [x] remove transitions on resize
- [x] fix g-poly-line resize
- [x] IGNORED: signal pass?
- [x] pass dialog?
- [x] reset/stop timer on pass?
- [x] gomoku winning line inverted contract color style
- [x] better coord text color
- [x] use theme enums
- [x] Restart dialog longer
- [x] Better verdict message
- [x] Try verdict dialog
- [x] Only update should be toast?
- [x] IGNORED: And with contrast bg?
- [x] IGNORED: Clickable shadow on swap symbol
- [x] Most of the toasts should be dialogs
- [x] Winning dialog should be bold
- [x] IGNORED: On the other hand winning lines should be visible?
- [x] Rules info could have finished game preview :)
- [x] Use nextick instead of settimeout
- [x] Underline only external links
- [x] check setTimeouts, intervals vs destroy etc... use clearTimeout
- [x] Check for update button.
- [x] Storage versioning
- [x] Remove search suggestions, add auto wild card
- [x] Check lunr query parser
- [x] Just add wildcard to lunr search :)
- [x] Check timer digit color
- [x] Game view has no theme colors
- [x] Search box needs drop shadow? Or blue toolbar?
- [x] Thin radial lines are stupid
- [x] Icon hex should be combined with circle? For shadows...
- [x] CANCELED Black on yellow is too Black.
- [x] App toolbar could be blue
- [x] Remove app icon from menu.
- [x] Remove touch directive
- [x] Disable touch gesture for disabled drawers
- [x] Border color of symbol
- [x] Bigger icon radius
- [x] Yellow symbol is good enough for white icon
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
- Zamma https://en.wikipedia.org/wiki/Zamma

# ONLINE

- [ ] readme goals

# DEV

- [ ] readme goals
- [ ] extract css?
- [ ] remove export defaults
- [ ] remove ts-loader from webpack

## Done
- [x] add triangle to icon
- [x] app icon
- [x] https://vuejs.org/v2/style-guide/
- [x] code climate

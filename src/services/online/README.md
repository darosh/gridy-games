# Gridy Games Firebase Dev Notes

## There is

- limited pool 100 connections in Firebase Spark plan

## It should

- [ ] allow only single device per authed user
- [ ] disconnect idle user
- [ ] disconnect idle user sooner when reaching connections limit
- [ ] config limits default in app and in db as well
- [ ] listen to config changes
- [ ] offer reconnect to disconnected user
- [ ] display disconnection reason
- [ ] offer user disconnect/logout/delete
- [ ] delete guests on disconnect
- [ ] protect config with rule
- [ ] connect to realtime database after login
- [ ] offer reauth to user when needed for account removal
- [ ] handle user change in disconnected tab correctly

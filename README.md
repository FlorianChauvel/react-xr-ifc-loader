# Overview

This is a small project that:
- loads an IFC file using IFC.js
- renders it in a React app via react-fiber-three
- allows to view it in virtual reality with react-xr

Demo available (here)[https://florianchauvel.github.io/react-xr-ifc-loader/]

# ⚠ Disclaimer ⚠
There are a few problems at the moment:
- it performs poorly, my Oculus Quest 2 struggles to display any file basically
- webpack-dev-server does not serve a .wasm file in the default create-react-app config, so you have to build it (`npm build`) and serve it for it to work
- it's currently configured to be served from the /react-xr-ifc-loader folder, you can change that by editing the **homepage** property in the **package.json** (remove the property entirely to serve from root)

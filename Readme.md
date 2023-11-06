## Session Notes - Angular MFE - Webpack Module Federation

1. Clone the github repository
2. Expose the webpack configurations by running the below command for (host-app)
```
ng add @angular-architects/module-federation --type host
```
3. Expose the webpack configurations by running the below command for (remote-app)
 ```
 ng add @angular-architects/module-federation --type remote
 ```
4. Update the Module Federation Configuration in `host-app's` webpack.config.js file as below to specify the remote-app's server.
```
module.exports = withModuleFederationPlugin({
  remotes: {
    "remote-app": "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
```

5. Update the Module Federation Configuration in `remote-app's` webpack.config.js file as below to expose the required modules/components.
```
module.exports = withModuleFederationPlugin({
  name: "remote-app",

  exposes: {
    "./FlightsModule": "./src/app/flights/flights.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

```

6. Import the remote-app's FlightModule and consume it in `app-routing.module.ts`
```
{
    path: 'flights',
    loadChildren: () => import("remote-app/FlightsModule").then(m => m.FlightsModule)
},
```

7. Create a `declare.d.ts` file in src folder of host-app and declare the imports you want to use 
```
declare module "remote-app/FlightsModule";
```

## (Steps to to expose & consume a Standalone Component in Angular)

8. Create a standalone component in remote-app using angular-cli
```
ng g component landing --flat --standalone
```
9. Define route to consume this standalone component in `remote-app` to include this in the compiler.
```
  {
    path: 'landing',
    component: LandingComponent,
    pathMatch: "full"
  }
```
10. Define route to consume this standalone component in `host-app`
```
{
    path: 'landing',
    loadComponent: () => import("remote-app/LandingComponent").then(m => m.LandingComponent),
    pathMatch: 'full'
},
```

11. Include the new component as well in the `declare.d.ts` file
```
declare module "remote-app/LandingComponent";
```

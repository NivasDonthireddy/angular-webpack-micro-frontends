## Session Notes - Angular MFE - Webpack Module Federation

1. Clone the github repository Angular_MFE.
2. Expose the webpack configurations by running the below command for (host-app)
```
ng add @angular-architects/module-federation --type host
```
3. Expose the webpack configurations by running the below command for (remote-app)
 ```
 ng add @angular-architects/module-federation --type remote
 ```
4. In the exposes section of remote-app webpack.config.js file 
```
	"./FlightsModule": "./src/app/flights/flights.module.ts",
```

5. Update the remote name in host-app webpack.config.js file & change the domain for remoteEntry.js file.

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

(To Demonstrate how to Consume a Component from Angular)

8. Create a standalone component in remote-app using angular-cli
```
ng g component landing --flat --standalone
```
9. Define route to consume this standalone component in remote-app to include in the compiler.
```
{
    path: 'landing',
    loadComponent: () => import("remote-app/LandingComponent").then(m => m.LandingComponent),
    pathMatch: 'full'
},
```
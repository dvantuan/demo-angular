# LibTuandang

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.

## How to install

Run 'npm i lib-tuandang'. \
This lib is built on bootstrap, So you must add this line `node_modules/bootstrap/dist/css/bootstrap.min.css` into angular.json file as below :
```javascript
   "architect": {
     "build": {
       ...,
       "styles": [
          "src/styles.scss",
          "node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
     }
   }
```
# How to use

Import library to project.
```javascript
    import { import { LibTuandangModule } from 'lib-tuandang';
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        LibTuandangModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
```

Component and Usage

| Component  | Input | Type | Example |
| ------------- | ------------- |------------- | ------------- |
| lib-header  | headerMenus | Array | [{text: 'Home', link: '/home'}, {text: 'View', link: '/view'}, {text: 'Setting', link: '/setting'}, {text: 'Help', link: '/help'}] |
|  | profiles| Array | [{text: 'Project', link: '/project'}, {text: 'Setting', link: '/setting'}, {text: 'Help', link: '/help'}] |
| | logoImage | String | 'assets/image1.png' |
| | avatarImage| String | 'assets/image2.png' |
| lib-sidebar | sidebarMenus | Array | [{text: 'Profile', link: '/profile'}, {text: 'Setting', link: '/setting'}, {text: 'Logout', link: '/logout'}] |
| lib-footer |  |  |  |
| lib-login |  |  |  |

Keywords
none





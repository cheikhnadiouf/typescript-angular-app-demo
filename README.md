Typescript Angular APP DEMO
========================
Typescript angular 4 demo application, skeleton for frontend resources management (CRUD-like operations with json mockups for api requests )

### Quickstart with Angular CLI Tool
	The Angular CLI makes it easy to create an application skeleton to get started : https://angular.io/guide/quickstart

#### Step 1: Set up the Development Environment : 
		Install Node.js and npm if they are not already on your machine then install angular/cli
		`npm install -g @angular/cli`
			
#### Step 2: Create a new project (with route pattern included in the app):
		`ng new my-app --routing`

#### Step 3: Install npm dependencies
		Go to the project directory, install npm local packages.
		`cd my-app`
		`npm install`

#### Step 4: Edit your application code 
		Replace the current "src/app" folder by Copy-past our "/app" folder then edit code in it to customize
#### IMPORTANT Note :
		Users sample will not work if you don't use mockup json files (/api/users/users.json) 
		so if you work in localhost and don't have api backend, 
		you can copy folder "api" and place it in the root of your "localhost" server (like xampp)
		Then add a plugin in your browser to enable Cross-Origin Request
			
#### Step 5: Build and Deploy for development or production
	(with a direct remote git pull request, jenkins automatically run test then build and deliver on server)

		- For live preview  in a dev server :
			Run `ng serve --open`
			Navigate to `http://localhost:4200/`. 
			The app will automatically reload if you change any of the source files.

		- For development build :
			Run `ng build --dev`
			
		- For production build :
			Run `ng build --prod --base-href=/parent-folder-name/`
			
		- Running unit tests
			Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

		- Running end-to-end tests
		Run `ng e2e` to execute the end-to-end tests 
		
		via [Protractor](http://www.protractortest.org/).
			Before running the tests make sure you are serving the app via `ng serve`.

#### Step 6 : Scaffolding with angular cli	

		- To generate a new module (with specific route pattern included):
			Run `ng generate module module-name --module=module-parent-name --routing`

		- To generate a new component :
			Run `ng generate component component-name` 
			You can also use 
			`ng generate directive|pipe|service|class|guard|interface|enum|module`.

		- To create a component in a specific module :
			Run `ng generate component folder-name/component-name --module=module-parent-name`

		- To create a service in a specific module :
			Run `ng generate service folder-name/service-name --module=module-parent-name`

	Notes : to remove or destroy an element , delete it manually then remove it from is injection in files like module.ts , etc.


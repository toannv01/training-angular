

# Stucture Directive : ngSwitchCase

### ngIf :
  - Điều kiện để thêm hoặc xóa 1 phần tử
  - cú pháp: `*ngIf="điều kiện"`
  - mở rộng:
    + `*ngIf="điều_kiện; then template_nếu_đúng else template_nếu_sai"`
### ngFor :
  - Cú pháp : `*ngFor="let item of arrays; let i as index; trackBy: myTrackByFunction"`
### Build-in directives : ngSwitchCase
  - Dùng để thay thế cho việc tạo *ngIf lặp lại nhiều lần.
  - Các biến cần quan tâm:` [ngSwitch], *ngSwitchCase , *ngSwitchDefault `
## Attribute directive 
### ngClass
  - dùng để thêm hoặc xóa nhiều CSS Class cùng 1 lúc => ngClass
  - Cú Pháp: `'key' : value `=> Nếu value trả về true => class sẽ được thêm vào, ngược lại class sẽ được xóa

### ngStyle
  - Dùng để thêm hoặc xóa nhiều css style cùng một lúc => ngStyle
  - cú pháp: `'key': value ? 'style1' : 'style2'` => nếu value trả về true => style sẽ được thêm vào, ngược lại class sẽ được xóa
## AngularTraining01

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

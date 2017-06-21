(function () {
  'use strict';

  var baseURL = 'https://monsenhordivisorias.github.io';
  $('.button-collapse').sideNav();
  var app = angular.module("app", ["ngRoute"]);

  app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: baseURL + '/templates/home.html',
        controller: 'MainController'
      })
      .when('/contato', {
        templateUrl: baseURL + '/templates/contato.html',
        controller: 'ContatoController'
      })
      .when('/empresa', {
        templateUrl: baseURL + '/templates/empresa.html',
        controller: 'EmpresaController'
      })
      .when('/servicos', {
        templateUrl: baseURL + '/templates/servicos.html',
        controller: 'ServicosController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  app.controller("MainController", function ($scope) {
    $scope.sliders = [{image: "https://monsenhordivisorias.github.io/images/slider7.jpg", title: "Alta qualidade"},
                     {image: "https://monsenhordivisorias.github.io/images/slider2.jpg", title: "Conserto de roupas"},
                     {image: "https://monsenhordivisorias.github.io/images/slider6.png", title: "Customização"}];

    $scope.sections = [{icon: "flash_on", title: "Entrega rápida", body: "Trabalhamos para lhe atender no menor tempo possível."},
                     {icon: "group", title: "Atenção com as demandas dos clientes", body: "Buscamos que o cliente se sinta realizado em sua individualidade e gosto."},
                     {icon: "settings", title: "Precisão", body: "Buscamos o melhor acabamento e a melhor qualidade."}];
   $scope.finish = function(){
    $('.slider').slider();
   }
  });
  app.controller("NavController", function ($scope, $location) {
    $('.button-collapse').sideNav({ closeOnClick: true });

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    }

  });

  app.controller("FooterController", function ($scope) {

  });
  app.controller("ServicosController", function ($scope) {
    $scope.servicos = [{image: "flash_on", title: "Entrega rápida", body: ""},
                     {image: "group", title: "Trabalhamos para lhe atender no menor tempo possível.", body: ""},
                     {image: "settings", title: "Customização", body: ""}];
  });
  app.controller("EmpresaController", function ($scope) {

  });

  app.directive('navbar', function () {
    return {
      restrict: 'A',
      controller: 'NavController',
      controllerAs: 'ctrl',
      templateUrl: baseURL + '/templates/navbar.html'
    };
  });

  app.directive('footer', function () {
    return {
      restrict: 'A',
      controller: 'FooterController',
      controllerAs: 'ctrl',
      templateUrl: baseURL + '/templates/footer.html'
    };
  });

  app.controller("ContatoController", function ($scope, $location) {
    $scope.mail = { nome: "", email: "", telefone: "", asunto: "", mensagem: "" };
    $scope.submit = function (event) {

      event.preventDefault();
      $.ajax({
        url: "https://formspree.io/mrdmcostura@gmail.com",
        method: "POST",
        data: {
          message: "Nome: " + $scope.mail.nome + "\n" +
          "Email: " + $scope.mail.email + "\n" +
          "Telefone: " + $scope.mail.telefone + "\n" +
          "Asunto: " + $scope.mail.asunto + "\n" +
          "Mensagem: " + $scope.mail.mensagem, _replyto: $scope.mail.email
        },
        dataType: "json"
      }).done(function (resp) {
        console.log("success");
        $scope.$apply(function () {
          $location.path("/");
        });
      }).fail(function (error) {
        console.log("fail");
      });
    };
  });
})();

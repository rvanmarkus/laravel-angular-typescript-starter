@extends('layout/main')
@section('content')
    <section ng-controller="MainCtrl as vm" >
        <md-button ng-bind="vm.welcomeMessage">Hello world from server</md-button>
    </section>
@endsection
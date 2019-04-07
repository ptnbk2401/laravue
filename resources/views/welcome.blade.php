<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <title>Laravel</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" type="text/css" href="/css/app.css">
    </head>
    <body>
        <div id="app">
            {{-- <component-index></component-index> --}}
            {{-- <my-component></my-component> --}}
            <api-calling></api-calling>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
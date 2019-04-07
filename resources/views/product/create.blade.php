@extends('adminlte::page')

@section('title', 'AdminLTE')
@section('css')
<meta name="csrf-token" content="{{ csrf_token() }}">
<style>

</style>
@stop
@section('content_header')
    <h1>Danh sách Hoa</h1>
@stop
@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="box">
            <div id="app">
                {{-- <api-calling></api-calling> --}}
                <app></app>
            </div>
        </div>
    <!-- /.box -->
    </div>
</div>
@stop
@section('js')
<script src="/js/app.js"></script>
@stop
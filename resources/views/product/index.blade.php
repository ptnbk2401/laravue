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
        <div id="app">
            <app></app>
            {{-- <v-client-table url="/api/v1/products"  :columns="columns" :options="options"></v-client-table> --}}
            <v-server-table url="/api/v1/products" :columns="columns" :options="options"></v-server-table>
        </div>
    <!-- /.box -->
    </div>
</div>
@stop
@section('js')
<script src="/js/app.js"></script>
@stop
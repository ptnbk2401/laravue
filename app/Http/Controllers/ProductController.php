<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function create()
    {
       return view('product.index');
    }

    public function edit($id)
    {
        return view('product.index');
    }

    public function viewIndex(){
        return view('product.index');
    }
}

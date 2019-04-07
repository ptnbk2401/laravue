<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $objmProduct)
    {
        $objItems = $objmProduct->getItems();
        return response()->json($objItems) ;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'price' => 'required',
            'count' => 'required',
        ],[
            'name.required' => 'Nhập Tên Sản Phẩm',
            'name.min'      => 'Nhập tên Sản Phẩm không quá :max ký tự ',
            'price.required' => 'Nhập Giá Sản Phẩm',
            'count.required' => 'Nhập Số lượng',
        ]);
        Product::create([
            'name'     => trim($request->name),
            'price'    => $request->price,
            'count'    => $request->count,
        ]);
        return response([
            'result' => 'success'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|max:255',
            'price' => 'required',
            'count' => 'required',
        ],[
            'name.required' => 'Nhập Tên Sản Phẩm',
            'name.min'      => 'Nhập tên Sản Phẩm không quá :max ký tự ',
            'price.required' => 'Nhập Giá Sản Phẩm',
            'count.required' => 'Nhập Số lượng',
        ]);

        $product = Product::find($id);

        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->count = $request->input('count');
        
        $product->save();

        return response([
            'result' => 'success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return response([
            'result' => 'success'
        ], 200);
    }
}

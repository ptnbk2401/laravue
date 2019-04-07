<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
	protected $table = 'products';
	public $timestamps = false;
    // protected $fillable = [
    // 	'name', 'price', 'count'
    // ];

    public function getItems(){
    	return DB::table('products')->get();
    }
}

<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Mockery\Exception;

class ItemsController extends Controller
{
    public function index(){
        return Item::orderBy('id', 'desc')->get();
//        return Item::inRandomOrder()->get();
    }

    public function show($id)
    {
       return response()->json(Item::find($id));
    }

    public function update(Request $request, $id){
        $item = Item::find($id);
        $item->update($request->all());
        return response()->json($item);
    }

    public function store(Request $request){
        $exploded = explode(',', $request->image);
        $decoded = base64_decode($exploded[1]);
        if(str_contains($exploded[0], 'jpeg'))
            $extension = 'jpg';
        else
            $extension = 'png';
        $fileName = str_random().'.'.$extension;
        $path = public_path('images').'/'.$fileName;
        file_put_contents($path, $decoded);
        $item = Item::create($request->except('image') + [
                'image' => $fileName
            ]);
        return $item;
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id){
        $item = Item::findOrFail($id);
        $item->delete();
        return response()
            ->json(['delete' => true]);
    }
}

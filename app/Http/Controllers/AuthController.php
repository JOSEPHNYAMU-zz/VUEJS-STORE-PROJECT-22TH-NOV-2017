<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')
            ->only('logout');
    }
    public function register(Request $request){
        $this->validate($request, [
            'name' => 'required|max:50',
            'email' => 'required|email|unique:users',
            'password' => 'required|max:20'
        ]);
        $user = new User($request->all());
        $user->password = bcrypt($request->password);
        $user->save();
        return response()
            ->json([
                'registered' => true
            ]);
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|between:5,20'
        ]);
        $user = User::where('email', $request->email)
            ->first();
        if($user && Hash::check($request->password, $user->password)){
            $user->api_token = str_random(100);
            $user->save();

            return response()
                ->json([
                    'authenticated' => true,
                    'api_token' => $user->api_token,
                    'name' => $user->name,
                    'role' => $user->role
                ]);
        }
        return response()
            ->json([
                'email' => ['Login Details provided are Wrong']
            ], 422);
    }
    public function logout(Request $request){
        $user = $request->user();
        $user->api_token = null;
        $user->save();
        return response()
            ->json(['signOut' => true]);
    }
}

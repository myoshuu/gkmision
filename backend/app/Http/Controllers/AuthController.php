<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
  public function login(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'username' => 'required|string',
      'password' => 'required'
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
    if (!(Auth::attempt($request->all()))) return response()->json(['message' => "Username or Password doesn't match"], Response::HTTP_UNAUTHORIZED);

    // Create sanctum token
    $token = auth()->user()->createToken('auth_token')->plainTextToken;
    User::where('id', auth()->user()->id)->update(['remember_token' => $token]);

    return response()->json(['message' => 'Login success!', 'token' => $token], Response::HTTP_ACCEPTED);
  }

  public function register(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'nama' => 'required|string',
      'username' => 'required|string|unique:users',
      'jenis_kelamin' => 'required|string|in:L,P',
      'password' => 'required',
      'confirm_password' => 'required|same:password'
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);

    $user = new User();
    $user->nama = $request->nama;
    $user->username = $request->username;
    $user->jenis_kelamin = $request->jenis_kelamin;
    $user->password = Hash::make($request->password);
    $user->role = $request->role;
    $user->save();

    return response()->json(['message' => 'Register success!'], Response::HTTP_OK);
  }

  public function me()
  {
    return response()->json(['data' => auth()->user()], Response::HTTP_OK);
  }

  public function logout()
  {
    $user = auth()->user();
    User::where('id', $user->id)->update(['remember_token' => null]);
    return response()->json(['message' => 'Logout success!'], Response::HTTP_OK);
  }
}

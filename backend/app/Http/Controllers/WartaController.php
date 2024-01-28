<?php

namespace App\Http\Controllers;

use App\Models\Warta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\ImageManager;
use Symfony\Component\HttpFoundation\Response;

class WartaController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Warta::all();
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'judul' => 'required|string',
      'tanggal' => 'required|date',
      'image' => 'required|image|max:2048'
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);

    $user = auth()->user();
    if ($user->role !== 'admin' && $user->role !== 'pendeta' && $user->role !== 'majelis') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    $count = Warta::count();

    if ($count >= 5) {
      $oldData = Warta::oldest()->first();
      if (File::exists(public_path('uploads/warta/' . $oldData->image))) File::delete(public_path('uploads/warta/' . $oldData->image));
      $oldData->delete();
    }

    $manager = new ImageManager(Driver::class);
    $image = $manager->read($request->file('image'));
    $encoded = $image->toWebp(60);

    $filename = 'warta_' . time() . '.' . 'webp';
    $encoded->save(public_path('uploads/warta/' . $filename));

    $warta = new Warta();
    $warta->judul = $request->judul;
    $warta->tanggal = $request->tanggal;
    $warta->image = $filename;
    $warta->save();

    return response()->json(['message' => 'Warta already uploaded!!'], Response::HTTP_CREATED);
  }

  /**
   * Display the specified resource.
   */
  public function show(Warta $warta)
  {
    return $warta;
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Warta $warta)
  {
    $validator = Validator::make($request->all(), [
      'judul' => 'required|string',
      'tanggal' => 'required|date',
      'image' => 'required|image|max:2048'
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);

    $user = auth()->user();
    if ($user->role !== 'admin' && $user->role !== 'pendeta' && $user->role !== 'majelis') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    if (File::exists(public_path('uploads/warta/' . $warta->image))) File::delete(public_path('uploads/warta/' . $warta->image));

    $manager = new ImageManager(Driver::class);
    $image = $manager->read($request->file('image'));
    $encoded = $image->toWebp(60);

    $filename = 'warta_' . time() . '.' . 'webp';
    $encoded->save(public_path('uploads/warta/' . $filename));

    $warta->update([
      'judul' => $request->judul,
      'tanggal' => $request->tanggal,
      'image' => $filename
    ]);

    return response()->json(['message' => 'Warta already updated!'], Response::HTTP_CREATED);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Warta $warta)
  {
    $user = auth()->user();
    if ($user->role !== 'admin' && $user->role !== 'pendeta' && $user->role !== 'majelis') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    if (File::exists(public_path('uploads/warta/' . $warta->image))) File::delete(public_path('uploads/warta/' . $warta->image));
    $warta->delete();

    return response()->json(['message' => 'Warta already deleted!'], Response::HTTP_OK);
  }
}

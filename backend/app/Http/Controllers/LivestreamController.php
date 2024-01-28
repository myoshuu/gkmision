<?php

namespace App\Http\Controllers;

use App\Models\Livestream;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\ImageManager;

class LivestreamController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Livestream::all();
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'judul' => 'required|string',
      'tanggal' => 'required|date',
      'image' => 'required|image',
      'link' => 'required|string'
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);

    $user = auth()->user();
    if ($user->role !== 'admin' && $user->role !== 'pendeta' && $user->role !== 'majelis') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    $count = Livestream::count();

    if ($count >= 5) {
      $oldData = Livestream::oldest()->first();
      if (File::exists(public_path('uploads/livestream/' . $oldData->image))) File::delete(public_path('uploads/livestream/' . $oldData->image));
      $oldData->delete();
    }

    $manager = new ImageManager(Driver::class);
    $image = $manager->read($request->file('image'));
    $encoded = $image->toWebp(60);

    $filename = 'livestream_' . time() . '.' . 'webp';
    $encoded->save(public_path('uploads/livestream/' . $filename));

    $livestream = new Livestream();
    $livestream->judul = $request->judul;
    $livestream->tanggal = $request->tanggal;
    $livestream->image = $filename;
    $livestream->link = $request->link;
    $livestream->save();

    return response()->json(['message' => 'Livestream already uploaded!'], Response::HTTP_CREATED);
  }

  /**
   * Display the specified resource.
   */
  public function show(Livestream $livestream)
  {
    return $livestream;
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Livestream $livestream)
  {
    $validator = Validator::make($request->all(), [
      'judul' => 'required|string',
      'tanggal' => 'required|date',
      'image' => 'required|image|max:2048',
      'link' => 'required|string'
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);

    $user = auth()->user();
    if ($user->role !== 'admin' && $user->role !== 'pendeta' && $user->role !== 'majelis' && $user->role !== 'streamer') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    if (File::exists(public_path('uploads/livestream/' . $livestream->image))) File::delete(public_path('uploads/livestream/' . $livestream->image));

    $manager = new ImageManager(Driver::class);
    $image = $manager->read($request->file('image'));
    $encoded = $image->toWebp(60);

    $filename = 'livestream_' . time() . '.' . 'webp';
    $encoded->save(public_path('uploads/livestream/' . $filename));

    $livestream->update([
      'judul' => $request->judul,
      'tanggal' => $request->tanggal,
      'image' => $filename,
      'link' => $request->link
    ]);

    return response()->json(['message' => 'Livestream already updated!'], Response::HTTP_OK);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Livestream $livestream)
  {
    $user = auth()->user();
    if ($user->role !== 'admin' && $user->role !== 'pendeta' && $user->role !== 'majelis' && $user->role !== 'streamer') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    if (File::exists(public_path('uploads/livestream/' . $livestream->image))) File::delete(public_path('uploads/livestream/' . $livestream->image));
    $livestream->delete();

    return response()->json(['message' => 'Livestream already deleted!'], Response::HTTP_OK);
  }
}

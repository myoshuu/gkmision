<?php

namespace App\Http\Controllers;

use App\Models\Renungan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class RenunganController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'judul' => 'required|string',
      'tanggal' => 'required|date',
      'isi' => 'required',
      'link' => 'required|string'
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);

    $user = auth()->user();
    if ($user->role !== 'pendeta') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    $count = Renungan::count();
    if ($count >= 10) {
      $oldData = Renungan::oldest()->first();
      $oldData->delete();
    }

    $renungan = new Renungan();
    $renungan->judul = $request->judul;
    $renungan->tanggal = $request->tanggal;
    $renungan->isi = $request->isi;
    $renungan->link = $request->link;
    $renungan->save();

    return response()->json(['message' => 'Renungan already uploaded!!'], Response::HTTP_CREATED);
  }

  /**
   * Display the specified resource.
   */
  public function show(Renungan $renungan)
  {
    return $renungan;
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Renungan $renungan)
  {
    $validator = Validator::make($request->all(), [
      'judul' => 'required|string',
      'tanggal' => 'required|date',
      'isi' => 'required',
      'link' => 'required|string'
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);

    $user = auth()->user();
    if ($user->role !== 'pendeta') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    $renungan->update([
      'judul' => $request->judul,
      'tanggal' => $request->tanggal,
      'isi' => $request->isi,
      'link' => $request->link
    ]);

    return response()->json(['message' => 'Renungan already updated!!'], Response::HTTP_OK);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Renungan $renungan)
  {
    $user = auth()->user();
    if ($user->role !== 'pendeta') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    $renungan->delete();
    return response()->json(['message' => 'Renungan already deleted!!'], Response::HTTP_OK);
  }
}

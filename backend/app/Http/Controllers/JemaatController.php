<?php

namespace App\Http\Controllers;

use App\Models\Jemaat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class JemaatController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Jemaat::all();
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'nama' => 'required|string',
      'tmpt_lahir' => 'required|string',
      'alamat' => 'required|string',
      'no_hp' => 'required|string',
      'keanggotaan' => 'required|string|in:Anggota,Simpatisan',
      'pekerjaan' => 'string',
      'penghasilan' => 'required|string',
      'suami_istri' => 'string',
      'nama_ayah' => 'required|string',
      'nama_ibu' => 'required|string',
      'pelayanan' => 'required|array|min:1',
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);

    $oldData = Jemaat::where('nama', $request->nama)->get()->first();
    if ($oldData) {
      return response()->json(['message' => 'Nama tersebut sudah terdaftar!'], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

    $jemaat = new Jemaat();
    $jemaat->nama = $request->nama;
    $jemaat->tmpt_lahir = $request->tmpt_lahir;
    $jemaat->alamat = $request->alamat;
    $jemaat->no_hp = $request->no_hp;
    $jemaat->gol_darah = $request->gol_darah;
    $jemaat->tempat_baptis = $request->tempat_baptis;
    $jemaat->tgl_baptis = $request->tgl_baptis;
    $jemaat->keanggotaan = $request->keanggotaan;
    $jemaat->pekerjaan = $request->pekerjaan;
    $jemaat->penghasilan = $request->penghasilan;
    $jemaat->suami_istri = $request->suami_istri;
    $jemaat->nama_ayah = $request->nama_ayah;
    $jemaat->nama_ibu = $request->nama_ibu;
    $jemaat->pelayanan = implode(', ', $request->pelayanan);

    // return $jemaat;
    $jemaat->save();

    return response()->json(['message' => 'Data Jemaat berhasil dimasukkan!'], Response::HTTP_CREATED);
  }

  /**
   * Display the specified resource.
   */
  public function show(Jemaat $jemaat)
  {
    return $jemaat;
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Jemaat $jemaat)
  {
    $validator = Validator::make($request->all(), [
      'nama' => 'required|string',
      'tmpt_lahir' => 'required|string',
      'alamat' => 'required|string',
      'no_hp' => 'required|string',
      'keanggotaan' => 'required|string|in:Anggota,Simpatisan',
      'pekerjaan' => 'string',
      'penghasilan' => 'required|string',
      'suami_istri' => 'string',
      'nama_ayah' => 'required|string',
      'nama_ibu' => 'required|string',
      'pelayanan' => 'required|array|min:1',
    ]);

    if ($validator->fails()) return response()->json($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);

    $jemaat->update([
      'nama' => $request->nama,
      'tmpt_lahir' => $request->tmpt_lahir,
      'alamat' => $request->alamat,
      'no_hp' => $request->no_hp,
      'gol_darah' => $request->gol_darah,
      'tempat_baptis' => $request->tempat_baptis,
      'tgl_baptis' => $request->tgl_baptis,
      'keanggotaan' => $request->keanggotaan,
      'pekerjaan' => $request->pekerjaan,
      'penghasilan' => $request->penghasilan,
      'suami_istri' => $request->suami_istri,
      'nama_ayah' => $request->nama_ayah,
      'nama_ibu' => $request->nama_ibu,
      'pelayanan' => implode(', ', $request->pelayanan)
    ]);

    return response()->json(['message' => 'Data updated!'], Response::HTTP_OK);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Jemaat $jemaat)
  {

    $user = auth()->user();
    if ($user->role !== 'admin' && $user->role !== 'pendeta' && $user->role !== 'majelis') return response()->json(['message' => 'Access Prohibited!'], Response::HTTP_UNAUTHORIZED);

    $jemaat->delete();
    return response()->json(['message' => 'Data deleted!'], Response::HTTP_OK);
  }
}

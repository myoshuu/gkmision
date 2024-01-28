<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('jemaat', function (Blueprint $table) {
      $table->id();
      $table->string('nama');
      $table->string('tmpt_lahir', 50);
      $table->text('alamat');
      $table->string('no_hp', 20);
      $table->enum('gol_darah', ['A', 'B', 'AB', 'O'])->nullable();
      $table->string('tempat_baptis', 150)->nullable();
      $table->date('tgl_baptis')->nullable();
      $table->enum('keanggotaan', ['Anggota', 'Simpatisan']);
      $table->string('pekerjaan', 150);
      $table->string('penghasilan', 150);
      $table->string('suami_istri', 150)->nullable();
      $table->string('nama_ayah', 150);
      $table->string('nama_ibu', 150);
      $table->string('pelayanan', 150);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('jemaat');
  }
};

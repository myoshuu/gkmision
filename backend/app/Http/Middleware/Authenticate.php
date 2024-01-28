<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Exception;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Authenticate extends Middleware
{
  /**
   * Get the path the user should be redirected to when they are not authenticated.
   */
  protected function redirectTo(Request $request): ?string
  {
    return $request->expectsJson() ? null : route('login');
  }

  public function handle($request, Closure $next, ...$guards)
  {
    try {
      $token = $request->header('Authorization');
      if (!isset($token)) {
        return response([
          "message" => "Unauthorized"
        ], 401);
      }

      $token = str_replace('Bearer ', '', $token);
      $user = User::where(['remember_token' => $token])->get()->first();
      Auth::loginUsingId($user->id);
      return $next($request);
    } catch (Exception $e) {
      return response([
        "message" => "Unauthorized",
      ], 401);
    }
  }
}

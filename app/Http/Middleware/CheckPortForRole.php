<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class CheckPortForRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $port = $request->getPort();
        $user = Auth::user();

        if (!$user) {
            return redirect()->route('login');
        }

        $role = $user->role;

        $portRoleMap = [
            8001 => 'chief-editor',
            9001 => 'editor',
        ];

        // Cek apakah port dikenal
        if (!array_key_exists($port, $portRoleMap)) {
            return response("🚫 Akses tidak diizinkan untuk port ini", 403);
        }

        // Cek apakah role cocok dengan port
        if ($portRoleMap[$port] !== $role) {
            return response("🚫 Role '$role' tidak boleh akses dari port $port", 403);
        }

        return $next($request);
    }
}

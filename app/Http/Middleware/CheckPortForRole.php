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

        if (!isset($portRoleMap[$port]) || $portRoleMap[$port] !== $role) {
            abort(403, 'Akses ditolak dari port ini untuk role Anda.');
        }

        return $next($request);
    }
}

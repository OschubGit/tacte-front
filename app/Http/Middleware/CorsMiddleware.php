<?php
namespace App\Http\Middleware;

use Closure;

class CorsMiddleware
{
public function handle($request, Closure $next)
{
// Handle preflight requests
if ($request->isMethod('OPTIONS')) {
$response = response('', 200);
} else {
$response = $next($request);
}

// Set CORS headers
$origin = $request->header('Origin');
$allowedOrigins = [
'http://localhost:3000',
'http://localhost:8888',
'http://127.0.0.1:3000',
'http://127.0.0.1:8888'
];

// Allow all origins for development
if (in_array($origin, $allowedOrigins) || app()->environment('local')) {
$response->headers->set('Access-Control-Allow-Origin', $origin ?: '*');
} else {
$response->headers->set('Access-Control-Allow-Origin', 'http://localhost:3000');
}

$response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
$response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin, X-CSRF-TOKEN');
$response->headers->set('Access-Control-Allow-Credentials', 'true');
$response->headers->set('Access-Control-Max-Age', '86400');

return $response;
}
}
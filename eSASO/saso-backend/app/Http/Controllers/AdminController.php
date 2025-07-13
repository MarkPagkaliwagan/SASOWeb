<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Mail\AdminResetPassword;
use App\Models\Admin;

class AdminController extends Controller
{
    // ✅ Login using Sanctum (stateless)
    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');

        if (!Auth::guard('admin')->attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        return response()->json([
            'message' => 'Login successful',
            'admin' => Auth::guard('admin')->user(),
        ]);
    }

    // ✅ Logout (invalidate token manually if needed)
    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        return response()->json(['message' => 'Logged out successfully']);
    }

    // ✅ Change password
    public function changePassword(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'old_password' => 'required',
            'new_password' => 'required|min:6',
        ]);

        $admin = Admin::where('username', $request->username)->first();

        if (!$admin || !Hash::check($request->old_password, $admin->password)) {
            return response()->json(['message' => 'Old password is incorrect'], 401);
        }

        $admin->password = Hash::make($request->new_password);
        $admin->save();

        return response()->json(['message' => 'Password changed successfully']);
    }

    // ✅ Forgot password
    public function forgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        try {
            $token = Str::random(60);

            DB::table('password_resets')->updateOrInsert(
                ['email' => $request->email],
                [
                    'token' => $token,
                    'created_at' => now(),
                ]
            );

            Mail::to($request->email)->send(new AdminResetPassword($token, $request->email));

            return response()->json(['message' => 'Reset link sent to your email']);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to send reset link',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // ✅ Authenticated Admin Info
    public function me(Request $request)
    {
        return response()->json(Auth::guard('admin')->user());
    }
}

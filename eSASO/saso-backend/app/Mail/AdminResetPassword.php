<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AdminResetPassword extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $email;

    /**
     * Create a new message instance.
     *
     * @param string $token
     * @param string $email
     */
    public function __construct($token, $email)
    {
        $this->token = $token;
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $url = url('/admin/reset-password-form?token=' . $this->token . '&email=' . urlencode($this->email));

        return $this->subject('Admin Password Reset Link')
                    ->view('emails.admin-reset')
                    ->with([
                        'token' => $this->token,
                        'email' => $this->email,
                        'url' => $url, // ✅ Pass full reset URL
                    ]);
    }
}

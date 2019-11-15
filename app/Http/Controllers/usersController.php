<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class usersController extends Controller
{
    public function register(Request $req)
    {
        $client = new Client();
        $res = $client->request('POST', 'http://localhost:8080/api/users/register', [
            'form_params' => [
                'name_user' => $req->input('name_user'),
                'firstname_user' => $req->input('firstname_user'),
                'mail_user' => $req->input('mail_user'),               
                'password_user' => $req->input('password_user'),
            ] 
        ]);
        return redirect('/Login');
}

    public function login(Request $req)
    {
        try
        {
        $client = new Client();
        $res = $client->request('POST', 'http://localhost:8080/api/users/login', [
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded'
            ], 
            'form_params' => [
                'mail_user' => $req->input('mail_user'),
                'password_user' => $req->input('password_user'),
            ]
        ]);
    //dd($res);

    }
    catch (ClientException $e)
    {
        return redirect('/')->withCookie(cookie('loginState', 'error', 1));
    }
    $data = $res->getBody();
    $response = json_decode($data, true);
    dd($response);
    $token = $response['token'];
    return $this->loginFromToken($token);
    }

    private function loginFromToken($token)
    {
        $client = new Client();
        $res = $client->request('GET', 'http://localhost:8080/api/users/me', [
          'headers' => [
            'authorization' => 'Bearer ' .$token
        ]
    ]);
        if($res->getStatusCode() === 200)
        {
            $data = $res->getBody();
            $response = json_decode($data, true);
            $name = $response['name_user'];
            return back()->withCookies([cookie('userToken', $token, 1400), cookie('user', $res->getBody(), 1400)]);
        }
        else
        {
            return redirect('/Register');
        }
    }

    public function logout()
    {
        return redirect('/')->withCookies([cookie('userToken', null), cookie('user', null)]);
    }
}

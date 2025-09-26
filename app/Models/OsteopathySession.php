<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use ShayanYS\LaraReserve\Interfaces\ReservableInterface;
use ShayanYS\LaraReserve\Models\Reserve;
use ShayanYS\LaraReserve\Traits\Reservable;

class OsteopathySession extends Model implements ReservableInterface
{
    use Reservable;

    protected $fillable = [
        'date',
        'start_time',
        'end_time',
        'max_allowed_reserves',
        'status',
        'created_by',
        'current_reserves',
        'name',
        'description'
    ];
}

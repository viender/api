<?php

namespace Viender\Address\Models;

use Illuminate\Database\Eloquent\Model;
use Viender\Address\Street;

class Address extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'street_id',
    ];

    public function user() 
    {
        return $this->belongsTo('App\User');
    }

    public function zipCode() 
    {
        return $this->belongsTo('Viender\Address\Models\ZipCode');
    }

    public function city() 
    {
        return $this->belongsTo('Viender\Address\Models\City');
    }

    public function state() 
    {
        return $this->belongsTo('Viender\Address\Models\State');
    }

    public function country() 
    {
        return $this->belongsTo('Viender\Address\Models\Country');
    }

    public static function createWithStreet(array $request) 
    {
        $street = Street::create($request);
        $address = new Address($request);
        $address->street_id = $street->id;
        $address->save();
    }
}

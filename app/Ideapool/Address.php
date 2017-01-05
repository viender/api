<?php

namespace App\Ideapool;

use Illuminate\Database\Eloquent\Model;

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
        return $this->belongsTo('App\Ideapool\ZipCode');
    }

    public function city() 
    {
        return $this->belongsTo('App\Ideapool\City');
    }

    public function state() 
    {
        return $this->belongsTo('App\Ideapool\State');
    }

    public function country() 
    {
        return $this->belongsTo('App\Ideapool\Country');
    }

    public static function createWithStreet(array $request) 
    {
        $street = Street::create($request);
        $address = new Address($request);
        $address->street_id = $street->id;
        $address->save();
    }
}

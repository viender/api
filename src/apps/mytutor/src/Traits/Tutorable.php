<?php

namespace Viender\Mytutor\Traits;

trait Tutorable
{
	public function tutoringAsTutors()
	{
		return $this->hasMany('Viender\Mytutor\Models\Tutoring', 'tutor_id');
	}

	public function tutoringAsStudents()
	{
		return $this->hasMany('Viender\Mytutor\Models\Tutoring', 'student_id');
	}

	public function tutorLicense()
	{
		return $this->hasOne('Viender\Mytutor\Models\License');
	}

	public function tutorCertificates()
	{
		return $this->hasMany('Viender\Mytutor\Models\Certificate');
	}
}
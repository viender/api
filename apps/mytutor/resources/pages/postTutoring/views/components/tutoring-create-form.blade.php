<form ref="form" action="{{ route('web.viender.mytutor.tutorings.store') }}" method="POST" @submit="submitForm($event)">
	{{ csrf_field() }}

	<div :class="'form-group' + (errors.title ? ' has-error' : '')">
		<label for="title">Title</label>
		<input type="text" class="form-control" id="title" name="title" placeholder="Title" v-model="formData.title">

		<span class="help-block" v-if="errors.title" v-for="error in errors.title">
            <strong>@{{ error }}</strong>
        </span>
	</div>

	<div :class="'form-group' + (errors.price ? ' has-error' : '')">
		<label for="price">Budget</label>
		<input type="number" min="0" class="form-control" id="price" name="price" placeholder="Budget" v-model="formData.price">

		<span class="help-block" v-if="errors.price" v-for="error in errors.price">
            <strong>@{{ error }}</strong>
        </span>
	</div>

	<div :class="'form-group' + (errors.number_of_week ? ' has-error' : '')">
		<label for="number_of_week">Number of week</label>
		<input type="number" min="0" class="form-control" id="number_of_week" name="number_of_week" placeholder="Number of week" v-model="formData.number_of_week">

		<span class="help-block" v-if="errors.number_of_week" v-for="error in errors.number_of_week">
            <strong>@{{ error }}</strong>
        </span>
	</div>

	<div :class="'form-group' + (errors.body ? ' has-error' : '')">
		<label for="body">Description</label>
		<textarea class="form-control" rows="10" id="body" name="body" placeholder="Description"  v-model="formData.body"></textarea>

		<span class="help-block" v-if="errors.body" v-for="error in errors.body">
            <strong>@{{ error.replace('body', 'description') }}</strong>
        </span>
	</div>

    <div class="form-group">
    	<label>Schedule</label>
    	@foreach(['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as $index => $day)
		    <div class="form-group row">
		    	
		    	<label class="col-md-2 col-form-label" for="{{ $day }}"><input type="checkbox" id="{{ $day }}" name="{{ $day }}"> {{ ucwords($day) }}</label>
		    	<input type="hidden" name="schedules[{{ $index }}][day]" value="{{ $day }}">
				<div class="form-group col-md-10 row">
					<div class="col-md-5">
						<label for="{{ $day }}_from">From</label>
						<input type="time" class="form-control" id="{{ $day }}_from" name="schedules[{{ $index }}][from]" v-model="formData.schedules[{{ $index }}].from">
					</div>
					<div class="col-md-5">
						<label for="{{ $day }}_to">To</label>
						<input type="time" class="form-control" id="{{ $day }}_to" name="schedules[{{ $index }}][to]" v-model="formData.schedules[{{ $index }}].to">
					</div>
				</div>
		    </div>
	    @endforeach
    </div>
	<input ref="submit-button" type="submit" value="Submit">
</form>
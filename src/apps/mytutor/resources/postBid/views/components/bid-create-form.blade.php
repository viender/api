<form ref="form" action="{{ route('web.viender.mytutor.tutorings.bids.store', $tutoring->id) }}" method="POST">
	{{ csrf_field() }}
	<div class="form-group">
		<label for="offered_price">Budget</label>
		<input type="number" min="0" class="form-control" id="offered_price" name="offered_price" placeholder="Budget" v-model="formData.offered_price">
	</div>
	<div class="form-group">
		<label for="number_of_week">Number of week</label>
		<input type="number" min="0" class="form-control" id="number_of_week" name="number_of_week" placeholder="Number of week" v-model="formData.number_of_week">
	</div>
	<div class="form-group">
		<label for="proposal">Description</label>
		<textarea class="form-control" rows="10" id="proposal" name="proposal" placeholder="Description"  v-model="formData.proposal"></textarea>
	</div>
	<input ref="submit-button" type="submit" value="Submit">
</form>
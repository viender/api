<template>
    <tr :class="myTutoring ? 'bid-row' : ''" @mouseover="hover()" @mouseleave="leave()" @click="showBid()">
    <td width="80%">{{ bid.bidder.first_name + ' ' + bid.bidder.last_name }}</td>
    <td width="20%">
        <div>
            <span>Rp. </span><span>{{ bid.offered_price }}</span>
        </div>
        <button class="btn btn-default" v-show="mouseover" v-if="myTutoring" @click="acceptBid()">Accept</button>
    </td>
    </tr>
</template>

<script>
export default {
	props: ['bid', 'selfUrl', 'myTutoring', 'accepted'],

	data() {
		return {
			mouseover: false,
		}
	},

	methods: {
		hover() {
			this.mouseover = true;
		},

		leave() {
			this.mouseover = false;
		},

		showBid() {
			if( ! this.myTutoring) return;

			window.location = this.selfUrl;
		},

		acceptBid() {

		}
	}
}
</script>

<style>
	tr {
		height: 90px;
	}

	.bid-row {
		cursor: pointer;
	}
</style>
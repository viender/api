<template>
    <tr class="tutoring-row" @mouseover="hover()" @mouseleave="leave()" @click="click()" v-show="tutoring ? (tutoring.auction ? true : false) : false">
        <td width="50%">
            <div>
                {{ tutoring ? (tutoring.auction ? tutoring.auction.title : '') : '' }}
            </div>
            <div>
                {{ tutoring ? (tutoring.auction ? tutoring.auction.body : '') : '' }}
            </div>
        </td>
        <td width="15%">{{ tutoring ? (tutoring.auction ? tutoring.auction.bids.length : '') : '' }}</td>
        <td width="15%">{{ tutoring ? tutoring.number_of_week : 0 }}</td>
        <td width="20%">
        	<div>{{ 'Rp. ' + new Intl.NumberFormat('id-ID').format(tutoring ? (tutoring.auction ? tutoring.auction.price : 0) : 0) }}</div>
        	<a :href="bidUrl" class="btn btn-default" v-show="mouseover" v-if="! bidded">Bid now</a>
        	<span class="label label-success" v-else>Bidded</span>
        </td>
    </tr>
</template>

<script>
export default {
	props: ['tutoring', 'selfUrl', 'bidUrl', 'bidded'],

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

		click() {
			window.location = this.selfUrl;
		}
	}
}
</script>

<style>
	tr {
		height: 90px;
	}

	.tutoring-row {
		cursor: pointer;
	}
</style>
<?php

/**
 * --- Commons ---
 *
 *
 * 
 * --- Address ---
 * 
 * @apiDefine AddressIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 * 
 *
 * --- Answer ---
 *
 * @apiDefine AnswerIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 * 
 *
 * --- Auction ---
 *
 * @apiDefine AuctionIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 * 
 *
 * --- Bid ---
 *
 * @apiDefine BidIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 *
 * 
 * --- City ---
 * 
 * @apiDefine CityIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 *
 * 
 * --- Comment ---
 *
 * @apiDefine CommentIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 * 
 *
 * --- Country ---
 *
 * @apiDefine CountryIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 *
 * 
 * --- Downvote ---
 *
 * @apiDefine DownvoteIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 *
 * 
 * --- Question ---
 * 
 * @apiDefine QuestionIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 * 
 *
 * --- Star ---
 * 
 * @apiDefine StarIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 * 
 *
 * --- State ---
 *
 * @apiDefine StateIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 * 
 *
 * --- Tag ---
 *
 * @apiDefine TagIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 *
 * --- Upvote ---
 * 
 * @apiDefine UpvoteIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 *
 * 
 * --- User ---
 *
 * @apiDefine UserIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 *
 * 
 *
 * --- ZipCode ---
 *
 * @apiDefine ZipCodeIndexSuccess
 * @apiSuccess {Object[]} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
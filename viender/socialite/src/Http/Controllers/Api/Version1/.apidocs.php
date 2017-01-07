<?php

/** --- Commons --- */
/**
 * @apiDefine MessageResponseSuccess
 * @apiSuccess {String} message Response message
 * @apiSuccess {Number} status_code Response status code
 */
/**
 * @apiDefine AuthApiHeader
 * @apiHeader {String} Authorization Personal Access Token
 * @apiHeader {String} Content-Type Content-Type
 */
/**
 * @apiDefine StandardApiHeader
 * @apiHeader {String} Content-Type Content-Type
 */




/** --- Address --- */
/**
 * @apiDefine AddressGroup Address
 */
/**
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
 */
/**
 * @apiDefine AddressShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine AddressRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Answer --- */
/**
 * @apiDefine AnswerGroup Answer
 */
/**
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
 */
/**
 * @apiDefine AnswerShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine AnswerRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Auction --- */
/**
 * @apiDefine AuctionGroup Auction
 */
/**
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
 */
/**
 * @apiDefine AuctionShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine AuctionRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Bid --- */
/**
 * @apiDefine BidGroup Bid
 */
/**
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
 */
/**
 * @apiDefine BidShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine BidRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- City --- */
/**
 * @apiDefine CityGroup City
 */
/**
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
 */
/**
 * @apiDefine CityShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine CityRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Comment --- */
/**
 * @apiDefine CommentGroup Comment
 */
/**
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
 */
/**
 * @apiDefine CommentShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine CommentRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Country --- */
/**
 * @apiDefine CountryGroup Country
 */
/**
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
 */
/**
 * @apiDefine CountryShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine CountryRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Downvote --- */
/**
 * @apiDefine DownvoteGroup Downvote
 */
/**
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
 */
/**
 * @apiDefine DownvoteShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine DownvoteRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Question --- */
/**
 * @apiDefine QuestionGroup Question
 */
/**
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
 */
/**
 * @apiDefine QuestionShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine QuestionRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Star --- */
/**
 * @apiDefine StarGroup Star
 */
/**
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
 */
/**
 * @apiDefine StarShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine StarRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- State --- */
/**
 * @apiDefine StateGroup State
 */
/**
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
 */
/**
 * @apiDefine StateShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine StateRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Tag --- */
/**
 * @apiDefine TagGroup Tag
 */
/**
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
 */
/**
 * @apiDefine TagShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine TagRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- Upvote --- */
/**
 * @apiDefine UpvoteGroup Upvote
 */
/**
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
 */
/**
 * @apiDefine UpvoteShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine UpvoteRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- User --- */
/**
 * @apiDefine UserGroup User
 */
/**
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
 */
/**
 * @apiDefine UserShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine UserRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */





/** --- ZipCode --- */
/**
 * @apiDefine ZipCodeGroup Zip Code
 */
/**
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
/**
 * @apiDefine ZipCodeShowSuccess
 * @apiSuccess {Object} data Array of addresses
 * @apiSuccess {Number} data.id Adresses unique ID
 * @apiSuccess {String} data.street Street name
 * @apiSuccess {String} data.city City name
 * @apiSuccess {String} data.state State name
 * @apiSuccess {String} data.country Country name
 * @apiSuccess {Object[]} data.links Addresses links
 * @apiSuccess {Url} data.links.rel Addresses links rel
 * @apiSuccess {Url} data.links.uri Addresses links uri
 */
/**
 * @apiDefine ZipCodeRequestBodyParam
 * @apiParam (Request Body Fields) {Number} user_id Users unique ID
 * @apiParam (Request Body Fields) {Number} city_id Cities unique ID
 * @apiParam (Request Body Fields) {String} name Street name
 */
<div class="navbar-fixed">
    <nav class="navbar-desktop">
        <div class="nav-wrapper">
            <div class="navbar-section-brand left">
                <a class="logo left" href="{{ url('/') }}">
                    <h1>{{ config('app.name', 'Laravel') }}</h1>
                </a>
            </div>
            <div class="navbar-section-search" :class="$store.state.searchOrAskOverlay.show ? 'full' : ''">
                <form class="search-form" @click="$store.commit('searchOrAskOverlay/SET_SHOW', true)">
                    <input
                        ref="searchText"
                        type="text"
                        class="search-form-textfield"
                        name="title"
                        @keyup="$store.commit('searchOrAskOverlay/SET_SEARCH_TEXT', $refs.searchText.value); $store.dispatch('raa/search', $refs.searchText.value).catch(function (error) {});">

                    <input class="btn btn-default search-form-submit" type="submit" value="Ask Question" @click.prevent="$store.dispatch('searchOrAskOverlay/postQuestion')">

                    <a href="#" role="button" class="right" v-show="$store.state.searchOrAskOverlay.show" @click="$store.commit('searchOrAskOverlay/TOGGLE_SHOW_MORE_FIELDS')">
                        <i class="fa fa-chevron-down" aria-hidden="true" v-show="! $store.state.searchOrAskOverlay.showMoreFields"></i>
                        <i class="fa fa-chevron-up" aria-hidden="true" v-show=" $store.state.searchOrAskOverlay.showMoreFields"></i>
                    </a>
                </form>
            </div>
            <div class="navbar-section-menu right" v-if="! $store.state.searchOrAskOverlay.show">
                <ul class="right">
                    <li><a href={{ route('web.viender.socialite.pages.read') }}>Feed</a></li>
                    <li><a href={{ route('web.viender.socialite.pages.answer') }}>Questions</a></li>
                    @if (Auth::guest())
                        <li><a href="{{ url('/login') }}">Login</a></li>
                        <li><a href="{{ url('/register') }}">Register</a></li>
                    @else
                        <li><a href={{ route('web.viender.profile.pages.profile', \Auth::user()->username) }}>You</a></li>
                    @endif
                </ul>
            </div>

            <div>
                <div class="navbar-section-search" style="background-color: #fff; width: 100%; box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2); display: none; padding-bottom: 20px;" v-show="$store.state.searchOrAskOverlay.showMoreFields">
                    <div style="width: 50%; margin-left: 25%;">
                        <strong>Question detail:</strong>
                        <div class="input-field col s12">
                            <textarea
                                ref="questionDetail"
                                id="textarea1"
                                class="materialize-textarea"
                                style="padding-top: 0;"
                                @keyup="$store.commit('searchOrAskOverlay/SET_QUESTION_DETAIL', $refs.questionDetail.value);">
                            </textarea>
                        </div>
                    </div>
                    <div style="width: 50%; margin-left: 25%;">
                        <strong>Topics: </strong>
                        <div>
                            <span class="blue white-text topic" v-for="topic in $store.state.searchOrAskOverlay.selectedTopics">@{{ topic.name }}</span>
                        </div>
                        <form class="" style="width: 200px; display: inline;">
                            <input
                                ref="topicSearchInput"
                                type="text"
                                class="search-form-textfield"
                                @keyup="$store.commit('topicRecommendation/SET_SEARCH_TEXT', $refs.topicSearchInput.value);"
                                @focus="$store.dispatch('topicRecommendation/showTopicRecommendations')"
                                @blur="$store.dispatch('topicRecommendation/hideTopicRecommendations')">
                            {{-- <input class="btn btn-default search-form-submit" type="submit" value="Add Topic" @click.prevent=""> --}}
                            <topic-recommendation class="topicRecommendation" v-show="$store.state.topicRecommendation.show && $store.state.topicRecommendation.searchResults.length > 0"></topic-recommendation>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <ul id="dropdown1" class="dropdown-content">
            <li>
                <a href="{{ url('/logout') }}"
                    onclick="event.preventDefault();
                             document.getElementById('logout-form').submit();">
                    Logout
                </a>

                <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                    {{ csrf_field() }}
                </form>
            </li>
        </ul>
    </nav>
</div>

<div
    class="searchOverlay" v-show="$store ? ($store.state.searchOrAskOverlay ? $store.state.searchOrAskOverlay.show : false) : false"
    @click="$store.commit('searchOrAskOverlay/SET_SHOW', false); $store.commit('searchOrAskOverlay/SET_SHOW_MORE_FIELDS', false);"
    ref="overlay" style="display: none;"
    >
    <div
        class="searchOverlay-content"
        v-show="($store ? ($store.state.raa.searchResults.length > 0): false) && ($store.state.raa.show)"
        @click="$viender.helpers.stopPropagation($event)"
        >
        <search-results></search-results>
    </div>
</div>

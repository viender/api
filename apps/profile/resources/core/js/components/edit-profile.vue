<template>
    <div>
        <form class="col s12" :action="url" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="_token" :value="$viender.csrfToken">
            <input type="hidden" name="_method" value="PUT">
            <div class="row">
                <div class="file-field input-field" style="width: 75px;">
                    <img ref="profile_picture_display" style="width: 75px; height: 75px; border-radius: 8px;" :src="$viender.helpers.getUrl('avatar', $viender.user)" alt="Profile Picture">
                    <input class="editProfile-imageInput" ref="profile_picture" type="file" name="profile_picture" accept="image/x-png,image/gif,image/jpeg">
                    <div class="editProfile-imageOverlay">
                        <i class="fa fa-camera" aria-hidden="true" style="color: #fff"></i>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input name="first_name" id="first_name" type="text" class="validate" :value="$viender.user.first_name">
                    <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                    <input name="last_name" id="last_name" type="text" class="validate" :value="$viender.user.last_name">
                    <label for="last_name">Last Name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea name="bio" id="bio" class="materialize-textarea" :value="$viender.user.bio"></textarea>
                    <label for="bio">Bio</label>
                </div>
            </div>
            <!-- <div class="row">
                <div class="input-field col s12">
                    <input name="email" id="email" type="email" class="validate" :value="$viender.user.email">
                    <label for="email">Email</label>
                </div>
            </div> -->
            <div class="row">
                <div class="input-field col s12">
                    <input name="location" id="location" type="text" class="validate" :value="$viender.user.location">
                    <label for="location">Location</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input name="website" id="website" type="text" class="validate" :value="$viender.user.website">
                    <label for="website">Website</label>
                </div>
            </div>
            <input class="editProfile-submit btn btn-default" type="submit" value="Save">
        </form>
    </div>
</template>

<script>
// import * as types from '../store/mutation-types';

export default {
    props: ['url'],

    computed: {

    },

    mounted() {
        const self = this;

        self.$refs.profile_picture.onchange = () => {
            console.log(self);

            const files = self.$refs.profile_picture.files;

            // FileReader support
            if (FileReader && files && files.length) {
                const fr = new FileReader();

                fr.onload = () => {
                    self.$refs.profile_picture_display.src = fr.result;
                };

                fr.readAsDataURL(files[0]);
            } else {
                // fallback -- perhaps submit the input to an iframe and temporarily store
                // them on the server until the user's session ends.
            }
        };
    },
};
</script>

<style>
    .editProfile-submit {
        position: fixed;
        top: 0;
        right: 0;
        padding: 0 10px;
        height: 26px;
        line-height: 26px;
        margin: 7px;
        text-transform: none;
        z-index: 2;
    }

    .editProfile-imageOverlay {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        border-radius: 8px;
        background-color: #000;
        z-index: 0;
        opacity: 0.5;
    }

    .editProfile-imageOverlay i {
        color: #fff;
        text-align: center;
        display: block;
        line-height: 75px;
        font-size: 1.6rem;
    }

    .editProfile-imageInput {
        z-index: 1;
    }
</style>

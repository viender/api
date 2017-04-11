COMPOSER_JSON_CHANGED=`git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- composer.json | wc -l`
COMPOSER_LOCK_CHANGED=`git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- composer.lock | wc -l`
if [ $COMPOSER_JSON_CHANGED -gt 0 ];
then
    echo "composer.json has changed!"
    composer dump-autoload
else
    echo "composer.json has not changed!"
fi

if [ $COMPOSER_LOCK_CHANGED -gt 0 ];
then
    echo "composer.lock has changed!"
    composer install
else
    echo "composer.lock has not changed!"
fi

php manage migrate --force
php manage optimize --force
php manage config:cache
php manage route:cache

IFS=', ' read -r -a apps <<< "$(node webpack.mix.js getAppPaths)"
ASSETS_CHANGED=0
let "ASSETS_CHANGED += $(git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- webpack.mix.js | wc -l)"
let "ASSETS_CHANGED += $(git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- resources/assets | wc -l)"
printf "%s\n" "checking changes in assets"
printf "%s\n" "$(git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- webpack.mix.js | wc -l) - webpack.mix.js"
printf "%s\n" "$(git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- resources/assets | wc -l) - resources/assets"
for i in "${!apps[@]}"
do
    if [ $i -eq 0 ]; then
        app="${apps[i]}/resources/assets"
            let "ASSETS_CHANGED += $(git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- "$app" | wc -l)"
            echo "$(git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- "$app" | wc -l) - $app"
    else
        app="${apps[i]}"
            let "ASSETS_CHANGED += $(git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- "$app" | wc -l)"
            echo "$(git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- "$app" | wc -l) - $app"
    fi
done

if [ $ASSETS_CHANGED -gt 0 ];
then
    printf "%s\n" "assets has changed! ($ASSETS_CHANGED)"
    npm run production
else
    printf "%s\n" "assets has not changed! ($ASSETS_CHANGED)"
fi

YARN_LOCK_CHANGED=`git --work-tree="$1" --git-dir="$2" diff HEAD@{1} --stat -- yarn.lock | wc -l`

if [ $YARN_LOCK_CHANGED -gt 0 ];
then
    echo "yarn.lock has changed!"
    yarn install
else
    echo "yarn.lock has not changed!"
fi

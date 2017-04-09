IFS=', ' read -r -a apps <<< "$(node webpack.mix.js getAppPaths)"

ASSETS_CHANGED=0
let "ASSETS_CHANGED += $(git diff HEAD@{1} --stat -- webpack.mix.js | wc -l)"
let "ASSETS_CHANGED += $(git diff HEAD@{1} --stat -- resources/assets | wc -l)"
echo "\nchecking changes in assets"
printf "%s\n" "$(git diff HEAD@{1} --stat -- webpack.mix.js | wc -l) - webpack.mix.js"
printf "%s\n" "$(git diff HEAD@{1} --stat -- resources/assets | wc -l) - resources/assets"
for i in "${!apps[@]}"
do
    if [ $i -eq 0 ]; then
        app="${apps[i]}/resources/assets"
            let "ASSETS_CHANGED += $(git diff HEAD@{1} --stat -- "$app" | wc -l)"
            echo "$(git diff HEAD@{1} --stat -- "$app" | wc -l) - $app"
    else
        app="apps/${apps[i]}/resources"
            let "ASSETS_CHANGED += $(git diff HEAD@{1} --stat -- "$app" | wc -l)"
            echo "$(git diff HEAD@{1} --stat -- "$app" | wc -l) - $app"
    fi
done

if [ $ASSETS_CHANGED -gt 0 ];
then
    echo "assets has changed! ($ASSETS_CHANGED)"
    # npm run production
fi

YarnLockChanged=`git diff HEAD@{1} --stat -- yarn.lock | wc -l`
ComposerJsonChanged=`git diff HEAD@{1} --stat -- composer.json | wc -l`
ComposerLockChanged=`git diff HEAD@{1} --stat -- composer.lock | wc -l`

php manage migrate --force

if [ $YarnLockChanged -gt 0 ];
then
    echo "yarn.lock has changed!"
    yarn install
else
    echo "yarn.lock has not changed!"
fi

if [ $ComposerJsonChanged -gt 0 ];
then
    echo "composer.json has changed!"
    composer dump-autoload
else
    echo "composer.json has not changed!"
fi

if [ $ComposerLockChanged -gt 0 ];
then
    echo "composer.lock has changed!"
    composer install
else
    echo "composer.lock has not changed!"
fi

php manage optimize --force
php manage config:cache
php manage route:cache

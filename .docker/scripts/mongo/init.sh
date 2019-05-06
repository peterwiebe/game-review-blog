echo 'Creating application user and db'

mongo game-review-blog \
        --host localhost \
        --port 27017 \
        -u dbadmin \
        -p 123123123 \
        --authenticationDatabase admin \
        --eval "db.createUser({user: 'app_user', pwd: 'app_pass', roles:[{role:'dbOwner', db: 'game-review-blog'}]});"

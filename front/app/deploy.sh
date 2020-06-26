#429342616148
export AWS_ACCESS_KEY_ID="AKIAWH5WQNJKGOI5M5OY"
export AWS_SECRET_ACCESS_KEY="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"
export AWS_DEFAULT_REGION="us-west-1"


# remove unnecacery files
find /home/peasandpeppers/app/dist/ -iname *.map -exec rm -f {}  \;

# update all information
aws s3 sync /home/peasandpeppers/app/dist/ s3://peasandpeppers.nl/ --cache-control 'max-age=31536000'

# remove cache controll from index.html
aws s3 cp /home/peasandpeppers/app/dist/index.html s3://peasandpeppers.nl/index.html --cache-control 'max-age=0'

# invalidate the website so it gets updated
aws cloudfront create-invalidation --distribution-id E2V5PM9WHD1L7X --paths "/index.html"
#429342616148
export AWS_ACCESS_KEY_ID="AKIAWH5WQNJKGOI5M5OY"
export AWS_SECRET_ACCESS_KEY="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"\
export AWS_DEFAULT_REGION="us-west-1"

find /home/peasandpeppers/app/dist/ -iname *.map -exec rm -f {}  \;
aws s3 sync /home/peasandpeppers/app/dist/ s3://peasandpeppers.nl/ --delete

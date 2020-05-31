export AWS_ACCESS_KEY_ID="AKIAWH5WQNJKGOI5M5OY"
export AWS_SECRET_ACCESS_KEY="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"\

aws s3 sync ${PWD}/app/src/dist/ s3://peasandpeppers1/

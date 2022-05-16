# Overview
This repository holds code used in the GeeCon 2022 presentation about AWS Lambda: https://2022.geecon.org/speakers/info.html?id=667.

Slides: https://www.slideshare.net/adebski/geecon2022-how-to-avoid-common-mistakes-and-misconceptions-when-working-with-java-on-aws-lambda.

# Tools needed to compiple and deploy thecode
* JDK11+
* CDK CLI and all of its dependencies installed
* AWS account configured in the `~/.aws/config` file, the CDK code assumes the account is defined there

You can execute `package-and-deploy.sh` to compiple, package, and execute the code through the CDK to your
AWS account. 

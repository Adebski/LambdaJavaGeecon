import { Stack, StackProps, aws_s3, aws_lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new aws_s3.Bucket(this, 'adebski-lambda-java-geecon', {
      blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
      bucketName: 'adebski-lambda-java-geecon'
    });
    const lambdaHelloWorld = new aws_lambda.Function(this, 'lambda-java-geecon-hello-world', {
      runtime: aws_lambda.Runtime.JAVA_11,
      memorySize: 128,
      handler: "com.adebski.LambdaJavaGeeconHelloWorld",
      code: aws_lambda.Code.fromAsset("../target/LambdaJavaGeecon-1.0.jar")
    })
  }
}

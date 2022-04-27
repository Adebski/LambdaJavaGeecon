import { Stack, StackProps, aws_s3, aws_lambda, Duration } from 'aws-cdk-lib';
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
      description: new Date().toISOString(),
      runtime: aws_lambda.Runtime.JAVA_11,
      memorySize: 128,
      handler: "com.adebski.LambdaJavaGeeconHelloWorld",
      code: aws_lambda.Code.fromAsset("../assets/handlers-1.0.jar"),
      timeout: Duration.seconds(30),
      reservedConcurrentExecutions: 10
    });

    const lambdaMultiplePaths = new aws_lambda.Function(this, 'lambda-java-geecon-multiple-paths', {
      description: new Date().toISOString(),
      runtime: aws_lambda.Runtime.JAVA_11,
      memorySize: 256,
      handler: "com.adebski.LambdaJavaGeeconMultiplePaths",
      code: aws_lambda.Code.fromAsset("../assets/handlers-1.0.jar"),
      timeout: Duration.seconds(30),
      reservedConcurrentExecutions: 10
    });

    const lambdaMultiplePathsProvisionedConcurrency =
      new aws_lambda.Function(this, 'lambda-java-geecon-multiple-paths-provisioned-concurrency', {
        description: new Date().toISOString(),
        runtime: aws_lambda.Runtime.JAVA_11,
        memorySize: 256,
        handler: "com.adebski.LambdaJavaGeeconMultiplePathsProvisionedConcurrency",
        code: aws_lambda.Code.fromAsset("../assets/handlers-1.0.jar"),
        timeout: Duration.seconds(30),
        reservedConcurrentExecutions: 10
      });
    const alias = new aws_lambda.Alias(this, 'lambda-java-geecon-multiple-paths-provisioned-concurrency-alias', {
      aliasName: 'prod',
      version: lambdaMultiplePathsProvisionedConcurrency.currentVersion,
      provisionedConcurrentExecutions: 1
    });
  }
}

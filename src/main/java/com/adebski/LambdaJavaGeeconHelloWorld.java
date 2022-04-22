package com.adebski;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Map;

public class LambdaJavaGeeconHelloWorld implements RequestHandler<Map<String, String>, String> {

    private final Logger logger;
    private final long constructTimeStart;
    private final long constructTimeEnd;
    private int invocations = 0;

    public LambdaJavaGeeconHelloWorld() {
        this.constructTimeStart = System.currentTimeMillis();
        this.logger = LogManager.getLogger(LambdaJavaGeeconHelloWorld.class);
        this.constructTimeEnd = System.currentTimeMillis();

        logger.info("Constructor took {} ms", constructTimeEnd - constructTimeStart);
    }

    @Override
    public String handleRequest(Map<String, String> input, Context context) {
        ++invocations;
        long start = System.currentTimeMillis();

        logger.info("handleRequest {} ms after the constructor, {} invocation", start - constructTimeEnd, invocations);

        return "foo";
    }
}

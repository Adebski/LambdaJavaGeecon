package com.adebski;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Map;

public class LambdaJavaGeeconHelloWorld implements RequestHandler<Map<String, String>, String> {

    protected static final Logger LOGGER = LogManager.getLogger(LambdaJavaGeeconHelloWorld.class);

    private final long constructTime;
    private int invocations = 0;

    public LambdaJavaGeeconHelloWorld() {
        LOGGER.info("Constructor");
        this.constructTime = System.currentTimeMillis();
    }

    @Override
    public String handleRequest(Map<String, String> input, Context context) {
        ++invocations;
        long start = System.currentTimeMillis();

        LOGGER.info("handleRequest {} ms after the constructor, {} invocation", start - constructTime, invocations);

        return "foo";
    }
}

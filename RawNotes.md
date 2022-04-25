hello world
2022-04-25 18:16:32 REPORT RequestId: e36e7af2-656b-4216-b056-2207818982d2	Duration: 85.24 ms	Billed Duration: 86 ms	Memory Size: 128 MB	Max Memory Used: 109 MB	Init Duration: 1821.08 ms
2022-04-25 18:18:08 REPORT RequestId: 5521fc91-a46e-4f18-a23d-ddc6550e8924	Duration: 1.95 ms	Billed Duration: 2 ms	Memory Size: 128 MB	Max Memory Used: 109 MB	
2022-04-25 18:18:50 REPORT RequestId: 9213b149-9edb-420f-a8fa-9bf062bcebbb	Duration: 1.74 ms	Billed Duration: 2 ms	Memory Size: 128 MB	Max Memory Used: 109 MB	
2022-04-25 18:24:05 REPORT RequestId: 724c1c5e-ad18-43e1-a3d6-67a4e644b1b3	Duration: 1.78 ms	Billed Duration: 2 ms	Memory Size: 128 MB	Max Memory Used: 109 MB	
2022-04-25 18:30:40 REPORT RequestId: a77e1c1d-77d1-4a5f-b895-099d18edb9d9	Duration: 72.91 ms	Billed Duration: 73 ms	Memory Size: 128 MB	Max Memory Used: 109 MB	Init Duration: 1870.40 ms

# multiple paths

## even
2022-04-25 19:00:13 REPORT RequestId: cbbddf88-739f-48e5-9c17-bbf2c58d2c16	Duration: 731.32 ms	Billed Duration: 732 ms	Memory Size: 256 MB	Max Memory Used: 126 MB	Init Duration: 2172.29 ms	
2022-04-25 19:00:35 REPORT RequestId: 51299c7f-65de-48f1-9c0e-73d7f8647e20	Duration: 19.86 ms	Billed Duration: 20 ms	Memory Size: 256 MB	Max Memory Used: 126 MB	
2022-04-25 19:00:50 REPORT RequestId: 3dcf98a4-5c3d-400d-b8b8-bfda6b33473a	Duration: 4.31 ms	Billed Duration: 5 ms	Memory Size: 256 MB	Max Memory Used: 126 MB	

## odd
2022-04-25 19:01:40 REPORT RequestId: ff9295e5-2ac7-4734-9039-e9a442ae4e3a	Duration: 1261.40 ms	Billed Duration: 1262 ms	Memory Size: 256 MB	Max Memory Used: 126 MB	
2022-04-25 19:01:51 REPORT RequestId: 4660ef3d-a7c7-4e6a-a88c-14ac4200699b	Duration: 2.12 ms	Billed Duration: 3 ms	Memory Size: 256 MB	Max Memory Used: 127 MB	


# Relevant links
https://www.techempower.com/benchmarks/#section=data-r20&hw=ph&test=db 
single query: vertx-postgres	572,605	TPS

https://stackexchange.com/performance
SO: 300 REQ /S

https://calculator.aws/#/estimate?id=d4ba86741ec68ef7eafd0588953ef2e01e2bb1d4

https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console
1769 MB = 1vCPU
import { Kafka } from "kafkajs";


const kafka = new Kafka({
    brokers: ['engaged-bull-14028-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'ZW5nYWdlZC1idWxsLTE0MDI4JLMAdZ4OGXj3YOFuxwWMmh39vhTmc4M7tqF-Ls8',
      password: 'NmYwY2NkMzgtYzllYS00M2EzLWI2NDktN2E5NmY1NTMwNGE4',
    },
    ssl: true,
  })

  export { kafka }
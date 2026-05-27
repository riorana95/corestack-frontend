export const BACKEND_SECTION_LOADERS = {

  'java-basics': async () =>
    (await import('./java/java-basics.data'))
      .JAVA_BASICS_SECTION,

  'java-oops': async () =>
    (await import('./java/java-oops.data'))
      .JAVA_OOPS_SECTION,

  'java-collections': async () =>
    (await import('./java/java-collections.data'))
      .JAVA_COLLECTIONS_SECTION,

  'java-java8': async () =>
    (await import('./java/java-java8.data'))
      .JAVA_8_SECTION,

  'java-exception': async () =>
    (await import('./java/java-exception.data'))
      .JAVA_EXCEPTION_SECTION,
  
  'java-multithreading': async () =>
    (await import('./java/java-multithreading.data'))
      .JAVA_MULTITHREADING_SECTION,
  'java-jvm': async () =>
    (await import('./java/java-jvm.data'))
      .JVM_INTERNALS_SECTION,
  'java-memorymanagment': async () =>
    (await import('./java/java-memorymanagment.data'))
      .JAVA_MEMORY_MANAGEMENT_SECTION,
  'java-streamapi': async () =>
    (await import('./java/java-streamapi.data'))
      .JAVA_STREAMS_API_SECTION,
  'java-functionalinterface': async () =>
    (await import('./java/java-functionalinterface-data'))
      .JAVA_FUNCTIONAL_INTERFACES_SECTION,
  'java-comparablecomparator': async () =>
    (await import('./java/java-comparablecomparator.data'))
      .JAVA_COMPARABLE_COMPARATOR_SECTION,
  'java-immutableclass': async () =>
    (await import('./java/java-immutableclass.data'))
      .JAVA_IMMUTABLE_CLASS_SECTION,
  'java-serialization': async () =>
    (await import('./java/java-serialization.data'))
      .JAVA_SERIALIZATION_SECTION,
  'java-reflection': async () =>
    (await import('./java/java-reflection.data'))
      .JAVA_REFLECTION_API_SECTION,
  'java-designpatterns': async () =>
    (await import('./java/java-designpattern.data'))
      .JAVA_DESIGN_PATTERNS_SECTION,
  'java-interviewscenarios': async () =>
    (await import('./java/java-interviewscenario-data'))
      .JAVA_INTERVIEW_SCENARIOS_SECTION,

  // Spring Boot

'spring-fundamentals': async () =>
  (await import('./spring-boot/spring-fundamentals.data'))
    .SPRING_FUNDAMENTALS_SECTION,

'spring-rest-apis': async () =>
  (await import('./spring-boot/rest-apis.data'))
    .SPRING_REST_APIS_SECTION,

'spring-data-persistence': async () =>
  (await import('./spring-boot/data-persistence.data'))
    .DATA_PERSISTENCE_SECTION,

'spring-security': async () =>
  (await import('./spring-boot/security.data'))
    .SECURITY_SECTION,

'spring-async-messaging': async () =>
  (await import('./spring-boot/async-messaging.data'))
    .ASYNC_MESSAGING_SECTION,

'spring-production-readiness': async () =>
  (await import('./spring-boot/production-readiness.data'))
    .PRODUCTION_READINESS_SECTION,

'spring-microservices-basics': async () =>
  (await import('./spring-boot/microservices-basics.data'))
    .MICROSERVICES_SECTION,

'spring-interview-scenarios': async () =>
  (await import('./spring-boot/spring-interview-scenarios.data'))
    .SPRING_INTERVIEW_SCENARIOS_SECTION,


} as const;
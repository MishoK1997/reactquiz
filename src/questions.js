const questions = [
  {
      id: 'q1',
      text: 'What is the primary purpose of Infrastructure as Code (IaC)?',
      answers: [
          'To manually configure servers for each deployment.',
          'To automate infrastructure provisioning using machine-readable configuration files.',
          'To outsource infrastructure management to third-party vendors.',
          'To provide a graphical interface for configuring infrastructure.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q2',
      text: 'In Kubernetes, what is the main role of a ReplicaSet?',
      answers: [
          'To manage the creation, scaling, and deletion of Pods to maintain a specified number of replicas.',
          'To expose Pods to external traffic.',
          'To define the container runtime environment.',
          'To store sensitive information such as passwords and tokens.',
      ],
      correctAnswerIndex: 0,
  },
  {
      id: 'q3',
      text: 'Which statement best describes Continuous Integration (CI)?',
      answers: [
          'A practice of merging all developers’ working copies to a shared mainline several times a day.',
          'A strategy for automating network security policies.',
          'A method of continuously monitoring system performance in production.',
          'A process of integrating multiple cloud providers into a single platform.',
      ],
      correctAnswerIndex: 0,
  },
  {
      id: 'q4',
      text: 'What is the primary purpose of a Service Mesh in microservices architecture?',
      answers: [
          'To provide distributed tracing across multiple services.',
          'To enable secure, fast, and reliable service-to-service communication with traffic management, observability, and security features.',
          'To manage cloud storage more efficiently.',
          'To provide a single entry point for all client requests.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q5',
      text: 'What is the main benefit of using containerization tools like Docker?',
      answers: [
          'They provide virtual machines with their own operating systems.',
          'They allow applications to run in isolated environments, ensuring consistency across development, testing, and production.',
          'They eliminate the need for version control systems.',
          'They replace cloud infrastructure with local servers.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q6',
      text: 'Which best describes the role of Prometheus in a DevOps ecosystem?',
      answers: [
          'It is a tool used for continuous deployment of applications.',
          'It is a monitoring and alerting toolkit designed for reliability and scalability of services.',
          'It is a cloud-native orchestration platform.',
          'It is a log aggregation system designed to handle large data volumes.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q7',
      text: 'What is the main purpose of a Load Balancer in a distributed system?',
      answers: [
          'To distribute incoming network traffic across multiple servers to ensure no single server becomes overwhelmed.',
          'To permanently store logs of application requests.',
          'To automatically deploy new application features.',
          'To encrypt all data at rest in the system.',
      ],
      correctAnswerIndex: 0,
  },
  {
      id: 'q8',
      text: 'What challenge does “configuration drift” refer to in infrastructure management?',
      answers: [
          'The failure of automated tests to run after a deployment.',
          'The gradual and unintentional divergence of the configuration of infrastructure from its intended state.',
          'The fluctuation of cloud provider pricing models.',
          'The loss of container logs after rebooting the system.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q9',
      text: 'Which statement best describes GitOps?',
      answers: [
          'A practice of managing infrastructure and application configurations using Git as the single source of truth.',
          'A framework for testing GitHub repositories.',
          'A new type of distributed database based on Git principles.',
          'An API specification for integrating Git with other tools.',
      ],
      correctAnswerIndex: 0,
  },
  {
      id: 'q10',
      text: 'In CI/CD pipelines, what is the purpose of the “staging environment”?',
      answers: [
          'It serves as the final production environment.',
          'It is used exclusively for database backups.',
          'It mimics the production environment to test new builds before release.',
          'It is a virtual sandbox for experimenting with new coding languages.',
      ],
      correctAnswerIndex: 2,
  },
];

export default questions;

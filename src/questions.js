const questions = [
  {
      id: 'q1',
      text: 'In Kubernetes, what is the purpose of a Pod Disruption Budget (PDB)?',
      answers: [
          'To limit the number of pods that can be scheduled on a single node.',
          'To ensure a minimum number of pods remain available during voluntary disruptions.',
          'To automatically scale pods based on CPU usage.',
          'To configure network policies for pod-to-pod communication.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q2',
      text: 'Which of the following best describes the role of a Service Mesh like Istio in a microservices architecture?',
      answers: [
          'It replaces the need for a container orchestration platform like Kubernetes.',
          'It provides a dedicated infrastructure layer for handling service-to-service communication, observability, and security.',
          'It automates the deployment of container images to a registry.',
          'It manages the storage backend for stateful microservices.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q3',
      text: 'When using Terraform, what is the significance of the `taint` command in the context of resource management?',
      answers: [
          'It marks a resource for deletion in the next apply operation.',
          'It flags a resource as faulty, forcing Terraform to recreate it on the next apply.',
          'It locks a resource to prevent modifications during planning.',
          'It validates the resource configuration against the provider schema.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q4',
      text: 'In a CI/CD pipeline using Jenkins, what is the purpose of the `Jenkinsfile`?',
      answers: [
          'To define the structure and steps of a pipeline as code, enabling version control.',
          'To store credentials for accessing external services.',
          'To log the output of all pipeline executions for auditing.',
          'To configure the Jenkins master node’s system settings.',
      ],
      correctAnswerIndex: 0,
  },
  {
      id: 'q5',
      text: 'What is the primary function of the `etcd` component in a Kubernetes cluster?',
      answers: [
          'To manage container networking and load balancing.',
          'To act as a distributed key-value store for cluster state and configuration data.',
          'To schedule pods across worker nodes based on resource availability.',
          'To provide a web interface for cluster monitoring.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q6',
      text: 'In the context of Docker, what happens when you run a container with the `--oom-kill-disable` flag?',
      answers: [
          'The container is prevented from being terminated when it exceeds its memory limit.',
          'The container’s memory usage is capped to prevent out-of-memory errors.',
          'The host kernel is instructed to prioritize the container’s processes during memory pressure.',
          'The container is isolated from the host’s memory management system.',
      ],
      correctAnswerIndex: 0,
  },
  {
      id: 'q7',
      text: 'What is the primary advantage of using a GitOps approach for managing infrastructure and applications?',
      answers: [
          'It eliminates the need for version control systems in deployment workflows.',
          'It uses a pull-based model where the desired state in a Git repository is continuously reconciled with the actual state.',
          'It relies on manual intervention to approve all deployments.',
          'It restricts infrastructure changes to a single user to ensure consistency.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q8',
      text: 'In Prometheus, what is the purpose of the `scrape_config` in the configuration file?',
      answers: [
          'To define the storage backend for time-series data.',
          'To specify the targets and intervals for collecting metrics from endpoints.',
          'To configure alert rules for notifying on specific conditions.',
          'To set up authentication for the Prometheus web UI.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q9',
      text: 'When using AWS ECS with Fargate, what is the role of the Task Definition?',
      answers: [
          'It specifies the network configuration for load balancing.',
          'It defines the container(s), resources, and settings for a group of containers to run as a task.',
          'It manages the auto-scaling policies for the ECS cluster.',
          'It configures the IAM roles for the ECS service.',
      ],
      correctAnswerIndex: 1,
  },
  {
      id: 'q10',
      text: 'In the context of Ansible, what is the difference between `delegate_to` and `delegate_facts` in a playbook?',
      answers: [
          '`delegate_to` runs a task on a specified host, while `delegate_facts` gathers facts from the target host only.',
          '`delegate_to` assigns a task to a different host, while `delegate_facts` determines whether facts are gathered from the delegated host.',
          '`delegate_to` enables parallel task execution, while `delegate_facts` stores facts in a separate file.',
          '`delegate_to` configures SSH connections, while `delegate_facts` validates host inventory.',
      ],
      correctAnswerIndex: 1,
  },
];

export default questions;

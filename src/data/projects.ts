export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
  problem: string;
  architecture: string;
  implementation: string;
  security: string;
  challenges: string;
  result: string;
  
};

export const projects: Project[] = [
  {
    slug: "aws-high-availability",
    title: "AWS High-Availability Architecture",
    category: "Cloud Architecture",
    shortDescription:
      "A highly available AWS architecture designed with Terraform for resilient application delivery.",
    description:
      "Designed and provisioned a production-oriented AWS architecture focused on availability, scalability, security, and operational reliability.",
    technologies: [
      "AWS",
      "Terraform",
      "ECS Fargate",
      "ALB",
      "Aurora PostgreSQL",
      "ElastiCache Redis",
      "Global Accelerator",
    ],
    problem:
      "The goal was to design an application infrastructure that could remain available during infrastructure failures while supporting automated scaling and secure service communication.",
    architecture:
      "The architecture uses a multi-AZ VPC with public and private subnets, an Application Load Balancer, ECS Fargate services, Aurora PostgreSQL, ElastiCache Redis, and supporting AWS security and monitoring services.",
    implementation:
      "Infrastructure was defined using Terraform modules covering networking, compute, database, caching, storage, security, and supporting services.",
    security:
      "The design incorporates IAM roles, security groups, encryption with AWS KMS, Secrets Manager, CloudTrail, VPC Flow Logs, and monitoring through CloudWatch.",
    challenges:
      "Designing the infrastructure without creating single points of failure required careful consideration of availability zones, database failover, service dependencies, and network placement.",
    result:
      "The resulting architecture provides a reproducible infrastructure foundation designed for high availability, automated scaling, monitoring, and controlled failure recovery.",
    github: 
      "https://github.com/isiaka-ismail-portfolio/aws-high-availability",
    image: 
      "/projects/aws-ha-placeholder.png",
    },

  
    {
    slug: "tradecore-finops",
    title: "TradeCore FinOps",
    category: "Cloud Engineering & FinOps",
    shortDescription:
        "A budget-conscious AWS deployment combining containerized application delivery, security controls, automated CI/CD, observability, and cost governance.",
    description:
        "TradeCore Deploy focused on preparing a transactional platform for a 14-day institutional banking audit. The project brings together AWS infrastructure, application deployment, identity integration, automated delivery, operational monitoring, and financial governance under a startup budget constraint.",
    technologies: [
        "AWS",
        "Terraform",
        "Docker",
        "Amazon ECS Fargate",
        "Amazon ECR",
        "Amazon RDS PostgreSQL",
        "Amazon Cognito",
        "AWS Secrets Manager",
        "Application Load Balancer",
        "GitHub Actions",
        "OIDC",
        "Amazon CloudWatch",
        "AWS Budgets",
        "Amazon SNS",
    ],
    github: "https://github.com/tradecore-africa/tradecore",
    image: "/projects/tradecore-finops.png",
    problem:
        "Prepare a containerized transactional application for a technical banking audit within a short delivery window and a strict cloud budget. The environment needed secure authentication, reliable application and database connectivity, repeatable deployments, operational visibility, and a documented cost-control strategy.",
    architecture:
        "The React frontend is hosted on AWS Amplify and communicates with a Node.js REST API running on Amazon ECS Fargate. An Application Load Balancer provides HTTPS ingress, Amazon Cognito manages user authentication, Amazon RDS for PostgreSQL provides relational storage, Amazon ECR stores container images, and AWS Secrets Manager supplies sensitive runtime configuration. CloudWatch and SNS support monitoring and operational alerts.",
    implementation:
        "The project covers cost estimation and budget alerts before provisioning, infrastructure configuration with Terraform, database schema migration, container image publishing, ECS deployment, Cognito integration, and frontend configuration. GitHub Actions supports automated staging delivery through OIDC authentication, while production promotion uses a manual approval gate. Scheduled staging scale-down and an ordered teardown runbook address ongoing and end-of-project costs.",
    security:
        "Security controls include HTTPS through ACM and the Application Load Balancer, security-group rules that restrict API ingress to the load balancer, database access limited to the application tier, Secrets Manager integration, Cognito token verification, and short-lived AWS credentials through GitHub Actions OIDC. The public-subnet ECS design is documented as a deliberate cost trade-off, with inbound access restricted to the load balancer rather than the public internet.",
    challenges:
        "The main architectural trade-off was eliminating the recurring baseline cost of a managed NAT Gateway during a short evaluation period. Public-subnet ECS tasks can reach required AWS services without NAT, but their public IP addresses make strict inbound security-group controls essential. The project documents migration options for a higher-budget production environment, including private subnets with NAT Gateways or suitable VPC endpoints.",
    result:
        "The project notes report a 184 MB container image, a 4-minute-12-second staging deployment, and a 2-minute-34-second rollback recovery drill. They also report successful API smoke tests, end-to-end authentication and transaction testing, CI/CD approval controls, and an operational monitoring and teardown plan. Cost governance is built around a $25 monthly AWS Budget with 50% and 90% alert thresholds. Final actual spend should be supported by the AWS Cost Explorer report.",
    },

  {
    slug: "hng-devops-infrastructure",
    title: "HNG DevOps Infrastructure",
    category: "Cloud Infrastructure",
    shortDescription:
      "AWS EC2 deployment with Linux hardening, Nginx, HTTPS, and application process management.",
    description:
      "A hands-on DevOps project focused on deploying and securing web applications on AWS EC2.",
    technologies: [
      "AWS EC2",
      "Linux",
      "Nginx",
      "PM2",
      "SSH",
      "UFW",
      "HTTPS",
    ],
    problem:
      "The application needed to be deployed on a publicly accessible server while reducing unnecessary security exposure and providing reliable web access.",
    architecture:
      "The solution used an AWS EC2 instance running Linux, with Nginx handling incoming HTTP/HTTPS traffic and forwarding application requests to the backend service.",
    implementation:
      "The server was configured with a non-root deployment user, SSH public-key authentication, UFW firewall rules, Nginx, PM2, and HTTPS.",
    security:
      "Root SSH access and password authentication were disabled, firewall rules were restricted to required ports, and HTTPS was configured for encrypted traffic.",
    challenges:
      "The project involved troubleshooting SSH access, server configuration, application routing, and deployment requirements across multiple stages.",
    result:
      "The application was successfully deployed with hardened SSH access, controlled network exposure, reverse proxying, process management, and HTTPS.",
    github: 
      "https://github.com/isiaka-ismail-portfolio/hng-devops-infrastructure",
    image: 
      "/projects/hng-devops-placeholder.png",
    },
];
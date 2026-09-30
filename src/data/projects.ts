export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
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
  },

  {
    slug: "tradecore-cicd",
    title: "TradeCore CI/CD Pipeline",
    category: "CI/CD & Containers",
    shortDescription:
      "Automated CI/CD workflow for testing, containerization, security scanning, and AWS deployment.",
    description:
      "Built a CI/CD workflow for a containerized backend application using GitHub Actions and AWS container services.",
    technologies: [
      "GitHub Actions",
      "Docker",
      "Trivy",
      "Node.js",
      "AWS ECR",
      "Amazon ECS",
    ],
    problem:
      "The application needed a repeatable workflow for validating code, building container images, scanning them for vulnerabilities, and preparing them for deployment.",
    architecture:
      "The pipeline connects source control with automated testing, Docker image creation, vulnerability scanning, Amazon ECR, and ECS deployment workflows.",
    implementation:
      "GitHub Actions was configured to install dependencies, run tests, build the Docker image, perform Trivy security scanning, and push validated images to Amazon ECR.",
    security:
      "Container images are scanned for known vulnerabilities before being accepted into the deployment workflow.",
    challenges:
      "One challenge was handling vulnerabilities discovered in the underlying Alpine and Node.js dependencies during container scanning.",
    result:
      "The pipeline established an automated quality and security gate between source code changes and container deployment.",
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
  },
];
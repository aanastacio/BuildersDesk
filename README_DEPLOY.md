# BuildersDesk EC2 Deployment

## Domain
buildersdeskpro.com

## EC2 IP
3.149.220.156

## Required GitHub Secrets
- DOCKERHUB_USERNAME=aanastacio
- DOCKERHUB_TOKEN
- EC2_HOST=3.149.220.156
- EC2_USER=ubuntu
- EC2_SSH_KEY

## Deploy
Push to main branch. Deployment is fully automated.

Note: This deployment runs Next.js as a Node server (standalone) behind Caddy.

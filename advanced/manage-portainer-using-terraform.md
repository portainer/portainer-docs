# Manage Portainer using Terraform

Portainer includes an [official Terraform provider](https://registry.terraform.io/providers/portainer/portainer/latest/docs) that enables you to manage Portainer resources through the [Portainer API](../api/docs.md) using Terraform. This allows you to automate the creation and management of environments, users, teams, stacks, and other Portainer resources, and integrate Portainer into your existing Infrastructure as Code and CI/CD workflows.

### Initial set up and authentication

{% hint style="info" %}
For more information and additional configuration options, refer to the [Terraform provider documentation](https://registry.terraform.io/providers/portainer/portainer/latest/docs).&#x20;
{% endhint %}

To configure the Portainer Terraform provider, add the following configuration to your `main.tf` file.\
The Portainer Terraform provider supports authentication using either a [Portainer API key](../user/account-settings.md#access-tokens) or a username and password. Ensure the user account has [sufficient permissions](../admin/user/roles.md) to perform the required actions.

{% code title="main.tf" %}
```
terraform {
  required_providers {
    portainer = {
      source = "portainer/portainer"
    }
  }
}

provider "portainer" {
  endpoint = "https://portainer.example.com"
  
  # Option 1: API key authentication
  api_key  = "YOUR_API_KEY"
  
  # Option 2: Username/password authentication (generates JWT token internally)
  api_user     = "user"
  api_password = "password"
}
```
{% endcode %}

### Terraform provider examples

{% hint style="info" %}
An extensive list of examples can be found in the [Portainer Terraform provider GitHub repository](https://github.com/portainer/terraform-provider-portainer/tree/main/examples).
{% endhint %}

#### Create a team

The following example creates a team in Portainer using Terraform:

{% code title="team.tf" %}
```
resource "portainer_team" "your-team" {
  name = "example-team"
}
```
{% endcode %}

#### Create an environment

The following example creates an environment in Portainer using Terraform:

{% code title="environment.tf" %}
```
resource "portainer_environment" "your-host" {
  name                = var.portainer_environment_name
  environment_address = var.portainer_environment_address
  type                = var.portainer_environment_type
}
```
{% endcode %}

{% code title="variables.tf" %}
```
variable "portainer_environment_name" {
  description = "Portainer environment name"
  type        = string
  # default     = "Your environment name"
}

variable "portainer_environment_address" {
  description = "Portainer environment address"
  type        = string
  # default     = "tcp://host:9001"
}

variable "portainer_environment_type" {
  description = "Portainer environment type"
  type        = number
  # default     = 2   # Environment type: `1` = Docker, `2` = Agent, `3` = Azure, `4` = Edge Agent, `5` = Kubernetes.
}
```
{% endcode %}

#### Create an S3 backup

The following example creates a S3 backup in Portainer using Terraform:

{% code title="backup.tf" %}
```
resource "portainer_backup_s3" "your-s3-backup" {
  access_key_id      = var.s3_access_key
  secret_access_key  = var.s3_secret_key
  bucket_name        = var.s3_bucket
  region             = var.s3_region
  s3_compatible_host = var.s3_endpoint
  password           = var.backup_password
  cron_rule          = var.backup_cron_rule
}
```
{% endcode %}

{% code title="variables.tf" %}
```
variable "s3_access_key" {
  description = "AWS or compatible S3 Access Key"
  type        = string
  sensitive   = true
}

variable "s3_secret_key" {
  description = "AWS or compatible S3 Secret Access Key"
  type        = string
  sensitive   = true
}

variable "s3_bucket" {
  description = "S3 bucket name where backups will be stored"
  type        = string
}

variable "s3_region" {
  description = "Region for S3 bucket (e.g., eu-central-1)"
  type        = string
  default     = "eu-central-1"
}

variable "s3_endpoint" {
  description = "S3-compatible endpoint URL"
  type        = string
}

variable "backup_password" {
  description = "Password used to encrypt the Portainer backup archive"
  type        = string
  sensitive   = true
}

variable "backup_cron_rule" {
  description = "Cron rule for scheduling the backup (e.g., '@daily')"
  type        = string
  default     = "@daily"
}
```
{% endcode %}

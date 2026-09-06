# Manage Portainer using Terraform

{% hint style="success" %}
Find a full walk through of how to deploy a Docker stack with Terraform in [this how-to article](https://www.portainer.io/how-to/how-to-deploy-a-docker-stack-with-terraform).
{% endhint %}

Portainer can be automated using our [official Terraform provider](https://registry.terraform.io/providers/portainer/portainer/latest/docs), allowing you to manage Portainer resources through the [Portainer API](../api/docs.md) with Terraform. This lets you create and manage environments, users, teams, stacks, and other Portainer resources as code, and integrate Portainer into your existing Infrastructure as Code and CI/CD workflows.

### Initial set up and authentication

{% hint style="info" %}
For more information and additional configuration options, refer to the [Terraform provider documentation](https://registry.terraform.io/providers/portainer/portainer/latest/docs).
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

#### Create an edge stack

The following example creates a edge stack in Portainer using Terraform:

{% code title="edge_stack.tf" %}
```
resource "portainer_edge_stack" "string_example" {
  name                    = var.edge_stack_name
  stack_file_content      = var.edge_stack_file_content
  deployment_type         = var.edge_stack_deployment_type
  edge_groups             = var.edge_stack_edge_groups
  registries              = var.edge_stack_registries
  use_manifest_namespaces = var.edge_stack_use_manifest_namespaces
}
```
{% endcode %}

{% code title="variables.tf" %}
```
variable "edge_stack_name" {
  description = "Name of the Portainer Edge Stack"
  type        = string
}

variable "edge_stack_file_content" {
  description = "Inline stack file content for the Edge Stack"
  type        = string
}

variable "edge_stack_deployment_type" {
  description = "Deployment type (0 = Compose, 1 = Kubernetes)"
  type        = number
}

variable "edge_stack_edge_groups" {
  description = "List of Edge Group IDs"
  type        = list(number)
}

variable "edge_stack_registries" {
  description = "List of registry IDs"
  type        = list(number)
  default     = []
}

variable "edge_stack_use_manifest_namespaces" {
  description = "Whether to use manifest namespaces"
  type        = bool
  default     = false
}
```
{% endcode %}

#### Create a team

The following example creates a team in Portainer using Terraform:

{% code title="team_membership.tf" %}
```
resource "portainer_user" "test_user" {
  username  = var.user_username
  password  = var.user_password
  role      = var.user_role
  ldap_user = var.user_ldap
}

resource "portainer_team" "test_team" {
  name = var.team_name
}

resource "portainer_team_membership" "test_membership" {
  role    = var.team_membership_role
  team_id = portainer_team.test_team.id
  user_id = portainer_user.test_user.id
}
```
{% endcode %}

{% code title="variables.tf" %}
```
variable "user_username" {
  description = "Username for the Portainer user"
  type        = string
  default     = "testuser"
}

variable "user_password" {
  description = "Password for the Portainer user"
  type        = string
  sensitive   = true
  default     = "StrongPassword123!"
}

variable "user_role" {
  description = "User role: 1 = admin, 2 = standard"
  type        = number
  default     = 2
}

variable "user_ldap" {
  description = "Whether the user is an LDAP user"
  type        = bool
  default     = false
}

variable "team_name" {
  description = "Name of the Portainer team"
  type        = string
  default     = "test-team"
}

variable "team_membership_role" {
  description = "Membership role in the team: 1 = leader, 2 = member"
  type        = number
  default     = 2
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
